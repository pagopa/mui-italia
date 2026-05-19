import { getInput, info, summary, setFailed } from '@actions/core';
import { getOctokit, context } from '@actions/github';
import { readdirSync, statSync, existsSync, readFileSync } from 'fs';
import { join, basename } from 'path';
import zlib from 'zlib';

// Recursive function to retrieve all files within a directory
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = readdirSync(dirPath);
  files.forEach((file) => {
    const fullPath = join(dirPath, file);
    if (statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

// Formats the status with standard GitHub Emojis and letters
function getStatusIndicator(status) {
  if (status === 'added') return '🟢 A';
  if (status === 'modified') return '🟡 M';
  return '⚪ -'; // Unchanged or not tracked in PR
}

// Helper to match a compiled dist file with a source file from the PR
function getFileStatus(distFilePath, prFiles) {
  const baseName = basename(distFilePath);
  // Fallback matching: compare just the filename (e.g., Button.js)
  const found = prFiles.find((prFile) => basename(prFile.filename) === baseName);
  return found ? found.status : 'unchanged';
}

async function run() {
  try {
    // Read inputs defined in action.yml
    const token = getInput('github_token', { required: true });
    const targetPath = getInput('path', { required: true });
    const maxRawKb = parseFloat(getInput('max_raw_kb', { required: true }));
    const maxGzipKb = parseFloat(getInput('max_gzip_kb', { required: true }));

    // Initialize Octokit and GitHub Context
    const octokit = getOctokit(token);

    // Fetch changed files from the Pull Request via API
    let prFiles = [];
    if (context.payload.pull_request) {
      const { data } = await octokit.rest.pulls.listFiles({
        owner: context.repo.owner,
        repo: context.repo.repo,
        pull_number: context.payload.pull_request.number,
        per_page: 100, // Adjust if PRs have more than 100 files
      });
      prFiles = data; // Array containing filename, status (added, modified, etc.)
    }

    // Calculate folder size
    let totalRaw = 0;
    let totalGzip = 0;
    const fileStats = [];

    if (!existsSync(targetPath)) {
      throw new Error(`The target directory '${targetPath}' does not exist.`);
    }

    const files = getAllFiles(targetPath);
    files.forEach((file) => {
      const content = readFileSync(file);
      const rawSize = content.length;
      const gzipSize = zlib.gzipSync(content).length;

      totalRaw += rawSize;
      totalGzip += gzipSize;

      const relativePath = path.relative(targetPath, file);
      const status = getFileStatus(file, prFiles);

      // Save individual file details, using a relative path for better readability
      fileStats.push({
        name: relativePath,
        raw: rawSize,
        gzip: gzipSize,
        status,
      });
    });

    const rawKb = (totalRaw / 1024).toFixed(2);
    const gzipKb = (totalGzip / 1024).toFixed(2);

    // Sort files by Gzip size descending (largest first)
    fileStats.sort((a, b) => b.gzip - a.gzip);

    // Generate Markdown report
    let message = `### 📦 Bundle Size Report\n\n`;

    // --- Totals Section ---
    message += `#### 📊 Totals\n`;
    message += `| Metric | Current Size | Maximum Limit |\n`;
    message += `| --- | --- | --- |\n`;
    message += `| **Raw** | ${rawKb} KB | ${maxRawKb} KB |\n`;
    message += `| **Gzip** | ${gzipKb} KB | ${maxGzipKb} KB |\n`;

    const isExceeded = rawKb > maxRawKb || gzipKb > maxGzipKb;

    if (isExceeded) {
      message += `\n❌ **ERROR:** The bundle size exceeds the allowed limits!\n\n`;
    } else {
      message += `\n✅ **SUCCESS:** The bundle size is within the allowed limits.\n\n`;
    }

    // --- Individual Files Section (Collapsible) ---
    message += `<details>\n<summary><strong>📄 Click to view individual file sizes</strong></summary>\n\n`;
    message += `| Status | File | Raw Size | Gzip Size |\n`;
    message += `| :---: | --- | --- | --- |\n`;

    fileStats.forEach((stat) => {
      const fRawKb = (stat.raw / 1024).toFixed(2);
      const fGzipKb = (stat.gzip / 1024).toFixed(2);
      const indicator = getStatusIndicator(stat.status);
      message += `| ${indicator} | \`${stat.name}\` | ${fRawKb} KB | ${fGzipKb} KB |\n`;
    });

    message += `\n</details>\n`;

    // Post comment on the Pull Request (if triggered by a PR event)
    if (context.payload.pull_request) {
      await octokit.rest.issues.createComment({
        owner: context.repo.owner,
        repo: context.repo.repo,
        issue_number: context.payload.pull_request.number,
        body: message,
      });
      info('Comment successfully posted on the Pull Request.');
    } else {
      info('This event is not a Pull Request. Skipping comment creation.');
    }

    // 6. Output report to the GitHub Actions Job Summary UI
    await summary.addRaw(message).write();

    // 7. Fail the action step if limits are exceeded
    if (isExceeded) {
      setFailed('Bundle size limits exceeded.');
    }
  } catch (error) {
    setFailed(`Action execution failed: ${error.message}`);
  }
}

run();

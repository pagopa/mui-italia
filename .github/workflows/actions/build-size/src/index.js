import { getInput, info, summary, setFailed } from '@actions/core';
import { getOctokit, context } from '@actions/github';
import { readdirSync, statSync, existsSync, readFileSync } from 'fs';
import { join } from 'path';
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

async function run() {
  try {
    // Read inputs defined in action.yml
    const token = getInput('github_token', { required: true });
    const targetPath = getInput('path', { required: true });
    const maxRawKb = parseFloat(getInput('max_raw_kb', { required: true }));
    const maxGzipKb = parseFloat(getInput('max_gzip_kb', { required: true }));

    // Initialize Octokit and GitHub Context
    const octokit = getOctokit(token);

    // Calculate folder size
    let totalRaw = 0;
    let totalGzip = 0;

    if (!existsSync(targetPath)) {
      throw new Error(`The target directory '${targetPath}' does not exist.`);
    }

    const files = getAllFiles(targetPath);
    files.forEach((file) => {
      const content = readFileSync(file);
      totalRaw += content.length;
      totalGzip += zlib.gzipSync(content).length;
    });

    const rawKb = (totalRaw / 1024).toFixed(2);
    const gzipKb = (totalGzip / 1024).toFixed(2);

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

import { getInput, info, error as logError, setFailed, summary } from '@actions/core';
import { existsSync, readdirSync, readFileSync, statSync } from 'fs';
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
    const targetPath = getInput('path', { required: true });
    const maxRawKb = parseFloat(getInput('max_raw_kb', { required: true }));
    const maxGzipKb = parseFloat(getInput('max_gzip_kb', { required: true }));

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

    const rawKb = totalRaw / 1024;
    const gzipKb = totalGzip / 1024;

    const isExceeded = rawKb > maxRawKb || gzipKb > maxGzipKb;

    // Generate Markdown report
    let message = `### 📦 Bundle Size Report\n\n`;
    message += `#### 📊 Totals\n`;
    message += `| Metric | Current Size | Maximum Limit |\n`;
    message += `| --- | --- | --- |\n`;
    message += `| **Raw** | ${rawKb.toFixed(2)} KB | ${maxRawKb} KB |\n`;
    message += `| **Gzip** | ${gzipKb.toFixed(2)} KB | ${maxGzipKb} KB |\n`;
    message += isExceeded
      ? `\n❌ **ERROR:** The bundle size exceeds the allowed limits!\n\n`
      : `\n✅ **SUCCESS:** The bundle size is within the allowed limits.\n\n`;

    // Plain-text report for the action logs
    const logReport = [
      'Bundle Size Report',
      `Path:  ${targetPath}`,
      `Raw:   ${rawKb.toFixed(2)} KB (max ${maxRawKb} KB)`,
      `Gzip:  ${gzipKb.toFixed(2)} KB (max ${maxGzipKb} KB)`,
      `Files: ${files.length}`,
    ].join('\n');

    info(`\n${logReport}\n`);

    // Output report to the GitHub Actions Job Summary UI
    await summary.addRaw(message).write();

    // Fail the action step if limits are exceeded
    if (isExceeded) {
      if (rawKb > maxRawKb) {
        logError(`Raw bundle size ${rawKb.toFixed(2)} KB exceeds the limit of ${maxRawKb} KB.`);
      }
      if (gzipKb > maxGzipKb) {
        logError(`Gzip bundle size ${gzipKb.toFixed(2)} KB exceeds the limit of ${maxGzipKb} KB.`);
      }
      setFailed('Bundle size limits exceeded.');
    } else {
      info('The bundle size is within the allowed limits.');
    }
  } catch (err) {
    setFailed(`Action execution failed: ${err.message}`);
  }
}

run();

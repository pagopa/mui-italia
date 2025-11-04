#!/usr/bin/env node
import { join } from 'path';
import { readFileSync, rmSync, readdirSync, statSync } from 'fs';
import { exec } from 'child_process';

const TO_TRANSFORM_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];

async function babelBuild(sourceDir, buildDir) {
  const cwd = process.cwd();
  // get config file
  const configFile = join(cwd, '.babelrc.mjs');
  return new Promise((resolve, reject) => {
    exec(
      `babel ${sourceDir}\
    --out-dir ${buildDir}\
    --config-file ${configFile}\
    --extensions ${TO_TRANSFORM_EXTENSIONS.join(',')}`,
      (error) => {
        if (error) {
          reject(error);
          throw new Error(error);
        }
        resolve();
      }
    );
  });
}

async function createTypes() {
  return new Promise((resolve, reject) => {
    exec(`tsc`, (error) => {
      if (error) {
        reject(error);
        throw new Error(error);
      }
      resolve();
    });
  });
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = join(dirPath, file);
    if (statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

async function build() {
  // first read the package.json
  const cwd = process.cwd();
  const pkgJsonPath = join(cwd, 'package.json');
  const packageJson = JSON.parse(readFileSync(pkgJsonPath, { encoding: 'utf8' }));
  // get the build directory and remove it if it exists
  const buildDir = join(cwd, 'dist');
  rmSync(buildDir, { recursive: true, force: true });
  // build
  const sourceDir = join(cwd, 'src');
  await babelBuild(sourceDir, buildDir);
  // create types
  await createTypes();
  // log files with extensions
  // 1. get all files in build directory
  const allFiles = getAllFiles(buildDir);
  // 2. calc files sizes
  const fileSizes = allFiles.map((file) => {
    const stats = statSync(file);
    return { path: file, size: stats.size };
  });
  // 3. order from the lighter to the heavier
  fileSizes.sort((a, b) => a.size - b.size);
  // 4. calc total size
  const totalSize = fileSizes.reduce((acc, file) => acc + file.size, 0);
  // 5. log results
  fileSizes.forEach((file) => {
    console.log(`${formatBytes(file.size).padEnd(10)} | ${file.path}`);
  });
  console.log('---------------------------------');
  console.log(`Total dimension: ${formatBytes(totalSize)}`);
  console.log('---------------------------------');
}

build();

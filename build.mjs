#!/usr/bin/env node
import { join, resolve } from 'path';
import {
  readFileSync,
  rmSync,
  readdirSync,
  statSync,
  existsSync,
  copyFileSync,
  cpSync,
  writeFileSync,
} from 'fs';
import { exec } from 'child_process';

const TO_TRANSFORM_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];

const STATIC_FILES = [
  {
    src: 'LICENSE',
    dest: 'LICENSE',
  },
  {
    src: 'README.md',
    dest: 'README.md',
  },
  {
    src: 'CHANGELOG.md',
    dest: 'CHANGELOG.md',
  },
];

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
    exec(`tsc --project tsconfig.prod.json`, (error) => {
      if (error) {
        reject(error);
        throw new Error(error);
      }
      resolve();
    });
  });
}

function copyFiles(sourceDir, buildDir) {
  for (const target of STATIC_FILES) {
    const sourcePath = resolve(sourceDir, target.src);
    const destPath = resolve(buildDir, target.dest);
    // check if it exists
    if (!existsSync(sourcePath)) {
      continue;
    }
    // check if dir or files
    const stats = statSync(sourcePath);
    if (stats.isFile()) {
      copyFileSync(sourcePath, destPath);
    } else if (stats.isDirectory()) {
      cpSync(sourcePath, destPath, { recursive: true });
    }
  }
}

function writePackageJson(buildDir) {
  // first read the package.json
  const cwd = process.cwd();
  const pkgJsonPath = join(cwd, 'package.json');
  const packageJson = JSON.parse(readFileSync(pkgJsonPath, { encoding: 'utf8' }));
  // delete data that mustn't be in the published package.json
  delete packageJson.scripts;
  delete packageJson.devDependencies;
  delete packageJson.bin;
  // add property for treeshaking
  packageJson.sideEffects = false;
  // add additional properties
  // type module is to tell that code is in esm
  // types is to tell what is the main typing file
  // main is to tell what is the main file
  packageJson.type = 'module';
  packageJson.types = './index.d.ts';
  packageJson.main = './index.js';
  // add exports
  packageJson.exports = {
    './package.json': './package.json',
    '.': {
      default: {
        types: './index.d.ts',
        default: './index.js',
      },
    },
    './*': {
      default: {
        types: './*/index.d.ts',
        default: './*/index.js',
      },
    },
  };

  writeFileSync(join(buildDir, 'package.json'), JSON.stringify(packageJson, null, 2), 'utf-8');
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
  const cwd = process.cwd();
  // get the build directory and remove it if it exists
  const buildDir = join(cwd, 'dist');
  rmSync(buildDir, { recursive: true, force: true });
  // build
  const sourceDir = join(cwd, 'src');
  await babelBuild(sourceDir, buildDir);
  // create types
  await createTypes();
  // copy static files
  copyFiles(cwd, buildDir);
  // create package.json for the builded library
  writePackageJson(buildDir);
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

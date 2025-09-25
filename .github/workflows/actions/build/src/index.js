import { getState, setFailed, info } from '@actions/core';
import { exec } from '@actions/exec';
import { resolve, join } from 'path';
import { mkdirSync, cpSync, readdirSync, copyFileSync } from 'fs';

async function run() {
  try {
    const cwd = resolve(getState('repositoryPath'));
    // install yarn
    await exec('yarn', ['install', '--immutable'], { silent: true, cwd });
    // do build
    await exec('yarn', ['build'], { silent: true, cwd });
    // create bundle dir
    const bundleDir = join(cwd, 'bundle');
    mkdirSync(bundleDir);
    // copy dist file into it
    const distDir = join(cwd, 'dist');
    // exclude stories dir from copy
    cpSync(distDir, bundleDir, {
      recursive: true,
      filter: (src) => {
        core.info(src);
        return src !== 'stories';
      },
    });
    // copy additional files
    const additionalFiles = ['README.md', 'LICENSE', 'CHANGELOG.md', 'package.json'];
    for (const file of additionalFiles) {
      const srcPathFile = join(getState('repositoryPath'), file);
      const destPathFile = join(bundleDir, file);
      copyFileSync(srcPathFile, destPathFile);
    }
    // log file list
    readdirSync(bundleDir).forEach((file) => {
      // will also include directory names
      info(file);
    });
  } catch (error) {
    setFailed(error.message);
  }
}

run();

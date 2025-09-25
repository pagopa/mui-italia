import { getState, setFailed, getInput, debug } from '@actions/core';
import { getOctokit, context } from '@actions/github';
import { exec } from '@actions/exec';
import { resolve, join } from 'path';
import { mkdirSync, cpSync, copyFileSync } from 'fs';

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
      filter: (src) => !src.endsWith('stories'),
    });
    // copy additional files
    const additionalFiles = ['README.md', 'LICENSE', 'CHANGELOG.md', 'package.json'];
    for (const file of additionalFiles) {
      const srcPathFile = join(getState('repositoryPath'), file);
      const destPathFile = join(bundleDir, file);
      copyFileSync(srcPathFile, destPathFile);
    }
    // upload artifact to release
    debug(`Init octokit client`);
    const token = getInput('token');
    const releaseId = getInput('release_id');
    const octokit = getOctokit(token);
    octokit.rest.repos.uploadReleaseAsset({
      owner: context.repo.owner,
      repo: context.repo.repo,
      release_id: releaseId,
      name: 'bundle',
      data,
    });
  } catch (error) {
    setFailed(error.message);
  }
}

run();

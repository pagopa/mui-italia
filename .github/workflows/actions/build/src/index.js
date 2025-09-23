import core from '@actions/core';
import { exec } from '@actions/exec';
import { resolve } from 'path';

async function run() {
  try {
    const cwd = resolve(core.getState('repositoryPath'));
    core.info(cwd);
    // install yarn
    await exec('yarn', ['install', 'immutable'], { silent: true, cwd });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

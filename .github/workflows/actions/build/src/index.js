import core from '@actions/core';
import { exec } from '@actions/exec';

async function run() {
  try {
    // install yarn
    await exec('yarn', ['install', 'immutable'], { silent: true, cwd: '.' });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

import { exec } from '@actions/exec';
import core from '@actions/core';

export async function checkout(branchName) {
  core.info(`Checking out to branch ${branchName}`);
  try {
    // -q is to suppress feedback messages.
    //
    await exec('git', ['fetch', 'origin', branchName], { silent: true });
    await exec('git', ['checkout', branchName, '-q'], { silent: true });
  } catch (error) {
    throw new Error(`Error during checkout: ${error}`);
  }
}

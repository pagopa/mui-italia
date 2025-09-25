import { exec } from '@actions/exec';
import { info } from '@actions/core';

export async function checkout(branchName) {
  info(`Checking out to branch ${branchName}`);
  try {
    // -q is to suppress feedback messages.
    //
    await exec('git', ['fetch', 'origin', branchName], { silent: true });
    await exec('git', ['checkout', branchName, '-q'], { silent: true });
  } catch (error) {
    throw new Error(`Error during checkout: ${error}`);
  }
}

export async function log(from, ...logOptions) {
  info(`Getting logs from ${from}`);
  try {
    let myOutput = '';
    const options = {
      silent: true,
    };
    options.listeners = {
      stdout: (data) => {
        myOutput += data.toString();
      },
    };
    await exec('git', ['log', `${from}..HEAD`, ...logOptions], options);
    return myOutput;
  } catch (error) {
    throw new Error(`Error during getting logs: ${error}`);
  }
}

import core from '@actions/core';
import github from '@actions/github';

import { checkInputs } from './input-helper.js';
import { getLatestTag, checkIfRefExists } from './repository-helper.js';
import { calcNextTag } from './utility-helper.js';

async function run() {
  try {
    core.debug(`Init octokit client`);
    // initialize Octokit client
    const token = core.getInput('token');
    if (token) {
      const octokit = github.getOctokit(token);
      // get user inputs
      const { refBranch, type, finalRelease } = checkInputs();
      // check if refBranch exists
      await checkIfRefExists(octokit, `heads/${refBranch}`);
      // get the latest tag linked to current branch
      const latestTag = await getLatestTag(octokit, refBranch);
      // calc the new tag
      const nextTag = await calcNextTag(latestTag.tag, type, finalRelease);

      core.info(nextTag);
      return;
    }
    throw new Error(`No GitHub token specified`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

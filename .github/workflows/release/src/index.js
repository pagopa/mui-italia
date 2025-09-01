import core from '@actions/core';
import github from '@actions/github';

import { checkInputs } from './input-helper.js';
import { getLatestTag, checkIfRefExists, createBranch, mergeBranch } from './repository-helper.js';
import { calcNextTag, calcNextFinalTag } from './utility-helper.js';
import { generateChangelog } from './file-helper.js';

async function run() {
  try {
    core.debug(`Init octokit client`);
    // initialize Octokit client
    const token = core.getInput('token');
    if (token) {
      const octokit = github.getOctokit(token);
      // get user inputs
      const { refBranch, type, finalRelease } = checkInputs();
      core.info(
        `Releasing a new ${
          finalRelease ? 'final' : 'candidate'
        } ${type} version starting from branch ${refBranch}`
      );
      // check if refBranch exists
      const startingBranchRef = await checkIfRefExists(octokit, `heads/${refBranch}`);
      if (!startingBranchRef) {
        throw new Error(`Branch ${refBranch} doesn't exist`);
      }
      // get the latest tag linked to current branch
      const latestTag = await getLatestTag(octokit, refBranch);
      // calc the new tag
      const nextTag = await calcNextTag(latestTag.tag, type, finalRelease);
      // check if a release branch already exists
      // for hotfix we will have hotfix/{tag_final}
      // for release we will have release/{tag_final}
      const nextFinalTag = calcNextFinalTag(nextTag);
      // first check if we are already on the release branch
      const releaseBranch = `${type}/${nextFinalTag}`;
      let releaseBranchSha = null;
      if (releaseBranch === refBranch) {
        releaseBranchSha = startingBranchRef.object.sha;
      } else {
        const releaseBranchRef = await checkIfRefExists(octokit, `heads/${type}/${nextFinalTag}`);
        if (releaseBranchRef) {
          releaseBranchSha = releaseBranchRef.object.sha;
          // if the release branch already exists and it is different from the starting branch, we must be sure that it is updated
          // before continuing, we have to merge the ref branch into the release branch
          await mergeBranch(octokit, refBranch, releaseBranch);
        } else {
          /*releaseBranchSha = await createBranch(
            octokit,
            startingBranchRef.object.sha,
            `${type}/${nextFinalTag}`
          );*/
        }
      }

      // generate changelog and update package
      const changeLog = await generateChangelog(releaseBranch, latestTag);
      core.info(changeLog);
      return;
    }
    throw new Error(`No GitHub token specified`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

const core = require('@actions/core');
const github = require('@actions/github');

const { checkInputs } = require('./input-helper');
const { getLatestTag, checkIfRefExists } = require('./repository-helper');

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
      // checkout to the current tag

      core.info(JSON.stringify(currentTag));
      return;
    }
    throw new Error(`No GitHub token specified`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

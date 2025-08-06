const core = require('@actions/core');
const github = require('@actions/github');

const { createCheckRun, checkPullRequestTitle, updateCheckRun } = require('./repository-helper');
const { parseEnum } = require('./input-helper');

async function run() {
  try {
    core.debug(`Init octokit client`);
    // initialize Octokit client
    const token = core.getInput('token');
    const types = parseEnum(core.getInput('types'));
    const scopes = parseEnum(core.getInput('scopes'));

    if (token) {
      const octokit = github.getOctokit(token);
      // create check run
      const id = await createCheckRun(octokit);
      // check pr title
      const result = await checkPullRequestTitle(octokit, types, scopes);
      // update check run
      await updateCheckRun(octokit, id, result ? 'success' : 'failure');
      return;
    }
    throw new Error(`No GitHub token specified`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

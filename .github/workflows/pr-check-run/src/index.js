const core = require('@actions/core');
const github = require('@actions/github');

const { createCheckRun } = require('./repository-helper');

async function run() {
  try {
    core.debug(`Init octokit client`);
    // initialize Octokit client
    const token = core.getInput('token');
    if (token) {
      const octokit = github.getOctokit(token);
      const id = core.getInput('id');
      const show = Boolean(core.getInput('show'));
      if (show === true) {
        createCheckRun(octokit, id);
      } else {
        core.info('Eliminaloooooooooooo');
      }
      return;
    }
    throw new Error(`No GitHub token specified`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

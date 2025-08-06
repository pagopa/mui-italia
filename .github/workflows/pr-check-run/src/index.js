const core = require('@actions/core');
const github = require('@actions/github');
const path = require('path');
const fs = require('fs');

const {
  createCheckRun,
  checkPullRequestTitle,
  updateCheckRun,
  findReview,
  createReview,
} = require('./repository-helper');
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
      // check if review already exists
      const review = await findReview(octokit);
      // check pr title
      const result = await checkPullRequestTitle(octokit, types, scopes);
      // create review if it doesn't exist and if the check on pr title fails
      if (!review && !result) {
        // first read the review template
        const templatePath = path.join(__dirname, 'review-template.md');
        const reviewBody = fs.readFileSync(templatePath, 'utf8');
        // create review
        await createReview(octokit, reviewBody);
      }
      /*
      // create check run
      const id = await createCheckRun(octokit);
      
      // update check run
      await updateCheckRun(octokit, id, result ? 'success' : 'failure');
      if (!result) {
        throw new Error(`Pr title doesn't follow the conventional commit specification`);
      }
        */
      return;
    }
    throw new Error(`No GitHub token specified`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

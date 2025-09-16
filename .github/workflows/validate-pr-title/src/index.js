const core = require('@actions/core');
const github = require('@actions/github');
const path = require('path');
const fs = require('fs');

const {
  checkPullRequestTitle,
  findReview,
  createReview,
  dismissReview,
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
      // get the pull request number
      // the pr number il also into the github context but it isn't reliable because if we have multiple pr
      // linked to the same branch, we can get the wrong pr number
      const prNumber = await getPullRequestNumber(octokit);
      // check if review already exists
      const review = await findReview(octokit, prNumber);
      // check pr title
      const result = await checkPullRequestTitle(octokit, prNumber, types, scopes);
      // 1. create review if it doesn't exist and if the check on pr title fails
      // 2. if review exists and the check on pr title fails, we mustn't do anything
      // 3. dismiss review if it exists and the check on pr title succeeds
      if (!review && !result) {
        // first read the review template
        const templatePath = path.join(__dirname, 'review-template.md');
        const reviewBody = fs.readFileSync(templatePath, 'utf8');
        // create review
        await createReview(octokit, prNumber, reviewBody, 'REQUEST_CHANGES');
      } else if (review && result) {
        // dismiss review
        await dismissReview(
          octokit,
          prNumber,
          review.id,
          'The pr title follow the conventional commit specifications'
        );
      }
      if (!result) {
        throw new Error(`Pr title doesn't follow the conventional commit specifications`);
      }
      return;
    }
    throw new Error(`No GitHub token specified`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

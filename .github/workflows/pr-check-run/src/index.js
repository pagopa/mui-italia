const core = require('@actions/core');
const github = require('@actions/github');
const path = require('path');
const fs = require('fs');

const { checkPullRequestTitle, findReview, createReview } = require('./repository-helper');
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
      // 1. create review if it doesn't exist and if the check on pr title fails
      // 2. if review exists and the check on pr title fails, we mustn't do anything
      // 3. approve review if it exists and the check on pr title succeeds
      if (!review && !result) {
        // first read the review template
        const templatePath = path.join(__dirname, 'review-template.md');
        const reviewBody = fs.readFileSync(templatePath, 'utf8');
        // create review
        await createReview(octokit, reviewBody, 'REQUEST_CHANGES');
      } else if (review && result) {
        // approve review
        await createReview(
          octokit,
          'The pr title follow the conventional commit specifications',
          'APPROVE'
        );
      }
      /*
      // create check run
      const id = await createCheckRun(octokit);
      
      // update check run
      await updateCheckRun(octokit, id, result ? 'success' : 'failure');
      if (!result) {
        throw new Error(`Pr title doesn't follow the conventional commit specifications`);
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

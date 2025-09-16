const github = require('@actions/github');
const core = require('@actions/core');
const RE2 = require('re2');

export async function getPullRequestNumber(octokit) {
  core.info(`Getting the pull request number`);
  try {
    // Get the current event
    const eventName = github.context.eventName;

    // Check that the current event is a pull_request event
    if (eventName !== 'pull_request') {
      throw new Error(`This action requests a pull_request event. Current event: ${eventName}`);
    }

    // 1. Get the unique ID of the check suite
    const checkSuiteId = github.context.payload.check_suite.id;

    // 2. Use the api to get the current check suite
    const { data: checkSuite } = await octokit.rest.checks.getCheckSuite({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      check_suite_id: checkSuiteId,
    });

    // 3. Get the pr number
    const pr = checkSuite.pull_requests[0];
    if (!pr) {
      throw new Error(`No pull request found for the current check suite`);
    }

    const prNumber = pr.number;
    core.info(`Pr number: ${prNumber}`);
    return prNumber;
  } catch (error) {
    core.setFailed(`Error during pr number retrieving: ${error}`);
  }
}

async function findReview(octokit, prNumber) {
  core.info(`Finding review opened by github-actions[bot] and in status CHANGES_REQUESTED`);
  try {
    if (!prNumber) {
      throw new Error(`Failed getting pull request: pr number required`);
    }
    const { data: reviews } = await octokit.rest.pulls.listReviews({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      pull_number: prNumber,
    });
    const currentReview = reviews.find(
      (review) =>
        review.user.login === 'github-actions[bot]' && review.state === 'CHANGES_REQUESTED'
    );
    if (currentReview) {
      core.info(`Retrieved review with id ${currentReview.id}`);
    } else {
      core.info(`No review found`);
    }
    return currentReview;
  } catch (error) {
    throw new Error(`Failed to get review: ${error}`);
  }
}

function validatePullRequestTitle(prTitle, types, scopes) {
  core.info(`Validate pr title "${prTitle}"`);
  try {
    const re = new RE2(`^(?:${types.join('|')})(?:\\(${scopes.join('|')}\\))!?:\\s(?:.+)$`, 'g');
    const result = re.test(prTitle);
    if (result) {
      core.info(`Pr title "${prTitle}" valid`);
    } else {
      core.info(`Pr title "${prTitle}" invalid`);
    }
    return result;
  } catch (error) {
    throw new Error(`Error in the reqular expression used for validation: ${error}`);
  }
}

async function checkPullRequestTitle(octokit, prNumber, types, scopes) {
  core.info(`Getting pull request with number ${prNumber}`);
  try {
    if (!prNumber) {
      throw new Error(`Failed getting pull request: pr number required`);
    }
    const { data: pullRequest } = await octokit.rest.pulls.get({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      pull_number: prNumber,
    });
    core.info(`Pull request with number ${prNumber} retrieved`);
    const prTitle = pullRequest.title;
    return validatePullRequestTitle(prTitle, types, scopes);
  } catch (error) {
    throw new Error(`Failed getting pull request: ${error}`);
  }
}

async function createReview(octokit, prNumber, reviewBody, status) {
  core.info(`Creating review with status ${status}`);
  try {
    if (!prNumber) {
      throw new Error(`Failed creating review: pr number required`);
    }
    const { data: review } = await octokit.rest.pulls.createReview({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      pull_number: prNumber,
      event: status,
      body: reviewBody,
    });
    core.info(`Review created with id ${review.id} and status ${status}`);
  } catch (error) {
    throw new Error(`Failed creating review: ${error}`);
  }
}

async function dismissReview(octokit, prNumber, id, reviewBody) {
  core.info(`Dismissing review with id ${id}`);
  try {
    if (!prNumber) {
      throw new Error(`Failed dismissing review: pr number required`);
    }
    const { data: review } = await octokit.rest.pulls.dismissReview({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      pull_number: prNumber,
      review_id: id,
      message: reviewBody,
    });
    core.info(`Review with id ${review.id} dismissed`);
  } catch (error) {
    throw new Error(`Failed dismissing review with id ${id}: ${error}`);
  }
}

module.exports = {
  findReview,
  checkPullRequestTitle,
  createReview,
  dismissReview,
};

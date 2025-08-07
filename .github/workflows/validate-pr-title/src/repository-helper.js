const github = require('@actions/github');
const core = require('@actions/core');
const RE2 = require('re2');

const checkRunName = 'validate-pr-title';

async function findReview(octokit) {
  core.info(`Finding review opened by github-actions[bot] and in status CHANGES_REQUESTED`);
  try {
    const prNumber = github.context.payload.pull_request.number;
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

async function getLastCommitSha(octokit) {
  core.debug(`Get last commit`);
  try {
    const { data: commit } = await octokit.rest.repos.listCommits({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      sha: github.context.payload.pull_request.head.ref,
      per_page: 1,
    });
    const sha = commit[0].sha;
    core.debug(`Retrieved last commit with sha ${sha}`);
    return sha;
  } catch (error) {
    throw new Error(`Failed to get last commit: ${error}`);
  }
}

function validatePullRequestTitle(prTitle, types, scopes) {
  core.info(`Validate pr title "${prTitle}"`);
  try {
    const re = new RE2(`^(?:${types.join('|')})(?:\\(${scopes.join('|')}\\)):\\s(?:.+)$`, 'g');
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

async function checkPullRequestTitle(octokit, types, scopes) {
  const prNumber = github.context.payload.pull_request.number;
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

async function createReview(octokit, reviewBody, status) {
  const prNumber = github.context.payload.pull_request.number;
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

async function dismissReview(octokit, id, reviewBody) {
  const prNumber = github.context.payload.pull_request.number;
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

async function createCheckRun(octokit) {
  core.info(`Creating check run with name ${checkRunName}`);
  try {
    if (!checkRunName) {
      throw new Error(`Failed to create check run: name required`);
    }
    const commitSha = await getLastCommitSha(octokit);
    const { data: checkRun } = await octokit.rest.checks.create({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      name: checkRunName,
      head_sha: commitSha,
    });
    const checkRunId = checkRun.id;
    core.info(`Check run ${checkRunName} with id ${checkRunId} created`);
    return checkRunId;
  } catch (error) {
    throw new Error(`Failed to create check run: ${error}`);
  }
}

async function updateCheckRun(octokit, checkRunId, conclusion) {
  core.info(`Updating check run with id ${checkRunId}`);
  try {
    if (!checkRunId) {
      throw new Error(`Failed to update check run: id required`);
    }
    const commitSha = await getLastCommitSha(octokit);
    await octokit.rest.checks.create({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      head_sha: commitSha,
      check_run_id: checkRunId,
      name: checkRunName,
      status: 'completed',
      conclusion,
    });
    core.info(`Check run with ${checkRunId} created`);
  } catch (error) {
    throw new Error(`Failed to create check run: ${error}`);
  }
}

module.exports = {
  findReview,
  checkPullRequestTitle,
  createReview,
  dismissReview,
  createCheckRun,
  updateCheckRun,
};

const github = require('@actions/github');
const core = require('@actions/core');
const _ = require('lodash');

const checkRunName = 'validate-pr-title';

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

function validatePullRequestTitle(prTitle, types, scopes) {
  core.info(`Validate pr title "${prTitle}"`);
  const safeTypes = types.map((type) => _.escapeRegExp(type));
  const safeScopes = scopes.map((scope) => _.escapeRegExp(scope));
  const prTitleRegex = new RegExp(
    `^(?<type>${safeTypes.join('|')})(?<scope>\\(${safeScopes.join('|')}\\)):\\s(?<subject>.+)$`,
    'g'
  );
  core.debug(`Calculated regexp: ${prTitleRegex.toString()}`);
  const result = prTitleRegex.test(prTitle);
  if (result) {
    core.info(`Pr title "${prTitle}" valid`);
  } else {
    core.info(`Pr title "${prTitle}" invalid`);
  }
  return result;
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
      output:
        conclusion === 'success'
          ? null
          : {
              title: "Your pr title doesn't follow the conventional commit specification",
              summary: 'Questo è un riassunto di prova',
              text: 'Anche qui sto mettendo cose a caso',
            },
    });
    core.info(`Check run with ${checkRunId} created`);
  } catch (error) {
    throw new Error(`Failed to create check run: ${error}`);
  }
}

module.exports = {
  createCheckRun,
  checkPullRequestTitle,
  updateCheckRun,
};

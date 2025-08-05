const github = require('@actions/github');
const core = require('@actions/core');

async function getLastCommitSha(octokit) {
  core.debug(`Get last commit`);
  try {
    const { data: commit } = await octokit.rest.repos.listCommits({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      //sha: github.context.
      per_page: 1,
    });
    core.info('-------------------- ' + JSON.stringify(github));
    core.debug(`Last commit retrieved`);
    return commit[0].sha;
  } catch (error) {
    throw new Error(`Failed to get last commit: ${error}`);
  }
}

async function createCheckRun(octokit, id) {
  core.info(`Creating check run with id ${id}`);
  try {
    if (!id) {
      throw new Error(`Failed to create check run: id required`);
    }
    const commitSha = await getLastCommitSha(octokit);
    /*await octokit.rest.checks.create({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      name: id,
      head_sha: commitSha,
    });
    */
    core.info(`Check run with ${id} created`);
  } catch (error) {
    throw new Error(`Failed to create check run: ${error}`);
  }
}

module.exports = {
  createCheckRun,
};

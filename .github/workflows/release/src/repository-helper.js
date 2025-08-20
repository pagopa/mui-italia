import core from '@actions/core';
import github from '@actions/github';

export async function checkIfRefExists(octokit, ref) {
  core.debug(`Checking if ref ${ref} exists`);
  try {
    const { data: reference } = await octokit.rest.git.getRef({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      ref,
    });
    core.info(`Retrieved ref info: name - ${reference.ref} and sha - ${reference.object.sha}`);
    return reference;
  } catch (error) {
    throw new Error(`Error during ref ${ref} retrieving: ${error}`);
  }
}

export async function getLatestTag(octokit, branchName) {
  core.info(`Getting the latest release in the history of the branch ${branchName}`);
  try {
    // retrieve branch commits
    const { data: branchCommits } = await octokit.rest.repos.listCommits({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      sha: branchName,
      per_page: 100,
    });

    const branchCommitShas = branchCommits.map((commit) => commit.sha);

    const { data: releases } = await octokit.rest.repos.listReleases({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      per_page: 30, // This should be enough, because we consised releasing a release every 3 months (i.e. 4 release per year)
    });

    if (releases.length === 0) {
      throw new Error(`No release found`);
    }

    for (const release of releases) {
      const releaseCommitSha = release.target_commitish;

      // Check if the release commit SHA is in the history of the branch
      if (branchCommitShas.includes(releaseCommitSha)) {
        core.info(
          `Retrieved release and its tag info: version - ${release.tag_name} and commitId - ${release.target_commitish}`
        );
        return { commitId: release.target_commitish, tag: release.tag_name };
      }
    }
    throw new Error(`No release found in the history of the branch ${branchName}.`);
  } catch (error) {
    throw new Error(`Error during release retrieving: ${error}`);
  }
}

import core from '@actions/core';
import github from '@actions/github';

export async function checkIfRefExists(octokit, ref) {
  const type = ref.startsWith('heads') ? 'branch' : 'tag';
  core.debug(`Checking if ${type} ${ref} exists`);
  try {
    const { data: reference } = await octokit.rest.git.getRef({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      ref,
    });
    core.info(`Retrieved ${type} info: name - ${reference.ref} and sha - ${reference.object.sha}`);
    return reference;
  } catch (error) {
    if (error.status === 404) {
      core.debug(
        `${String(type).charAt(0).toUpperCase() + String(type).slice(1)} ${ref} does not exist`
      );
      return;
    }
    throw new Error(`Error during ${type} ${ref} retrieving: ${error}`);
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

export async function createBranch(octokit, baseBranchSha, branchName) {
  core.info(`Creating branch ${branchName}`);
  // Create a new branch based on the base branch
  try {
    const { data: branchRef } = await octokit.rest.git.createRef({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      ref: `refs/heads/${branchName}`,
      sha: baseBranchSha,
    });
    const branchSha = branchRef.object.sha;
    core.debug(`Branch sha ${branchSha}`);
    core.info(`Branch ${branchName} created`);
    return branchSha;
  } catch (error) {
    throw new Error(`Error during branch creation: ${error}`);
  }
}

export async function mergeBranch(octokit, sBranchName, dBranchName) {
  // sBranchName is the source branch
  // dBranchName is the destination branch
  core.info(`Merging branch ${sBranchName} into ${dBranchName}`);
  try {
    await octokit.rest.repos.merge({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      base: sBranchName,
      head: dBranchName,
    });
    core.info(`Branch ${sBranchName} merged into ${dBranchName}`);
  } catch (error) {
    if (error.status === 409) {
      throw new Error(
        `Conflicts during branch merging. Resolve them and rerun the action: ${error}`
      );
    }
    throw new Error(`Error during branch merging: ${error}`);
  }
}

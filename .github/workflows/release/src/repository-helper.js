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

async function createBlob(octokit, fileContent) {
  core.debug(`Creating blob from file content`);
  try {
    const { data: blob } = await octokit.rest.git.createBlob({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      content: fileContent,
    });
    core.debug(`Blob created with sha ${blob.sha}`);
    return blob;
  } catch (error) {
    throw new Error(`Error during blob creation: ${error}`);
  }
}

async function createBranchTree(octokit, branchSha, files) {
  core.debug(`Creating branch tree`);
  const shaFiles = [];
  for (const file of files) {
    const blob = await createBlob(octokit, file.content);
    shaFiles.push({
      path: file.path,
      sha: blob.sha,
    });
  }
  try {
    const { data: branchTree } = await octokit.rest.git.createTree({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      tree: shaFiles.map((file) => ({
        path: file.path,
        mode: '100644',
        type: 'blob',
        sha: file.sha,
      })),
      base_tree: branchSha,
    });
    core.debug(`Branch tree created`);
    return branchTree;
  } catch (error) {
    throw new Error(`Error during branch tree creation: ${error}`);
  }
}

export async function commitChanges(octokit, branchName, branchSha, files, message) {
  if (files.length === 0) {
    core.info(`Nothing to commit on branch ${branchName}`);
    return;
  }
  core.info(`Committing changes on branch ${branchName}`);
  // get branch tree
  const branchTree = await createBranchTree(octokit, branchSha, files);
  core.debug(`Branch tree sha ${branchTree.sha}`);
  try {
    const response = await octokit.rest.git.createCommit({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      message,
      tree: branchTree.sha,
      parents: [branchSha],
    });
    core.info(`Changes on branch ${branchName} committed with sha ${commit.sha}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error during commit creation: ${error}`);
  }
  // core.info(`Pushing changes on branch ${branchName}`);
  // await updateBranchRef(branchName, commit.sha);
  // core.info(`Changes on branch ${branchName} pushed`);
}

export async function updateRef(octokit, ref, commitSha) {
  const type = ref.startsWith('heads') ? 'branch' : 'tag';
  core.info(`Updating ${type} ${ref}`);
  try {
    await octokit.rest.git.updateRef({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      ref,
      sha: commitSha,
    });
    core.info(`${String(type).charAt(0).toUpperCase() + String(type).slice(1)} ${ref} updated`);
  } catch (error) {
    throw new Error(`Error during ${type} ${ref} updating: ${error}`);
  }
}

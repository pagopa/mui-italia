import { info, debug } from '@actions/core';
import github from '@actions/github';

import { toSentenceCase, isTagOrBranch } from './utility-helper.js';

export async function getRef(octokit, ref) {
  const type = isTagOrBranch(ref);
  debug(`Checking if ${type} ${ref} exists`);
  try {
    const { data: reference } = await octokit.rest.git.getRef({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      ref: `${type === 'tag' ? 'tags' : 'heads'}/${ref}`,
    });
    info(`Retrieved ${type} info: name - ${reference.ref} and sha - ${reference.object.sha}`);
    return reference;
  } catch (error) {
    if (error.status === 404) {
      debug(`${toSentenceCase(type)} ${ref} does not exist`);
      return;
    }
    throw new Error(`Error during ${type} ${ref} retrieving: ${error}`);
  }
}

export async function getLatestRelease(octokit, branchName) {
  info(`Getting the latest release in the history of the branch ${branchName}`);
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
        info(`Retrieved release and its tag version ${release.tag_name}`);
        return release;
      }
    }
    throw new Error(`No release found in the history of the branch ${branchName}.`);
  } catch (error) {
    throw new Error(`Error during release retrieving: ${error}`);
  }
}

async function getTag(octokit, tagSha) {
  debug(`Getting tag infos`);
  const { data: tag } = await octokit.rest.git.getTag({
    owner: github.context.repo.owner,
    repo: github.context.repo.repo,
    tag_sha: tagSha,
  });
  return tag;
}

export async function getCommits(octokit, branchName, tag) {
  info(`Getting all commits in ${branchName} from tag ${tag}`);
  try {
    // first we get the tag ref
    const tagRef = await getRef(octokit, tag);
    // from tag we must get the commit sha linked to it
    const tagObj = await getTag(octokit, tagRef.object.sha);
    const commitTagSha = tagObj.object.sha;
    // this commit sha will be used to stop the commits retrieving
    let commits = [];
    for await (const response of octokit.paginate.iterator(octokit.rest.repos.listCommits, {
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      sha: `heads/${branchName}`,
      per_page: 30,
    })) {
      const commitsFound = response.data;
      const commitIndex = commitsFound.findIndex((c) => c.sha === commitTagSha);
      if (commitIndex === -1) {
        commits = commits.concat(commitsFound);
        continue;
      }
      commitsFound.splice(commitIndex);
      commits = commits.concat(commitsFound);
      break;
    }
    info(`Commits retrieved`);
    return commits;
  } catch (error) {
    throw new Error(`Error during commits retrieving: ${error}`);
  }
}

export async function createRef(octokit, sha, ref) {
  const type = isTagOrBranch(ref);
  info(`Creating ${type} ${ref}`);
  // Create a new ref
  try {
    const { data: branchRef } = await octokit.rest.git.createRef({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      ref: `refs/${type === 'tag' ? 'tags' : 'heads'}/${ref}`,
      sha,
    });
    const branchSha = branchRef.object.sha;
    debug(`${toSentenceCase(type)} sha ${branchSha}`);
    info(`${toSentenceCase(type)} ${ref} created`);
    return branchSha;
  } catch (error) {
    throw new Error(`Error during ${toSentenceCase(type)} creation: ${error}`);
  }
}

export async function mergeBranch(octokit, sBranchName, dBranchName) {
  // sBranchName is the source branch
  // dBranchName is the destination branch
  info(`Merging branch ${sBranchName} into ${dBranchName}`);
  try {
    const { data: merge } = await octokit.rest.repos.merge({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      base: dBranchName,
      head: sBranchName,
    });
    if (!merge) {
      throw new Error(`${sBranchName} doesn't have any changes to merge into ${dBranchName}`);
    }
    info(`Branch ${sBranchName} merged into ${dBranchName}`);
    return merge;
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
  debug(`Creating blob from file content`);
  try {
    const { data: blob } = await octokit.rest.git.createBlob({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      content: fileContent,
    });
    debug(`Blob created with sha ${blob.sha}`);
    return blob;
  } catch (error) {
    throw new Error(`Error during blob creation: ${error}`);
  }
}

async function createBranchTree(octokit, sha, files) {
  debug(`Creating branch tree`);
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
      base_tree: sha,
    });
    debug(`Branch tree created`);
    return branchTree;
  } catch (error) {
    throw new Error(`Error during branch tree creation: ${error}`);
  }
}

export async function commitChanges(octokit, branchName, sha, files, message) {
  if (files.length === 0) {
    info(`Nothing to commit on branch ${branchName}`);
    return;
  }
  info(`Committing changes on branch ${branchName}`);
  // get branch tree
  const branchTree = await createBranchTree(octokit, sha, files);
  debug(`Branch tree sha ${branchTree.sha}`);
  try {
    const { data: commit } = await octokit.rest.git.createCommit({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      message,
      tree: branchTree.sha,
      parents: [sha],
    });
    info(`Changes on branch ${branchName} committed with sha ${commit.sha}`);
    return commit;
  } catch (error) {
    throw new Error(`Error during commit creation: ${error}`);
  }
}

export async function updateRef(octokit, ref, commitSha) {
  const type = isTagOrBranch(ref);
  info(`Updating ${type} ${ref}`);
  try {
    await octokit.rest.git.updateRef({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      ref: `${type === 'tag' ? 'tag' : 'heads'}/${ref}`,
      sha: commitSha,
    });
    info(`${toSentenceCase(type)} ${ref} updated`);
  } catch (error) {
    throw new Error(`Error during ${type} ${ref} updating: ${error}`);
  }
}

export async function createRelease(octokit, tag, commitSha, name, body, isPrerelease) {
  info(`Creating release from tag ${tag}`);
  try {
    const { data: release } = await octokit.rest.repos.createRelease({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      tag_name: tag,
      target_commitish: commitSha,
      name,
      body,
      prerelease: isPrerelease,
      generate_release_notes: false,
      make_latest: (!isPrerelease).toString(),
    });
    info(`Release created`);
    return release;
  } catch (error) {
    throw new Error(`Error during release creation: ${error}`);
  }
}

export async function createPullRequest(octokit, from, to, title, body) {
  info(`Creating pull request from ${from} to ${to}`);
  try {
    octokit.rest.pulls.create({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      head: from,
      base: to,
      title,
      body,
    });
  } catch (error) {
    throw new Error(`Error during pull request creation: ${error}`);
  }
}

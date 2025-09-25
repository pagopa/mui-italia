import { debug, info, getInput, setFailed, setOutput } from '@actions/core';
import { getOctokit } from '@actions/github';

import { checkInputs } from './input-helper.js';
import {
  getLatestRelease,
  getRef,
  createRef,
  mergeBranch,
  commitChanges,
  updateRef,
  createRelease,
  createPullRequest,
} from './repository-helper.js';
import { calcNextTag, toSentenceCase } from './utility-helper.js';
import {
  generateChangelog,
  generateChangelogSection,
  updatePackageVersion,
} from './file-helper.js';
import { checkout, log } from './git-helper.js';

async function run() {
  try {
    debug(`Init octokit client`);
    // initialize Octokit client
    const token = getInput('token');
    if (token) {
      const octokit = getOctokit(token);
      // get user inputs
      const { ref, type, finalRelease, mainBranch } = checkInputs();
      info(
        `Releasing a new ${
          finalRelease ? 'final' : 'candidate'
        } ${type} version starting from branch ${ref}`
      );
      // check if ref exists
      const startingRef = await getRef(octokit, ref);
      if (!startingRef) {
        throw new Error(`${toSentenceCase(refType)} ${ref} doesn't exist`);
      }
      // get the latest tag that is in the history of the current branch
      // to get the latest tag we need to get the latest release and check what is the tag linked to it
      let latestRelease = await getLatestRelease(octokit, ref);
      // calc the next final tag
      const nextFinalTag = await calcNextTag(latestRelease.tag_name, type, true);
      // check if a release branch already exists
      // for hotfix we will have hotfix/{tag_final}
      // for release we will have release/{tag_final}
      // first check if we are already on the release branch
      const releaseBranch = `${type}/${nextFinalTag}`;
      let releaseBranchSha = null;
      if (releaseBranch === ref) {
        releaseBranchSha = startingRef.object.sha;
      } else {
        const releaseBranchRef = await getRef(octokit, releaseBranch);
        if (releaseBranchRef) {
          // if the release branch already exists and it is different from the starting branch, we must be sure that it is updated
          // before continuing, we have to merge the ref branch into the release branch
          const merge = await mergeBranch(octokit, ref, releaseBranch);
          releaseBranchSha = merge.sha;
          // if the release branch already exists we are in the RC case and we have to get again the cuurrent release,
          // because the starting branch doesn't have the last RC tag
          latestRelease = await getLatestRelease(octokit, releaseBranch);
        } else {
          releaseBranchSha = await createRef(octokit, startingRef.object.sha, releaseBranch);
        }
      }
      // checkout to release branch
      await checkout(releaseBranch);
      // calc the new tag
      const nextTag = await calcNextTag(latestRelease.tag_name, type, finalRelease);
      // update package
      const packageJson = updatePackageVersion(nextTag);
      // generate changelog and commit changes
      const changelogSection = await generateChangelogSection(latestRelease.tag_name);
      // the changelog generated is only the last section (from last tag) and not the whole file,
      // so we need to prepend the section generated to the current changelog
      const changelog = generateChangelog(changelogSection);
      // here we do the commit
      const commit = await commitChanges(
        octokit,
        releaseBranch,
        releaseBranchSha,
        [
          { path: 'CHANGELOG.md', content: changelog },
          { path: 'package.json', content: packageJson },
        ],
        `chore: Bump version to v${nextTag}`
      );
      // push changes
      await updateRef(octokit, releaseBranch, commit.sha);
      // create release
      const today = new Date();
      const date = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
      const releaseName = `${finalRelease ? '' : 'Pre-'}Release ${nextTag} - ${date}`;
      const logs = await log(
        latestRelease.tag_name,
        '--pretty=format:* %h %s',
        '--abbrev-commit',
        '--no-merges'
      );
      await createRelease(
        octokit,
        `v${nextTag}`,
        commit.sha,
        releaseName,
        "## What's Changed:\n\r" + logs,
        !finalRelease
      );
      // if it is a final release, we create the pr from the release branch to the main branch
      if (finalRelease) {
        createPullRequest(
          octokit,
          releaseBranch,
          mainBranch,
          `[${mainBranch.toUpperCase()}] Release ${nextTag}`
        );
      }
      // send data outside the action
      setOutput('release_branch', releaseBranch);
      return;
    }
    throw new Error(`No GitHub token specified`);
  } catch (error) {
    setFailed(error.message);
  }
}

run();

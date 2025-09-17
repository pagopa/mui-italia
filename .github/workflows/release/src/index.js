import core from '@actions/core';
import github from '@actions/github';

import { checkInputs } from './input-helper.js';
import {
  getLatestRelease,
  getRef,
  createRef,
  mergeBranch,
  commitChanges,
  updateRef,
  createRelease,
} from './repository-helper.js';
import { calcNextTag, calcNextFinalTag, toSentenceCase } from './utility-helper.js';
import {
  generateChangelog,
  generateChangelogSection,
  updatePackageVersion,
} from './file-helper.js';
import { checkout, log } from './git-helper.js';

async function run() {
  try {
    core.debug(`Init octokit client`);
    // initialize Octokit client
    const token = core.getInput('token');
    if (token) {
      const octokit = github.getOctokit(token);
      // get user inputs
      const { ref, type, finalRelease } = checkInputs();
      core.info(
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
      const latestRelease = await getLatestRelease(octokit, ref);
      // calc the new tag
      const nextTag = await calcNextTag(latestRelease.tag_name, type, finalRelease);
      // check if a release branch already exists
      // for hotfix we will have hotfix/{tag_final}
      // for release we will have release/{tag_final}
      const nextFinalTag = calcNextFinalTag(nextTag);
      // first check if we are already on the release branch
      const releaseBranch = `${type}/${nextFinalTag}`;
      let releaseBranchSha = null;
      if (releaseBranch === ref) {
        releaseBranchSha = startingRef.object.sha;
      } else {
        const releaseBranchRef = await getRef(octokit, releaseBranch);
        if (releaseBranchRef) {
          releaseBranchSha = releaseBranchRef.object.sha;
          // if the release branch already exists and it is different from the starting branch, we must be sure that it is updated
          // before continuing, we have to merge the ref branch into the release branch
          await mergeBranch(octokit, ref, releaseBranch);
        } else {
          releaseBranchSha = await createRef(
            octokit,
            startingRef.object.sha,
            `${type}/${nextFinalTag}`
          );
        }
      }

      // checkout to release branch
      await checkout(releaseBranch);

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
        '--pretty=format:"* %h %s"',
        '--abbrev-commit',
        '--no-merges'
      );
      await createRelease(
        octokit,
        `v${nextTag}`,
        commit.sha,
        releaseName,
        '## Changes:\n\r' + logs,
        !finalRelease
      );
      return;
    }
    throw new Error(`No GitHub token specified`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

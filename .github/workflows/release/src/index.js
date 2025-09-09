import core from '@actions/core';
import github from '@actions/github';

import { checkInputs } from './input-helper.js';
import {
  getLatestRelease,
  getRef,
  createBranch,
  mergeBranch,
  commitChanges,
  getCommits,
  updateRef,
} from './repository-helper.js';
import {
  calcNextTag,
  calcNextFinalTag,
  isTagOrBranch,
  toSentenceCase,
  parseCommits,
} from './utility-helper.js';
import {
  generateChangelog,
  generateChangelogSection,
  updatePackageVersion,
} from './file-helper.js';

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
      // first get all commits from the latest tag that is in the history of the current branch
      let commits = await getCommits(octokit, ref, latestRelease.tag_name);
      commits = parseCommits(commits);
      // const nextTag = await calcNextTag(latestRelease.tag_name, type, finalRelease, commits);
      // check if a release branch already exists
      // for hotfix we will have hotfix/{tag_final}
      // for release we will have release/{tag_final}
      // const nextFinalTag = calcNextFinalTag(nextTag);
      // first check if we are already on the release branch
      /*const releaseBranch = `${type}/${nextFinalTag}`;
      let releaseBranchSha = null;
      if (releaseBranch === refBranch) {
        releaseBranchSha = startingRef.object.sha;
      } else {
        const releaseBranchRef = await checkIfRefExists(octokit, `heads/${type}/${nextFinalTag}`);
        if (releaseBranchRef) {
          releaseBranchSha = releaseBranchRef.object.sha;
          // if the release branch already exists and it is different from the starting branch, we must be sure that it is updated
          // before continuing, we have to merge the ref branch into the release branch
          await mergeBranch(octokit, refBranch, releaseBranch);
        } else {
          releaseBranchSha = await createBranch(
            octokit,
            startingRef.object.sha,
            `${type}/${nextFinalTag}`
          );
        }
      }*/

      // first get all commits from the last tag
      // const commits = await getCommits(octokit, releaseBranchSha, latestRelease.created_at);
      // release candidate must have at least one commit
      /*if (commits.length === 0 && !finalRelease) {
        throw new Error(`No commit found: release candidate must have at least one commit`);
      }
      core.info(JSON.stringify(commits, null, 2));*/

      // update package and commit changes
      // const packageJson = updatePackageVersion(nextTag);
      // we need to commit changes to correctly generate the changelog
      /*let commit = await commitChanges(
        octokit,
        releaseBranch,
        releaseBranchSha,
        [{ path: 'package.json', content: packageJson }],
        `chore(release-${nextTag}): Bump version to v${nextTag}`
      );
      */
      // generate changelog and commit changes
      // const changelogSection = await generateChangelogSection(releaseBranchSha);
      // the changelog generated is only the last section (from last tag) and not the whole file,
      // so we need to prepend the section generated to the current changelog
      // const changelog = generateChangelog(changelogSection);
      // core.info(changelogSection);
      // here we do a commit ammend
      /*commit = await commitChanges(
        octokit,
        releaseBranch,
        commit.sha,
        [{ path: 'CHANGELOG.md', content: changelog }],
        `chore(release-${nextTag}): Bump version to v${nextTag}`
      );
      // push changes
      await updateRef(octokit, `heads/${releaseBranch}`, commit.sha);
      */
      return;
    }
    throw new Error(`No GitHub token specified`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

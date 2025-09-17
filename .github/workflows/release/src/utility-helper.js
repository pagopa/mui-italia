import RE2 from 're2';
import core from '@actions/core';
import { Bumper } from 'conventional-recommended-bump';

import muiPreset from '../mui-preset/index.js';

export function toSentenceCase(word) {
  return String(word).charAt(0).toUpperCase() + String(word).slice(1);
}

export function isTagOrBranch(ref) {
  const tagRegex = new RE2(/^v(\d+)\.(\d+)\.(\d+)(?:-RC|-rc\.(\d+))?$/);
  if (ref.match(tagRegex)) {
    return 'tag';
  }
  return 'branch';
}

export async function calcNextTag(latestTag, type, finalRelease) {
  core.info(`Calculating next tag starting from ${latestTag}`);
  try {
    const rcRegex = new RE2(/^v(\d+)\.(\d+)\.(\d+)(?:-RC|-rc\.(\d+))?$/);
    const match = latestTag.match(rcRegex);
    // match returns an array in witch the first element is the string itslef
    // the second element is the major, the third is the minor and the fourth is the path
    // the fifth element is the relese candidate number and it can be null
    if (!match) {
      throw new Error(
        `Version ${latestTag} doesn't follow the required format v{number}.{number}.{number} whit an optional suffix RC.{number} in case of release candidate`
      );
    }
    const major = Number(match[1]);
    const minor = Number(match[2]);
    const patch = Number(match[3]);
    const candidate = match[4] ? Number(match[4]) : null;

    let nextMajor = major;
    let nextMinor = minor;
    let nextPatch = patch;
    let nextCandidate = candidate;
    // if the latest tag is a candidate and the next one isn't a final, we must increment the rc number (i.e from 1.2.1-RC.1 to 1.2.1-RC.2)
    // if the latest tag is a candidate and the next one is a final, we must remove the rc number (i.e from 1.2.1-RC.2 to 1.2.1)
    // if the latest tag is a final and the next one isn't a final, we must calc the new tag and add the suffix RC.0
    // in this last case we must check if it is an hotfix or a new release
    // if it is an hotfix we must increment the patch, otherwise we have to calc the new tag using the commit history
    if (candidate !== null && !finalRelease) {
      nextCandidate++;
    } else if (candidate !== null && finalRelease) {
      nextCandidate = null;
    } else if (type === 'hotfix') {
      nextPatch++;
      nextCandidate = finalRelease === true ? null : 0; // we have to specify the === true, otherwise it doesn't work
    } else {
      const bumper = new Bumper()
        .commits({
          from: latestTag,
          to: 'HEAD',
        })
        .loadPreset('mui-preset', () => muiPreset);
      const recommendation = await bumper.bump();
      const releaseType = recommendation.releaseType;
      // const releaseType = bumpVersion(commits);
      if (releaseType === 'major') {
        nextMajor++;
        nextMinor = 0;
        nextPatch = 0;
      } else if (releaseType === 'minor') {
        nextMinor++;
        nextPatch = 0;
      } else {
        nextPatch++;
      }
      nextCandidate = finalRelease === true ? null : 0; // we have to specify the === true, otherwise it doesn't work
    }
    const candidateSuffix = nextCandidate !== null ? `-RC.${nextCandidate}` : '';
    const nextTag = `${nextMajor}.${nextMinor}.${nextPatch}${candidateSuffix}`;
    core.info(`Next tag v${nextTag}`);
    return nextTag;
  } catch (error) {
    throw new Error(`Error during next tag calculation: ${error}`);
  }
}

export function calcNextFinalTag(nextTag) {
  const rcRegex = new RE2(/-RC\.\d+$/);
  return nextTag.replace(rcRegex, '');
}

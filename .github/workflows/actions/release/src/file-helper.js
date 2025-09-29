import { ConventionalChangelog } from 'conventional-changelog';
import { info } from '@actions/core';
import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

import muiPreset from '../mui-preset/index.js';

export function updatePackageVersion(nextTag) {
  info('Updating package.json version');
  try {
    // disable automatic commit and tag
    execSync(`npm config set git-tag-version false`);
    // update package.json
    execSync(`npm version ${nextTag}`);
    info(`Version updated`);
    const packageJsonPath = join(process.env.GITHUB_WORKSPACE, 'package.json');
    const packageJson = readFileSync(packageJsonPath, 'utf-8');
    return packageJson;
  } catch (error) {
    throw new Error(`Error during the update of the package.json version: ${error}`);
  }
}

export function generateChangelogSection(latestTag, additionalCommits) {
  info(`Generating CHANGELOG section from tag ${latestTag}`);
  try {
    const chunks = [];
    const generator = new ConventionalChangelog()
      .options({ releaseCount: 0 })
      .commits({
        from: latestTag,
      })
      .readPackage()
      .loadPreset(
        {
          name: 'mui-preset',
          additionalCommits,
        },
        () => muiPreset
      );
    return new Promise((resolve, reject) => {
      generator
        .writeStream()
        .on('data', (chunk) => chunks.push(Buffer.from(chunk)))
        .on('error', (err) => reject(err))
        .on('end', () => {
          info('CHANGELOG section generated');
          resolve(Buffer.concat(chunks).toString('utf8'));
        });
    });
  } catch (error) {
    throw new Error(`Error during CHANGELOG section generation: ${error}`);
  }
}

export function generateChangelog(changelogSection) {
  info('Generating CHANGELOG');
  try {
    const changelogPath = join(process.env.GITHUB_WORKSPACE, 'CHANGELOG.md');
    // read current changelog
    let changelog = readFileSync(changelogPath, 'utf-8');
    // update changelog with new section on top
    changelog = changelogSection + changelog;
    // write on file
    writeFileSync(changelogPath, changelog, 'utf-8');
    info('CHANGELOG generated');
    return readFileSync(changelogPath, 'utf-8');
  } catch (error) {
    throw new Error(`Error during CHANGELOG generation: ${error}`);
  }
}

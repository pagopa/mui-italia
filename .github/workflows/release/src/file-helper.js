import { ConventionalChangelog } from 'conventional-changelog';
import core from '@actions/core';
import muiPreset from '../mui-preset/index.js';

export function generateChangelog(releaseBranch, latestTag) {
  core.info('Generating CHANGELOG');
  try {
    const chunks = [];
    const generator = new ConventionalChangelog()
      .commits({
        from: latestTag,
        to: releaseBranch,
      })
      .readPackage()
      .loadPreset('mui-preset', () => muiPreset);
    return new Promise((resolve, reject) => {
      generator
        .writeStream()
        .on('data', (chunk) => chunks.push(Buffer.from(chunk)))
        .on('error', (err) => reject(err))
        .on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    });
  } catch (error) {
    throw new Error(`Error during CHANGELOG generation: ${error}`);
  }
}

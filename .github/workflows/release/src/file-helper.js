import { ConventionalChangelog } from 'conventional-changelog';
import core from '@actions/core';

export function generateChangelog() {
  core.info('Generating CHANGELOG');
  try {
    const generator = new ConventionalChangelog().readPackage().loadPreset('angular');
    generator.writeStream().pipe(process.stdout);
  } catch (error) {
    throw new Error(`Error during CHANGELOG generation: ${error}`);
  }
}

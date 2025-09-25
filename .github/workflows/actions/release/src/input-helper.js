import { getInput } from '@actions/core';

export function checkInputs() {
  // get user inputs
  const ref = getInput('ref', { required: true });
  const type = getInput('type', { required: true });
  const finalRelease = getInput('final_release') === 'true';
  const mainBranch = getInput('main_branch');

  if (type !== 'release' && type !== 'hotfix') {
    throw new Error(`Type ${type} is not among those allowed`);
  }

  if (mainBranch.includes('heads') || mainBranch.includes('origin')) {
    throw new Error(`The name of the main branch must be passed without heads and origin prefixes`);
  }

  return { ref, type, finalRelease, mainBranch };
}

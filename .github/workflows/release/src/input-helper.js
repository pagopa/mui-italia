import core from '@actions/core';

export function checkInputs() {
  // get user inputs
  const refBranch = core.getInput('ref');
  const type = core.getInput('type');
  const finalRelease = Boolean(core.getInput('final_release'));

  if (type !== 'release' && type !== 'hotfix') {
    throw new Error(`Type ${type} is not among those allowed`);
  }

  return { refBranch, type, finalRelease };
}

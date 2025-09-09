import core from '@actions/core';

export function checkInputs() {
  // get user inputs
  const ref = core.getInput('ref', { required: true });
  const type = core.getInput('type', { required: true });
  const finalRelease = core.getInput('final_release') === 'true';

  if (type !== 'release' && type !== 'hotfix') {
    throw new Error(`Type ${type} is not among those allowed`);
  }

  return { ref, type, finalRelease };
}

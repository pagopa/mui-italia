const core = require('@actions/core');

function checkInputs() {
  // get user inputs
  const refBranch = core.getInput('ref');
  const type = core.getInput('type');
  const finalRelease = core.getInput('final_release');

  if (type !== 'release' && type !== 'hotfix') {
    throw new Error(`Type ${type} is not among those allowed`);
  }

  return { refBranch, type, finalRelease };
}

module.exports = {
  checkInputs,
};

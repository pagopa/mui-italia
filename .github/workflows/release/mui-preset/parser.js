export function createParserOpts() {
  return {
    // regexp used to break down commit message
    headerPattern: /^(\w*)(?:\((.*)\))?!?:\s?(.*)$/,
    breakingHeaderPattern: /^(\w*)(?:\((.*)\))?!:\s?(.*)$/,
    // maps the regexp group into specific variable
    headerCorrespondence: ['type', 'scope', 'subject'],
    // define the key words for the breaking changes
    noteKeywords: ['BREAKING CHANGE', 'BREAKING-CHANGE'],
    // regexp to catch the revert commits
    revertPattern: /^(?:Revert|revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w*)\./i,
    revertCorrespondence: ['header', 'hash'],
  };
}

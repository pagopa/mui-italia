import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const dirname = fileURLToPath(new URL('.', import.meta.url));
// the elements of this map are ordered by priority
// the last element is that with gratest priority and the first element is that with lowest priority
// the priority is used to order the section inside the changelog
const sectionsMap = {
  docs: 'Documentation',
  test: 'Tests',
  ci: 'Continuous Integration',
  build: 'Build System',
  refactor: 'Code Refactoring',
  perf: 'Performance Improvements',
  chore: 'Chores',
  style: 'Styles',
  fix: 'Bug Fixes',
  feat: 'Features',
};
const COMMIT_HASH_LENGTH = 7;

export async function createWriterOpts() {
  const [template, header, commit, footer] = await Promise.all([
    readFile(resolve(dirname, './templates/template.hbs'), 'utf-8'),
    readFile(resolve(dirname, './templates/header.hbs'), 'utf-8'),
    readFile(resolve(dirname, './templates/commit.hbs'), 'utf-8'),
    readFile(resolve(dirname, './templates/footer.hbs'), 'utf-8'),
  ]);
  const writerOpts = getWriterOpts();

  writerOpts.mainTemplate = template;
  writerOpts.headerPartial = header;
  writerOpts.commitPartial = commit;
  writerOpts.footerPartial = footer;

  return writerOpts;
}

function getWriterOpts() {
  return {
    transform: (commit, context) => {
      const scope = commit.scope === '*' ? '' : commit.scope;

      const type = getCommitType(commit);

      const shortHash =
        typeof commit.hash === 'string'
          ? commit.hash.substring(0, COMMIT_HASH_LENGTH)
          : commit.shortHash;

      // link the issue number into the subject to the issue on github
      // first we have to remove the issue number from subject
      // after we re-add issue number with a link to it
      const issues = [];
      let { subject } = commit;
      // subject can be nulla if the regexp in parser doesn't match
      // this can happen when the commit message is without type and without scope
      // in this cases we use the whole commit message as subject
      subject = subject || commit.header;

      if (typeof subject === 'string') {
        let url = context.repository
          ? `${context.host}/${context.owner}/${context.repository}`
          : context.repoUrl;

        if (url) {
          url = `${url}/issues/`;
          // Issue URLs.
          subject = subject.replace(/#([0-9]+)/g, (_, issue) => {
            issues.push(issue);
            return `[#${issue}](${url}${issue})`;
          });
        }
      }

      return {
        scope,
        type,
        shortHash,
        subject,
      };
    },
    /*finalizeContext: (context, _writerOpts, _filteredCommits, _keyCommit, _originalCommits) => {
      const { commitGroups } = context;
      if (!commitGroups || commitGroups.length === 0) {
        const versionBumpCommit = {
          title: 'Chore',
          commits: [{ subject: 'Version bump ' }],
        };
        context.commitGroups = [versionBumpCommit];
      }
      return context;
    },*/
    groupBy: 'type',
    commitsSort: (a, b) => {
      const dateA = new Date(a.committerDate).getTime();
      const dateB = new Date(b.committerDate).getTime();
      return dateB - dateA; // Sorts from most recent to least recent
    },
    commitGroupsSort: (a, b) => {
      const sectionsNames = Object.values(sectionsMap);
      const indexSectionA = sectionsNames.indexOf(a.title);
      const indexSectionB = sectionsNames.indexOf(b.title);
      return indexSectionB - indexSectionA;
    },
  };
}

function getCommitType(commit) {
  let section = commit.revert ? 'Reverts' : sectionsMap[commit.type];

  return section ? section : 'Others';
}

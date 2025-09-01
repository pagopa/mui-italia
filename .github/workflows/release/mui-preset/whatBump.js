export function createWhatBump() {
  return function whatBump(commits) {
    // 2 is for patch
    // 1 is for minor
    // 0 is for major
    let level = 2;

    for (const commit of commits) {
      // if there is a breaking changes, the parser automatically fills the notes array
      if (commit.notes.length > 0) {
        level = 0;
        break;
      } else if (commit.type === 'feat') {
        if (level === 2) {
          level = 1;
          break;
        }
      }
    }

    return {
      level,
    };
  };
}

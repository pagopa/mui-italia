import { createParserOpts } from './parser.js';
import { createWriterOpts } from './writer.js';
import { createWhatBump } from './whatBump.js';

export default async function createPreset() {
  return {
    commits: {
      merges: false,
    },
    parser: createParserOpts(),
    writer: await createWriterOpts(),
    whatBump: createWhatBump(),
  };
}

// export default await createPreset();

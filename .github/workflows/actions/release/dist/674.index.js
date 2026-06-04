export const id = 674;
export const ids = [674];
export const modules = {

/***/ 4674:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CommitParser: () => (/* reexport */ CommitParser),
  createCommitObject: () => (/* reexport */ createCommitObject),
  parseCommits: () => (/* reexport */ parseCommits),
  parseCommitsStream: () => (/* reexport */ parseCommitsStream)
});

;// CONCATENATED MODULE: ./node_modules/conventional-commits-parser/dist/regex.js
const nomatchRegex = /(?!.*)/;
function regex_escape(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function joinOr(parts) {
    return parts
        .map(val => (typeof val === 'string' ? regex_escape(val.trim()) : val.source))
        .filter(Boolean)
        .join('|');
}
function getNotesRegex(noteKeywords, notesPattern) {
    if (!noteKeywords) {
        return nomatchRegex;
    }
    const noteKeywordsSelection = joinOr(noteKeywords);
    if (!notesPattern) {
        return new RegExp(`^[\\s|*]*(${noteKeywordsSelection})[:\\s]+(.*)`, 'i');
    }
    return notesPattern(noteKeywordsSelection);
}
function getReferencePartsRegex(issuePrefixes, issuePrefixesCaseSensitive) {
    if (!issuePrefixes) {
        return nomatchRegex;
    }
    const flags = issuePrefixesCaseSensitive ? 'g' : 'gi';
    return new RegExp(`(?:.*?)??\\s*([\\w-\\.\\/]*?)??(${joinOr(issuePrefixes)})([\\w-]+)(?=\\s|$|[,;)\\]])`, flags);
}
function getReferencesRegex(referenceActions) {
    if (!referenceActions) {
        // matches everything
        return /()(.+)/gi;
    }
    const joinedKeywords = joinOr(referenceActions);
    return new RegExp(`(${joinedKeywords})(?:\\s+(.*?))(?=(?:${joinedKeywords})|$)`, 'gi');
}
/**
 * Make the regexes used to parse a commit.
 * @param options
 * @returns Regexes.
 */
function getParserRegexes(options = {}) {
    const notes = getNotesRegex(options.noteKeywords, options.notesPattern);
    const referenceParts = getReferencePartsRegex(options.issuePrefixes, options.issuePrefixesCaseSensitive);
    const references = getReferencesRegex(options.referenceActions);
    return {
        notes,
        referenceParts,
        references,
        mentions: /@([\w-]+)/g,
        url: /\b(?:https?):\/\/(?:www\.)?([-a-zA-Z0-9@:%_+.~#?&//=])+\b/
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcmVnZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFBO0FBRTdCLFNBQVMsTUFBTSxDQUFDLE1BQWM7SUFDNUIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxDQUFBO0FBQ3RELENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBQyxLQUEwQjtJQUN4QyxPQUFPLEtBQUs7U0FDVCxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdkUsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUNkLENBQUM7QUFFRCxTQUFTLGFBQWEsQ0FDcEIsWUFBNkMsRUFDN0MsWUFBb0Q7SUFFcEQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xCLE9BQU8sWUFBWSxDQUFBO0lBQ3JCLENBQUM7SUFFRCxNQUFNLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUVsRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEIsT0FBTyxJQUFJLE1BQU0sQ0FBQyxhQUFhLHFCQUFxQixjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDMUUsQ0FBQztJQUVELE9BQU8sWUFBWSxDQUFDLHFCQUFxQixDQUFDLENBQUE7QUFDNUMsQ0FBQztBQUVELFNBQVMsc0JBQXNCLENBQzdCLGFBQThDLEVBQzlDLDBCQUErQztJQUUvQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbkIsT0FBTyxZQUFZLENBQUE7SUFDckIsQ0FBQztJQUVELE1BQU0sS0FBSyxHQUFHLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtJQUVyRCxPQUFPLElBQUksTUFBTSxDQUFDLG1DQUFtQyxNQUFNLENBQUMsYUFBYSxDQUFDLDhCQUE4QixFQUFFLEtBQUssQ0FBQyxDQUFBO0FBQ2xILENBQUM7QUFFRCxTQUFTLGtCQUFrQixDQUN6QixnQkFBaUQ7SUFFakQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDdEIscUJBQXFCO1FBQ3JCLE9BQU8sVUFBVSxDQUFBO0lBQ25CLENBQUM7SUFFRCxNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUUvQyxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksY0FBYyx1QkFBdUIsY0FBYyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDeEYsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLFVBQXNJLEVBQUU7SUFFeEksTUFBTSxLQUFLLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ3ZFLE1BQU0sY0FBYyxHQUFHLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUE7SUFDeEcsTUFBTSxVQUFVLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFFL0QsT0FBTztRQUNMLEtBQUs7UUFDTCxjQUFjO1FBQ2QsVUFBVTtRQUNWLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLEdBQUcsRUFBRSwyREFBMkQ7S0FDakUsQ0FBQTtBQUNILENBQUMifQ==
;// CONCATENATED MODULE: ./node_modules/conventional-commits-parser/dist/utils.js
const SCISSOR = '------------------------ >8 ------------------------';
/**
 * Remove leading and trailing newlines.
 * @param input
 * @returns String without leading and trailing newlines.
 */
function trimNewLines(input) {
    // To escape ReDos we should escape String#replace with regex.
    const matches = input.match(/[^\r\n]/);
    if (typeof matches?.index !== 'number') {
        return '';
    }
    const firstIndex = matches.index;
    let lastIndex = input.length - 1;
    while (input[lastIndex] === '\r' || input[lastIndex] === '\n') {
        lastIndex--;
    }
    return input.substring(firstIndex, lastIndex + 1);
}
/**
 * Append a newline to a string.
 * @param src
 * @param line
 * @returns String with appended newline.
 */
function appendLine(src, line) {
    return src ? `${src}\n${line || ''}` : line || '';
}
/**
 * Creates a function that filters out comments lines.
 * @param char
 * @returns Comment filter function.
 */
function getCommentFilter(char) {
    return char
        ? (line) => !line.startsWith(char)
        : () => true;
}
/**
 * Select lines before the scissor.
 * @param lines
 * @param commentChar
 * @returns Lines before the scissor.
 */
function truncateToScissor(lines, commentChar) {
    const scissorIndex = lines.indexOf(`${commentChar} ${SCISSOR}`);
    if (scissorIndex === -1) {
        return lines;
    }
    return lines.slice(0, scissorIndex);
}
/**
 * Filter out GPG sign lines.
 * @param line
 * @returns True if the line is not a GPG sign line.
 */
function gpgFilter(line) {
    return !line.match(/^\s*gpg:/);
}
/**
 * Assign matched correspondence to the target object.
 * @param target - The target object to assign values to.
 * @param matches - The RegExp match array containing the matched groups.
 * @param correspondence - An array of keys that correspond to the matched groups.
 * @returns The target object with assigned values.
 */
function assignMatchedCorrespondence(target, matches, correspondence) {
    const { groups } = matches;
    for (let i = 0, len = correspondence.length, key; i < len; i++) {
        key = correspondence[i];
        target[key] = (groups ? groups[key] : matches[i + 1]) || null;
    }
    return target;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLEdBQUcsc0RBQXNELENBQUE7QUFFdEU7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsS0FBYTtJQUN4Qyw4REFBOEQ7SUFFOUQsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUV0QyxJQUFJLE9BQU8sT0FBTyxFQUFFLEtBQUssS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUN2QyxPQUFPLEVBQUUsQ0FBQTtJQUNYLENBQUM7SUFFRCxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFBO0lBQ2hDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO0lBRWhDLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDOUQsU0FBUyxFQUFFLENBQUE7SUFDYixDQUFDO0lBRUQsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDbkQsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLFVBQVUsQ0FBQyxHQUFrQixFQUFFLElBQXdCO0lBQ3JFLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxJQUFJLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUE7QUFDbkQsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsSUFBd0I7SUFDdkQsT0FBTyxJQUFJO1FBQ1QsQ0FBQyxDQUFDLENBQUMsSUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUE7QUFDaEIsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQixDQUMvQixLQUFlLEVBQ2YsV0FBbUI7SUFFbkIsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLFdBQVcsSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFBO0lBRS9ELElBQUksWUFBWSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDeEIsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDO0lBRUQsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQTtBQUNyQyxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxTQUFTLENBQUMsSUFBWTtJQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUNoQyxDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsTUFBTSxVQUFVLDJCQUEyQixDQUN6QyxNQUFxQyxFQUNyQyxPQUF5QixFQUN6QixjQUF3QjtJQUV4QixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFBO0lBRTFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDL0QsR0FBRyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN2QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQTtJQUMvRCxDQUFDO0lBRUQsT0FBTyxNQUFNLENBQUE7QUFDZixDQUFDIn0=
;// CONCATENATED MODULE: ./node_modules/conventional-commits-parser/dist/options.js
const defaultOptions = {
    noteKeywords: ['BREAKING CHANGE', 'BREAKING-CHANGE'],
    issuePrefixes: ['#'],
    referenceActions: [
        'close',
        'closes',
        'closed',
        'fix',
        'fixes',
        'fixed',
        'resolve',
        'resolves',
        'resolved'
    ],
    headerPattern: /^(\w*)(?:\(([\w$@.\-*/ ]*)\))?: (.*)$/,
    headerCorrespondence: [
        'type',
        'scope',
        'subject'
    ],
    revertPattern: /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\.?/,
    revertCorrespondence: ['header', 'hash'],
    fieldPattern: /^-(.*?)-$/
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBa0I7SUFDM0MsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7SUFDcEQsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ3BCLGdCQUFnQixFQUFFO1FBQ2hCLE9BQU87UUFDUCxRQUFRO1FBQ1IsUUFBUTtRQUNSLEtBQUs7UUFDTCxPQUFPO1FBQ1AsT0FBTztRQUNQLFNBQVM7UUFDVCxVQUFVO1FBQ1YsVUFBVTtLQUNYO0lBQ0QsYUFBYSxFQUFFLHVDQUF1QztJQUN0RCxvQkFBb0IsRUFBRTtRQUNwQixNQUFNO1FBQ04sT0FBTztRQUNQLFNBQVM7S0FDVjtJQUNELGFBQWEsRUFBRSxxREFBcUQ7SUFDcEUsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO0lBQ3hDLFlBQVksRUFBRSxXQUFXO0NBQzFCLENBQUEifQ==
;// CONCATENATED MODULE: ./node_modules/conventional-commits-parser/dist/CommitParser.js



/**
 * Helper to create commit object.
 * @param initialData - Initial commit data.
 * @returns Commit object with empty data.
 */
function createCommitObject(initialData = {}) {
    // @ts-expect-error: You can read properties from `Commit` without problems, but you can't assign object to this type. So here is helper for that.
    return {
        merge: null,
        revert: null,
        header: null,
        body: null,
        footer: null,
        notes: [],
        mentions: [],
        references: [],
        ...initialData
    };
}
/**
 * Commit message parser.
 */
class CommitParser {
    options;
    regexes;
    lines = [];
    lineIndex = 0;
    commit = createCommitObject();
    constructor(options = {}) {
        this.options = {
            ...defaultOptions,
            ...options
        };
        this.regexes = getParserRegexes(this.options);
    }
    currentLine() {
        return this.lines[this.lineIndex];
    }
    nextLine() {
        return this.lines[this.lineIndex++];
    }
    isLineAvailable() {
        return this.lineIndex < this.lines.length;
    }
    parseReference(input, action) {
        const { regexes } = this;
        if (regexes.url.test(input)) {
            return null;
        }
        const matches = regexes.referenceParts.exec(input);
        if (!matches) {
            return null;
        }
        let [raw, repository = null, prefix, issue] = matches;
        let owner = null;
        if (repository) {
            const slashIndex = repository.indexOf('/');
            if (slashIndex !== -1) {
                owner = repository.slice(0, slashIndex);
                repository = repository.slice(slashIndex + 1);
            }
        }
        return {
            raw,
            action,
            owner,
            repository,
            prefix,
            issue
        };
    }
    parseReferences(input) {
        const { regexes } = this;
        const regex = input.match(regexes.references)
            ? regexes.references
            : /()(.+)/gi;
        const references = [];
        let matches;
        let action;
        let sentence;
        let reference;
        while (true) {
            matches = regex.exec(input);
            if (!matches) {
                break;
            }
            action = matches[1] || null;
            sentence = matches[2] || '';
            while (true) {
                reference = this.parseReference(sentence, action);
                if (!reference) {
                    break;
                }
                references.push(reference);
            }
        }
        return references;
    }
    skipEmptyLines() {
        let line = this.currentLine();
        while (line !== undefined && !line.trim()) {
            this.nextLine();
            line = this.currentLine();
        }
    }
    parseMerge() {
        const { commit, options } = this;
        const correspondence = options.mergeCorrespondence || [];
        const merge = this.currentLine();
        const matches = merge && options.mergePattern
            ? merge.match(options.mergePattern)
            : null;
        if (matches) {
            this.nextLine();
            commit.merge = matches[0] || null;
            assignMatchedCorrespondence(commit, matches, correspondence);
            return true;
        }
        return false;
    }
    parseHeader(isMergeCommit) {
        if (isMergeCommit) {
            this.skipEmptyLines();
        }
        const { commit, options } = this;
        const correspondence = options.headerCorrespondence || [];
        const header = commit.header ?? this.nextLine();
        let matches = null;
        if (header) {
            if (options.breakingHeaderPattern) {
                matches = header.match(options.breakingHeaderPattern);
            }
            if (!matches && options.headerPattern) {
                matches = header.match(options.headerPattern);
            }
        }
        if (header) {
            commit.header = header;
        }
        if (matches) {
            assignMatchedCorrespondence(commit, matches, correspondence);
        }
    }
    parseMeta() {
        const { options, commit } = this;
        if (!options.fieldPattern || !this.isLineAvailable()) {
            return false;
        }
        let matches;
        let field = null;
        let parsed = false;
        while (this.isLineAvailable()) {
            matches = this.currentLine().match(options.fieldPattern);
            if (matches) {
                field = matches[1] || null;
                this.nextLine();
                continue;
            }
            if (field) {
                parsed = true;
                commit[field] = appendLine(commit[field], this.currentLine());
                this.nextLine();
            }
            else {
                break;
            }
        }
        return parsed;
    }
    parseNotes() {
        const { regexes, commit } = this;
        if (!this.isLineAvailable()) {
            return false;
        }
        const matches = this.currentLine().match(regexes.notes);
        let references = [];
        if (matches) {
            const note = {
                title: matches[1],
                text: matches[2]
            };
            commit.notes.push(note);
            commit.footer = appendLine(commit.footer, this.currentLine());
            this.nextLine();
            while (this.isLineAvailable()) {
                if (this.parseMeta()) {
                    return true;
                }
                if (this.parseNotes()) {
                    return true;
                }
                references = this.parseReferences(this.currentLine());
                if (references.length) {
                    commit.references.push(...references);
                }
                else {
                    note.text = appendLine(note.text, this.currentLine());
                }
                commit.footer = appendLine(commit.footer, this.currentLine());
                this.nextLine();
                if (references.length) {
                    break;
                }
            }
            return true;
        }
        return false;
    }
    parseBodyAndFooter(isBody) {
        const { commit } = this;
        if (!this.isLineAvailable()) {
            return isBody;
        }
        const references = this.parseReferences(this.currentLine());
        const isStillBody = !references.length && isBody;
        if (isStillBody) {
            commit.body = appendLine(commit.body, this.currentLine());
        }
        else {
            commit.references.push(...references);
            commit.footer = appendLine(commit.footer, this.currentLine());
        }
        this.nextLine();
        return isStillBody;
    }
    parseBreakingHeader() {
        const { commit, options } = this;
        if (!options.breakingHeaderPattern || commit.notes.length || !commit.header) {
            return;
        }
        const matches = commit.header.match(options.breakingHeaderPattern);
        if (matches) {
            commit.notes.push({
                title: 'BREAKING CHANGE',
                text: matches[3]
            });
        }
    }
    parseMentions(input) {
        const { commit, regexes } = this;
        let matches;
        for (;;) {
            matches = regexes.mentions.exec(input);
            if (!matches) {
                break;
            }
            commit.mentions.push(matches[1]);
        }
    }
    parseRevert(input) {
        const { commit, options } = this;
        const correspondence = options.revertCorrespondence || [];
        const matches = options.revertPattern
            ? input.match(options.revertPattern)
            : null;
        if (matches) {
            commit.revert = assignMatchedCorrespondence({}, matches, correspondence);
        }
    }
    cleanupCommit() {
        const { commit } = this;
        if (commit.body) {
            commit.body = trimNewLines(commit.body);
        }
        if (commit.footer) {
            commit.footer = trimNewLines(commit.footer);
        }
        commit.notes.forEach((note) => {
            note.text = trimNewLines(note.text);
        });
        const referencesSet = new Set();
        commit.references = commit.references.filter((reference) => {
            const uid = `${reference.action} ${reference.raw}`.toLocaleLowerCase();
            const ok = !referencesSet.has(uid);
            if (ok) {
                referencesSet.add(uid);
            }
            return ok;
        });
    }
    /**
     * Parse commit message string into an object.
     * @param input - Commit message string.
     * @returns Commit object.
     */
    parse(input) {
        if (!input.trim()) {
            throw new TypeError('Expected a raw commit');
        }
        const { commentChar } = this.options;
        const commentFilter = getCommentFilter(commentChar);
        const rawLines = trimNewLines(input).split(/\r?\n/);
        const lines = commentChar
            ? truncateToScissor(rawLines, commentChar).filter(line => commentFilter(line) && gpgFilter(line))
            : rawLines.filter(line => gpgFilter(line));
        const commit = createCommitObject();
        this.lines = lines;
        this.lineIndex = 0;
        this.commit = commit;
        const isMergeCommit = this.parseMerge();
        this.parseHeader(isMergeCommit);
        if (commit.header) {
            commit.references = this.parseReferences(commit.header);
        }
        let isBody = true;
        while (this.isLineAvailable()) {
            this.parseMeta();
            if (this.parseNotes()) {
                isBody = false;
            }
            if (!this.parseBodyAndFooter(isBody)) {
                isBody = false;
            }
        }
        this.parseBreakingHeader();
        this.parseMentions(input);
        this.parseRevert(input);
        this.cleanupCommit();
        return commit;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWl0UGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0NvbW1pdFBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxZQUFZLENBQUE7QUFDN0MsT0FBTyxFQUNMLFlBQVksRUFDWixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2hCLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsMkJBQTJCLEVBQzVCLE1BQU0sWUFBWSxDQUFBO0FBQ25CLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUE7QUFFN0M7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxjQUErQixFQUFFO0lBQ2xFLGtKQUFrSjtJQUNsSixPQUFPO1FBQ0wsS0FBSyxFQUFFLElBQUk7UUFDWCxNQUFNLEVBQUUsSUFBSTtRQUNaLE1BQU0sRUFBRSxJQUFJO1FBQ1osSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsSUFBSTtRQUNaLEtBQUssRUFBRSxFQUFFO1FBQ1QsUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsRUFBRTtRQUNkLEdBQUcsV0FBVztLQUNmLENBQUE7QUFDSCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sWUFBWTtJQUNOLE9BQU8sQ0FBZTtJQUN0QixPQUFPLENBQWU7SUFDL0IsS0FBSyxHQUFhLEVBQUUsQ0FBQTtJQUNwQixTQUFTLEdBQUcsQ0FBQyxDQUFBO0lBQ2IsTUFBTSxHQUFHLGtCQUFrQixFQUFFLENBQUE7SUFFckMsWUFBWSxVQUF5QixFQUFFO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixHQUFHLGNBQWM7WUFDakIsR0FBRyxPQUFPO1NBQ1gsQ0FBQTtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9DLENBQUM7SUFFTyxXQUFXO1FBQ2pCLE9BQU8sSUFB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
// EXTERNAL MODULE: external "stream"
var external_stream_ = __webpack_require__(2203);
;// CONCATENATED MODULE: ./node_modules/conventional-commits-parser/dist/stream.js


/**
 * Create async generator function to parse async iterable of raw commits.
 * @param options - CommitParser options.
 * @returns Async generator function to parse async iterable of raw commits.
 */
function parseCommits(options = {}) {
    const warnOption = options.warn;
    const warn = warnOption === true
        ? (err) => {
            throw err;
        }
        : warnOption
            ? (err) => warnOption(err.toString())
            : () => { };
    return async function* parse(rawCommits) {
        const parser = new CommitParser(options);
        let rawCommit;
        for await (rawCommit of rawCommits) {
            try {
                yield parser.parse(rawCommit.toString());
            }
            catch (err) {
                warn(err);
            }
        }
    };
}
/**
 * Create stream to parse commits.
 * @param options - CommitParser options.
 * @returns Stream of parsed commits.
 */
function parseCommitsStream(options = {}) {
    return external_stream_.Transform.from(parseCommits(options));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3N0cmVhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sUUFBUSxDQUFBO0FBRWxDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUVoRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLFlBQVksQ0FDMUIsVUFBK0IsRUFBRTtJQUVqQyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFBO0lBQy9CLE1BQU0sSUFBSSxHQUFHLFVBQVUsS0FBSyxJQUFJO1FBQzlCLENBQUMsQ0FBQyxDQUFDLEdBQVUsRUFBRSxFQUFFO1lBQ2YsTUFBTSxHQUFHLENBQUE7UUFDWCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLFVBQVU7WUFDVixDQUFDLENBQUMsQ0FBQyxHQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDNUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFjLENBQUMsQ0FBQTtJQUUxQixPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsS0FBSyxDQUMxQixVQUFzRTtRQUV0RSxNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN4QyxJQUFJLFNBQTBCLENBQUE7UUFFOUIsSUFBSSxLQUFLLEVBQUUsU0FBUyxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQztnQkFDSCxNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7WUFDMUMsQ0FBQztZQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLEdBQVksQ0FBQyxDQUFBO1lBQ3BCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQyxDQUFBO0FBQ0gsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsVUFBK0IsRUFBRTtJQUNsRSxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7QUFDOUMsQ0FBQyJ9
;// CONCATENATED MODULE: ./node_modules/conventional-commits-parser/dist/index.js



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxZQUFZLENBQUE7QUFDMUIsY0FBYyxtQkFBbUIsQ0FBQTtBQUNqQyxjQUFjLGFBQWEsQ0FBQSJ9

/***/ })

};

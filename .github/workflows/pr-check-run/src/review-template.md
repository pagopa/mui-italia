### 🚨 PR title not valid 🚨

The pr title doesn't meet the conventional commit specification.

**Rules to follow:**

It must be written in the form `type(scope): subject`, where type is for the type of the changes (feta, fix, chore, ecc...), scope is the code of the issue on jira (mui-123) and tge subject is a short description of what has been done in the pr.

⚠️ If you don't know which type to choose, follow the Rules of Thumb below.

<details>
<summary>Click here to see the Rules of Thumb 💡</summary>

**feat: A new feature for the user**
Rule of Thumb: Does this change introduce a new capability, screen, or piece of functionality that the end-user can directly see or interact with?

Here's why: This type is specifically for additions that deliver tangible value or new options to the user.

Examples: Add user login, implement search functionality, create an /about page, add a "dark mode" toggle.

<hr>

**fix: A bug fix for the user**
Rule of Thumb: Does this change correct an error, unexpected behavior, or crash that was negatively impacting the user experience?

Here's why: This type addresses problems in the existing codebase that prevent it from working as intended for the user.

Examples: Prevent form submission on invalid input, correct layout overlap on mobile, fix calculation error in totals.

<hr>

**style: Changes that affect style, not meaning (white-space, formatting, missing semi-colons, UI cosmetics)**
Rule of Thumb: Does this change only affect the visual presentation (UI cosmetics like colors, spacing, fonts) or code formatting (whitespace, indentation, punctuation) without altering the underlying logic, functionality, or structure?

Here's why: This type isolates purely aesthetic changes, whether in the code itself (formatting) or in the user interface (cosmetics), making it clear they don't alter how the application works.

Examples: Adjust padding/margins, update color scheme, change fonts, run Prettier/ESLint auto-format, fix indentation, remove trailing whitespace.

<hr>

**refactor: Code changes that neither fix a bug nor add a feature**
Rule of Thumb: Does this change restructure existing code for better readability, maintainability, or organization without changing its external behavior or adding features/fixing bugs?

Here's why: This type highlights internal improvements to the codebase's health and structure, distinct from user-facing changes.

Examples: Extract function to reduce duplication, rename variables for clarity, simplify complex conditional logic, convert class component to functional component.

<hr>

**perf: Code changes that improve performance**
Rule of Thumb: Does this change specifically aim to make the application faster, use less memory, or reduce resource consumption without changing features or fixing functional bugs?

Here's why: This type flags optimizations that enhance the user experience through better performance.

Examples: Optimize database query, implement lazy loading for images, reduce bundle size.

<hr>

**test: Adding missing tests or correcting existing tests**
Rule of Thumb: Does this change involve only adding, modifying, or correcting automated tests?

Here's why: This type isolates changes related to the test suite, ensuring code quality and regression prevention.

Examples: Add unit tests for a utility function, update integration tests for API changes, fix failing E2E test.

<hr>

**build: Changes affecting the build system or external dependencies**
Rule of Thumb: Does this change relate to how the project is built, packaged, or its dependencies (e.g., npm, webpack, Docker)?

Here's why: This type groups changes related to the development and deployment infrastructure rather than the application code itself.

Examples: Update npm packages, configure Webpack loaders, modify Dockerfile build steps, add/remove dependencies.

<hr>

**ci: Changes to CI configuration files and scripts**
Rule of Thumb: Does this change relate only to Continuous Integration configuration or scripts (e.g., GitHub Actions, GitLab CI)?

Here's why: This type specifically tracks modifications to the automated build, test, and deployment pipelines.

Examples: Update GitHub Actions workflow file, fix script in gitlab-ci.yml, change deployment triggers.

<hr>

**chore: Other changes that don't modify src or test files**
Rule of Thumb: Is this a maintenance task, configuration change, or other update that doesn't fit elsewhere and doesn't modify application source or test code?

Here's why: This is often a catch-all for necessary housekeeping tasks that don't fall into the more specific categories.

Examples: Update .gitignore, configure linters/formatters (the config files, not running them), add issue templates.

<hr>

**docs: Documentation only changes**
Rule of Thumb: Does this change only affect documentation files (e.g., README, contribution guides, code comments)?

Here's why: This type isolates changes purely related to explaining the project or code.

Examples: Update README.md, add JSDoc comments, create a CONTRIBUTING guide.

</details>

# 📦 Bundle Size Check Action

A custom GitHub Action to monitor your project's compiled bundle size and enforce size limits.

It calculates both **Raw** and **Gzip** sizes, prints the report in the job logs and in the
GitHub Actions Job Summary, and fails the check when the limits are exceeded.

## ✨ Features

- **Size Enforcement:** Fails the CI pipeline if the bundle exceeds your specified `max_raw_kb` or `max_gzip_kb` limits.
- **Gzip Calculation:** Accurately calculates the real network cost of your files using native Node.js `zlib` compression.
- **No PR noise:** The report is written to the job logs and to the Job Summary — no comments are created on the Pull Request, so nothing unresolvable is left in the PR history.
- **Minimal dependencies:** Built with native Node.js modules and `@actions/core` only. No `GITHUB_TOKEN` or write permissions required.

## 🚀 Usage

Add this step to your Continuous Integration workflow (e.g., `.github/workflows/code-review.yml`) **after** your build step.

```yaml
name: Code Review

on:
  pull_request:
    types: [opened, synchronize, reopened, ready_for_review]

permissions:
  contents: read # no write permission needed

jobs:
  js_code_review:
    runs-on: ubuntu-24.04
    steps:
      - name: Check-out code
        uses: actions/checkout@v5

      - name: Setup Node.js
        uses: actions/setup-node@v5
        with:
          node-version-file: '.node-version'
          cache: 'yarn'

      - name: Install dependencies
        run: yarn install --immutable

      - name: Build
        run: yarn build

      - name: Check Build Size
        uses: ./.github/workflows/actions/build-size
        with:
          path: 'dist'
          max_raw_kb: '800'
          max_gzip_kb: '330'
```

## ⚙️ Inputs

| Input | Description | Required | Default |
| --- | --- | --- | --- |
| `path` | The relative path to the directory containing your compiled files. | **Yes** | `dist` |
| `max_raw_kb` | The maximum allowed total size of the directory in Kilobytes (Raw/Uncompressed). | **Yes** | - |
| `max_gzip_kb` | The maximum allowed total size of the directory in Kilobytes (Gzipped). | **Yes** | - |

> ℹ️ The current limits are set with a ~10–15% margin over the actual bundle size.
> When adding significant new components, update `max_raw_kb` / `max_gzip_kb` in the workflow accordingly.

## 📊 Report Example

### Job logs

```text
Bundle Size Report
Path:  dist
Raw:   720.51 KB (max 800 KB)
Gzip:  292.72 KB (max 330 KB)
Files: 583
```

When the limits are exceeded, the action emits one `::error::` annotation per exceeded metric and
fails the step with `Bundle size limits exceeded.`

### Job Summary

#### 📦 Bundle Size Report

##### 📊 Totals

| Metric | Current Size | Maximum Limit |
| --- | --- | --- |
| **Raw** | 720.51 KB | 800 KB |
| **Gzip** | 292.72 KB | 330 KB |

✅ **SUCCESS:** The bundle size is within the allowed limits.

## 🛠️ Development & Maintenance

If you need to update the logic of this Action:

1. Make your changes in `src/index.js`.
2. Install the dependencies inside the action folder (`yarn install` / `npm install`).
3. Rebuild the bundle consumed by `action.yml` (`dist/index.js`).
4. Commit both the source and the generated `dist/` output.
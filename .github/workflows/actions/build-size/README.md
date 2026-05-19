# 📦 Bundle Size Check Action

A custom GitHub Action to monitor your project's compiled bundle size, enforce size limits, and post a detailed Markdown report directly to your Pull Requests. 

It calculates both **Raw** and **Gzip** sizes.

## ✨ Features

- **Size Enforcement:** Fails the CI pipeline if the bundle exceeds your specified `max_raw_kb` or `max_gzip_kb` limits.
- **Gzip Calculation:** Accurately calculates the real network cost of your files using native Node.js `zlib` compression.
- **PR Integration:** Posts a clean Markdown comment on the Pull Request.
- **Zero External Dependencies:** Built with native Node.js modules and standard GitHub Action core toolkits (`@actions/core`, `@actions/github`).

## 🚀 Usage

Add this step to your Continuous Integration workflow (e.g., `.github/workflows/code-review.yml`) **after** your build step.

```yaml
name: Code Review

on:
  pull_request:
    types: [opened, synchronize, reopened, ready_for_review]

permissions:
  contents: read
  pull-requests: write # ⚠️ Required for Octokit to post the PR comment

jobs:
  build-and-measure:
    runs-on: ubuntu-latest
    steps:
      - name: Check-out code
        uses: actions/checkout@v4

      - name: Setup Node & Build
        run: |
          yarn install
          yarn build

      - name: Check Bundle Size & Post Comment
        uses: ./.github/actions/build-size
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          path: 'dist'
          max_raw_kb: '500'
          max_gzip_kb: '150'

```

## ⚙️ Inputs

| Input | Description | Required | Default |
| --- | --- | --- | --- |
| `github_token` | The `GITHUB_TOKEN` provided by Actions, used to interact with the Octokit API (fetching PR files and posting comments). | **Yes** | - |
| `path` | The relative path to the directory containing your compiled files. | No | `dist` |
| `max_raw_kb` | The maximum allowed total size of the directory in Kilobytes (Raw/Uncompressed). | **Yes** | - |
| `max_gzip_kb` | The maximum allowed total size of the directory in Kilobytes (Gzipped). | **Yes** | - |

## 📊 Report Example

When the action runs, it will output a summary in the GitHub Actions UI and post a comment on the PR looking like this:

### 📦 Bundle Size Report

#### 📊 Totals

| Metric | Current Size | Maximum Limit |
| --- | --- | --- |
| **Raw** | 340.50 KB | 500 KB |
| **Gzip** | 95.20 KB | 150 KB |

✅ **SUCCESS:** The bundle size is within the allowed limits.

## 🛠️ Development & Maintenance

If you need to update the logic of this Action:

1. Make your changes in `index.js`.
2. Since this action relies on `@actions/core` and `@actions/github`, make sure dependencies are installed (`npm install` inside the action folder).
3. Commit the code.
# Release Manager Action

This GitHub Action automates the process of creating releases, managing version tags, and generating a changelog based on the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.

It's designed to streamline your release workflow, from version bumping to creating pull requests for final merges.

## Features

  * **Automatic Versioning**: Calculates the next version tag (`major`, `minor`, or `patch`) based on your commit history.
  * **Release Branching**: Creates a dedicated `release/` or `hotfix/` branch based on the specified release type.
  * **Release Candidates & Finals**: Supports creating both pre-releases (`-RC`) and final releases.
  * **Changelog Generation**: Automatically updates your `CHANGELOG.md` file with commit details for the new version.
  * **PR Automation**: Opens a pull request to your main branch for final release merges.

## Usage

This action is typically used in a workflow that triggers manually or on a specific branch push. It requires `write` permissions to create branches, tags, and releases.

### Inputs

| Parameter       | Description                                                                                             | Required |
| :-------------- | :------------------------------------------------------------------------------------------------------ | :------- |
| `token`         | A GitHub token with `write` permissions to create releases, tags, and branches.                         | Yes      |
| `ref`           | The name of the branch to create the release from (e.g., `develop`).                                    | Yes      |
| `type`          | The type of release: `release` for a standard new feature release or `hotfix` for a bug fix.            | Yes      |
| `final_release` | Set to `true` for a final release, or `false` for a release candidate.                                  | No       |
| `main_branch`   | The name of the main branch to open a pull request against (e.g., `main`).                              | Yes      |

### Outputs

| Parameter       | Description                                              |
| :-------------- | :------------------------------------------------------- |
| `release_branch`| The name of the newly created release or hotfix branch.  |
| `release_id`    | The id of the newly created release.  |

## Workflow Example

Here's a sample workflow using `workflow_dispatch` to manually trigger the action.

```yaml
name: Release Workflow

on:
  workflow_dispatch:
    inputs:
      ref_branch:
        description: 'Branch to create release from'
        required: true
        default: 'develop'
      release_type:
        description: 'Release type (release or hotfix)'
        required: true
        type: choice
        options:
          - release
          - hotfix
      is_final:
        description: 'Is this a final release?'
        required: true
        type: boolean
        default: false

jobs:
  create_release:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Run Release Manager Action
        id: release
        uses: ./  # Use local path for the action
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          ref: ${{inputs.ref}}
          type: ${{inputs.type}}
          final_release: ${{inputs.is_final}}
          main_branch: 'main'

      - name: Echo Release Branch Name
        run: echo "Release branch created: ${{ steps.release.outputs.release_branch }}"
```
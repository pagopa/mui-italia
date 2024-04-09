# MUI Italia

[Material-UI](https://mui.com/core/) theme inspired by [Bootstrap Italia](https://italia.github.io/bootstrap-italia/).

> [!important]
> The components of this package are designed for use within an application. To build a landing page, use the [pagopa-editorial-components](https://github.com/pagopa/pagopa-editorial-components) package, which is based on this one.

## Installation
To add this package to your `package.json` run in your terminal:
```console
// with npm
$ npm install @pagopa/mui-italia @mui/material @emotion/react @emotion/styled
// with yarn
$ yarn add @pagopa/mui-italia @mui/material @emotion/react @emotion/styled
```


## Usage

```jsx
/*
** MainApp.js
*/
[...]
/* MUI Core Components */
import { Button } from '@mui/material';
import { ThemeProvider } from "@mui/material";

/* MUI Italia theme */
import { theme } from "@pagopa/mui-italia";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button variant="contained">Hello World</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;

```

Then, use Material-UI as usual. The theme is just a "wrapper" which overrides the default params like: colors, font-family, padding size, etc etc.
Try to avoid custom style, try to use all the standard library + this theme.

This package contain also a specific "color" named "Italia", with a "blu italia palette". 
To use this _color_ in your component use:

```jsx
[...]
import { italia } from "@pagopa/mui-italia";

<Box
  sx={{
    width: 100,
    height: 100,
    backgroundColor: italia[200],
    borderRadius: theme.spacing(3),
  }}
></Box>
```

### CLI Commands
Here's an explanation of the commands you can find in the `package.json`:
* `prebuild`: Executed automtically before the `build` command. It removes the `dist` folder to get a blank state.
* `build`: It compiles the entire project using the relative `tsconfig.json` file. It also resolves all the alias contained in the configuration file.
* `lint`: It checks the entire project to detect syntax errors or inefficient code, using the configuration set in the `eslintrc.js` file.
* `storybook`: It launches a local Storybook application using 6006 port.
* `build-storybook`: It outputs a static Storybook in the `storybook-static` folder
* `chromatic`: It checks all the possible differences between snapshots using the Chromatic service. It also publishes an updated version of the Storybook-Chromatic library (see address below). This command is just available to the CI/CD environment because you have to specify the project token to run the command successfully. To get the token value in Chromatic: `Manage → Configure → Setup Chromatic`

## Storybook
If you need to view all the styled and custom components available in this package, check out the (ongoing) [MUI Italia Storybook](https://main--633c31eff9fe385398ada426.chromatic.com/) (managed with Chromatic).


## How to contribute
All components in this package should be generic enough to be used in different applications and use cases. In this sense, if you have any doubts or aren't sure, please ask your fellow designer.
With that said, you basically have two options starting from the design project:

### Build the generic component (easy abstraction)
1. Take the time to make a proper analysis of the component's possible props.
2. Ask your fellow developers/designers for comments or criticism
3. Build it, according to the provided guidelines (see below)
4. Test all its possible combinations, using Storybook or similar playground 

### Provide a sample of how to compose the component (hard abstraction)
1. Compose the component using the available components provided by the library
2. Add a specific story to the Storybook, under the `Composition` section
3. See the `Sidenav` as an example of this approach

Either way, you must follow these guidelines:

#### Visual consistency
- If possible, avoid magic numbers.
- Use the provided visual attributes (color, spacing, etc…), using the corresponding `theme` file
- If you have to use some values not provided by the `theme` object:
  - Ask to your fellow designer for clarification
  - If necessary, extend it.

#### Version control
- Create a new branch using the relative Jira ticket as prefix, followed by a very concise description of the task. E.g: `JIRA-201-add-new-color-values`
- Once you have completed your task, open a PR with a descriptive title preceded by the Jira ticket number. E.g: _[JIRA-201] Add the new color values for the new [A] component_
- Please follow the PR template. Don't leave the description blank

#### Storybook/Chromatic integration
- New components must have relative Storybook stories.
- If your contribution involves updates to existing components, ensure that Storybook stories are updated to reflect the changes.
- The components are responsive by default. To make sure everything is okay, please configure the single story using the `breakpointsChromaticValues` array in the configuration to make sure Chromatic generates all the required snapshots.
- To access Chromatic with full privileges, you need to be part of the PagoPA `mui-italia-contributors` team. Please contact your (technical) project manager for more information.

#### Accessibility
- Ensure that the new components are accessible to all users. To avoid reinventing the wheel, take advantage of the MUI base components.
- Try to perform the actions using only the keyboard.

#### Cross-Browser Compatibility
- Test your changes on multiple browsers and ensure they work consistently.

When you feel ready, you can [open a pull request](https://github.com/pagopa/mui-italia/pulls).

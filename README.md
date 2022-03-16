# MUI Italia

[Material-UI](https://mui.com/core/) theme inspired by [Bootstrap Italia](https://italia.github.io/bootstrap-italia/).

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

## Storybook
If you need to view all the styled and custom components available in this package, check out the (ongoing) [MUI Italia Storybook](https://mui-italia.vercel.app/).


### Contributions
Any critiques and suggestions are welcome. If you feel pretty confident, you can [open a Pull Request](https://github.com/pagopa/mui-italia/pulls)

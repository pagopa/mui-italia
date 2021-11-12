# MUI Italia

This is a Material-UI theme inspired by BootstrapItalia.

### How use it in your react app

(Main app js)

```
[...]
import theme from "@pagopa/mui-italia/theme";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    
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

```
[...]
import italia from "@pagopa/mui-italia/colors/italia";

<Button variant="contained" sx={{ backgroundColor: italia[700] }}>
        Example button
</Button>

```


#### To-do

- Text responsiveness
- Customize more aspects
- Write some patterns
- Write some specific use-case-components

import React from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider } from "@mui/material";
/* MUI Italia Theme */
import { theme, darkTheme } from "@theme";
/* Storybook Theme */
import { sbTheme } from "./theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      /* color: /(background|color)$/i, */
      date: /Date$/,
    },
  },
  docs: {
    sbTheme,
  },
};

export const decorators = [
  (Story) => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const currentTheme = React.useMemo(
      () => (prefersDarkMode ? darkTheme : theme),
      [prefersDarkMode]
    );

    return (
      <ThemeProvider theme={currentTheme}>
        <Story />
      </ThemeProvider>
    );
  },
];

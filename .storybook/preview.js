import React from "react";

import { ThemeProvider } from "@mui/material";
/* MUI Italia Theme */
import { theme } from "@theme/index";
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
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

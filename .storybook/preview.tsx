import React from "react";
import { DecoratorFn } from "@storybook/react";

/* Storybook Theme */
import { sbTheme } from "./theme";

import { ThemeProvider, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

/* MUI Italia Theme */
import { theme as lightTheme, darkTheme } from "@theme";

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

interface StoryContainerProps {
  children: React.ReactNode;
}

const StoryContainer = ({ children }: StoryContainerProps) => (
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      width: "100vw",
      height: "100vh",
      overflow: "auto",
      padding: "1rem",
      backgroundColor: "background.paper",
    }}
    data-chromatic="ignore"
  >
    {children}
  </Box>
);

export const withTheme: DecoratorFn = (Story, context) => {
  // More info about this decorator
  // https://storybook.js.org/blog/how-to-add-a-theme-switcher-to-storybook/

  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === "light" ? lightTheme : darkTheme;

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const currentTheme = React.useMemo(
    () => (prefersDarkMode ? darkTheme : lightTheme),
    [prefersDarkMode]
  );

  switch (theme) {
    case "system": {
      return (
        <ThemeProvider theme={currentTheme}>
          <StoryContainer>
            <Story />
          </StoryContainer>
        </ThemeProvider>
      );
    }

    case "dark": {
      return (
        <ThemeProvider theme={darkTheme}>
          <StoryContainer>
            <Story />
          </StoryContainer>
        </ThemeProvider>
      );
    }

    default: {
      return (
        <ThemeProvider theme={storyTheme}>
          <StoryContainer>
            <Story />
          </StoryContainer>
        </ThemeProvider>
      );
    }
  }
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      // The icon for the toolbar item
      icon: "circlehollow",
      // Array of options
      items: [
        { value: "system", icon: "cog", title: "System" },
        { value: "light", icon: "circlehollow", title: "Light" },
        { value: "dark", icon: "circle", title: "Dark" },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

export const decorators = [withTheme];

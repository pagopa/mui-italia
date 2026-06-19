import React from 'react';
import { Decorator } from '@storybook/react-vite';

/* Storybook Theme */
import { sbTheme } from './theme';

import { ThemeProvider, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

/* MUI Italia Theme */
import { theme as lightTheme, darkTheme, themeNext } from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
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
  <Box sx={{ backgroundColor: 'background.paper', padding: '1rem' }} data-chromatic="ignore">
    {children}
  </Box>
);

export const withTheme: Decorator = (Story, context) => {
  // More info about this decorator
  // https://storybook.js.org/blog/how-to-add-a-theme-switcher-to-storybook/

  const selectedTheme = context.parameters.theme || context.globals.theme;

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const currentTheme = React.useMemo(
    () => (prefersDarkMode ? darkTheme : lightTheme),
    [prefersDarkMode]
  );

  switch (selectedTheme) {
    case 'system': {
      return (
        <ThemeProvider theme={currentTheme}>
          <StoryContainer>
            <Story />
          </StoryContainer>
        </ThemeProvider>
      );
    }

    case 'dark': {
      return (
        <ThemeProvider theme={darkTheme}>
          <StoryContainer>
            <Story />
          </StoryContainer>
        </ThemeProvider>
      );
    }
    case 'next': {
      return (
        <ThemeProvider theme={themeNext}>
          <StoryContainer>
            <Story />
          </StoryContainer>
        </ThemeProvider>
      );
    }

    case 'light':
    default: {
      return (
        <ThemeProvider theme={lightTheme}>
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
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      title: 'Theme',
      // Array of options
      items: [
        { value: 'system', icon: 'cog', title: 'System' },
        { value: 'light', icon: 'circlehollow', title: 'Light' },
        { value: 'dark', icon: 'circle', title: 'Dark' },
        { value: 'next', icon: 'paintbrush', title: 'Theme Next' },
      ],
    },
  },
};

export const decorators = [withTheme];
export const tags = ['autodocs'];

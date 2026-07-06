import React from 'react';
import { Decorator, Preview } from '@storybook/react-vite';

/* Storybook Theme */
import { sbTheme } from './theme';

import { ThemeProvider, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

/* MUI Italia Theme */
import { theme as lightTheme, darkTheme, theme } from '../src/theme';

/* MUI Italia Theme-Next */
import { themeNext } from '../src/theme/themeNext';

const backgrounds = {
  default: {
    name: 'default',
    value: theme.colors.blue[100],
  },
} as const;

type BackgroundKey = keyof typeof backgrounds;

const StoryContainer = ({
  children,
  backgroundKey,
}: {
  children: React.ReactNode;
  backgroundKey: BackgroundKey;
}) => (
  <Box
    sx={{
      backgroundColor: backgrounds[backgroundKey].value,
      p: {
        xs: 3,
        md: 5,
      },
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
    }}
    data-chromatic="ignore"
  >
    {children}
  </Box>
);

const withTheme: Decorator = (Story, context) => {
  // More info about this decorator
  // https://storybook.js.org/blog/how-to-add-a-theme-switcher-to-storybook/

  const selectedTheme = context.parameters.theme || context.globals.theme;

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const currentTheme = React.useMemo(
    () => (prefersDarkMode ? darkTheme : lightTheme),
    [prefersDarkMode]
  );

  const selectedBackground =
    context.parameters.backgroundKey ?? context.globals.backgrounds?.value ?? 'neutral';

  switch (selectedTheme) {
    case 'system': {
      return (
        <ThemeProvider theme={currentTheme}>
          <StoryContainer backgroundKey={selectedBackground}>
            <Story />
          </StoryContainer>
        </ThemeProvider>
      );
    }

    case 'dark': {
      return (
        <ThemeProvider theme={darkTheme}>
          <StoryContainer backgroundKey={selectedBackground}>
            <Story />
          </StoryContainer>
        </ThemeProvider>
      );
    }
    case 'next': {
      return (
        <ThemeProvider theme={themeNext}>
          <StoryContainer backgroundKey={selectedBackground}>
            <Story />
          </StoryContainer>
        </ThemeProvider>
      );
    }

    case 'light':
    default: {
      return (
        <ThemeProvider theme={lightTheme}>
          <StoryContainer backgroundKey={selectedBackground}>
            <Story />
          </StoryContainer>
        </ThemeProvider>
      );
    }
  }
};

const preview: Preview = {
  parameters: {
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
      theme: sbTheme,
    },
    backgrounds: {
      options: backgrounds,
    },
    options: {
      storySort: {
        order: ['Foundation', ['Colors', 'Breakpoints'], 'Components', 'MUI Components'],
      },
    },
  },

  globalTypes: {
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
  },

  decorators: [withTheme],

  tags: ['autodocs'],
};

export default preview;

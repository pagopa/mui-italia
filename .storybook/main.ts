import type { StorybookConfig } from '@storybook/react-vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { mergeConfig } from 'vite';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  /*features: {
    core: {
      builder: 'webpack5',
    },
    emotionAlias: false,
  },*/

  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],

  typescript: {
    check: false,
    // checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        return prop.parent
          ? /@mui/.test(prop.parent.fileName) || !/node_modules/.test(prop.parent.fileName)
          : true;
      },
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
      },
    },
  },

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  core: {
    builder: '@storybook/builder-vite',
  },

  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
      resolve: {
        alias: {
         // This is to resolve aliases into the mdx files
        '@theme': path.resolve(__dirname, '../src/theme'),
        }
      }
    });
  },

  docs: {
    autodocs: true,
  },
};

export default config;

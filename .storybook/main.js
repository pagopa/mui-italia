const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  features: {
    core: {
      builder: "webpack5",
    },
    storyStoreV7: true,
    emotionAlias: false,
  },

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],

  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        return prop.parent
          ? /@mui/.test(prop.parent.fileName) ||
              !/node_modules/.test(prop.parent.fileName)
          : true;
      },
    },
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  webpackFinal: async (config) => {
    if (config.resolve.plugins !== undefined) {
      config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin({})];
    }

    return config;
  },

  docs: {
    autodocs: true,
  },
};

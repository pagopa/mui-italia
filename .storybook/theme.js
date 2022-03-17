import { create } from "@storybook/theming";

export const sbTheme = create({
  base: "light",
  brandTitle: "MUI Italia",
  brandUrl: "https://github.com/pagopa/mui-italia",

  // Palette
  colorPrimary: "#00C5CA",
  colorSecondary: "#000000",

  // Typography
  fontBase: '"Inter", sans-serif',

  // UI
  appBg: "#FFFFFF",
  appContentBg: "#FFFFFF",
  appBorderColor: "#E3E7EB",
  appBorderRadius: 0,

  // Toolbar
  barTextColor: "#333333",
  barSelectedColor: "#000000",
});

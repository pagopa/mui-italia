import { create } from "@storybook/theming";

export const theme = create({
  base: "light",
  brandTitle: "MUI Italia",
  brandUrl: "https://github.com/pagopa/mui-italia",

  // Palette
  colorPrimary: "#00C5CA",
  colorSecondary: "#0066CC",

  // Typography
  fontBase: '"Inter", sans-serif',

  // UI
  appBg: "#E6E9F2",
  appContentBg: "#FFF",
  appBorderColor: "#E3E7EB",
  appBorderRadius: 0,
});

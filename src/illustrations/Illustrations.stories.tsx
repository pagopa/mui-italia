import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Box, Typography } from "@mui/material";

import {
  IllustrationCompleted,
  IllustrationError,
  IllustrationUploadFile,
  IllustrationSms,
} from "./";

export default {
  title: "Assets/Illustrations",
  parameters: { controls: { sort: "size" } },
  backgrounds: [{ name: "dark background", value: "#000", default: true }],
} as ComponentMeta<typeof Box>;

export const Overview: ComponentStory<typeof Box> = () => (
  <Box
    sx={{
      width: 450,
      backgroundColor: "background.paper",
      borderRadius: 2,
    }}
  >
    <IllustrationCompleted />
    <IllustrationError />
    <IllustrationUploadFile />
    <IllustrationSms />
  </Box>
);
Overview.parameters = {
  controls: { hideNoControlsWarning: true },
};
Overview.decorators = [
  (Story) => (
    <div style={{ padding: "1em", backgroundColor: "#F5F5F5" }}>
      <Story />
    </div>
  ),
];

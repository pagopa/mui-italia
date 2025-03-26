import { StoryObj, Meta } from "@storybook/react";

import { IconButton } from "@mui/material";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

export default {
  title: "MUI Components/Inputs/Icon Button",
  component: IconButton,
  args: {
    size: "medium",
    color: "default",
    disabled: false,
  },
  argTypes: {
    color: {
      options: ["primary", "default"],
      control: { type: "radio" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "medium" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
  },
} as Meta<typeof IconButton>;

export const Default: StoryObj<typeof IconButton> = {
  args: {
    "aria-label": "Scarica",
    children: <DownloadRoundedIcon />,
  },
};

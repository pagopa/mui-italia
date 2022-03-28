import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IconButton } from "@mui/material";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

export default {
  title: "MUI Components/Inputs/Icon Button",
  component: IconButton,
  args: {
    size: "medium",
    color: undefined,
    disabled: false,
  },
  argTypes: {
    color: {
      options: ["primary", undefined],
      control: { type: "radio" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: undefined },
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
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton aria-label="Scarica" {...args}>
    <DownloadRoundedIcon />
  </IconButton>
);

export const Default = Template.bind({});

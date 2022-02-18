import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "MUI Components/Inputs/Button",
  component: Button,
  args: {
    variant: "contained",
    children: "Press me",
    fullWidth: false,
    disabled: false,
  },
  argTypes: {
    size: {
      defaultValue: "medium",
      options: ["small", "medium", "large"],
      control: { type: "radio" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "medium" },
      },
    },
    fullWidth: {
      defaultValue: false,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    /* Disabled controls */
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: "radio" },
      defaultValue: "contained",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "contained" },
      },
    },
    color: {
      table: {
        disable: true,
      },
    },
  },
  parameters: { controls: { sort: "size" } },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "contained",
  size: "medium",
};

export const WithEndIcon = Template.bind({});
WithEndIcon.storyName = "Default + End Icon";
WithEndIcon.args = {
  ...Default.args,
  endIcon: <ArrowForwardRoundedIcon />,
};

export const WithStartIcon = Template.bind({});
WithStartIcon.storyName = "Default + Start Icon";
WithStartIcon.args = {
  ...Default.args,
  startIcon: <ArrowBackRoundedIcon />,
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "outlined",
  color: "error",
  size: "medium",
  children: "Delete",
};
Danger.argTypes = {
  variant: { table: { disable: true } },
};

export const DangerWithEndIcon = Template.bind({});
DangerWithEndIcon.storyName = "Danger + End Icon";
DangerWithEndIcon.args = {
  ...Danger.args,
  endIcon: <RemoveCircleOutlineRoundedIcon />,
};
DangerWithEndIcon.argTypes = {
  ...Danger.argTypes,
};

export const DangerWithStartIcon = Template.bind({});
DangerWithStartIcon.storyName = "Danger + Start Icon";
DangerWithStartIcon.args = {
  ...Danger.args,
  startIcon: <RemoveCircleOutlineRoundedIcon />,
};
DangerWithStartIcon.argTypes = {
  ...Danger.argTypes,
};

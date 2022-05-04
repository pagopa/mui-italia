import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonNaked } from "@components/ButtonNaked";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";

const disableControl = {
  table: {
    disable: true,
  },
};

export default {
  title: "Components/ButtonNaked",
  component: ButtonNaked,
  args: {
    children: "Discover more",
    disabled: false,
  },
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "medium" },
      },
    },
    color: {
      options: ["text", "primary"],
      control: { type: "radio" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "text" },
      },
    },
    disabled: {
      options: [true, false],
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    variant: { ...disableControl },
    disableElevation: { ...disableControl },
    disableRipple: { ...disableControl },
    disableTouchRipple: { ...disableControl },
    TouchRippleProps: { ...disableControl },
    touchRippleRef: { ...disableControl },
    FocusRipple: { ...disableControl },
    centerRipple: { ...disableControl },
  },
} as ComponentMeta<typeof ButtonNaked>;

const Template: ComponentStory<typeof ButtonNaked> = (args) => (
  <ButtonNaked {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  color: "text",
};

export const WithEndIcon = Template.bind({});
WithEndIcon.storyName = "Default + End Icon";
WithEndIcon.args = {
  ...Default.args,
  endIcon: <LogoutRoundedIcon />,
};

export const WithStartIcon = Template.bind({});
WithStartIcon.storyName = "Default + Start Icon";
WithStartIcon.args = {
  ...Default.args,
  children: "Download file",
  startIcon: <AttachFileRoundedIcon />,
};

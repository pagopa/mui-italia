import { ComponentStory, ComponentMeta } from "@storybook/react";

import { theme } from "@theme";

import { Badge } from "@mui/material";

/* Icons */
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

export default {
  title: "MUI Components/Data Display/Badge",
  component: Badge,
  args: {
    badgeContent: 10,
    variant: "standard",
    color: "primary",
  },
  argTypes: {
    color: {
      options: ["default", "primary", "warning", "info", "error", "success"],
      control: { type: "radio" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    variant: {
      options: ["dot", "standard", "sidenav"],
      control: { type: "radio" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "standard" },
      },
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>
    <EmailRoundedIcon sx={{ color: theme.palette.text.primary }} />
  </Badge>
);

export const Standard = Template.bind({});
Standard.args = {
  variant: "standard",
  color: "primary",
};

export const Dot = Template.bind({});
Dot.args = {
  variant: "dot",
  color: "primary",
};

export const Sidenav = Template.bind({});
Sidenav.args = {
  variant: "sidenav",
  color: "primary",
  children: <></>,
};

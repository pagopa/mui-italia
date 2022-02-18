import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Chip, Avatar } from "@mui/material";

import FaceRoundedIcon from "@mui/icons-material/FaceRounded";

export default {
  title: "MUI Components/Data Display/Chips",
  component: Chip,
  argTypes: {
    color: {
      defaultValue: "default",
      options: [
        "default",
        "primary",
        "secondary",
        "warning",
        "info",
        "error",
        "success",
      ],
      control: { type: "radio" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
      onDelete: { action: "Deleted" },
    },
    variant: {
      defaultValue: "filled",
      options: ["filled", "outlined"],
      control: { type: "radio" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "filled" },
      },
    },
    size: {
      defaultValue: "medium",
      options: ["small", "medium"],
      control: { type: "radio" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "medium" },
      },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

const handleDelete = () => {
  console.info("You clicked the delete icon.");
};

export const Default = Template.bind({});
Default.args = {
  label: "Consegnata",
};

export const Deletable = Template.bind({});
Deletable.args = {
  ...Default.args,
  onDelete: handleDelete,
};
Deletable.argTypes = {
  onDelete: {
    table: {
      disable: true,
    },
  },
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  ...Default.args,
  avatar: <Avatar>M</Avatar>,
};
WithAvatar.argTypes = {
  avatar: {
    table: {
      disable: true,
    },
  },
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  icon: <FaceRoundedIcon />,
};
WithIcon.argTypes = {
  icon: {
    table: {
      disable: true,
    },
  },
};

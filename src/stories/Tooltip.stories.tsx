import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tooltip, Chip } from "@mui/material";

export default {
  title: "MUI Components/Data Display/Tooltip",
  component: Tooltip,
  argTypes: {
    placement: {
      defaultValue: "bottom",
      options: ["top", "right", "bottom", "left"],
      control: { type: "radio" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "bottom" },
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);

const tooltipContent = "L’invio della notifica è in corso";
const chip: JSX.Element = <Chip label="In inoltro" />;

export const Default = Template.bind({});
Default.args = {
  children: chip,
  title: tooltipContent,
};

export const WithArrow = Template.bind({});
WithArrow.args = {
  ...Default.args,
  arrow: true,
  children: chip,
};

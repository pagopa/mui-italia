import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LogoIOApp } from "./LogoIOApp";

export default {
  title: "Assets/LogoIOApp",
  component: LogoIOApp,
  args: {
    color: "dark",
  },
} as ComponentMeta<typeof LogoIOApp>;

const Template: ComponentStory<typeof LogoIOApp> = (args) => (
  <LogoIOApp {...args} />
);

export const Default = Template.bind({});
Default.args = {
  color: "default",
};

export const Negative = Template.bind({});
Negative.args = {
  color: "light",
};
Negative.parameters = {
  theme: "dark",
};

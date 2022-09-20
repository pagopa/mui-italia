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
/* Default.decorators = [
  (Story) => (
    <div
      style={{
        position: "fixed",
        inset: "0",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Story />
    </div>
  ),
]; */

export const Negative = Template.bind({});
Negative.args = {
  color: "light",
};
Negative.decorators = [
  (Story) => (
    <div
      style={{
        backgroundColor: "#333",
      }}
    >
      <Story />
    </div>
  ),
];

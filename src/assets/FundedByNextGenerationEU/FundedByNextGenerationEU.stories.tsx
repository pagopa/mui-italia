import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FundedByNextGenerationEU } from "./FundedByNextGenerationEU";

export default {
  title: "Assets/NextGenerationEU",
  component: FundedByNextGenerationEU,
  args: {
    variant: "outline",
    color: "dark",
  },
} as ComponentMeta<typeof FundedByNextGenerationEU>;

const Template: ComponentStory<typeof FundedByNextGenerationEU> = (args) => (
  <FundedByNextGenerationEU {...args} />
);

export const Default = Template.bind({});
Default.args = {
  variant: "outline",
  color: "dark",
};
Default.decorators = [
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
];

export const Negative = Template.bind({});
Negative.args = {
  variant: "filled",
  color: "light",
};
Negative.decorators = [
  (Story) => (
    <div
      style={{
        position: "fixed",
        inset: "0",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#333",
      }}
    >
      <Story />
    </div>
  ),
];

export const Color = Template.bind({});
Color.args = {
  variant: "color",
  color: "dark",
};
Color.decorators = [
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
];

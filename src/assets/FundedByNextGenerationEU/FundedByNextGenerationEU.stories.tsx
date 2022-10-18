import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FundedByNextGenerationEU } from "./FundedByNextGenerationEU";

export default {
  title: "Assets/NextGenerationEU",
  component: FundedByNextGenerationEU,
  args: {
    variant: "outline",
    color: "dark",
  },
  parameters: {
    layout: "centered",
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

export const Negative = Template.bind({});
Negative.args = {
  variant: "filled",
  color: "light",
};
Negative.parameters = {
  theme: "dark",
};

export const Color = Template.bind({});
Color.args = {
  variant: "color",
  color: "dark",
};

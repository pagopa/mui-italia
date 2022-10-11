import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LogoPagoPACompany } from "./LogoPagoPACompany";

export default {
  title: "Assets/PagoPA (Company)",
  component: LogoPagoPACompany,
  args: {
    color: "dark",
    variant: "default",
  },
} as ComponentMeta<typeof LogoPagoPACompany>;

const Template: ComponentStory<typeof LogoPagoPACompany> = (args) => (
  <LogoPagoPACompany {...args} />
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

export const Flat = Template.bind({});
Flat.args = {
  variant: "flat",
};

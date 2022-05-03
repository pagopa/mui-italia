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

export const Flat = Template.bind({});
Flat.args = {
  variant: "flat",
};
Flat.decorators = [
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

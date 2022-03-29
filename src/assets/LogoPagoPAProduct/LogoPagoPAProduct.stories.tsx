import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LogoPagoPAProduct } from "./LogoPagoPAProduct";

export default {
  title: "Assets/pagoPA (Product)",
  component: LogoPagoPAProduct,
  args: {
    color: "dark",
  },
} as ComponentMeta<typeof LogoPagoPAProduct>;

const Template: ComponentStory<typeof LogoPagoPAProduct> = (args) => (
  <LogoPagoPAProduct {...args} />
);

export const Default = Template.bind({});
Default.args = {
  color: "blue",
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

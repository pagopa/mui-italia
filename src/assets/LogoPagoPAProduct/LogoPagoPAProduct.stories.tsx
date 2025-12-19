import { StoryFn, Meta } from '@storybook/react';

import { LogoPagoPAProduct } from './LogoPagoPAProduct';

export default {
  title: 'Assets/pagoPA (Product)',
  component: LogoPagoPAProduct,
  args: {
    color: 'dark',
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof LogoPagoPAProduct>;

const Template: StoryFn<typeof LogoPagoPAProduct> = (args) => <LogoPagoPAProduct {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'default',
};

export const Negative = Template.bind({});
Negative.args = {
  color: 'light',
};
Negative.parameters = {
  theme: 'dark',
};

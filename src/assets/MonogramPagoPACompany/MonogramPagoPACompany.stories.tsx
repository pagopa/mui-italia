import { StoryFn, Meta } from '@storybook/react';

import { MonogramPagoPACompany } from './MonogramPagoPACompany';

export default {
  title: 'Assets/PagoPA (Company) Monogram',
  component: MonogramPagoPACompany,
  args: {
    color: 'primary',
    shape: 'none',
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof MonogramPagoPACompany>;

const Template: StoryFn<typeof MonogramPagoPACompany> = (args) => (
  <MonogramPagoPACompany {...args} />
);

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
};

export const Circle = Template.bind({});
Circle.args = {
  shape: 'circle',
};
Circle.parameters = {
  theme: 'dark',
};

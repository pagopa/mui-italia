import { StoryFn, Meta } from '@storybook/react';

import { LogoIOApp } from './LogoIOApp';

export default {
  title: 'Assets/LogoIOApp',
  component: LogoIOApp,
  args: {
    color: 'dark',
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof LogoIOApp>;

const Template: StoryFn<typeof LogoIOApp> = (args) => <LogoIOApp {...args} />;

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

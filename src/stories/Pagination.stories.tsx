import { StoryFn, Meta } from '@storybook/react';

import { Pagination } from '@mui/material';

export default {
  title: 'MUI Components/Navigation/Pagination',
  argTypes: {
    color: {
      options: ['standard', 'primary', 'secondary'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'standard' },
      },
    },
  },
  component: Pagination,
  parameters: { controls: { sort: 'size' } },
} as Meta<typeof Pagination>;

const Template: StoryFn<typeof Pagination> = (args) => (
  <Pagination variant="text" count={10} {...args} />
);

export const Default = Template.bind({});

import { StoryFn, Meta } from '@storybook/react-vite';

import { Paper } from '@mui/material';

export default {
  title: 'MUI Components/Navigation/Paper',
  component: Paper,
  argTypes: {
    borderRadius: {
      options: ['radius-8', 'radius-16', 'radius-24'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'radius-8' },
      },
    },
  },
} as Meta<typeof Paper>;

const Template: StoryFn<typeof Paper> = () => <Paper variant="outlined" square={false} />;

export const Default = Template.bind({});

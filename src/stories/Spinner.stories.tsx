import { StoryFn, Meta } from '@storybook/react-vite';

import { CircularProgress } from '@mui/material';

export default {
  title: 'MUI Components/Spinner',
  component: CircularProgress,
  parameters: {
    controls: {
      disabled: true,
      hideNoControlsWarning: true,
    },
    docs: {
      controls: {
        disabled: true,
      },
    },
  },
} as Meta<typeof CircularProgress>;

const Template: StoryFn<typeof CircularProgress> = (args) => <CircularProgress {...args} />;

export const Default = Template.bind({});
Default.args = { color: 'primary' };

import { StoryFn, Meta } from '@storybook/react-vite';
import { CircularProgress } from '@mui/material';

export default {
  title: 'MUI Components/Spinner',
  component: CircularProgress,
  args: {
    color: 'primary',
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
  },
} as Meta<typeof CircularProgress>;

const Template: StoryFn<typeof CircularProgress> = (args) => <CircularProgress {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
};
Default.decorators = [
  (Story) => (
    <div style={{ padding: '1em', backgroundColor: '#CED8F9' }}>
      <Story />
    </div>
  ),
];

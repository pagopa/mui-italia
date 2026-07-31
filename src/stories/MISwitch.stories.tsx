import { Stack } from '@mui/material';
import { MISwitch } from '@components/MISwitch';
import { Meta, StoryObj } from '@storybook/react-vite';

type MISwitchStoryArgs = React.ComponentProps<typeof MISwitch>;

const meta: Meta<MISwitchStoryArgs> = {
  title: 'Components/MISwitch',
  component: MISwitch,
};

export default meta;

type Story = StoryObj<MISwitchStoryArgs>;

export const Playground: Story = {
  args: {
    color: 'primary',
  },
};

export const Checked: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Varianti switch checked enabled/disabled',
      },
    },
  },
  render: () => (
    <Stack direction="row" spacing={1}>
      <MISwitch color="primary" checked />
      <MISwitch color="primary" checked disabled />
    </Stack>
  ),
};

export const Unchecked: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Varianti switch unchecked enabled/disabled',
      },
    },
  },
  render: () => (
    <Stack direction="row" spacing={1}>
      <MISwitch color="primary" />
      <MISwitch color="primary" disabled />
    </Stack>
  ),
};

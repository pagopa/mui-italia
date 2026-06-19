import { MISpinner } from '@components/MISpinner';
import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof MISpinner> = {
  title: 'Components/MISpinner',
  component: MISpinner,
  tags: ['!autodocs'],
  args: {
    color: 'primary',
    'aria-label': 'Caricamento in corso',
  },
  argTypes: {
    color: {
      description: 'Colore dello spinner. Sono ammessi solo `primary` e `secondary`.',
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      table: {
        type: { summary: "'primary' | 'secondary'" },
        defaultValue: { summary: 'primary' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MISpinner>;

export const Default: Story = {
  render: (args) => <MISpinner {...args} />,
};

export const Primary: Story = {
  args: {
    color: 'primary',
  },
  render: (args) => <MISpinner {...args} />,
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
  render: (args) => <MISpinner {...args} />,
  decorators: [
    (Story) => (
      <Box
        sx={{
          backgroundColor: 'primary.main',
          p: 3,
          borderRadius: 1,
          display: 'inline-flex',
        }}
      >
        <Story />
      </Box>
    ),
  ],
};

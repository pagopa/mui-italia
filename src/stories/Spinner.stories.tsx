import { Box, CircularProgress } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof CircularProgress> = {
  title: 'MUI Components/Feedback/Spinner',
  component: CircularProgress,
  tags: ['!autodocs'],
  args: {
    color: 'primary',
    size: 24,
    thickness: 5,
    variant: 'indeterminate',
    disableShrink: true,
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
    variant: {
      description:
        '`indeterminate` per attese di durata sconosciuta (default), `determinate` per mostrare un avanzamento preciso tramite la prop `value`.',
      options: ['indeterminate', 'determinate'],
      control: { type: 'radio' },
      table: {
        type: { summary: "'indeterminate' | 'determinate'" },
        defaultValue: { summary: 'indeterminate' },
      },
    },
    size: {
      description: 'Dimensione (diametro) dello spinner in pixel.',
      control: { type: 'range', min: 16, max: 120, step: 4 },
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '24' },
      },
    },
    thickness: {
      description:
        "Spessore dell'anello. Per scelta di Design System ha effetto solo con `variant='determinate'`: nella variante `indeterminate` l'anello è ridisegnato via CSS con spessore fisso e la prop viene ignorata.",
      control: { type: 'range', min: 1, max: 10, step: 0.5 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
    },
    value: {
      description: "Valore di avanzamento (0–100). Ha effetto solo con `variant='determinate'`.",
      control: { type: 'range', min: 0, max: 100, step: 1 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    disableShrink: {
      description:
        "Disabilita l'animazione di restringimento dell'anello (attiva di default nel tema).",
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CircularProgress>;

export const Default: Story = {
  render: (args) => <CircularProgress {...args} />,
};

export const Primary: Story = {
  args: {
    color: 'primary',
  },
  render: (args) => <CircularProgress {...args} />,
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
  render: (args) => <CircularProgress {...args} />,
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

export const Determinate: Story = {
  args: {
    variant: 'determinate',
    value: 65,
  },
  render: (args) => <CircularProgress {...args} />,
};

export const Sizes: Story = {
  render: (args) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
      <CircularProgress {...args} size={16} />
      <CircularProgress {...args} size={24} />
      <CircularProgress {...args} size={48} />
      <CircularProgress {...args} size={64} />
    </Box>
  ),
};

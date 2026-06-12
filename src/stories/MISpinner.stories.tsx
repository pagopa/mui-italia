import { MISpinner } from '@components/MISpinner';
import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof MISpinner> = {
  title: 'Components/MISpinner',
  component: MISpinner,
  tags: ['!autodocs'],
  args: {
    color: 'primary',
    size: 24,
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
        "Disabilita l'animazione di restringimento dell'anello (attiva di default nel componente).",
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
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

export const Determinate: Story = {
  args: {
    variant: 'determinate',
    value: 65,
  },
  render: (args) => <MISpinner {...args} />,
};

export const Sizes: Story = {
  render: (args) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
      <MISpinner {...args} size={16} />
      <MISpinner {...args} size={24} />
      <MISpinner {...args} size={48} />
      <MISpinner {...args} size={64} />
    </Box>
  ),
};

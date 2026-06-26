import { MISpinner } from '@components/MISpinner';
import { Box, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof MISpinner> = {
  title: 'Components/MISpinner',
  component: MISpinner,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['color', 'size', 'aria-label'],
    },
  },
  args: {
    color: 'primary',
    size: 24,
    'aria-label': 'Caricamento in corso',
  },
  argTypes: {
    color: {
      description: 'Colore dello spinner.',
      options: ['primary', 'secondary', 'error'],
      control: { type: 'radio' },
      table: {
        type: { summary: "'primary' | 'secondary' | 'error'" },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      description: 'Dimensione dello spinner in pixel.',
      control: { type: 'number' },
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '24' },
      },
    },
    'aria-label': {
      description: 'Etichetta accessibile che descrive lo stato di caricamento.',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
  },
  render: ({ color, size, 'aria-label': ariaLabel }) => {
    if (color === 'secondary') {
      return (
        <Box
          sx={{
            backgroundColor: 'primary.main',
            color: 'common.white',
            p: 3,
            borderRadius: 1,
          }}
        >
          <MISpinner color="secondary" aria-label="Caricamento secondary" />
        </Box>
      );
    }
    return <MISpinner color={color} size={size} aria-label={ariaLabel} />;
  },
};

export default meta;

type Story = StoryObj<typeof MISpinner>;

export const Playground: Story = {};

export const ColorVariants: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story: 'Panoramica dei colori disponibili per MISpinner.',
      },
    },
  },
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      <Stack spacing={1} alignItems="center">
        <MISpinner color="primary" aria-label="Caricamento primary" />
        <Typography variant="caption">primary</Typography>
      </Stack>

      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'common.white',
          p: 3,
          borderRadius: 1,
        }}
      >
        <Stack spacing={1} alignItems="center">
          <MISpinner color="secondary" aria-label="Caricamento secondary" />
          <Typography variant="caption">secondary</Typography>
        </Stack>
      </Box>

      <Stack spacing={1} alignItems="center">
        <MISpinner color="error" aria-label="Caricamento error" />
        <Typography variant="caption">error</Typography>
      </Stack>
    </Stack>
  ),
};

export const SizeVariants: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story: 'Esempi di dimensioni disponibili tramite la prop size.',
      },
    },
  },
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      {[16, 24, 32, 40].map((size) => (
        <Stack key={size} spacing={1} alignItems="center">
          <MISpinner size={size} aria-label={`Caricamento size ${size}`} />
          <Typography variant="caption">{size}px</Typography>
        </Stack>
      ))}
    </Stack>
  ),
};

export const Accessibility: Story = {
  args: {
    color: 'primary',
    size: 24,
    'aria-label': 'Caricamento dei dati in corso',
  },
};

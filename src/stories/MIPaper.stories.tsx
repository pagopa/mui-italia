import MIPaper from '@components/MIPaper/MIPaper';
import { Box, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';

type MIPaperStoryArgs = ComponentProps<typeof MIPaper> & {
  content?: string;
};

const borderRadiusOptions = [8, 16, 24] as const;
const paddingOptions = [16, 24] as const;

const meta: Meta<MIPaperStoryArgs> = {
  title: 'Components/MIPaper',
  component: MIPaper,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['variant', 'borderRadius', 'padding', 'content'],
    },
  },
  args: {
    variant: 'flat',
    borderRadius: 8,
    padding: 16,
    content: 'Contenuto del paper',
  },
  argTypes: {
    variant: {
      options: ['flat', 'outlined'],
      control: { type: 'radio' },
      description: 'Variante visiva del paper.',
      table: {
        category: 'MIPaper',
        type: { summary: "'flat' | 'outlined'" },
        defaultValue: { summary: 'flat' },
      },
    },
    borderRadius: {
      options: borderRadiusOptions,
      control: { type: 'radio' },
      description: 'Radius applicato al contenitore tramite i token del tema.',
      table: {
        category: 'MIPaper',
        type: { summary: 'RadiusVariant' },
        defaultValue: { summary: '8' },
      },
    },
    padding: {
      options: paddingOptions,
      control: { type: 'radio' },
      description: 'Padding interno del paper espresso in pixel.',
      table: {
        category: 'MIPaper',
        type: { summary: '16 | 24' },
        defaultValue: { summary: '16' },
      },
    },
    content: {
      control: { type: 'text' },
      description: 'Controllo Storybook: testo usato come children del componente.',
      table: {
        category: 'Storybook controls',
      },
    },
  },
  render: ({ content, children, sx, ...args }) => (
    <MIPaper
      {...args}
      sx={{
        width: 320,
        ...sx,
      }}
    >
      <Typography variant="body1">{content ?? children}</Typography>
    </MIPaper>
  ),
};

export default meta;

type Story = StoryObj<MIPaperStoryArgs>;

export const Playground: Story = {};

export const Variants: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story: 'Confronto tra le varianti flat e outlined.',
      },
    },
  },
  render: () => (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
      <MIPaper
        variant="flat"
        borderRadius={8}
        padding={16}
        sx={{
          width: 280,
        }}
      >
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Flat
        </Typography>
        <Typography variant="body2">
          Variante senza bordo, con ombra disabilitata e padding interno.
        </Typography>
      </MIPaper>

      <MIPaper
        variant="outlined"
        borderRadius={8}
        padding={16}
        sx={{
          width: 280,
        }}
      >
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Outlined
        </Typography>
        <Typography variant="body2">Variante con bordo neutro e ombra disabilitata.</Typography>
      </MIPaper>
    </Stack>
  ),
};

export const BorderRadius: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story: 'Panoramica dei radius disponibili.',
      },
    },
  },
  render: () => (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
      {borderRadiusOptions.map((borderRadius) => (
        <MIPaper
          key={borderRadius}
          variant="outlined"
          borderRadius={borderRadius}
          padding={16}
          sx={{
            width: 220,
          }}
        >
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Radius {borderRadius}
          </Typography>
          <Typography variant="body2">Angoli arrotondati tramite token del tema.</Typography>
        </MIPaper>
      ))}
    </Stack>
  ),
};

export const Padding: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story: 'Confronto tra i padding disponibili.',
      },
    },
  },
  render: () => (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="flex-start">
      {paddingOptions.map((padding) => (
        <MIPaper
          key={padding}
          variant="outlined"
          borderRadius={8}
          padding={padding}
          sx={{
            width: 260,
          }}
        >
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Padding {padding}
          </Typography>
          <Typography variant="body2">
            {padding === 16
              ? 'Spaziatura interna compatta per contenuti brevi.'
              : 'Spaziatura interna più ampia per contenuti più strutturati.'}
          </Typography>
        </MIPaper>
      ))}
    </Stack>
  ),
};

export const ContentExample: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story: 'Esempio di contenuto composto all’interno di MIPaper.',
      },
    },
  },
  render: () => (
    <MIPaper
      component="section"
      aria-labelledby="paper-example-title"
      variant="outlined"
      borderRadius={16}
      padding={24}
      sx={{
        width: 360,
      }}
    >
      <Stack spacing={1.5}>
        <Typography id="paper-example-title" variant="h3" fontSize={20} fontWeight={600}>
          Titolo sezione
        </Typography>
        <Typography variant="body2" color="text.secondary">
          MIPaper può contenere testo, layout e altri componenti React.
        </Typography>
        <Box>
          <Typography variant="caption" color="text.secondary">
            Variante outlined, radius 16, padding 24.
          </Typography>
        </Box>
      </Stack>
    </MIPaper>
  ),
};

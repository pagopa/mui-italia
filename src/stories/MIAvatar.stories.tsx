import { MIAvatar } from '@components/MIAvatar';
import logoCgn from '@assets/raster/logo-cgn.png';
import { Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { breakpointsChromaticValues } from '@theme';
import type { ComponentProps } from 'react';

const componentMaxWidth = 400;

type MIAvatarStoryArgs = ComponentProps<typeof MIAvatar> & {
  initials: string;
};

const meta: Meta<MIAvatarStoryArgs> = {
  title: 'Components/MIAvatar',
  component: MIAvatar,
  tags: ['!dev'],
  parameters: {
    controls: { include: ['variant', 'size', 'src', 'alt', 'initials', 'isLoading'] },
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
  },
  args: {
    variant: 'standard',
    size: 'small',
    src: '',
    alt: 'Logo del servizio',
    initials: 'MR',
    isLoading: false,
  },
  argTypes: {
    variant: {
      options: ['standard', 'gravatar'],
      control: 'radio',
      description: 'Variante con logo oppure iniziali.',
    },
    size: {
      options: ['small', 'big'],
      control: 'radio',
      description: 'Dimensione della variante standard.',
      if: { arg: 'variant', eq: 'standard' },
    },
    src: {
      control: 'text',
      description: 'URL dell’immagine della variante standard.',
      if: { arg: 'variant', eq: 'standard' },
    },
    alt: {
      control: 'text',
      description: 'Testo alternativo obbligatorio; usa una stringa vuota per immagini decorative.',
      if: { arg: 'variant', eq: 'standard' },
    },
    initials: {
      control: 'text',
      description: 'Controllo Storybook per la label della variante gravatar.',
      if: { arg: 'variant', eq: 'gravatar' },
      table: { category: 'Controlli Storybook' },
    },
    isLoading: {
      control: 'boolean',
      description: 'Mostra uno skeleton durante il caricamento.',
    },
  },
  render: ({ variant, size, src, alt, initials, isLoading }) =>
    variant === 'gravatar' ? (
      <MIAvatar variant="gravatar" label={initials} isLoading={isLoading} />
    ) : (
      <MIAvatar size={size} src={src || undefined} alt={alt} isLoading={isLoading} />
    ),
};

export default meta;

type Story = StoryObj<MIAvatarStoryArgs>;

export const Playground: Story = {};

export const Default: Story = {
  parameters: { controls: { disable: true } },
  render: () => <MIAvatar alt="Logo del servizio" />,
};

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <MIAvatar src={logoCgn} alt="Carta Giovani Nazionale" size="small" />
      <MIAvatar src={logoCgn} alt="Carta Giovani Nazionale" size="big" />
    </Stack>
  ),
};

export const Gravatar: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <MIAvatar variant="gravatar" label="MR" role="img" aria-label="Mario Rossi" />
  ),
};

export const Loading: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <MIAvatar isLoading size="small" alt="Logo del servizio" aria-label="Caricamento logo" />
      <MIAvatar isLoading size="big" alt="Logo del servizio" aria-label="Caricamento logo" />
      <MIAvatar variant="gravatar" label="MR" isLoading aria-label="Caricamento avatar" />
    </Stack>
  ),
};

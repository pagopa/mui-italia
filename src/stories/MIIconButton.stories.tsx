import { MIIconButton } from '@components/MIIconButton';
import {
  CloseRounded as CloseRoundedIcon,
  DeleteRounded as DeleteRoundedIcon,
  DownloadRounded as DownloadRoundedIcon,
  EditRounded as EditRoundedIcon,
} from '@mui/icons-material';
import { Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';

type MIIconButtonStoryArgs = React.ComponentProps<typeof MIIconButton> & {
  icon: 'delete' | 'download' | 'close' | 'edit';
};

const iconMap = {
  delete: <DeleteRoundedIcon />,
  download: <DownloadRoundedIcon />,
  close: <CloseRoundedIcon />,
  edit: <EditRoundedIcon />,
};

const meta: Meta<MIIconButtonStoryArgs> = {
  title: 'Components/MIIconButton',
  component: MIIconButton,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['aria-label', 'icon', 'size', 'edge'],
    },
  },
  args: {
    'aria-label': 'Elimina',
    icon: 'delete',
    size: 'medium',
    edge: false,
  },
  argTypes: {
    'aria-label': {
      control: { type: 'text' },
      description:
        'Etichetta accessibile del pulsante. È necessaria perché il componente mostra solo un’icona.',
      table: {
        category: 'Accessibilità',
        type: { summary: 'string' },
      },
    },
    icon: {
      options: ['delete', 'download', 'close', 'edit'],
      control: { type: 'radio' },
      description: 'Controllo Storybook: seleziona l’icona mostrata nel pulsante.',
      table: {
        category: 'Storybook controls',
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      description: 'Dimensione del pulsante.',
      table: {
        category: 'MIIconButton',
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: 'medium' },
      },
    },
    edge: {
      options: ['false', 'start', 'end'],
      control: { type: 'radio' },
      description:
        'Compensa la spaziatura quando il pulsante è il primo o l’ultimo elemento di un contenitore.',
      table: {
        category: 'MIIconButton',
        type: { summary: "'start' | 'end' | false" },
      },
    },
  },
  render: ({ 'aria-label': ariaLabel, icon, size, edge }) => (
    <MIIconButton
      aria-label={ariaLabel}
      size={size}
      edge={edge === false ? undefined : edge}
      onClick={() => undefined}
    >
      {iconMap[icon]}
    </MIIconButton>
  ),
};

export default meta;

type Story = StoryObj<MIIconButtonStoryArgs>;

export const Playground: Story = {};

export const Sizes: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story: 'Panoramica delle dimensioni disponibili per MIIconButton.',
      },
    },
  },
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <MIIconButton size="small" aria-label="Elimina elemento">
        <DeleteRoundedIcon fontSize="small" />
      </MIIconButton>

      <MIIconButton size="medium" aria-label="Elimina elemento">
        <DeleteRoundedIcon />
      </MIIconButton>

      <MIIconButton size="large" aria-label="Elimina elemento">
        <DeleteRoundedIcon fontSize="large" />
      </MIIconButton>
    </Stack>
  ),
};

export const Icons: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story: 'Esempi di azioni rappresentate tramite icone diverse.',
      },
    },
  },
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <MIIconButton aria-label="Elimina elemento">
        <DeleteRoundedIcon />
      </MIIconButton>

      <MIIconButton aria-label="Scarica documento">
        <DownloadRoundedIcon />
      </MIIconButton>

      <MIIconButton aria-label="Chiudi">
        <CloseRoundedIcon />
      </MIIconButton>

      <MIIconButton aria-label="Modifica elemento">
        <EditRoundedIcon />
      </MIIconButton>
    </Stack>
  ),
};

export const Edge: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story:
          'Esempi della prop edge, utile per compensare la spaziatura quando il pulsante è a inizio o fine contenitore.',
      },
    },
  },
  render: () => (
    <Stack direction="row" spacing={3} alignItems="center">
      <MIIconButton edge="start" aria-label="Indietro">
        <CloseRoundedIcon />
      </MIIconButton>

      <MIIconButton aria-label="Elimina elemento">
        <DeleteRoundedIcon />
      </MIIconButton>

      <MIIconButton edge="end" aria-label="Scarica documento">
        <DownloadRoundedIcon />
      </MIIconButton>
    </Stack>
  ),
};

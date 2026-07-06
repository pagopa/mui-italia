import { MIButton } from '@components/MIButton';
import { MIButtonLoaderType } from '@components/MIButton/types';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { Box, Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';

type MIButtonStoryArgs = React.ComponentProps<typeof MIButton> & {
  label: string;
  iconPosition?: 'none' | 'start' | 'end';
  enableHref?: boolean;
  linkHref?: string;
};

const getIcon = (iconPosition: MIButtonStoryArgs['iconPosition']) => {
  if (iconPosition === 'start') {
    return { startIcon: <ArrowBackRoundedIcon /> };
  }

  if (iconPosition === 'end') {
    return { endIcon: <ArrowForwardRoundedIcon /> };
  }

  return {};
};

const meta: Meta<MIButtonStoryArgs> = {
  title: 'Components/MIButton',
  component: MIButton,
  parameters: {
    layout: 'centered',
    controls: {
      include: [
        'label',
        'variant',
        'color',
        'size',
        'fullWidth',
        'isLoading',
        'loaderType',
        'loadingAriaLabel',
        'iconPosition',
        'enableHref',
        'linkHref',
      ],
    },
  },
  args: {
    label: 'Press me',
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    fullWidth: false,
    isLoading: false,
    loaderType: MIButtonLoaderType.SPINNER,
    loadingAriaLabel: 'Caricamento in corso',
    iconPosition: 'none',
    enableHref: false,
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Testo visualizzato all’interno del pulsante.',
      table: {
        category: 'MIButton',
        type: { summary: 'string' },
      },
    },
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'radio' },
      description: 'Variante visiva del pulsante.',
      table: {
        category: 'MIButton',
        type: { summary: "'contained' | 'outlined' | 'text'" },
        defaultValue: { summary: 'contained' },
      },
    },
    color: {
      options: ['primary', 'error', 'contrasted'],
      control: { type: 'radio' },
      description: 'Colore del pulsante.',
      table: {
        category: 'MIButton',
        type: { summary: "'primary' | 'error' | 'contrasted'" },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      description: 'Dimensione del pulsante.',
      table: {
        category: 'MIButton',
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: 'medium' },
      },
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Estende il pulsante alla larghezza disponibile.',
      table: {
        category: 'MIButton',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Mostra lo stato di caricamento e impedisce l’esecuzione del click.',
      table: {
        category: 'MIButton',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loaderType: {
      options: [MIButtonLoaderType.SPINNER, MIButtonLoaderType.SKELETON],
      control: { type: 'radio' },
      description: 'Tipo di loader mostrato durante lo stato di caricamento.',
      if: { arg: 'isLoading', eq: true },
      table: {
        category: 'MIButton',
        type: { summary: "'spinner' | 'skeleton'" },
        defaultValue: { summary: MIButtonLoaderType.SPINNER },
      },
    },
    loadingAriaLabel: {
      control: { type: 'text' },
      description: 'Etichetta accessibile passata allo spinner durante lo stato di caricamento.',
      if: { arg: 'isLoading', eq: true },
      table: {
        category: 'Accessibilità',
        type: { summary: 'string' },
        defaultValue: { summary: 'Caricamento in corso' },
      },
    },

    /**
     * Storybook-only controls
     */
    iconPosition: {
      options: ['none', 'start', 'end'],
      control: { type: 'radio' },
      description: 'Controllo Storybook: aggiunge un’icona a inizio o fine pulsante.',
      table: {
        category: 'Storybook controls',
      },
    },
    enableHref: {
      control: { type: 'boolean' },
      description: 'Controllo Storybook: abilita href. Valido solo con variant="text".',
      if: { arg: 'variant', eq: 'text' },
      table: {
        category: 'Storybook controls',
      },
    },
    linkHref: {
      control: { type: 'text' },
      description: 'URL usato quando enableHref è attivo e variant="text".',
      if: { arg: 'enableHref', eq: true },
      table: {
        category: 'Storybook controls',
      },
    },
  },
  render: ({
    label,
    variant,
    color,
    size,
    fullWidth,
    isLoading,
    loaderType,
    loadingAriaLabel,
    iconPosition,
    enableHref,
    linkHref,
  }) => {
    const iconProps = getIcon(iconPosition);

    if (variant === 'text' && enableHref) {
      return (
        <MIButton
          variant="text"
          href={linkHref}
          color={color}
          size={size}
          fullWidth={fullWidth}
          isLoading={isLoading}
          loaderType={loaderType}
          loadingAriaLabel={loadingAriaLabel}
          {...iconProps}
        >
          {label}
        </MIButton>
      );
    }

    return (
      <MIButton
        variant={variant}
        color={color}
        size={size}
        fullWidth={fullWidth}
        isLoading={isLoading}
        loaderType={loaderType}
        loadingAriaLabel={loadingAriaLabel}
        {...iconProps}
      >
        {label}
      </MIButton>
    );
  },
};

export default meta;

type Story = StoryObj<MIButtonStoryArgs>;

export const Playground: Story = {};

export const Variants: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story: 'Panoramica delle varianti visive disponibili.',
      },
    },
  },
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <MIButton variant="contained">Contained</MIButton>
      <MIButton variant="outlined">Outlined</MIButton>
      <MIButton variant="text">Text</MIButton>
    </Stack>
  ),
};

export const Colors: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story: 'Panoramica dei colori disponibili.',
      },
    },
  },
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <MIButton color="primary">Primary</MIButton>
      <MIButton color="error">Error</MIButton>
      <MIButton color="contrasted">Contrasted</MIButton>
    </Stack>
  ),
};

export const Sizes: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story: 'Panoramica delle dimensioni disponibili.',
      },
    },
  },
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <MIButton size="small">Small</MIButton>
      <MIButton size="medium">Medium</MIButton>
      <MIButton size="large">Large</MIButton>
    </Stack>
  ),
};

export const Icons: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story: 'Esempi con icona iniziale e finale.',
      },
    },
  },
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <MIButton startIcon={<ArrowBackRoundedIcon />}>Back</MIButton>
      <MIButton endIcon={<ArrowForwardRoundedIcon />}>Next</MIButton>
      <MIButton color="error" startIcon={<DeleteOutlineRoundedIcon />}>
        Delete
      </MIButton>
    </Stack>
  ),
};

export const Link: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story: 'La prop href è ammessa solo sulla variante text.',
      },
    },
  },
  render: () => (
    <MIButton variant="text" href="https://example.com">
      Vai al sito
    </MIButton>
  ),
};

export const LoadingStates: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story: 'Esempi degli stati di caricamento disponibili.',
      },
    },
  },
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <MIButton
        isLoading
        loaderType={MIButtonLoaderType.SPINNER}
        loadingAriaLabel="Salvataggio in corso"
      >
        Salva
      </MIButton>

      <MIButton isLoading loaderType={MIButtonLoaderType.SKELETON}>
        Salva
      </MIButton>
    </Stack>
  ),
};

export const FullWidth: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story: 'Esempio di pulsante a larghezza piena.',
      },
    },
  },
  render: () => (
    <Box sx={{ width: 360 }}>
      <MIButton fullWidth>Full width</MIButton>
    </Box>
  ),
};

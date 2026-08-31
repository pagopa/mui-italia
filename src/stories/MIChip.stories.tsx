import { MIChip } from '@components/MIChip';
import { Stack } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-vite';

const ALL_COLORS = ['default', 'warning', 'error', 'success', 'highlight', 'info'] as const;

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

type MIChipStoryArgs = React.ComponentProps<typeof MIChip> & {
  deletable?: boolean;
};

const meta: Meta<MIChipStoryArgs> = {
  title: 'Components/MIChip',
  component: MIChip,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['label', 'color', 'variant', 'aria-label', 'deletable'],
    },
  },
  args: {
    label: 'Consegnata',
    color: 'default',
    variant: 'filled',
    'aria-label': 'Clicca per cancellare',
    deletable: false,
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
      description: 'Testo visualizzato all’interno del chip.',
    },
    color: {
      options: ['default', 'warning', 'error', 'success', 'highlight', 'neutral', 'info'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      description:
        'Colore semantico del chip. Il valore neutral è pensato soprattutto per la variante deletable.',
    },
    variant: {
      options: ['filled', 'outlined'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'filled' },
      },
      description: 'Variante visiva del chip.',
    },
    'aria-label': {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
      description: "Aria label dell'icona di delete",
      if: { arg: 'enableOnDelete', eq: true },
    },
    deletable: {
      description: 'Attiva/Disattiva il passaggio della funzione onDelete al componente',
      control: 'boolean',
      if: { arg: 'color', eq: 'neutral' },
      table: {
        category: 'Controlli Storybook',
      },
    },
  },
  render: (args) => {
    const { deletable, color, variant, label, 'aria-label': ariaLabel } = args;
    const handleOnDelete = deletable ? () => alert('Cliccato!') : undefined;
    if (color === 'neutral') {
      return (
        <MIChip
          label={label}
          color="neutral"
          variant="filled"
          onDelete={handleOnDelete}
          aria-label={ariaLabel}
        />
      );
    }
    return <MIChip label={label} color={color} variant={variant} />;
  },
};

export default meta;

type Story = StoryObj<MIChipStoryArgs>;

const ChipGrid = ({ variant }: { variant: 'filled' | 'outlined' }) => (
  <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
    {ALL_COLORS.map((color) => (
      <MIChip
        key={`${variant}-${color}`}
        label={color.charAt(0).toUpperCase() + color.slice(1)}
        color={color}
        variant={variant}
      />
    ))}
  </Stack>
);

export const Playground: Story = {
  args: {
    label: 'Consegnata',
    color: 'default',
    variant: 'filled',
  },
};

export const FilledVariants: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story: 'Panoramica dei colori disponibili nella variante filled.',
      },
    },
  },
  render: () => <ChipGrid variant="filled" />,
};

export const OutlinedVariants: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story: 'Panoramica dei colori disponibili nella variante outlined.',
      },
    },
  },
  render: () => <ChipGrid variant="outlined" />,
};

export const Deletable: Story = {
  args: {
    label: 'Filtro attivo',
    color: 'neutral',
    deletable: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Variante deletable utile per filtri, selezioni o elementi rimovibili. In questo caso è consigliato curare l’aria-label dell’azione di rimozione.',
      },
    },
  },
};

export const Accessibility: Story = {
  args: {
    label: 'Stato pratica: Consegnata',
    color: 'neutral',
    onDelete: handleDelete,
    'aria-label': 'Rimuovi filtro Stato pratica: Consegnata',
  },
  parameters: {
    docs: {
      description: {
        story: 'Esempio con labeling accessibile esplicito per la funzione di rimozione del chip.',
      },
    },
  },
};

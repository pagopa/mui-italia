import { MIChip } from '@components/MIChip';
import { Stack } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-vite';

const ALL_COLORS = ['default', 'warning', 'error', 'success', 'highlight', 'info'] as const;

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

type StoryProps = React.ComponentProps<typeof MIChip> & {
  enableOnDelete?: boolean;
};

const meta: Meta<StoryProps> = {
  title: 'Components/MIChip',
  component: MIChip,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['label', 'color', 'variant', 'aria-label', 'enableOnDelete'],
    },
  },
  args: {
    label: 'Consegnata',
    color: 'default',
    variant: 'filled',
    'aria-label': 'Clicca per cancellare',
    enableOnDelete: false,
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
    enableOnDelete: {
      description: 'Attiva/Disattiva il passaggio della funzione onDelete al componente',
      control: 'boolean',
      if: { arg: 'color', eq: 'neutral' },
      table: {
        category: 'Controlli Storybook',
      },
    },
  },
  render: (args) => {
    const { enableOnDelete, color, ...restArgs } = args;
    const handleOnDelete = enableOnDelete ? () => alert('Cliccato!') : undefined;
    return <MIChip {...restArgs} color={color} onDelete={handleOnDelete} />;
  },
};

export default meta;

type Story = StoryObj<typeof MIChip>;

const ChipGrid = ({ variant }: { variant: 'filled' | 'outlined' }) => (
  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
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
    onDelete: handleDelete,
    'aria-label': 'Rimuovi chip Filtro attivo',
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

/*import { MIChip } from '@components/MIChip';
import { Box, Stack, Typography, Link as MuiLink } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
} from '@storybook/addon-docs/blocks';


const DocsPage = () => (
  <>
    

  

    

    <Section
      title="Accessibilità"
      description="Usa il componente in modo coerente con il significato semantico che deve trasmettere all’utente e con un naming accessibile chiaro."
    >
      <Stack spacing={1.5}>
        <Typography variant="body1">
          • Usa un <strong>label breve e comprensibile</strong>, perché rappresenta il contenuto
          principale del chip.
        </Typography>
        <Typography variant="body1">
          • Quando il chip è <strong>deletable</strong>, fornisci un{' '}
          <strong>aria-label esplicito</strong> se il contesto non è già chiaro, ad esempio:
          “Rimuovi filtro Stato: Consegnata”.
        </Typography>
        <Typography variant="body1">
          • Evita di usare il solo <strong>colore</strong> per comunicare il significato: il testo
          del chip deve rimanere sufficiente a spiegare stato o funzione.
        </Typography>
        <Typography variant="body1">
          • Usa la modalità deletable solo quando l’azione di rimozione è realmente disponibile e
          coerente con il flusso.
        </Typography>
        <Typography variant="body1">
          • In caso di uso come stato statico, preferisci il chip non deletable, così da evitare
          affordance interattive non necessarie.
        </Typography>
      </Stack>
    </Section>
  </>
);*/

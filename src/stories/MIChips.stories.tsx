import { MIChip } from '@components/MIChip';
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

const FIGMA_URL = 'https://www.figma.com/file/PLACEHOLDER';
const GITHUB_COMPONENT_URL =
  'https://github.com/pagopa/mui-italia/blob/develop/src/components/MIChip/MIChip.tsx';

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

const ALL_COLORS = ['default', 'warning', 'error', 'success', 'highlight', 'info'] as const;

const Section = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => (
  <Box sx={{ mt: 5 }}>
    <Typography variant="h5" gutterBottom>
      {title}
    </Typography>
    {description && (
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        {description}
      </Typography>
    )}
    {children}
  </Box>
);

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

const DeletableExamples = () => (
  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
    <MIChip label="Filtrabile" color="neutral" onDelete={handleDelete} />
  </Stack>
);

const DocsPage = () => (
  <>
    <Title />
    <Subtitle>
      Chip compatto per rappresentare stato, categoria o selezione in interfacce coerenti con
      mui-italia.
    </Subtitle>
    <Description />

    <Box sx={{ mt: 3 }}>
      <Typography variant="body1" paragraph>
        <strong>MIChip</strong> è un componente pensato per mostrare informazioni sintetiche come
        stato, etichetta o filtro applicato. Supporta varianti filled e outlined, più palette
        semantiche dedicate, e una modalità deletable utile nei casi in cui il chip rappresenti un
        elemento rimovibile.
      </Typography>

      <Stack direction="row" spacing={3} useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
        <MuiLink href={FIGMA_URL} target="_blank" rel="noreferrer">
          Figma reference
        </MuiLink>
        <MuiLink href={GITHUB_COMPONENT_URL} target="_blank" rel="noreferrer">
          GitHub component
        </MuiLink>
      </Stack>
    </Box>

    <Section
      title="Playground"
      description="Usa i controlli per modificare i parametri principali del componente e verificare il risultato live."
    >
      <Primary />
      <Controls />
    </Section>

    <Section
      title="Varianti"
      description="MIChip supporta due varianti visive: filled, per maggiore enfasi, e outlined, per contesti più leggeri o secondari."
    >
      <Typography variant="subtitle1" gutterBottom>
        Filled
      </Typography>
      <ChipGrid variant="filled" />

      <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
        Outlined
      </Typography>
      <ChipGrid variant="outlined" />
    </Section>

    <Section
      title="Deletable"
      description="Quando il chip rappresenta un filtro o un elemento selezionato che può essere rimosso, è possibile usare la modalità deletable tramite onDelete."
    >
      <DeletableExamples />
    </Section>

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

    <Section title="Stories">
      <Stories />
    </Section>
  </>
);

const meta: Meta<typeof MIChip> = {
  title: 'Components/MIChips',
  component: MIChip,
  parameters: {
    layout: 'centered',
    docs: {
      page: DocsPage,
      description: {
        component:
          'Chip per rappresentare stati, etichette e selezioni. Supporta varianti filled e outlined, palette semantiche e modalità deletable.',
      },
    },
    controls: {
      include: ['label', 'color', 'variant'],
    },
  },
  args: {
    label: 'Consegnata',
    color: 'default',
    variant: 'filled',
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
    onDelete: {
      table: {
        disable: true,
      },
    },
    sx: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MIChip>;

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

export const AccessibilityExample: Story = {
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

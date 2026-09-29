import type { ComponentProps } from 'react';
import { useState } from 'react';

import {
  CheckCircle as CheckCircleIcon,
  ImageOutlined as ImageOutlinedIcon,
} from '@mui/icons-material';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { breakpointsChromaticValues, pxToRem } from '@theme';

import { MIAccordion } from '@components/MIAccordion';

const componentMaxWidth = 900;

type IconOption = 'none' | 'icon' | 'status' | 'avatar';

type MIAccordionStoryArgs = ComponentProps<typeof MIAccordion> & {
  iconOption?: IconOption;
};

const icons: Record<IconOption, ComponentProps<typeof MIAccordion>['icon']> = {
  none: undefined,
  icon: <ImageOutlinedIcon sx={{ color: 'text.secondary', fontSize: pxToRem(24) }} />,
  status: <CheckCircleIcon color="success" sx={{ fontSize: pxToRem(24) }} />,
  avatar: (
    <Avatar
      component="span"
      sx={{ width: 32, height: 32, fontSize: '0.875rem', bgcolor: 'primary.main' }}
    >
      MR
    </Avatar>
  ),
};

type Row = { label: string; value: string };

const entityRows: Array<Row> = [
  { label: 'Denominazione', value: 'Comune di Milano' },
  { label: 'Codice fiscale', value: '01199250158' },
  { label: 'Indirizzo PEC', value: 'protocollo@pec.comune.milano.it' },
];

const contactRows: Array<Row> = [
  { label: 'Referente', value: 'Mario Rossi' },
  { label: 'Email', value: 'mario.rossi@comune.milano.it' },
];

type SampleContentProps = {
  title?: string;
  rows?: Array<Row>;
  // A single group can keep a plain paragraph; several groups need real headings
  titleComponent?: 'p' | 'h4';
};

// Label/value pairs as a description list; separators are CSS borders, not <hr>
const SampleContent = ({
  title = "Dati dell'ente",
  rows = entityRows,
  titleComponent = 'p',
}: SampleContentProps) => (
  <Box>
    <Typography
      component={titleComponent}
      sx={{
        m: 0,
        color: 'text.secondary',
        fontSize: '0.875rem',
        fontWeight: 600,
        textTransform: 'uppercase',
      }}
    >
      {title}
    </Typography>
    <Box
      component="dl"
      sx={{ m: 0, '& > div + div': { borderTop: '1px solid', borderColor: 'divider' } }}
    >
      {rows.map(({ label, value }) => (
        <Box key={label} sx={{ py: 1.5 }}>
          <Typography component="dt" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
            {label}
          </Typography>
          <Typography component="dd" sx={{ m: 0, fontSize: '0.875rem', fontWeight: 600 }}>
            {value}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

const meta: Meta<MIAccordionStoryArgs> = {
  title: 'Components/MIAccordion',
  component: MIAccordion,
  parameters: {
    layout: 'padded',
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
    controls: {
      include: [
        'title',
        'description',
        'badge',
        'badgeProps',
        'icon',
        'iconOption',
        'headingLevel',
        'defaultExpanded',
        'disabled',
        'loading',
        'expanded',
        'onChange',
        'slots',
        'slotProps',
        'sx',
        'id',
      ],
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: '100%', maxWidth: componentMaxWidth, mx: 'auto' }}>
        <Story />
      </Box>
    ),
  ],
  args: {
    title: 'Configurazione del servizio',
    description: 'Verifica i dati prima di proseguire.',
    badge: 'Attivo',
    badgeProps: { color: 'neutral', variant: 'filled' },
    iconOption: 'icon',
    headingLevel: 3,
    defaultExpanded: false,
    disabled: false,
    loading: false,
  },
  argTypes: {
    title: {
      control: { type: 'text' },
      description: "Titolo dell'item, sempre visibile nell'header. Solo testo.",
      table: { category: 'MIAccordion', type: { summary: 'string' } },
    },
    description: {
      control: { type: 'text' },
      description: "Testo secondario, visibile solo quando l'item è aperto. Solo testo.",
      table: { category: 'MIAccordion', type: { summary: 'string' } },
    },
    badge: {
      control: { type: 'text' },
      description: 'Testo del badge, reso come MIChip sotto il titolo.',
      table: { category: 'MIAccordion', type: { summary: 'string' } },
    },
    badgeProps: {
      control: { type: 'object' },
      description:
        'Colore e variante del MIChip del badge; le altre props di MIChip non sono ammesse. Da disabilitato il badge è sempre outlined.',
      table: {
        category: 'MIAccordion',
        type: { summary: "Pick<MIChipProps, 'color' | 'variant'>" },
        defaultValue: { summary: "{ color: 'neutral', variant: 'filled' }" },
      },
    },
    icon: {
      control: false,
      description:
        'Icona decorativa a sinistra del titolo (icona, icona di stato o avatar), nascosta agli screen reader. Nel Playground si prova con il controllo iconOption.',
      table: { category: 'MIAccordion', type: { summary: 'ReactNode' } },
    },
    headingLevel: {
      options: [2, 3, 4, 5, 6],
      control: { type: 'select' },
      description: "Livello dell'heading che contiene l'header.",
      table: { category: 'MIAccordion', defaultValue: { summary: '3' } },
    },
    defaultExpanded: {
      control: { type: 'boolean' },
      description: "Stato iniziale dell'item (modalità non controllata).",
      table: { category: 'MIAccordion', defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: "Blocca l'apertura e la chiusura dell'item.",
      table: { category: 'MIAccordion', defaultValue: { summary: 'false' } },
    },
    loading: {
      control: { type: 'boolean' },
      description:
        'Mostra lo skeleton al posto del contenuto. Il componente non annuncia il caricamento: lo fa la pagina con la sua live region.',
      table: { category: 'MIAccordion', defaultValue: { summary: 'false' } },
    },
    expanded: {
      control: false,
      description: 'Stato aperto/chiuso in modalità controllata, da usare insieme a onChange.',
      table: { category: 'MIAccordion', type: { summary: 'boolean' } },
    },
    onChange: {
      control: false,
      description: "Chiamata quando l'utente apre o chiude l'item.",
      table: {
        category: 'MIAccordion',
        type: { summary: '(event: SyntheticEvent, expanded: boolean) => void' },
      },
    },
    slots: {
      control: false,
      description: 'Componente che sostituisce lo skeleton di default durante il caricamento.',
      table: {
        category: 'MIAccordion',
        type: { summary: '{ skeleton?: ComponentType<MIAccordionSkeletonProps> }' },
      },
    },
    slotProps: {
      control: false,
      description: 'Props passate allo skeleton (es. numero di righe).',
      table: {
        category: 'MIAccordion',
        type: { summary: '{ skeleton?: { rows?: number } }' },
        defaultValue: { summary: '{ skeleton: { rows: 6 } }' },
      },
    },
    sx: {
      control: false,
      description:
        'Solo margini (m, mt, mb, mx…): il componente si posiziona ma non si restilizza.',
      table: { category: 'MIAccordion', type: { summary: 'MarginSxProps' } },
    },
    id: {
      control: false,
      description: 'Id del contenitore. Sono ammessi anche gli attributi data-* (es. data-testid).',
      table: { category: 'MIAccordion', type: { summary: 'string' } },
    },
    iconOption: {
      options: ['none', 'icon', 'status', 'avatar'],
      control: { type: 'radio' },
      description: 'Preset Storybook per la prop icon.',
      table: { category: 'Storybook controls' },
    },
  },
  render: ({ iconOption = 'none', ...args }) => (
    <MIAccordion {...args} icon={icons[iconOption]}>
      <SampleContent />
    </MIAccordion>
  ),
};

export default meta;

type Story = StoryObj<MIAccordionStoryArgs>;

export const Playground: Story = {};

const slotCombinations = [
  { icon: true, badge: true, description: true },
  { icon: true, badge: true, description: false },
  { icon: true, badge: false, description: true },
  { icon: true, badge: false, description: false },
  { icon: false, badge: true, description: true },
  { icon: false, badge: true, description: false },
  { icon: false, badge: false, description: true },
  { icon: false, badge: false, description: false },
];

export const SlotCombinations: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Le 8 combinazioni di icona, badge e descrizione, chiuse e aperte. Titolo e chevron non cambiano mai posizione.',
      },
    },
  },
  render: () => (
    <Stack spacing={2}>
      {[false, true].flatMap((expanded) =>
        slotCombinations.map(({ icon, badge, description }) => {
          const name = [icon && 'icona', badge && 'badge', description && 'descrizione']
            .filter(Boolean)
            .join(', ');
          return (
            <MIAccordion
              key={`${expanded}-${name}`}
              title={`${expanded ? 'Aperto' : 'Chiuso'}: ${name || 'solo titolo'}`}
              icon={icon ? icons.icon : undefined}
              badge={badge ? 'Stato' : undefined}
              description={description ? 'Testo di supporto' : undefined}
              defaultExpanded={expanded}
            >
              <SampleContent />
            </MIAccordion>
          );
        })
      )}
    </Stack>
  ),
};

export const IconVariants: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'La prop icon accetta icone semplici, icone di stato colorate o avatar. MIAccordion non ne modifica colore né dimensione.',
      },
    },
  },
  render: () => (
    <Stack spacing={2}>
      <MIAccordion title="Icona semplice" icon={icons.icon}>
        <SampleContent />
      </MIAccordion>
      <MIAccordion title="Icona di stato" icon={icons.status}>
        <SampleContent />
      </MIAccordion>
      <MIAccordion title="Avatar" icon={icons.avatar} badge="Referente">
        <SampleContent />
      </MIAccordion>
    </Stack>
  ),
};

export const Disabled: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Da disabilitato l'item ha sfondo grigio, icona, titolo e badge attenuati e il badge diventa outlined mantenendo il suo colore.",
      },
    },
  },
  render: () => (
    <Stack spacing={2}>
      <MIAccordion title="Regole di inoltro" icon={icons.icon} badge="Stato" disabled>
        <SampleContent />
      </MIAccordion>
      <MIAccordion
        title="Badge colorato"
        icon={icons.status}
        badge="Attivo"
        badgeProps={{ color: 'success' }}
        disabled
      >
        <SampleContent />
      </MIAccordion>
      <MIAccordion title="Disabilitato e aperto" badge="Stato" disabled defaultExpanded>
        <SampleContent />
      </MIAccordion>
    </Stack>
  ),
};

export const Loading: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Durante il caricamento solo il contenuto diventa skeleton: l'header resta visibile e cliccabile.",
      },
    },
  },
  render: () => (
    <MIAccordion
      title="Configurazione del servizio"
      icon={icons.icon}
      badge="Stato"
      description="Non mostrata durante il caricamento"
      loading
      defaultExpanded
    >
      <SampleContent />
    </MIAccordion>
  ),
};

const ControlledGroup = () => {
  const [expanded, setExpanded] = useState<string | false>('dati');

  const items = [
    { id: 'dati', title: 'Informazioni generali' },
    { id: 'config', title: 'Configurazione del servizio' },
    { id: 'inoltro', title: 'Regole di inoltro' },
  ];

  return (
    <Stack spacing={2}>
      {items.map(({ id, title }) => (
        <MIAccordion
          key={id}
          title={title}
          icon={icons.icon}
          expanded={expanded === id}
          onChange={(_, isExpanded) => setExpanded(isExpanded ? id : false)}
        >
          <SampleContent />
        </MIAccordion>
      ))}
    </Stack>
  );
};

export const Group: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Più item impilati con 16px di spazio. Il gruppo lo gestisce la pagina: in questo esempio, con expanded e onChange, si apre un item alla volta.',
      },
    },
  },
  render: () => <ControlledGroup />,
};

export const StressTest: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <MIAccordion
      title="Titolo molto lungo che va a capo su più righe per verificare che icona e chevron restino allineati in alto anche su viewport strette"
      icon={icons.avatar}
      badge="Badge con un testo più lungo del solito"
      description="Descrizione lunga che occupa più righe e deve restare leggibile, con la giusta spaziatura rispetto all'header e al contenuto sottostante."
      defaultExpanded
    >
      <SampleContent titleComponent="h4" />
      <SampleContent title="Contatti" rows={contactRows} titleComponent="h4" />
    </MIAccordion>
  ),
};

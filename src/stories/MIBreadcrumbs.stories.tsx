import { Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';

import { MIBreadcrumbItem, MIBreadcrumbs } from '../components/MIBreadcrumbs';

type MIBreadcrumbsStoryArgs = ComponentProps<typeof MIBreadcrumbs> & {
  navigationMode: 'link' | 'action';
  firstItemLabel: string;
  secondItemLabel: string;
  currentItemLabel: string;
};

const meta: Meta<MIBreadcrumbsStoryArgs> = {
  title: 'Components/MIBreadcrumbs',
  component: MIBreadcrumbs,
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
    controls: {
      include: [
        'variant',
        'navigationMode',
        'backButtonLabel',
        'aria-label',
        'firstItemLabel',
        'secondItemLabel',
        'currentItemLabel',
      ],
    },
  },
  args: {
    variant: 'extended',
    navigationMode: 'link',
    backButtonLabel: 'Indietro',
    'aria-label': 'Percorso di navigazione',
    firstItemLabel: 'Dashboard',
    secondItemLabel: 'Elenco ricevute',
    currentItemLabel: 'Dettaglio ricevuta',
  },
  argTypes: {
    variant: {
      options: ['extended', 'compact'],
      control: { type: 'radio' },
      description: 'Determina se mostrare la gerarchia completa oppure il solo pulsante Indietro.',
    },
    navigationMode: {
      options: ['link', 'action'],
      control: { type: 'radio' },
      description:
        'Controllo Storybook: configura gli elementi precedenti come link tramite href oppure come azioni tramite onClick.',
      table: {
        category: 'Storybook controls',
      },
    },
    backButtonLabel: {
      control: { type: 'text' },
      description:
        'Etichetta del pulsante mostrato nella variante compact e alle risoluzioni mobile.',
    },
    'aria-label': {
      control: { type: 'text' },
      description: 'Etichetta accessibile dell’elemento di navigazione che contiene le breadcrumb.',
    },
    firstItemLabel: {
      control: { type: 'text' },
      description: 'Controllo Storybook: etichetta del primo elemento della gerarchia.',
      table: {
        category: 'Storybook controls',
      },
    },
    secondItemLabel: {
      control: { type: 'text' },
      description: 'Controllo Storybook: etichetta del secondo elemento della gerarchia.',
      table: {
        category: 'Storybook controls',
      },
    },
    currentItemLabel: {
      control: { type: 'text' },
      description: 'Controllo Storybook: etichetta della pagina corrente.',
      table: {
        category: 'Storybook controls',
      },
    },
    children: {
      control: false,
      description:
        'Elenco ordinato di MIBreadcrumbItem che rappresenta la gerarchia di navigazione.',
    },
    backButtonAction: {
      control: false,
      description: 'Callback eseguita quando viene attivato il pulsante Indietro.',
    },
    sx: {
      control: false,
    },
  },
  render: ({
    navigationMode,
    firstItemLabel,
    secondItemLabel,
    currentItemLabel,
    variant,
    backButtonLabel,
    'aria-label': ariaLabel,
  }) => {
    const items =
      navigationMode === 'link'
        ? [
            <MIBreadcrumbItem key="dashboard" label={firstItemLabel} href="/dashboard" />,
            <MIBreadcrumbItem key="receipts" label={secondItemLabel} href="/ricevute" />,
            <MIBreadcrumbItem key="current" label={currentItemLabel} current />,
          ]
        : [
            <MIBreadcrumbItem
              key="dashboard"
              label={firstItemLabel}
              onClick={() => console.info('Navigazione alla dashboard')}
            />,
            <MIBreadcrumbItem
              key="receipts"
              label={secondItemLabel}
              onClick={() => console.info('Navigazione all’elenco ricevute')}
            />,
            <MIBreadcrumbItem key="current" label={currentItemLabel} current />,
          ];

    return (
      <MIBreadcrumbs
        variant={variant}
        backButtonLabel={backButtonLabel}
        backButtonAction={() => console.info('Navigazione indietro')}
        aria-label={ariaLabel}
      >
        {items}
      </MIBreadcrumbs>
    );
  },
};

export default meta;

type Story = StoryObj<MIBreadcrumbsStoryArgs>;

export const Playground: Story = {};

export const LinkNavigation: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <MIBreadcrumbs aria-label="Percorso di navigazione">
      <MIBreadcrumbItem label="Dashboard" href="/dashboard" />
      <MIBreadcrumbItem label="Elenco ricevute" href="/ricevute" />
      <MIBreadcrumbItem label="Dettaglio ricevuta" current />
    </MIBreadcrumbs>
  ),
};

export const ActionNavigation: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <MIBreadcrumbs aria-label="Percorso di navigazione">
      <MIBreadcrumbItem
        label="Dashboard"
        onClick={() => console.info('Navigazione alla dashboard')}
      />
      <MIBreadcrumbItem
        label="Elenco ricevute"
        onClick={() => console.info('Navigazione all’elenco ricevute')}
      />
      <MIBreadcrumbItem label="Dettaglio ricevuta" current />
    </MIBreadcrumbs>
  ),
};

export const Extended: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <MIBreadcrumbs
      variant="extended"
      aria-label="Percorso di navigazione"
      backButtonLabel="Indietro"
      backButtonAction={() => console.info('Navigazione indietro')}
    >
      <MIBreadcrumbItem label="Dashboard" href="/dashboard" />
      <MIBreadcrumbItem label="Elenco ricevute" href="/ricevute" />
      <MIBreadcrumbItem label="Dettaglio ricevuta" current />
    </MIBreadcrumbs>
  ),
};

export const Compact: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <MIBreadcrumbs
      variant="compact"
      aria-label="Navigazione alla pagina precedente"
      backButtonLabel="Elenco ricevute"
      backButtonAction={() => console.info('Navigazione all’elenco ricevute')}
    />
  ),
};

export const Variants: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <Stack direction="column" spacing={4} sx={{ alignItems: 'flex-start' }}>
      <Stack spacing={1}>
        <Typography variant="caption">Extended</Typography>

        <MIBreadcrumbs variant="extended" aria-label="Percorso di navigazione">
          <MIBreadcrumbItem label="Dashboard" href="/dashboard" />
          <MIBreadcrumbItem label="Elenco ricevute" href="/ricevute" />
          <MIBreadcrumbItem label="Dettaglio ricevuta" current />
        </MIBreadcrumbs>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="caption">Compact</Typography>

        <MIBreadcrumbs
          variant="compact"
          aria-label="Navigazione alla pagina precedente"
          backButtonLabel="Elenco ricevute"
          backButtonAction={() => console.info('Navigazione all’elenco ricevute')}
        />
      </Stack>
    </Stack>
  ),
};

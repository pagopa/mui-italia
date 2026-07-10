import { MIAlert } from '@components/MIAlert';
import { Box, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';

type MIAlertStoryArgs = ComponentProps<typeof MIAlert> & {
  content?: string;
  enableAction?: boolean;
  actionType?: 'link' | 'button';
  actionLabel?: string;
  actionHref?: string;
  openInNewTab?: boolean;
};

const DEFAULT_TITLE = "Titolo default dell'Alert";
const DEFAULT_MESSAGE = 'Aggiungi un messaggio esplicativo sul motivo della segnalazione.';
const DEFAULT_CTA = 'Ok, ho capito!';
const LONG_UNBROKEN =
  'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong';

const meta: Meta<MIAlertStoryArgs> = {
  title: 'Components/MIAlert',
  component: MIAlert,
  parameters: {
    layout: 'padded',
    controls: {
      include: [
        'variant',
        'severity',
        'title',
        'content',
        'ctaWrapSize',
        'enableAction',
        'actionType',
        'actionLabel',
        'actionHref',
        'openInNewTab',
      ],
    },
  },
  args: {
    variant: 'default',
    severity: 'success',
    title: DEFAULT_TITLE,
    content: DEFAULT_MESSAGE,
    ctaWrapSize: 'normal',
    enableAction: true,
    actionType: 'link',
    actionLabel: DEFAULT_CTA,
    actionHref: 'https://test.com',
    openInNewTab: false,
  },
  argTypes: {
    severity: {
      description: 'Severità dell’alert. Determina colore e icona.',
      control: { type: 'radio' },
      options: ['success', 'error', 'info', 'warning'],
      table: {
        type: { summary: "'success' | 'info' | 'warning' | 'error'" },
        defaultValue: { summary: 'success' },
      },
    },
    variant: {
      description:
        'Variante dell’alert. `default` supporta titolo e CTA; `header` non supporta né titolo né CTA.',
      control: { type: 'radio' },
      options: ['default', 'header'],
      table: {
        type: { summary: "'default' | 'header'" },
        defaultValue: { summary: 'default' },
      },
    },
    title: {
      description: 'Titolo dell’alert. Disponibile solo per la variante `default`.',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    ctaWrapSize: {
      description:
        'Soglia usata per determinare quando la CTA va a capo rispetto al contenuto: `tight`, `normal` o `wide`.',
      control: { type: 'radio' },
      options: ['tight', 'normal', 'wide'],
      table: {
        type: { summary: "'tight' | 'normal' | 'wide'" },
        defaultValue: { summary: 'normal' },
      },
    },
    content: {
      description: 'Controllo Storybook: testo usato come children del componente.',
      control: { type: 'text' },
      table: {
        category: 'Storybook controls',
      },
    },
    enableAction: {
      description: 'Controllo Storybook: abilita o disabilita la CTA.',
      control: { type: 'boolean' },
      table: {
        category: 'Storybook controls',
      },
    },
    actionType: {
      description: 'Controllo Storybook: tipo di CTA da generare.',
      control: { type: 'radio' },
      options: ['link', 'button'],
      if: { arg: 'enableAction', eq: true },
      table: {
        category: 'Storybook controls',
      },
    },
    actionLabel: {
      description: 'Controllo Storybook: etichetta visibile della CTA.',
      control: { type: 'text' },
      if: { arg: 'enableAction', eq: true },
      table: {
        category: 'Storybook controls',
      },
    },
    actionHref: {
      description: 'Controllo Storybook: URL usato quando la CTA è di tipo link.',
      control: { type: 'text' },
      if: { arg: 'enableAction', eq: true },
      table: {
        category: 'Storybook controls',
      },
    },
    openInNewTab: {
      description:
        'Controllo Storybook: apre il link in una nuova scheda quando la CTA è di tipo link.',
      control: { type: 'boolean' },
      if: { arg: 'enableAction', eq: true },
      table: {
        category: 'Storybook controls',
      },
    },
    children: {
      control: false,
      table: {
        disable: true,
      },
    },
    action: {
      control: false,
      table: {
        disable: true,
      },
    },
    sx: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  render: ({
    variant = 'default',
    severity = 'success',
    title,
    content,
    ctaWrapSize = 'normal',
    enableAction,
    actionType,
    actionLabel,
    actionHref,
    openInNewTab,
    id,
    children,
  }) => {
    const alertContent = content ?? children ?? DEFAULT_MESSAGE;

    if (variant === 'header') {
      return (
        <MIAlert id={id} variant="header" severity={severity} ctaWrapSize={ctaWrapSize}>
          {alertContent}
        </MIAlert>
      );
    }

    const action =
      enableAction && actionLabel
        ? actionType === 'button'
          ? {
              label: actionLabel,
              onClick: () => console.log('MIAlert CTA clicked'),
            }
          : {
              label: actionLabel,
              href: actionHref,
              target: openInNewTab ? '_blank' : '_self',
            }
        : undefined;

    return (
      <MIAlert
        id={id}
        variant="default"
        severity={severity}
        title={title}
        action={action}
        ctaWrapSize={ctaWrapSize}
      >
        <Typography variant="body1">{alertContent}</Typography>
      </MIAlert>
    );
  },
};

export default meta;

type Story = StoryObj<MIAlertStoryArgs>;

export const Playground: Story = {};

export const Severities: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Stack spacing={2} sx={{ width: 720, maxWidth: '100%' }}>
      {(['success', 'info', 'warning', 'error'] as const).map((severity) => (
        <MIAlert key={severity} severity={severity} title={`Severity ${severity}`}>
          Messaggio di esempio per la severità <strong>{severity}</strong>.
        </MIAlert>
      ))}
    </Stack>
  ),
};

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Stack spacing={3} sx={{ width: 720, maxWidth: '100%' }}>
      <Box>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Default
        </Typography>
        <MIAlert severity="success" title={DEFAULT_TITLE}>
          {DEFAULT_MESSAGE}
        </MIAlert>
      </Box>

      <Box>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Header
        </Typography>
        <MIAlert variant="header" severity="success">
          Messaggio compatto per la variante header.
        </MIAlert>
      </Box>
    </Stack>
  ),
};

export const CtaExamples: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Stack spacing={2} sx={{ width: 720, maxWidth: '100%' }}>
      <MIAlert
        severity="info"
        title="CTA link"
        action={{
          label: DEFAULT_CTA,
          href: 'https://test.com',
          target: '_self',
        }}
      >
        La CTA viene renderizzata come link quando riceve la prop <code>href</code>.
      </MIAlert>

      <MIAlert
        severity="warning"
        title="CTA bottone"
        action={{
          label: DEFAULT_CTA,
          onClick: () => console.log('MIAlert CTA clicked'),
        }}
      >
        La CTA viene renderizzata come bottone quando riceve una callback <code>onClick</code>.
      </MIAlert>
    </Stack>
  ),
};

export const CtaWrapSizes: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Stack spacing={3} sx={{ width: 720, maxWidth: '100%' }}>
      {(['tight', 'normal', 'wide'] as const).map((ctaWrapSize) => (
        <Box key={ctaWrapSize}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            ctaWrapSize: {ctaWrapSize}
          </Typography>

          <Box sx={{ width: 488, maxWidth: '100%' }}>
            <MIAlert
              severity="info"
              title="Container stretto"
              ctaWrapSize={ctaWrapSize}
              action={{
                label: DEFAULT_CTA,
                href: 'https://test.com',
              }}
            >
              Il contenuto dell’alert e la CTA si adattano alla larghezza disponibile del
              contenitore.
            </MIAlert>
          </Box>
        </Box>
      ))}
    </Stack>
  ),
};

export const SmallContainer: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Box sx={{ width: 488, maxWidth: '100%' }}>
      <MIAlert
        severity="info"
        title="Container stretto"
        action={{
          label: DEFAULT_CTA,
          href: 'https://test.com',
        }}
      >
        Il layout dell’alert permette alla CTA di andare a capo quando lo spazio orizzontale non è
        sufficiente.
      </MIAlert>
    </Box>
  ),
};

export const NoTitle: Story = {
  args: {
    title: undefined,
    enableAction: false,
  },
};

export const NoCta: Story = {
  args: {
    enableAction: false,
  },
};

export const CustomNodeDescription: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <MIAlert severity="error" title="Titolo dell'Alert">
      <Box component="span">
        Non è stato possibile completare alcuni passaggi. Controlla i seguenti elementi:
        <Box component="ul" sx={{ my: 1, pl: 2.5 }}>
          <li>Verifica i dati anagrafici inseriti</li>
          <li>Controlla l’indirizzo email</li>
          <li>
            Consulta la{' '}
            <Box component="a" href="https://test.com" target="_blank" rel="noopener noreferrer">
              guida online
            </Box>{' '}
            per maggiori dettagli
          </li>
        </Box>
      </Box>
    </MIAlert>
  ),
};

export const StressUnbroken: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <MIAlert
      severity="warning"
      title={`Very long title ${LONG_UNBROKEN}`}
      action={{
        label: DEFAULT_CTA,
        href: 'https://test.com',
      }}
    >
      {`${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`}
    </MIAlert>
  ),
};

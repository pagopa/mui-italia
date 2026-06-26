import type { Meta, StoryObj } from '@storybook/react';
import { breakpointsChromaticValues } from '@theme';
import { MIAlert } from '@components/MIAlert';
import { Box } from '@mui/material';

const componentMaxWidth = 900;

const DEFAULT_TITLE = "Titolo default dell'Alert";
const DEFAULT_MESSAGE = 'Aggiungi un messaggio esplicativo sul motivo della segnalazione.';
const DEFAULT_CTA = 'Ok, ho capito!';

const LONG_UNBROKEN =
  'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong';

const meta: Meta<React.ComponentProps<typeof MIAlert>> = {
  title: 'MUI Components/Feedback/MIAlert',
  component: MIAlert,
  parameters: {
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 2, pb: 4, boxSizing: 'border-box', width: '100%' }}>
        <Box sx={{ maxWidth: '100%', mx: 'auto' }}>
          <Story />
        </Box>
      </Box>
    ),
  ],
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
        'Variante dell’alert. `default` mostra bordo, titolo e azione; `header` è una banda compatta a tutta larghezza senza titolo né azione.',
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
      table: { type: { summary: 'string' } },
    },
    children: {
      description:
        'Contenuto principale dell’alert. Accetta una semplice stringa oppure un `ReactNode` custom (es. link, liste, testo formattato).',
      control: { type: 'text' },
      table: { type: { summary: 'ReactNode' } },
    },
    action: {
      description:
        'CTA opzionale (bottone o link). Disponibile solo per la variante `default`.',
      table: { disable: true },
    },
  },
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof MIAlert>>;

const withHeaderContext = (Story: React.ElementType) => (
  <div
    style={{
      padding: 0,
      backgroundColor: '#f5f5f5',
      border: '2px dashed #ccc',
      minHeight: '200px',
    }}
  >
    <p style={{ marginTop: 0, fontFamily: 'sans-serif', color: '#666' }}>
      Parent Container - simula un header di pagina con larghezza limitata e sfondo diverso. L'Alert
      dovrebbe adattarsi a questo contesto, occupando tutta la larghezza disponibile senza causare
      overflow o problemi di layout.
    </p>

    <Story />
  </div>
);

/* ------------------------------ Normal stories ------------------------------ */

export const DefaultCTALink: Story = {
  args: {
    title: DEFAULT_TITLE,
    children: DEFAULT_MESSAGE,
    action: {
      label: DEFAULT_CTA,
      href: 'https://test.com',
      target: '_self',
    },
  },
};

export const DefaultCTAClick: Story = {
  args: {
    title: DEFAULT_TITLE,
    children: DEFAULT_MESSAGE,
    action: {
      label: DEFAULT_CTA,
      onClick: () => console.log('CTA clicked'),
    },
  },
};

export const NoCTA: Story = {
  args: {
    title: DEFAULT_TITLE,
    children: DEFAULT_MESSAGE,
  },
};

export const NoTitle: Story = {
  args: {
    children: DEFAULT_MESSAGE,
  },
};

export const NoTitleWithCTA: Story = {
  args: {
    children: DEFAULT_MESSAGE,
    action: {
      label: DEFAULT_CTA,
      href: 'https://test.com',
      target: '_self',
    },
  },
};

export const CustomNodeDescription: Story = {
  args: {
    title: DEFAULT_TITLE,
    children: (
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
    ),
  },
};

export const HeaderVariant: Story = {
  args: {
    variant: 'header',
    severity: 'success',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, at convallis nisl.',
  },
  decorators: [withHeaderContext],
};

/* ------------------------------ Stress-test stories ------------------------------ */

export const StressUnbroken: Story = {
  args: {
    title: `Very long title ${LONG_UNBROKEN}`,
    children: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
    action: {
      label: DEFAULT_CTA,
      href: 'https://test.com',
      target: '_self',
    },
  },
};

export const StressUnbrokenNoTitle: Story = {
  args: {
    children: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
    action: {
      label: DEFAULT_CTA,
      href: 'https://test.com',
      target: '_self',
    },
  },
};

export const StressUnbrokenHeaderVariant: Story = {
  args: {
    variant: 'header',
    children: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
  },
  decorators: [withHeaderContext],
};

'use client';

import { MISnackbar, type MISnackbarProps } from '@components/MISnackbar';
import { Box, Button } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { breakpointsChromaticValues } from '@theme';
import { createPortal } from 'react-dom';
import { useArgs } from 'storybook/preview-api';

type MISnackbarStoryArgs = MISnackbarProps & {
  horizontal: 'left' | 'center' | 'right';
  vertical: 'top' | 'bottom';
};

const meta: Meta<MISnackbarStoryArgs> = {
  component: MISnackbar,
  title: 'Components/MISnackbar',
  tags: ['!dev'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      include: [
        'severity',
        'title',
        'description',
        'errorCode',
        'errorCodeAriaLabel',
        'horizontal',
        'vertical',
      ],
    },
    docs: { story: { inline: false, height: '360px' } },
    chromatic: { viewports: breakpointsChromaticValues },
  },
  decorators: [
    (Story, context) =>
      typeof document === 'undefined' ? (
        <></>
      ) : context.viewMode === 'docs' ? (
        <Box sx={{ minHeight: '20rem', p: 3 }}>
          <Story />
        </Box>
      ) : (
        createPortal(
          <Box sx={{ minHeight: '20rem', p: 3 }}>
            <Story />
          </Box>,
          document.body
        )
      ),
  ],
  args: {
    open: false,
    severity: 'success',
    title: 'Modifiche salvate',
    description: 'Le informazioni del profilo sono state aggiornate.',
    horizontal: 'left',
    vertical: 'bottom',
  },
  argTypes: {
    open: { control: false, table: { disable: true } },
    severity: {
      control: 'radio',
      options: ['success', 'info', 'warning', 'error'],
      description: 'Severità del messaggio: determina colore e icona.',
    },
    title: { control: 'text', description: 'Titolo opzionale del messaggio.' },
    description: { control: 'text', description: 'Descrizione obbligatoria del messaggio.' },
    errorCode: {
      control: 'text',
      if: { arg: 'severity', eq: 'error' },
      description: 'Codice copiabile, disponibile solo con severity="error".',
    },
    errorCodeAriaLabel: {
      control: 'text',
      if: { arg: 'severity', eq: 'error' },
      description: 'Nome accessibile del campo codice errore. Disponibile solo per gli errori.',
    },
    horizontal: {
      control: 'inline-radio',
      options: ['left', 'center', 'right'],
      description: 'Controllo Storybook: posizione orizzontale di anchorOrigin.',
      table: { category: 'Controlli Storybook' },
    },
    vertical: {
      control: 'inline-radio',
      options: ['top', 'bottom'],
      description: 'Controllo Storybook: posizione verticale di anchorOrigin.',
      table: { category: 'Controlli Storybook' },
    },
    anchorOrigin: { control: false, table: { disable: true } },
    onClose: { control: false, table: { disable: true } },
  },
  render: function RenderPlayground({
    open,
    severity,
    title,
    description,
    errorCode,
    errorCodeAriaLabel,
    horizontal,
    vertical,
  }) {
    const [, updateArgs] = useArgs<MISnackbarStoryArgs>();
    const handleClose = () => updateArgs({ open: false });

    return (
      <>
        <Button variant="contained" onClick={() => updateArgs({ open: true })}>
          Mostra notifica
        </Button>
        {severity === 'error' ? (
          <MISnackbar
            open={open}
            severity="error"
            title={title}
            description={description}
            errorCode={errorCode}
            errorCodeAriaLabel={errorCodeAriaLabel}
            anchorOrigin={{ horizontal, vertical }}
            onClose={handleClose}
          />
        ) : (
          <MISnackbar
            open={open}
            severity={severity}
            title={title}
            description={description}
            anchorOrigin={{ horizontal, vertical }}
            onClose={handleClose}
          />
        )}
      </>
    );
  },
};

export default meta;
type Story = StoryObj<MISnackbarStoryArgs>;

export const Playground: Story = {
  parameters: {
    docs: { story: { inline: true } },
  },
};

export const Default: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <MISnackbar
      open
      severity="success"
      title="Modifiche salvate"
      description="Le informazioni del profilo sono state aggiornate."
      onClose={() => {}}
    />
  ),
};

export const Info: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <MISnackbar
      open
      severity="info"
      title="Richiesta ricevuta"
      description="Riceverai una comunicazione al termine della verifica."
      onClose={() => {}}
    />
  ),
};

export const Warning: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <MISnackbar
      open
      severity="warning"
      title="Sessione in scadenza"
      description="Salva le modifiche prima di continuare."
      onClose={() => {}}
    />
  ),
};

export const Error: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <MISnackbar
      open
      severity="error"
      title="Salvataggio non riuscito"
      description="Le modifiche non sono state salvate. Riprova."
      onClose={() => {}}
    />
  ),
};

export const SnackbarWithoutTitle: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <MISnackbar
      open
      severity="success"
      description="Il documento è stato caricato."
      onClose={() => {}}
    />
  ),
};

export const SnackbarWithErrorCode: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <MISnackbar
      open
      severity="error"
      title="Operazione non completata"
      description="Contatta l'assistenza e comunica il codice errore."
      errorCode="ERR-PROFILE-403"
      errorCodeAriaLabel="Codice errore: ERR-PROFILE-403"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      onClose={() => {}}
    />
  ),
};

export const LongContent: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <MISnackbar
      open
      severity="warning"
      title="Non tutte le modifiche sono state salvate"
      description="La connessione è stata interrotta durante il salvataggio delle informazioni del profilo. Verifica la connessione e riprova prima di chiudere questa pagina, per non perdere i dati inseriti."
      onClose={() => {}}
    />
  ),
};

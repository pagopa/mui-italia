import { Box, Checkbox, FormControlLabel, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { breakpointsChromaticValues } from '@theme';
import { useState, type ComponentProps } from 'react';
import { useArgs } from 'storybook/preview-api';

import { MIButton } from '@components/MIButton';
import { MIDialog } from '@components/MIDialog';
import { MITextField } from '@components/MITextField';
import { CopyToClipboardButton } from '@components/CopyToClipboardButton';
import successCheckIcon from '../assets/MIDialogSuccessCheck.svg';

const componentMaxWidth = 800;

type MIDialogActionColor = NonNullable<ComponentProps<typeof MIButton>['color']>;
type MIDialogStoryContent = 'text' | 'checkbox' | 'error' | 'accessible-name';

type MIDialogStoryArgs = Pick<
  ComponentProps<typeof MIDialog>,
  | 'onClose'
  | 'onCloseButtonClick'
  | 'open'
  | 'title'
  | 'description'
  | 'maxWidth'
  | 'fullWidth'
  | 'scroll'
  | 'closeButtonAriaLabel'
> & {
  contentMode: MIDialogStoryContent;
  footerMode: 'actions' | 'custom' | 'hidden';
  primaryActionColor: MIDialogActionColor;
  secondaryActionColor: MIDialogActionColor;
  showTitle: boolean;
};

type DialogExampleProps = Omit<
  MIDialogStoryArgs,
  | 'closeButtonAriaLabel'
  | 'onClose'
  | 'onCloseButtonClick'
  | 'footerMode'
  | 'contentMode'
  | 'primaryActionColor'
  | 'secondaryActionColor'
  | 'showTitle'
> & {
  closeButtonAriaLabel?: string;
  onOpen: () => void;
  onRequestClose: () => void;
  content?: MIDialogStoryContent;
  footerMode?: MIDialogStoryArgs['footerMode'];
  primaryActionColor?: MIDialogActionColor;
  secondaryActionColor?: MIDialogActionColor;
  showSecondaryAction?: boolean;
  showTitle?: boolean;
};

function DialogExample({
  closeButtonAriaLabel = 'Chiudi finestra',
  open,
  onOpen,
  onRequestClose,
  maxWidth,
  fullWidth,
  scroll,
  title,
  description,
  content = 'text',
  footerMode = 'actions',
  primaryActionColor = 'primary',
  secondaryActionColor = 'primary',
  showSecondaryAction = true,
  showTitle = true,
}: DialogExampleProps) {
  const renderFooter =
    footerMode === 'custom' ? (
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2.5}
        sx={(theme) => ({
          padding: theme.spacing(2, 3),
          '& > *': {
            [theme.breakpoints.down('md')]: {
              width: '100%',
            },
          },
        })}
      >
        <MIButton variant="text" onClick={onRequestClose}>
          Torna alla richiesta
        </MIButton>
        <MIButton onClick={onRequestClose}>Conferma e invia</MIButton>
      </Stack>
    ) : footerMode === 'hidden' ? null : undefined;

  const showActions = footerMode !== 'hidden';
  const children =
    content === 'checkbox' ? (
      <FormControlLabel control={<Checkbox />} label="Ricevi aggiornamenti sulla richiesta" />
    ) : content === 'error' ? (
      <MITextField
        label=""
        fullWidth
        success
        disabled
        defaultValue="[Codice errore]"
        onDelete={() => alert('Non visibile: sovrascritto da endAdornment custom')}
        InputProps={{ endAdornment: <CopyToClipboardButton value="nome.cognome@example.it" /> }}
      />
    ) : content === 'accessible-name' ? (
      <span id="dialog-content-label">Dettagli della richiesta</span>
    ) : undefined;

  return (
    <>
      <MIButton onClick={onOpen}>Apri finestra</MIButton>
      <MIDialog
        open={open}
        onClose={() => onRequestClose()}
        onCloseButtonClick={() => onRequestClose()}
        maxWidth={maxWidth}
        fullWidth={fullWidth}
        scroll={scroll}
        title={showTitle ? title : undefined}
        aria-labelledby={showTitle ? undefined : 'dialog-content-label'}
        description={description}
        closeButtonAriaLabel={closeButtonAriaLabel}
        secondaryAction={
          showActions && showSecondaryAction
            ? {
                label: 'Annulla',
                onClick: onRequestClose,
                color: secondaryActionColor,
              }
            : undefined
        }
        primaryAction={
          showActions
            ? {
                label: 'Conferma',
                onClick: onRequestClose,
                color: primaryActionColor,
              }
            : undefined
        }
        renderFooter={renderFooter}
      >
        {children}
      </MIDialog>
    </>
  );
}

type StatefulDialogExampleProps = Omit<DialogExampleProps, 'open' | 'onOpen' | 'onRequestClose'> & {
  initialOpen?: boolean;
};

function StatefulDialogExample({ initialOpen = false, ...props }: StatefulDialogExampleProps) {
  const [open, setOpen] = useState(initialOpen);

  return (
    <DialogExample
      {...props}
      open={open}
      onOpen={() => setOpen(true)}
      onRequestClose={() => setOpen(false)}
    />
  );
}

function DelegationRevokedSuccessExample() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <>
      <MIButton onClick={() => setOpen(true)}>Apri finestra</MIButton>
      <MIDialog
        open={open}
        onClose={handleClose}
        onCloseButtonClick={handleClose}
        maxWidth="sm"
        fullWidth
        scroll="body"
        closeButtonAriaLabel="Chiudi finestra"
        aria-labelledby="delegation-revoked-dialog-title"
        aria-describedby="delegation-revoked-dialog-description"
        renderFooter={
          <Box sx={{ display: 'flex', justifyContent: 'center', px: 3, pb: 3 }}>
            <MIButton onClick={handleClose}>Ok, ho capito</MIButton>
          </Box>
        }
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            textAlign: 'center',
          }}
        >
          <Box
            component="img"
            src={successCheckIcon}
            alt=""
            sx={{ width: 64, height: 64, flexShrink: 0 }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography
              id="delegation-revoked-dialog-title"
              component="h2"
              sx={(theme) => ({
                color: theme.colors.neutral.black,
                fontSize: '1.5rem',
                fontWeight: 600,
                lineHeight: '2rem',
              })}
            >
              Operazione conclusa con successo
            </Typography>
            <Typography
              id="delegation-revoked-dialog-description"
              variant="body2"
              color="text.secondary"
            >
              La delega è stata revocata
            </Typography>
          </Box>
        </Box>
      </MIDialog>
    </>
  );
}

const meta: Meta<MIDialogStoryArgs> = {
  title: 'Components/MIDialog',
  component: MIDialog,
  tags: ['!dev'],
  parameters: {
    controls: {
      include: [
        'title',
        'description',
        'contentMode',
        'maxWidth',
        'fullWidth',
        'scroll',
        'closeButtonAriaLabel',
        'showTitle',
        'footerMode',
        'primaryActionColor',
        'secondaryActionColor',
      ],
    },
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
    docs: {
      description: {
        component:
          'Dialog basato su MUI, con props per titolo, descrizione e azioni principali, oltre a componenti dedicati per i contenuti personalizzati.',
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
  args: {
    onClose: () => {},
    onCloseButtonClick: () => {},
    open: false,
    title: 'Conferma la richiesta',
    description: 'Vuoi procedere con l’invio della richiesta?',
    contentMode: 'checkbox',
    showTitle: true,
    footerMode: 'actions',
    primaryActionColor: 'primary',
    secondaryActionColor: 'primary',
    maxWidth: 'sm',
    fullWidth: true,
    scroll: 'paper',
    closeButtonAriaLabel: 'Chiudi finestra',
  },
  argTypes: {
    onCloseButtonClick: {
      control: false,
      table: {
        disable: true,
      },
    },
    onClose: {
      control: false,
      table: {
        disable: true,
      },
    },
    title: {
      control: 'text',
      description: 'Testo del titolo; può essere omesso con “Mostra titolo” disattivato.',
      table: {
        category: 'Controlli Storybook',
        defaultValue: { summary: 'Conferma la richiesta' },
      },
    },
    description: {
      control: 'text',
      description: 'Controllo Storybook: testo descrittivo mostrato nel contenuto.',
      table: {
        category: 'Controlli Storybook',
        defaultValue: {
          summary: 'Vuoi procedere con l’invio della richiesta?',
        },
      },
      contentMode: {
        control: 'select',
        options: ['text', 'checkbox', 'error', 'accessible-name'],
        description: 'Controllo Storybook: seleziona il contenuto aggiuntivo mostrato nel dialog.',
        table: {
          category: 'Controlli Storybook',
          defaultValue: { summary: 'checkbox' },
        },
      },
    },
    showTitle: {
      control: 'boolean',
      description:
        'Controllo Storybook: mostra o omette il titolo, mantenendo un nome accessibile quando è omesso.',
      table: {
        category: 'Controlli Storybook',
        defaultValue: { summary: 'true' },
      },
    },
    footerMode: {
      control: 'radio',
      options: ['actions', 'custom', 'hidden'],
      description:
        'Controllo Storybook: mostra le azioni configurate, un footer personalizzato o nessun footer.',
      table: {
        category: 'Controlli Storybook',
        defaultValue: { summary: 'actions' },
      },
    },
    primaryActionColor: {
      control: 'radio',
      options: ['primary', 'error', 'contrasted'],
      description: 'Colore del pulsante dell’azione primaria.',
      table: {
        category: 'Controlli Storybook',
        defaultValue: { summary: 'primary' },
      },
    },
    secondaryActionColor: {
      control: 'radio',
      options: ['primary', 'error', 'contrasted'],
      description: 'Colore del pulsante dell’azione secondaria.',
      table: {
        category: 'Controlli Storybook',
        defaultValue: { summary: 'primary' },
      },
    },
    maxWidth: {
      control: 'select',
      options: [false, 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Larghezza massima del dialog.',
      table: {
        defaultValue: { summary: "'sm'" },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Estende il dialog fino alla larghezza massima disponibile.',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    scroll: {
      control: 'radio',
      options: ['paper', 'body'],
      description: 'Definisce l’area in cui scorre il contenuto.',
      table: {
        defaultValue: { summary: "'paper'" },
      },
    },
    closeButtonAriaLabel: {
      control: 'text',
      description:
        'Testo accessibile del pulsante di chiusura, configurabile per la localizzazione.',
      table: {
        defaultValue: { summary: 'Chiudi finestra' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<MIDialogStoryArgs>;

export const Playground: Story = {
  parameters: {
    docs: {
      story: {
        inline: true,
      },
    },
  },
  render: function RenderPlayground({
    title,
    description,
    contentMode,
    open,
    closeButtonAriaLabel,
    maxWidth,
    fullWidth,
    scroll,
    showTitle,
    footerMode,
    primaryActionColor,
    secondaryActionColor,
  }) {
    const [, updateArgs] = useArgs<MIDialogStoryArgs>();
    const handleClose = () => updateArgs({ open: false });

    return (
      <DialogExample
        open={open}
        onOpen={() => updateArgs({ open: true })}
        onRequestClose={handleClose}
        closeButtonAriaLabel={closeButtonAriaLabel}
        title={title}
        description={description}
        content={contentMode}
        maxWidth={maxWidth}
        fullWidth={fullWidth}
        scroll={scroll}
        showTitle={showTitle}
        footerMode={footerMode}
        primaryActionColor={primaryActionColor}
        secondaryActionColor={secondaryActionColor}
      />
    );
  },
};

export const Default: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <StatefulDialogExample
      title="Conferma la richiesta"
      description="Vuoi procedere con l’invio della richiesta?"
      content="checkbox"
      maxWidth="sm"
      fullWidth
      scroll="paper"
    />
  ),
};

export const PrimaryActionOnly: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <StatefulDialogExample
      title="Salvare le modifiche"
      description="Vuoi salvare le modifiche apportate?"
      maxWidth="sm"
      fullWidth
      scroll="paper"
      showSecondaryAction={false}
    />
  ),
};

export const ColoredActions: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <StatefulDialogExample
      title="Annullare l’operazione"
      description="L’operazione non può essere ripristinata."
      maxWidth="sm"
      fullWidth
      scroll="paper"
      primaryActionColor="error"
    />
  ),
};

export const CustomFooter: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <StatefulDialogExample
      title="Conferma la richiesta"
      description="Vuoi procedere con l’invio della richiesta?"
      maxWidth="sm"
      fullWidth
      scroll="paper"
      footerMode="custom"
    />
  ),
};

export const HiddenActions: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <StatefulDialogExample
      title="Dettagli della richiesta"
      description="Consulta le informazioni prima di proseguire."
      maxWidth="sm"
      fullWidth
      scroll="paper"
      footerMode="hidden"
    />
  ),
};

export const DialogWithCheckbox: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <StatefulDialogExample
      title="Preferenze di notifica"
      description="Scegli se ricevere aggiornamenti su questa richiesta."
      maxWidth="sm"
      fullWidth
      scroll="paper"
      content="checkbox"
    />
  ),
};

export const DialogWithError: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <StatefulDialogExample
      title="Operazione non riuscita"
      description="Non è stato possibile completare l’operazione."
      maxWidth="sm"
      fullWidth
      scroll="paper"
      content="error"
    />
  ),
};

export const DelegationRevoked: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: function RenderDelegationRevoked() {
    return <DelegationRevokedSuccessExample />;
  },
};

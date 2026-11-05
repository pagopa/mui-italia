import {
  Checkbox,
  DialogContent,
  DialogContentText,
  FormControlLabel,
  Stack,
} from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { breakpointsChromaticValues } from '@theme';
import { useState, type ComponentProps } from 'react';
import { useArgs } from 'storybook/preview-api';

import { MIButton } from '@components/MIButton';
import { MIDialog } from '@components/MIDialog';

const componentMaxWidth = 800;

type MIDialogActionColor = NonNullable<ComponentProps<typeof MIButton>['color']>;

type MIDialogStoryArgs = Pick<
  ComponentProps<typeof MIDialog>,
  | 'onClose'
  | 'onCloseButtonClick'
  | 'open'
  | 'title'
  | 'description'
  | 'maxWidth'
  | 'fullWidth'
  | 'fullScreen'
  | 'scroll'
  | 'closeButtonAriaLabel'
> & {
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
  | 'primaryActionColor'
  | 'secondaryActionColor'
  | 'showTitle'
> & {
  closeButtonAriaLabel?: string;
  onOpen: () => void;
  onRequestClose: () => void;
  content?: 'text' | 'checkbox' | 'error';
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
  fullScreen,
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
    ) : footerMode === 'hidden' ? (
      null
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
        fullScreen={fullScreen}
        scroll={scroll}
        title={showTitle ? title : undefined}
        aria-labelledby={showTitle ? undefined : 'dialog-content-label'}
        description={description}
        closeButtonAriaLabel={closeButtonAriaLabel}
        secondaryAction={
          showSecondaryAction
            ? {
                label: 'Annulla',
                onClick: onRequestClose,
                color: secondaryActionColor,
              }
            : undefined
        }
        primaryAction={{
          label: 'Conferma',
          onClick: onRequestClose,
          color: primaryActionColor,
        }}
        renderFooter={renderFooter}
      >
        {!showTitle && (
          <DialogContent sx={{ px: 3, py: 0 }}>
            <DialogContentText id="dialog-content-label">
              Dettagli della richiesta
            </DialogContentText>
          </DialogContent>
        )}
        {(content === 'checkbox' || content === 'error') && (
          <DialogContent sx={{ px: 3, py: 0 }}>
            {content === 'checkbox' && (
              <FormControlLabel
                control={<Checkbox />}
                label="Ricevi aggiornamenti sulla richiesta"
              />
            )}
            {content === 'error' && (
              <DialogContentText variant="body2">
                Codice di riferimento: <strong>REF-2048</strong>
              </DialogContentText>
            )}
          </DialogContent>
        )}
      </MIDialog>
    </>
  );
}

type StatefulDialogExampleProps = Omit<
  DialogExampleProps,
  'open' | 'onOpen' | 'onRequestClose'
> & {
  initialOpen?: boolean;
};

function StatefulDialogExample({
  initialOpen = false,
  ...props
}: StatefulDialogExampleProps) {
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

const meta: Meta<MIDialogStoryArgs> = {
  title: 'Components/MIDialog',
  component: MIDialog,
  tags: ['!dev'],
  parameters: {
    controls: {
      include: [
        'title',
        'description',
        'maxWidth',
        'fullWidth',
        'fullScreen',
        'scroll',
        'closeButtonAriaLabel',
        'showTitle',
        'footerMode',
        'primaryActionColor',
        'secondaryActionColor',
      ],
    },
    chromatic: {
      viewports: breakpointsChromaticValues.filter(
        (resolution) => resolution <= componentMaxWidth,
      ),
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
    showTitle: true,
    footerMode: 'actions',
    primaryActionColor: 'primary',
    secondaryActionColor: 'primary',
    maxWidth: 'sm',
    fullWidth: true,
    fullScreen: false,
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
      description:
        'Testo del titolo; può essere omesso con “Mostra titolo” disattivato.',
      table: {
        category: 'Controlli Storybook',
        defaultValue: { summary: 'Conferma la richiesta' },
      },
    },
    description: {
      control: 'text',
      description:
        'Controllo Storybook: testo descrittivo mostrato nel contenuto.',
      table: {
        category: 'Controlli Storybook',
        defaultValue: {
          summary: 'Vuoi procedere con l’invio della richiesta?',
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
    fullScreen: {
      control: 'boolean',
      description: 'Mostra il dialog a schermo intero.',
      table: {
        defaultValue: { summary: 'false' },
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
    open,
    closeButtonAriaLabel,
    maxWidth,
    fullWidth,
    fullScreen,
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
        maxWidth={maxWidth}
        fullWidth={fullWidth}
        fullScreen={fullScreen}
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
      maxWidth="sm"
      fullWidth
      fullScreen={false}
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
      fullScreen={false}
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
      fullScreen={false}
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
      fullScreen={false}
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
      fullScreen={false}
      scroll="paper"
      footerMode="hidden"
    />
  ),
};

export const DialogWithoutTitle: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <StatefulDialogExample
      description="Consulta i dettagli della richiesta."
      maxWidth="sm"
      fullWidth
      fullScreen={false}
      scroll="paper"
      showTitle={false}
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
      fullScreen={false}
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
      fullScreen={false}
      scroll="paper"
      content="error"
    />
  ),
};

export const FullScreenDialog: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <StatefulDialogExample
      title="Dettagli della richiesta"
      description="Consulta i dettagli prima di confermare. Puoi chiudere questa finestra o tornare alla schermata precedente."
      maxWidth={false}
      fullWidth
      fullScreen
      scroll="paper"
    />
  ),
};

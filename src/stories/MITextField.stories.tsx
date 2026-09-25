import { CopyToClipboardButton } from '@components/CopyToClipboardButton';
import { MITextField } from '@components/index';
import { EmailOutlined as EmailOutlinedIcon } from '@mui/icons-material';
import { Box, InputAdornment, Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';

type MITextFieldStoryArgs = React.ComponentProps<typeof MITextField> & {
  startAdornmentMode: 'none' | 'email';
  endAdornmentMode: 'none' | 'clear' | 'copy';
  copyValue: string;
};

const fieldSx = {
  width: {
    xs: 'calc(100vw - 48px)',
    sm: 420,
    lg: 892,
  },
  maxWidth: '100%',
} as const;

const defaultArgs = {
  label: 'Indirizzo email',
  placeholder: 'nome.cognome@example.it',
  helperText: 'Inserisci un indirizzo email valido',
  error: false,
  success: false,
  required: false,
  disabled: false,
  fullWidth: true,
  multiline: false,
  minRows: 3,
  startAdornmentMode: 'none',
  endAdornmentMode: 'none',
  copyValue: 'nome.cognome@example.it',
} satisfies MITextFieldStoryArgs;

const noControlsParameters = {
  controls: { hideNoControlsWarning: true },
};

const meta: Meta<MITextFieldStoryArgs> = {
  title: 'Components/MITextField',
  component: MITextField,
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
    controls: {
      include: [
        'label',
        'placeholder',
        'helperText',
        'error',
        'success',
        'required',
        'disabled',
        'fullWidth',
        'multiline',
        'minRows',
        'startAdornmentMode',
        'endAdornmentMode',
        'copyValue',
      ],
    },
  },
  args: defaultArgs,
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Etichetta visualizzata sopra al campo.',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder del campo input.',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Messaggio di supporto mostrato sotto il campo.',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Attiva lo stato di errore.',
    },
    success: {
      control: { type: 'boolean' },
      description: 'Attiva lo stato di successo.',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Mostra l’asterisco e segnala il campo come obbligatorio.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabilita il campo input.',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Estende il campo alla larghezza disponibile.',
    },
    multiline: {
      control: { type: 'boolean' },
      description: 'Abilita il comportamento multilinea.',
    },
    minRows: {
      control: { type: 'number' },
      description: 'Numero minimo di righe visibili in modalità multilinea.',
      if: { arg: 'multiline', eq: true },
    },
    startAdornmentMode: {
      options: ['none', 'email'],
      control: { type: 'radio' },
      description: 'Controllo Storybook: imposta InputProps.startAdornment.',
      table: {
        category: 'Storybook controls',
      },
    },
    endAdornmentMode: {
      options: ['none', 'clear', 'copy'],
      control: { type: 'radio' },
      description:
        'Controllo Storybook: none mostra eventuale icona di validazione, clear abilita onDelete, copy usa endAdornment custom.',
      table: {
        category: 'Storybook controls',
      },
    },
    copyValue: {
      control: { type: 'text' },
      description: 'Controllo Storybook: valore usato dal pulsante di copia.',
      if: { arg: 'endAdornmentMode', eq: 'copy' },
      table: {
        category: 'Storybook controls',
      },
    },
    InputProps: {
      control: false,
    },
    onDelete: {
      control: false,
      table: {
        type: { summary: '() => void' },
      },
    },
  },
  render: ({
    label,
    placeholder,
    helperText,
    error,
    success,
    required,
    disabled,
    fullWidth,
    multiline,
    minRows,
    startAdornmentMode,
    endAdornmentMode,
    copyValue,
  }) => {
    const startAdornment =
      startAdornmentMode === 'email' ? (
        <InputAdornment position="start">
          <EmailOutlinedIcon />
        </InputAdornment>
      ) : undefined;

    const endAdornment =
      endAdornmentMode === 'copy' ? (
        <CopyToClipboardButton value={copyValue} disabled={disabled} />
      ) : undefined;

    const onDelete =
      endAdornmentMode === 'clear' ? () => alert('Azione di pulizia (demo Storybook)') : undefined;

    return (
      <Box sx={fieldSx}>
        <MITextField
          label={label}
          placeholder={placeholder}
          helperText={helperText}
          error={error}
          success={success}
          required={required}
          disabled={disabled}
          fullWidth={fullWidth}
          multiline={multiline}
          minRows={multiline ? minRows : undefined}
          defaultValue={endAdornmentMode === 'copy' ? copyValue : undefined}
          onDelete={onDelete}
          InputProps={{
            startAdornment,
            endAdornment,
          }}
        />
      </Box>
    );
  },
};

export default meta;

type Story = StoryObj<MITextFieldStoryArgs>;

export const Playground: Story = {};

export const WithStartAdornment: Story = {
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story: "Esempio con startAdornment configurato con l'icona email.",
      },
    },
  },
  render: () => (
    <Box sx={fieldSx}>
      <MITextField
        label="Indirizzo email"
        placeholder="nome.cognome@example.it"
        helperText="Inserisci un indirizzo email valido"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  ),
};

export const ValidationStates: Story = {
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story: 'Esempi dei principali stati del componente.',
      },
    },
  },
  render: () => (
    <Stack spacing={2} sx={fieldSx}>
      <MITextField
        label="Indirizzo email"
        value="nome.cognome@example.it"
        fullWidth
        success
        helperText="Indirizzo email valido"
        placeholder="nome.cognome@example.it"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
      <MITextField
        label="Indirizzo email"
        error
        fullWidth
        helperText="Formato email non valido"
        placeholder="nome.cognome@example.it"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  ),
};

export const Disabled: Story = {
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story:
          'Il campo disabilitato mantiene lo stile disabled anche sull’azione di pulizia, quando presente.',
      },
    },
  },
  render: () => (
    <Stack spacing={2} sx={fieldSx}>
      <MITextField
        label="Indirizzo email"
        fullWidth
        disabled
        defaultValue="nome.cognome@example.it"
        helperText="Campo disabilitato"
      />
      <MITextField
        label="Indirizzo email"
        fullWidth
        disabled
        defaultValue="nome.cognome@example.it"
        helperText="Campo disabilitato con azione di pulizia disabilitata"
        onDelete={() => alert('Non raggiungibile perché il pulsante è disabilitato')}
      />
    </Stack>
  ),
};

export const EndAdornmentPriority: Story = {
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story:
          'Ordine di precedenza di endAdornment: custom InputProps.endAdornment > onDelete > icona di validazione.',
      },
    },
  },
  render: () => (
    <Stack spacing={2} sx={fieldSx}>
      <MITextField
        label="Solo validazione"
        fullWidth
        success
        defaultValue="nome.cognome@example.it"
        helperText="Con success=true è mostrata l’icona di validazione."
      />
      <MITextField
        label="Azione clear"
        fullWidth
        success
        defaultValue="nome.cognome@example.it"
        helperText="Con onDelete è mostrata l’icona di pulizia."
        onDelete={() => alert('Azione di pulizia (demo Storybook)')}
      />
      <MITextField
        label="Azione copy custom"
        fullWidth
        success
        defaultValue="nome.cognome@example.it"
        helperText="Con endAdornment custom vengono sostituiti clear e validazione."
        onDelete={() => alert('Non visibile: sovrascritto da endAdornment custom')}
        InputProps={{ endAdornment: <CopyToClipboardButton value="nome.cognome@example.it" /> }}
      />
    </Stack>
  ),
};

export const Multiline: Story = {
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story: 'Configurazione multilinea per testi più lunghi.',
      },
    },
  },
  render: () => (
    <Box sx={fieldSx}>
      <MITextField
        label="Descrizione"
        placeholder="Inserisci una descrizione"
        helperText="Massimo 500 caratteri"
        fullWidth
        multiline
        minRows={4}
      />
    </Box>
  ),
};

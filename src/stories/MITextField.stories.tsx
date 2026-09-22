import { CopyToClipboardButton } from '@components/CopyToClipboardButton';
import { MITextField } from '@components/index';
import { EmailOutlined as EmailOutlinedIcon } from '@mui/icons-material';
import { Box, InputAdornment, Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

type MITextFieldStoryArgs = React.ComponentProps<typeof MITextField>;

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
} satisfies MITextFieldStoryArgs;

const examplesBaseProps = {
  label: 'Indirizzo email',
  placeholder: 'Inserisci il codice',
  fullWidth: true,
} satisfies Partial<MITextFieldStoryArgs>;

const noControlsParameters = {
  controls: { hideNoControlsWarning: true },
};

const MITextFieldCloseIconExample = () => {
  const [value, setValue] = useState('Once upon a time there was a potato in a magical land');

  const onDelete = () => {
    setValue('');
  };

  return (
    <Stack spacing={2} sx={fieldSx}>
      <MITextField
        {...examplesBaseProps}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onDelete={onDelete}
        success
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
  );
};

const MITextFieldCopyIconExample = () => {
  const [value, setValue] = useState('Once upon a time there was a potato in a magical land');

  return (
    <Stack spacing={2} sx={fieldSx}>
      <MITextField
        {...examplesBaseProps}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        success
        placeholder="nome.cognome@example.it"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailOutlinedIcon />
            </InputAdornment>
          ),
          endAdornment: <CopyToClipboardButton value={value} />,
        }}
      />
    </Stack>
  );
};

const meta: Meta<MITextFieldStoryArgs> = {
  title: 'Components/MITextField',
  component: MITextField,
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
  },
  render: ({ fullWidth, ...args }) => (
    <Box sx={fieldSx}>
      <MITextField {...args} fullWidth={fullWidth} />
    </Box>
  ),
};

export default meta;

type Story = StoryObj<MITextFieldStoryArgs>;

export const Default: Story = {};

export const StartIconExample: Story = {
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story: "Esempio di campo con icona email all'inizio.",
      },
    },
  },
  render: () => (
    <Box sx={fieldSx}>
      <MITextField
        {...examplesBaseProps}
        placeholder="nome.cognome@example.it"
        helperText="Inserisci un indirizzo email valido"
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

export const MITextFieldStates: Story = {
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
        {...examplesBaseProps}
        value="nome.cognome@example.it"
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
        {...examplesBaseProps}
        error
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

export const MITextFieldCloseIcon: Story = {
  render: () => <MITextFieldCloseIconExample />,
};

export const MITextFieldCopyIcon: Story = {
  render: () => <MITextFieldCopyIconExample />,
};

export const Multiline: Story = {
  args: {
    label: 'Descrizione',
    placeholder: 'Inserisci una descrizione',
    helperText: 'Massimo 500 caratteri',
    multiline: true,
    minRows: 4,
    onDelete: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Configurazione multilinea per testi più lunghi.',
      },
    },
  },
};

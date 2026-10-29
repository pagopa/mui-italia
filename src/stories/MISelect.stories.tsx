import { MISelect } from '@components/MISelect';
import { MIChip } from '@components/MIChip';
import { MISingleDropdownItem } from '@components/MISingleDropdownItem';
import {
  AccountBalance as AccountBalanceIcon,
  LocationOn as LocationOnIcon,
  ReportRounded as ReportRoundedIcon,
} from '@mui/icons-material';
import {
  Box,
  InputAdornment,
  MenuItem,
  Stack,
  Typography,
  type SelectChangeEvent,
} from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useMemo, useState } from 'react';

type OptionPreset = 'basic' | 'status';

type MISelectStoryArgs = React.ComponentProps<typeof MISelect> & {
  labelText: string;
  optionPreset: OptionPreset;
  selectedValue: string;
  selectedValues: Array<string>;
};

const BASIC_OPTIONS = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

const STATUS_OPTIONS = [
  { value: 'all', label: 'Tutti gli stati' },
  { value: 'delivered', label: 'Consegnata' },
  { value: 'deposited', label: 'Depositata' },
  { value: 'forwarding', label: 'In inoltro' },
];

const meta: Meta<MISelectStoryArgs> = {
  title: 'Components/MISelect',
  component: MISelect,
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
    controls: {
      include: [
        'labelText',
        'helperText',
        'optionPreset',
        'selectedValue',
        'selectedValues',
        'multiple',
        'disabled',
        'readOnly',
        'error',
        'required',
        'name',
        'open',
      ],
    },
  },
  args: {
    labelText: 'Seleziona un valore',
    helperText: '',
    optionPreset: 'basic',
    selectedValue: '2',
    selectedValues: ['1'],
    multiple: false,
    disabled: false,
    readOnly: false,
    error: false,
    required: false,
    name: 'example-select',
    open: false,
  },
  argTypes: {
    labelText: {
      control: { type: 'text' },
      description: 'Controllo Storybook: testo usato per InputLabel e prop label.',
      table: {
        category: 'Storybook controls',
      },
    },
    helperText: {
      control: { type: 'text' },
      description: 'Testo di supporto gestito e associato al campo da MISelect.',
      table: {
        category: 'MISelect',
      },
    },
    optionPreset: {
      options: ['basic', 'status'],
      control: { type: 'radio' },
      description: 'Controllo Storybook: set di dati passato alla prop options del Select.',
      table: {
        category: 'Storybook controls',
      },
    },
    selectedValue: {
      control: { type: 'text' },
      description: 'Controllo Storybook: valore selezionato in modalita singola.',
      if: { arg: 'multiple', eq: false },
      table: {
        category: 'Storybook controls',
      },
    },
    selectedValues: {
      control: { type: 'object' },
      description: 'Controllo Storybook: valori selezionati in modalita multipla.',
      if: { arg: 'multiple', eq: true },
      table: {
        category: 'Storybook controls',
      },
    },
    multiple: {
      control: { type: 'boolean' },
      description: 'Abilita la selezione multipla.',
      table: {
        category: 'MISelect',
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabilita l interazione del campo.',
      table: {
        category: 'MISelect',
      },
    },
    readOnly: {
      control: { type: 'boolean' },
      description: 'Rende il componente non apribile in sola lettura.',
      table: {
        category: 'MISelect',
      },
    },
    error: {
      control: { type: 'boolean' },
      description: 'Abilita lo stato di errore.',
      table: {
        category: 'MISelect',
      },
    },
    required: {
      control: { type: 'boolean' },
      description: 'Imposta il campo come obbligatorio.',
      table: {
        category: 'MISelect',
      },
    },
    name: {
      control: { type: 'text' },
      description: 'Nome inoltrato all input nativo nascosto.',
      table: {
        category: 'MISelect',
      },
    },
    open: {
      control: { type: 'boolean' },
      description: 'Controlla programmaticamente l apertura del menu.',
      table: {
        category: 'MISelect',
      },
    },
    onChange: {
      control: false,
      table: {
        type: { summary: 'SelectProps["onChange"]' },
      },
    },
    getChipDeleteAriaLabel: {
      control: false,
      description: 'Personalizza il nome accessibile del pulsante di rimozione di ciascun chip.',
      table: {
        category: 'MISelect',
      },
    },
    options: {
      control: false,
      table: {
        type: { summary: 'ReadonlyArray<MISelectOption>' },
      },
    },
    renderOptions: {
      control: false,
      description: 'Personalizza il componente di ogni opzione; il default e MISelectItem.',
    },
    label: {
      control: false,
    },
    labelId: {
      control: false,
    },
  },
  render: function RenderPlayground(args) {
    const {
      labelText,
      helperText,
      optionPreset,
      selectedValue,
      selectedValues,
      multiple,
      disabled,
      readOnly,
      error,
      required,
      name,
      open,
    } = args;

    const options = useMemo(
      () => (optionPreset === 'status' ? STATUS_OPTIONS : BASIC_OPTIONS),
      [optionPreset]
    );

    const [single, setSingle] = useState(selectedValue);
    const [multipleValues, setMultipleValues] = useState<Array<string>>(selectedValues);
    const [isOpen, setIsOpen] = useState(open);

    useEffect(() => {
      setSingle(selectedValue);
    }, [selectedValue]);

    useEffect(() => {
      setMultipleValues(Array.isArray(selectedValues) ? selectedValues : []);
    }, [selectedValues]);

    useEffect(() => {
      setIsOpen(open);
    }, [open]);

    // Guards against a stale/mismatched value shape while the multiple arg is toggling.
    const value = multiple
      ? Array.isArray(multipleValues)
        ? multipleValues
        : []
      : Array.isArray(single)
        ? ''
        : single;

    return (
      <Box sx={{ minWidth: 280 }}>
        <MISelect
          fullWidth
          options={options}
          label={labelText}
          multiple={multiple}
          disabled={disabled}
          readOnly={readOnly}
          error={error}
          required={required}
          name={name}
          open={isOpen}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          value={value}
          onChange={(event) => {
            if (multiple) {
              const next = event.target.value;
              setMultipleValues(Array.isArray(next) ? next : [next]);
              return;
            }
            setSingle(event.target.value as string);
          }}
          helperText={helperText}
        />
      </Box>
    );
  },
};

export default meta;

type Story = StoryObj<MISelectStoryArgs>;

export const Playground: Story = {};

export const States: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story: 'Panoramica degli stati principali: default, error, disabled e readOnly.',
      },
    },
  },
  render: () => (
    <Stack spacing={3} sx={{ minWidth: 320 }}>
      <MISelect
        fullWidth
        options={BASIC_OPTIONS}
        label="Default"
        value="2"
        onChange={() => console.log('Default select changed')}
      />

      <Box>
        <MISelect
          fullWidth
          options={BASIC_OPTIONS}
          label="Errore"
          value=""
          onChange={() => undefined}
          error
          helperText={
            <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <ReportRoundedIcon color="error" fontSize="small" />
              Selezione non valida
            </Box>
          }
        />
      </Box>

      <MISelect
        fullWidth
        options={BASIC_OPTIONS}
        label="Disabilitato"
        value="1"
        onChange={() => undefined}
        disabled
      />

      <MISelect
        fullWidth
        label="Sola lettura"
        options={BASIC_OPTIONS.map((item) => ({ ...item, startIcon: <LocationOnIcon /> }))}
        value="3"
        onChange={() => undefined}
        readOnly
      />
    </Stack>
  ),
};

export const SingleAndMultiple: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story:
          'Confronto tra selezione singola e multipla. In modalita multipla, i valori selezionati vengono mostrati come MIChip.',
      },
    },
  },
  render: () => (
    <Stack spacing={3} sx={{ minWidth: 320 }}>
      <MISelect
        fullWidth
        label="Selezione singola"
        options={STATUS_OPTIONS}
        value="delivered"
        onChange={() => undefined}
      />

      <MISelect
        fullWidth
        label="Selezione multipla"
        options={STATUS_OPTIONS}
        multiple
        value={['delivered', 'deposited']}
        onChange={() => undefined}
      />
    </Stack>
  ),
};

export const WithItemStartIcons: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story:
          'Le opzioni possono avere una startIcon facoltativa, anche ripetuta su piu elementi.',
      },
    },
  },
  render: () => (
    <MISelect
      fullWidth
      label="Indirizzo"
      options={BASIC_OPTIONS.map((item) => ({ ...item, startIcon: <LocationOnIcon /> }))}
      open
      value="2"
      onChange={() => undefined}
    />
  ),
};

export const CustomOptions: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'renderOptions sostituisce MISelectItem con un componente personalizzato. Il componente deve inoltrare ref e props MUI e ricevere value, disabled e il contenuto dell opzione.',
      },
    },
  },
  render: function RenderCustomOptions() {
    const [value, setValue] = useState<unknown>('delivered');

    return (
      <MISelect
        fullWidth
        label="Stato della notifica"
        options={STATUS_OPTIONS}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        renderOptions={(option) => (
          <MenuItem value={option.value} disabled={option.disabled}>
            {option.label}
          </MenuItem>
        )}
      />
    );
  },
};

export const WithSingleDropdownItems: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'renderOptions compone ogni opzione con MISingleDropdownItem. Il value dell’opzione viene passato al componente per consentire a MISelect di gestire la selezione.',
      },
    },
  },
  render: function RenderWithSingleDropdownItems() {
    const [value, setValue] = useState<unknown>('roma');
    const organizations = [
      {
        value: 'roma',
        label: 'Comune di Roma',
        description: 'Amministrazione comunale',
      },
      {
        value: 'milano',
        label: 'Comune di Milano',
        description: 'Amministrazione comunale',
      },
      {
        value: 'lazio',
        label: 'Regione Lazio',
        description: 'Amministrazione regionale',
        disabled: true,
      },
    ];

    return (
      <Box sx={{ width: 360, maxWidth: '100%' }}>
        <MISelect
          fullWidth
          label="Ente"
          options={organizations}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          helperText="Seleziona l’ente per cui vuoi operare"
          renderOptions={(option) => {
            const organization = organizations.find((item) => item.value === option.value);

            return (
              <MISingleDropdownItem
                value={option.value}
                centralSlot={
                  <>
                    {option.label}
                    <Typography
                      component="span"
                      sx={(theme) => ({
                        color: theme.palette.text.secondary,
                        fontSize: theme.typography.pxToRem(14),
                        lineHeight: theme.typography.pxToRem(20),
                      })}
                    >
                      {organization?.description}
                    </Typography>
                  </>
                }
                disabled={option.disabled}
                leftSlot={<AccountBalanceIcon fontSize="small" />}
                rightSlot={<MIChip label="Attivo" color="warning" />}
              />
            );
          }}
        />
      </Box>
    );
  },
};

export const WithDecorativeIcon: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story:
          'Icona contestuale a sinistra tramite startAdornment, negli stati default ed errore.',
      },
    },
  },
  render: () => (
    <Stack spacing={3} sx={{ minWidth: 320 }}>
      <MISelect
        fullWidth
        label="Ente"
        options={BASIC_OPTIONS}
        value="1"
        onChange={() => undefined}
        startAdornment={
          <InputAdornment position="start">
            <AccountBalanceIcon />
          </InputAdornment>
        }
      />

      <Box>
        <MISelect
          fullWidth
          label="Ente"
          options={BASIC_OPTIONS}
          value=""
          onChange={() => undefined}
          error
          helperText={
            <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <ReportRoundedIcon color="error" fontSize="small" />
              Some details error
            </Box>
          }
          startAdornment={
            <InputAdornment position="start">
              <AccountBalanceIcon />
            </InputAdornment>
          }
        />
      </Box>
    </Stack>
  ),
};

export const MultipleWithChips: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story:
          'Selezione multipla con MIChip rimovibili, icona contestuale e campo obbligatorio. La rimozione aggiorna la selezione tramite onChange.',
      },
    },
  },
  render: function MultipleWithChipsExample() {
    const [values, setValues] = useState<Array<string>>(['1', '2']);

    const handleChange = (event: SelectChangeEvent<unknown>) => {
      setValues(event.target.value as Array<string>);
    };

    return (
      <Box sx={{ minWidth: 320 }}>
        <MISelect
          fullWidth
          label="Label text"
          options={BASIC_OPTIONS}
          required
          multiple
          value={values}
          name="multiple-chips"
          onChange={handleChange}
          getChipDeleteAriaLabel={(chipLabel) => `Rimuovi ${chipLabel}`}
          startAdornment={
            <InputAdornment position="start">
              <AccountBalanceIcon />
            </InputAdornment>
          }
        />
      </Box>
    );
  },
};

export const Required: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story:
          'Casi di campo obbligatorio: vuoto, valorizzato e in errore. MISelect gestisce la label e inoltra required all input nativo.',
      },
    },
  },
  render: () => (
    <Stack spacing={3} sx={{ minWidth: 320 }}>
      <Box>
        <MISelect
          fullWidth
          label="Obbligatorio"
          options={BASIC_OPTIONS}
          name="required-empty"
          value=""
          onChange={() => undefined}
          required
          helperText="Campo obbligatorio"
        />
      </Box>

      <MISelect
        fullWidth
        label="Obbligatorio valorizzato"
        options={BASIC_OPTIONS}
        name="required-filled"
        value="2"
        onChange={() => undefined}
        required
      />

      <Box>
        <MISelect
          fullWidth
          label="Obbligatorio in errore"
          options={BASIC_OPTIONS}
          name="required-error"
          value=""
          onChange={() => undefined}
          required
          error
          helperText="Seleziona un valore per proseguire"
        />
      </Box>

      <MISelect
        fullWidth
        label="Obbligatorio disabilitato"
        options={BASIC_OPTIONS}
        name="required-disabled"
        value="1"
        onChange={() => undefined}
        required
        disabled
      />
    </Stack>
  ),
};

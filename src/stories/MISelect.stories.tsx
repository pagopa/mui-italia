import { MISelect } from '@components/MISelect';
import { MIFormHelperText } from '@components/MIForm';
import { AccountBalance as AccountBalanceIcon, ReportRounded as ReportRoundedIcon } from '@mui/icons-material';
import { Box, InputAdornment, MenuItem, Stack, type SelectChangeEvent } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  useEffect,
  useMemo,
  useState,
} from 'react';

type OptionPreset = 'basic' | 'status';

type MISelectStoryArgs = React.ComponentProps<typeof MISelect> & {
  labelText: string;
  helperText: string;
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
      description: 'Controllo Storybook: testo visualizzato sotto al campo.',
      table: {
        category: 'Storybook controls',
      },
    },
    optionPreset: {
      options: ['basic', 'status'],
      control: { type: 'radio' },
      description: 'Controllo Storybook: set di opzioni usato come children del Select.',
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
    children: {
      control: false,
      table: {
        type: { summary: 'ReactNode' },
      },
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

    const helperId = helperText ? 'mi-select-playground-helper' : undefined;
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
          aria-describedby={helperId}
        >
          {options.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </MISelect>

        {helperText ? (
          <MIFormHelperText id={helperId} error={error}>
            {helperText}
          </MIFormHelperText>
        ) : null}
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
  render: () => {
    const labelIdBase = 'mi-select-states';

    return (
      <Stack spacing={3} sx={{ minWidth: 320 }}>
        <MISelect fullWidth  label="Default" value="2" onChange={() => undefined}>
          {BASIC_OPTIONS.map((item) => (
            <MenuItem key={`default-${item.value}`} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </MISelect>

        <Box>
          <MISelect
            fullWidth
            label="Errore"
            value=""
            onChange={() => undefined}
            error
            aria-describedby={`${labelIdBase}-error-helper`}
          >
            {BASIC_OPTIONS.map((item) => (
              <MenuItem key={`error-${item.value}`} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </MISelect>
          <MIFormHelperText
            error
            id={`${labelIdBase}-error-helper`}
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
          >
            <ReportRoundedIcon color="error" fontSize="small" />
            Selezione non valida
          </MIFormHelperText>
        </Box>

        <MISelect
          fullWidth
          label="Disabilitato"
          value="1"
          onChange={() => undefined}
          disabled
        >
          {BASIC_OPTIONS.map((item) => (
            <MenuItem key={`disabled-${item.value}`} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </MISelect>

        <MISelect fullWidth label="Sola lettura" value="3" onChange={() => undefined} readOnly>
          {BASIC_OPTIONS.map((item) => (
            <MenuItem key={`readonly-${item.value}`} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </MISelect>
      </Stack>
    );
  },
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
        value="delivered"
        onChange={() => undefined}
      >
        {STATUS_OPTIONS.map((item) => (
          <MenuItem key={`single-${item.value}`} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </MISelect>

      <MISelect
        fullWidth
        label="Selezione multipla"
        multiple
        value={['delivered', 'deposited']}
        onChange={() => undefined}
      >
        {STATUS_OPTIONS.map((item) => (
          <MenuItem key={`multiple-${item.value}`} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </MISelect>
    </Stack>
  ),
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
  render: () => {
    const labelIdBase = 'mi-select-icon';

    return (
      <Stack spacing={3} sx={{ minWidth: 320 }}>
        <MISelect
          fullWidth
          label="Ente"
          value="1"
          onChange={() => undefined}
          startAdornment={
            <InputAdornment position="start">
              <AccountBalanceIcon />
            </InputAdornment>
          }
        >
          {BASIC_OPTIONS.map((item) => (
            <MenuItem key={`icon-default-${item.value}`} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </MISelect>

        <Box>
          <MISelect
            fullWidth
            label="Ente"
            value=""
            onChange={() => undefined}
            error
            aria-describedby={`${labelIdBase}-error-helper`}
            startAdornment={
              <InputAdornment position="start">
                <AccountBalanceIcon />
              </InputAdornment>
            }
          >
            {BASIC_OPTIONS.map((item) => (
              <MenuItem key={`icon-error-${item.value}`} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </MISelect>
          <MIFormHelperText
            error
            id={`${labelIdBase}-error-helper`}
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
          >
            <ReportRoundedIcon color="error" fontSize="small" />
            Some details error
          </MIFormHelperText>
        </Box>
      </Stack>
    );
  },
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

    const chipOptions = BASIC_OPTIONS.map((item) => (
      <MenuItem key={`multiple-chips-${item.value}`} value={item.value}>
        {item.label}
      </MenuItem>
    ));

    return (
      <Box sx={{ minWidth: 320 }}>
        <MISelect
          fullWidth
          label="Label text"
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
        >
          {chipOptions}
        </MISelect>
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
  render: () => {
    const labelIdBase = 'mi-select-required';

    return (
      <Stack spacing={3} sx={{ minWidth: 320 }}>
        <Box>
          <MISelect
            fullWidth
            label="Obbligatorio"
            name="required-empty"
            value=""
            onChange={() => undefined}
            required
            aria-describedby={`${labelIdBase}-empty-helper`}
          >
            {BASIC_OPTIONS.map((item) => (
              <MenuItem key={`required-empty-${item.value}`} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </MISelect>
          <MIFormHelperText id={`${labelIdBase}-empty-helper`}>
            Campo obbligatorio
          </MIFormHelperText>
        </Box>

        <MISelect
          fullWidth
          label="Obbligatorio valorizzato"
          name="required-filled"
          value="2"
          onChange={() => undefined}
          required
        >
          {BASIC_OPTIONS.map((item) => (
            <MenuItem key={`required-filled-${item.value}`} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </MISelect>

        <Box>
          <MISelect
            fullWidth
            label="Obbligatorio in errore"
            name="required-error"
            value=""
            onChange={() => undefined}
            required
            error
            aria-describedby={`${labelIdBase}-error-helper`}
          >
            {BASIC_OPTIONS.map((item) => (
              <MenuItem key={`required-error-${item.value}`} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </MISelect>
          <MIFormHelperText id={`${labelIdBase}-error-helper`} error>
            Seleziona un valore per proseguire
          </MIFormHelperText>
        </Box>

        <MISelect
          fullWidth
          label="Obbligatorio disabilitato"
          name="required-disabled"
          value="1"
          onChange={() => undefined}
          required
          disabled
        >
          {BASIC_OPTIONS.map((item) => (
            <MenuItem key={`required-disabled-${item.value}`} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </MISelect>
      </Stack>
    );
  },
};

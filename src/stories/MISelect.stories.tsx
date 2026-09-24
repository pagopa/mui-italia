import { MISelect } from '@components/MISelect';
import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useMemo, useState } from 'react';

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

    useEffect(() => {
      setSingle(selectedValue);
    }, [selectedValue]);

    useEffect(() => {
      setMultipleValues(selectedValues);
    }, [selectedValues]);

    const labelId = 'mi-select-playground-label';
    const helperId = helperText ? 'mi-select-playground-helper' : undefined;

    return (
      <Box sx={{ minWidth: 280 }}>
        <FormControl fullWidth error={error} disabled={disabled}>
          <InputLabel id={labelId}>{labelText}</InputLabel>

          <MISelect
            labelId={labelId}
            label={labelText}
            multiple={multiple}
            disabled={disabled}
            readOnly={readOnly}
            error={error}
            required={required}
            name={name}
            open={open}
            value={multiple ? multipleValues : single}
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

          {helperText ? <FormHelperText id={helperId}>{helperText}</FormHelperText> : null}
        </FormControl>
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
        <FormControl fullWidth>
          <InputLabel id={`${labelIdBase}-default-label`}>Default</InputLabel>
          <MISelect
            labelId={`${labelIdBase}-default-label`}
            label="Default"
            value="2"
            onChange={() => undefined}
          >
            {BASIC_OPTIONS.map((item) => (
              <MenuItem key={`default-${item.value}`} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </MISelect>
        </FormControl>

        <FormControl fullWidth error>
          <InputLabel id={`${labelIdBase}-error-label`}>Errore</InputLabel>
          <MISelect
            labelId={`${labelIdBase}-error-label`}
            label="Errore"
            value=""
            onChange={() => undefined}
            error
          >
            {BASIC_OPTIONS.map((item) => (
              <MenuItem key={`error-${item.value}`} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </MISelect>
          <FormHelperText>Selezione non valida</FormHelperText>
        </FormControl>

        <FormControl fullWidth disabled>
          <InputLabel id={`${labelIdBase}-disabled-label`}>Disabilitato</InputLabel>
          <MISelect
            labelId={`${labelIdBase}-disabled-label`}
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
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id={`${labelIdBase}-readonly-label`}>Sola lettura</InputLabel>
          <MISelect
            labelId={`${labelIdBase}-readonly-label`}
            label="Sola lettura"
            value="3"
            onChange={() => undefined}
            readOnly
          >
            {BASIC_OPTIONS.map((item) => (
              <MenuItem key={`readonly-${item.value}`} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </MISelect>
        </FormControl>
      </Stack>
    );
  },
};

export const SingleAndMultiple: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story: 'Confronto tra configurazione a selezione singola e multipla.',
      },
    },
  },
  render: () => (
    <Stack spacing={3} sx={{ minWidth: 320 }}>
      <FormControl fullWidth>
        <InputLabel id="mi-select-single-label">Selezione singola</InputLabel>
        <MISelect
          labelId="mi-select-single-label"
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
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="mi-select-multiple-label">Selezione multipla</InputLabel>
        <MISelect
          labelId="mi-select-multiple-label"
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
      </FormControl>
    </Stack>
  ),
};

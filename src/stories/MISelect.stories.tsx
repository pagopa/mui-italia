import { MISelect } from '@components/MISelect';
import { MIChip } from '@components/MIChip';
import { MISingleDropdownItem } from '@components/MISingleDropdownItem';
import {
  AccountBalance as AccountBalanceIcon,
  LocationOn as LocationOnIcon,
} from '@mui/icons-material';
import {
  Box,
  Checkbox,
  InputAdornment,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';

type MISelectStoryArgs = React.ComponentProps<typeof MISelect> & {
  labelText: string;
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

const ORGANIZATION_OPTIONS = [
  {
    value: 'direzione-mobilita',
    label: 'Direzione Mobilità',
    description: 'Comune di Milano',
  },
  {
    value: 'ufficio-permessi-ztl',
    label: 'Ufficio permessi ZTL - Direzione Mobilità',
    description: 'Ente Parent',
  },
  {
    value: 'uo-aoo',
    label: 'UO - AOO',
    description: 'Ente Parent',
  },
  { value: 'pagopa', label: 'PagoPA S.p.A.' },
  { value: 'regione-lombardia', label: 'Regione Lombardia' },
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
        'selectedValue',
        'selectedValues',
        'multiple',
        'disabled',
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
    selectedValue: '2',
    selectedValues: ['1'],
    multiple: false,
    disabled: false,
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
      selectedValue,
      selectedValues,
      multiple,
      disabled,
      error,
      required,
      name,
      open,
    } = args;

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
          options={BASIC_OPTIONS}
          label={labelText}
          multiple={multiple}
          disabled={disabled}
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
        story: 'Panoramica degli stati principali: default, error e disabled.',
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
          helperText="Selezione non valida"
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
  render: function RenderSingleAndMultiple() {
    const [singleValue, setSingleValue] = useState<unknown>('delivered');
    const [multipleValue, setMultipleValue] = useState<unknown>(['delivered', 'deposited']);

    return (
      <Stack spacing={3} sx={{ minWidth: 320 }}>
        <MISelect
          fullWidth
          label="Selezione singola"
          options={STATUS_OPTIONS}
          value={singleValue}
          onChange={(event) => setSingleValue(event.target.value)}
        />

        <MISelect
          fullWidth
          label="Selezione multipla"
          options={STATUS_OPTIONS}
          multiple
          value={multipleValue}
          onChange={(event) => setMultipleValue(event.target.value)}
        />
      </Stack>
    );
  },
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
            <LocationOnIcon aria-hidden="true" fontSize="small" sx={{ mr: 1 }} />
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
          'Menu multi-selezione di enti composto con MISingleDropdownItem, con contenuti e stati ispirati al riferimento Figma.',
      },
    },
  },
  render: function RenderWithSingleDropdownItems() {
    const [selectedValues, setSelectedValues] = useState<Array<string>>([
      'direzione-mobilita',
      'ufficio-permessi-ztl',
      'uo-aoo',
    ]);

    return (
        <MISelect
          
          label="Cerca per erogatore"
          multiple
          options={ORGANIZATION_OPTIONS}
          value={selectedValues}
          onChange={(event) => {
            const nextValue = event.target.value;
            setSelectedValues(
              Array.isArray(nextValue) ? nextValue.map(String) : [String(nextValue)]
            );
          }}
          renderValue={() => (
            <MIChip label={selectedValues.length} onDelete={() => setSelectedValues([])} />
          )}
          renderOptions={(option) => {
            const organization = ORGANIZATION_OPTIONS.find((item) => item.value === option.value);
            const isSelected = selectedValues.includes(String(option.value));

            return (
              <MISingleDropdownItem
                value={option.value}
                centralSlot={
                  <>
                    {option.label}
                    {organization?.description && (
                      <Typography
                        component="span"
                        sx={(theme) => ({
                          color: theme.palette.text.secondary,
                          fontSize: theme.typography.pxToRem(14),
                          lineHeight: theme.typography.pxToRem(20),
                        })}
                      >
                        {organization.description}
                      </Typography>
                    )}
                  </>
                }
                leftSlot={
                  <Box
                    component="span"
                    sx={(theme) => ({
                      alignItems: 'center',
                      backgroundColor: theme.colors.neutral.grey[50],
                      borderRadius: 1,
                      color: theme.colors.neutral.grey[300],
                      display: 'inline-flex',
                      height: 32,
                      justifyContent: 'center',
                      width: 32,
                    })}
                  >
                    <AccountBalanceIcon fontSize="small" />
                  </Box>
                }
                rightSlot={
                  isSelected ? undefined : (
                    <Checkbox
                      checked={false}
                      disableRipple
                      inputProps={{ 'aria-hidden': true }}
                      tabIndex={-1}
                      sx={{ p: 0, pointerEvents: 'none' }}
                    />
                  )
                }
              />
            );
          }}
        />
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
    </Stack>
  ),
};



import { LocationOn, Place, Warning } from '@mui/icons-material';
import { Box, Button, Skeleton, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import Autocomplete from '../components/Autocomplete/Autocomplete';

type City = {
  id: number;
  label: string;
};

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible autocomplete component with support for single and multi-select modes, custom styling, and accessibility features.',
      },
    },
  },
  args: {
    onInputChange: () => {},
    onChange: () => {},
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: { lg: 400, xs: 300 } }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story<T, M extends boolean | undefined> = StoryObj<typeof Autocomplete<T, M>>;

const cities: Array<City> = [
  { id: 1, label: 'Milano' },
  { id: 2, label: 'Verona' },
  { id: 3, label: 'Roma' },
  { id: 4, label: 'Firenze' },
  { id: 5, label: 'Venezia' },
  { id: 6, label: 'Torino' },
  { id: 7, label: 'Bologna' },
  { id: 8, label: 'Genova' },
  { id: 9, label: 'Napoli' },
  { id: 10, label: 'Palermo' },
];

const CustomLoadingSkeleton = () => (
  <Box sx={{ p: 2 }}>
    {[1, 2, 3].map((i) => (
      <Skeleton key={i} height={40} sx={{ mb: 1 }} />
    ))}
  </Box>
);

export const Default: Story<City, false> = {
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Cerca città...',
  },
};

export const WithStartIcon: Story<City, false> = {
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Cerca città...',
    slots: {
      startIcon: LocationOn,
    },
  },
};

export const MultiSelect: Story<City, true> = {
  args: {
    options: cities,
    label: 'Seleziona le città',
    placeholder: 'Seleziona più città...',
    multiple: true,
    isOptionEqualToValue: (option, value) => option.id === value.id,
  },
};

export const MultiSelectWithIcon: Story<City, true> = {
  args: {
    options: cities,
    label: 'Seleziona le città',
    placeholder: 'Seleziona più città...',
    multiple: true,
    isOptionEqualToValue: (option, value) => option.id === value.id,
    slots: {
      startIcon: LocationOn,
    },
  },
};

export const NoArrow: Story<City, false> = {
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Cerca...',
    slotProps: {
      toggleButton: { hidden: true },
    },
  },
};

export const Disabled: Story<City, false> = {
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Campo disabilitato',
    disabled: true,
  },
};

export const Required: Story<City, false> = {
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Campo obbligatorio',
    required: true,
  },
};

export const Loading: Story<City, false> = {
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Caricamento...',
    loading: true,
  },
};

export const CustomLoading: Story<City, false> = {
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Caricamento...',
    loading: true,
    slots: {
      loadingSkeleton: CustomLoadingSkeleton,
    },
  },
};

export const CustomNoResults: Story<City, false> = {
  args: {
    options: [],
    label: 'Seleziona una città',
    placeholder: 'Cerca...',
    noResultsText: 'Esempio di testo personalizzato per nessun risultato',
  },
};

export const CustomRenderOption: Story<City, false> = {
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Cerca...',
    renderOption: (option: City) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Place fontSize="small" color="action" />
        <Typography variant="body1">{option.label}</Typography>
      </Box>
    ),
  },
};

export const WithError: Story<City, false> = {
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Cerca...',
    error: true,
    helperText: 'Campo obbligatorio',
  },
};

export const WithCustomOptions: Story<{ key: number; value: string }, true> = {
  args: {
    options: [
      { key: 1, value: 'Italia' },
      { key: 2, value: 'Francia' },
      { key: 3, value: 'UK' },
      { key: 4, value: 'Germania' },
    ],
    label: 'Seleziona una nazione',
    placeholder: 'Cerca...',
    multiple: true,
    getOptionLabel: (option) => option.value,
    isOptionEqualToValue: (option, value) => option.key === value.key,
  },
};

export const CustomEmptyState: Story<City, false> = {
  args: {
    options: [],
    label: 'Seleziona una città',
    placeholder: 'Cerca...',
    noResultsText: 'Esempio di testo personalizzato per nessun risultato',
    slots: {
      emptyState: () => (
        <Stack
          spacing={1}
          alignItems="center"
          textAlign="center"
          sx={{
            backgroundColor: '#F4F5F8',
            py: 3,
          }}
        >
          <Warning sx={{ color: '#D9D9D9' }} />
          <Typography fontWeight={600} fontSize="1.125rem" color="textSecondary">
            Il caricamento delle città è fallito
          </Typography>
          <Typography color="textSecondary" variant="body1" fontSize="16px" fontWeight={400}>
            <Button onClick={(e) => e.stopPropagation()}>Prova di nuovo</Button>
          </Typography>
        </Stack>
      ),
    },
  },
};

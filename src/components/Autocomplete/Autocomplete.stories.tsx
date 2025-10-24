import { LocationOn, Place } from '@mui/icons-material';
import { Box, Skeleton, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import Autocomplete from './Autocomplete';
import { OptionType } from './utils/types';

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
    onSelect: () => {},
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 400 }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const cities: Array<OptionType> = [
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

const CustomEmptyState = () => (
  <Box sx={{ p: 3, textAlign: 'center' }}>
    <Typography variant="body2" color="text.secondary">
      Empty state personalizzato
    </Typography>
    <Typography variant="caption" color="text.secondary">
      Prova con un altro termine di ricerca
    </Typography>
  </Box>
);

const CustomLoadingSkeleton = () => (
  <Box sx={{ p: 2 }}>
    {[1, 2, 3].map((i) => (
      <Skeleton key={i} height={40} sx={{ mb: 1 }} />
    ))}
  </Box>
);

export const Default: Story = {
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Cerca città...',
  },
};

export const WithStartIcon: Story = {
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Cerca città...',
    slots: {
      startIcon: LocationOn,
    },
  },
};

export const WithClearIcon: Story = {
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Cerca...',
    hasClearIcon: true,
  },
};

export const MultiSelect: Story = {
  args: {
    options: cities,
    label: 'Seleziona le città',
    placeholder: 'Seleziona più città...',
    multiple: true,
    hasClearIcon: true,
  },
};

export const MultiSelectWithIcon: Story = {
  args: {
    options: cities,
    label: 'Seleziona le città',
    placeholder: 'Seleziona più città...',
    multiple: true,
    hasClearIcon: true,
    slots: {
      startIcon: LocationOn,
    },
  },
};

export const NoArrow: Story = {
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Cerca...',
    hideArrow: true,
    hasClearIcon: true,
  },
};

export const Disabled: Story = {
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Campo disabilitato',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Campo obbligatorio',
    required: true,
  },
};

export const Loading: Story = {
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Caricamento...',
    loading: true,
  },
};

export const CustomEmpty: Story = {
  args: {
    options: [],
    label: 'Select Country',
    placeholder: 'Search...',
    slots: {
      emptyState: CustomEmptyState,
    },
  },
};

export const CustomLoading: Story = {
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

export const CustomNoResults: Story = {
  args: {
    options: [],
    label: 'Seleziona una città',
    placeholder: 'Cerca...',
    noResultsText: 'Esempio di testo personalizzato per nessun risultato',
  },
};

export const CustomRenderOption: Story = {
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Cerca...',
    renderOption: (option) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Place fontSize="small" color="action" />
        <Typography variant="body1">{option.label}</Typography>
      </Box>
    ),
  },
};

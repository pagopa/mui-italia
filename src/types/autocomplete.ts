import { SvgIconProps } from '@mui/material';
import { ComponentType, ReactNode } from 'react';

interface AutocompleteSlots {
  /** Icon displayed at the start of the input field */
  startIcon?: ComponentType<SvgIconProps>;
  /** Custom loading skeleton component shown during loading state */
  loadingSkeleton?: ComponentType;
}

interface AutocompleteSlotProps {
  clearButton?: { 'aria-label': string };
  toggleButton?: {
    hidden?: boolean;
    'close-aria-label'?: string;
    'open-aria-label'?: string;
  };
  loadingBox?: {
    'ongoing-aria-label'?: string;
    'completed-aria-label'?: string;
  };
  selectionBox?: {
    'aria-label'?: string;
  };
  selectionChip?: {
    'aria-label'?: string;
  };
}

export interface AutocompleteProps<T> {
  /** Array of options to display in the dropdown */
  options: Array<T>;

  /** Used to determine the string value for a given option. It's used to fill the input */
  getOptionLabel?: (option: T) => string;

  /** Used to determine if the option represents the given value */
  isOptionEqualToValue?: (option: T, value: T) => boolean;

  /** Label text for the input field */
  label?: string;

  /** Placeholder text for the input field */
  placeholder?: string;

  /** Enable multi-select mode with chips for selected options */
  multiple?: boolean;

  /** Custom filtering function that overrides the default filtering behavior */
  handleFiltering?: (inputValue: string, options: Array<T>) => Array<T>;

  /** Text displayed when no options are available */
  noResultsText?: string;

  /** Disable the component */
  disabled?: boolean;

  /** Mark the field as required */
  required?: boolean;

  /** Set the field in error */
  error?: boolean;

  /** Set the helper text */
  helperText?: string;

  /** Show loading state with skeleton */
  loading?: boolean;

  /** Custom components to replace default icons and states */
  slots?: AutocompleteSlots;

  /** Props to pass to the custom slot components */
  slotProps?: AutocompleteSlotProps;

  /** Controlled input value that overrides internal state */
  value?: string;

  /** Custom render function for each option in the dropdown */
  renderOption?: (value: T, index: number) => ReactNode;

  /** Callback fired when the input value changes */
  onInputChange?: (value: string) => void;

  /** Callback fired when an option is selected */
  onSelect?: (value: T | Array<T>) => void;

  /** Custom function to determine what value to set in the input after selection (return null to clear input) */
  setInputValueOnSelect?: (option: T) => string | null;
}

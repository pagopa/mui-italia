import { SvgIconProps, TextFieldProps } from '@mui/material';
import { ComponentType, ReactNode } from 'react';

export type OptionType = {
  id: string | number;
  label: string;
};

interface AutocompleteSlots {
  /** Icon displayed at the start of the input field */
  startIcon?: ComponentType<SvgIconProps>;
  /** Custom loading skeleton component shown during loading state */
  loadingSkeleton?: ComponentType;
}

interface AutocompleteSlotProps {
  startIcon?: SvgIconProps;
  clearIcon?: SvgIconProps;
  expandIcon?: SvgIconProps;
  collapseIcon?: SvgIconProps;
  input?: TextFieldProps;
  loadingSkeleton?: Record<string, any>;
  selectionBox?: {
    ['aria-label']?: string;
  };
  hideArrows?: boolean;
}

export interface AutocompleteProps {
  /** Array of options to display in the dropdown */
  options: Array<OptionType>;

  /** Label text for the input field */
  label?: string;

  /** Placeholder text for the input field */
  placeholder?: string;

  /** Enable multi-select mode with chips for selected options */
  multiple?: boolean;

  /** Custom filtering function that overrides the default filtering behavior */
  handleFiltering?: (inputValue: string, options: Array<OptionType>) => Array<OptionType>;

  /** Text displayed when no options are available */
  noResultsText?: string;

  /** Disable the component */
  disabled?: boolean;

  /** Mark the field as required */
  required?: boolean;

  /** Show loading state with skeleton */
  loading?: boolean;

  /** Aria Label for loading state */
  loadingAriaLabel?: string;

  /** Custom components to replace default icons and states */
  slots?: AutocompleteSlots;

  /** Props to pass to the custom slot components */
  slotProps?: AutocompleteSlotProps;

  /** Controlled input value that overrides internal state */
  value?: string;

  /** Custom render function for each option in the dropdown */
  renderOption?: (value: OptionType, index: number) => ReactNode;

  /** Callback fired when the input value changes */
  onInputChange?: (value: string) => void;

  /** Callback fired when an option is selected */
  onSelect?: (value: OptionType | Array<OptionType>) => void;

  /** Custom function to determine what value to set in the input after selection (return null to clear input) */
  setInputValueOnSelect?: (option: OptionType) => string | null;
}

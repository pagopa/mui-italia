import { OutlinedInputProps, SvgIconProps, SxProps, Theme } from '@mui/material';
import { ComponentType, ReactNode } from 'react';

export type OptionType = {
  id: string | number;
  label: string;
};

interface AutocompleteSlots {
  /** Icon displayed at the start of the input field */
  startIcon?: ComponentType<SvgIconProps>;
  /** Icon displayed at the end of the input field */
  endIcon?: ComponentType<SvgIconProps>;
  /** Icon for the clear button (defaults to Close icon) */
  clearIcon?: ComponentType<SvgIconProps>;
  /** Icon shown when the dropdown is collapsed (defaults to KeyboardArrowDown) */
  expandIcon?: ComponentType<SvgIconProps>;
  /** Icon shown when the dropdown is expanded (defaults to KeyboardArrowUp) */
  collapseIcon?: ComponentType<SvgIconProps>;
  /** Custom component to display when no results are found */
  emptyState?: ComponentType;
  /** Custom loading skeleton component shown during loading state */
  loadingSkeleton?: ComponentType;
}

interface AutocompleteSlotProps {
  startIcon?: SvgIconProps;
  endIcon?: SvgIconProps;
  clearIcon?: SvgIconProps;
  expandIcon?: SvgIconProps;
  collapseIcon?: SvgIconProps;
  emptyState?: Record<string, any>;
  input?: Partial<OutlinedInputProps>;
  loadingSkeleton?: Record<string, any>;
}

interface AutocompleteAriaLabels {
  clearButtonLabel?: string;
  collapseButtonLabel?: string;
  expandButtonLabel?: string;
  loadingLabel?: string;
  selectedOptionsLabel?: string;
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

  /** Hide the expand/collapse arrow icon */
  hideArrow?: boolean;

  /** Show a clear button icon when input has value */
  hasClearIcon?: boolean;

  /** Disable local filtering and rely on external filtering through onInputChange */
  avoidLocalFiltering?: boolean;

  /** Text displayed when no options are available */
  noResultsText?: string;

  /** Disable the component */
  disabled?: boolean;

  /** Mark the field as required */
  required?: boolean;

  /** Show loading state with skeleton */
  loading?: boolean;

  /** MUI sx prop for styling the container */
  sx?: SxProps<Theme>;

  /** MUI sx prop for styling the input field */
  inputStyle?: SxProps<Theme>;

  /** Custom components to replace default icons and states */
  slots?: AutocompleteSlots;

  /** Props to pass to the custom slot components */
  slotProps?: AutocompleteSlotProps;

  /** Custom aria-labels for accessibility */
  ariaLabels?: AutocompleteAriaLabels;

  /** Controlled input value that overrides internal state */
  overridenInputvalue?: string;

  /** Custom render function for each option in the dropdown */
  renderOption?: (value: OptionType, index: number) => ReactNode;

  /** Callback fired when the input value changes */
  onInputChange?: (value: string) => void;

  /** Callback fired when an option is selected */
  onSelect?: (value: OptionType | Array<OptionType>) => void;

  /** Custom function to determine what value to set in the input after selection (return null to clear input) */
  setInputValueOnSelect?: (option: OptionType) => string | null;
}

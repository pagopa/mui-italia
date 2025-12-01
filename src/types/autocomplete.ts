import { SvgIconProps, SxProps, TextFieldProps } from '@mui/material';
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
  announcementBox?: {
    /** Text announced when loading is shown */
    loadingText?: string;
    /** Text announced when user do a selection.
     * Text must be in the form of "%s text you want", where %s is replaced with the list of the options selected.
     */
    selectionText?: string;
  };
  selectionBox?: {
    'aria-label'?: string;
  };
  selectionChip?: {
    'aria-label'?: string;
  };
  textField?: Pick<TextFieldProps, 'name'>;
  options?: {icon: ComponentType<SvgIconProps>};
}

/**
 * The reason that causes the input change.
 * Can be:
 * input (user input)
 * selectOption (option selected)
 * clear (when user clicks on clear button)
 */
export type InputChangeReason = 'input' | 'clear' | 'selectOption';

// if multiple is true, value is an array of T
// otherwise we have a single element
export type AutocompleteValue<T, Multiple> = Multiple extends true ? Array<T> : T;

export interface AutocompleteProps<T, Multiple extends boolean | undefined>
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
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
  multiple?: Multiple;

  /** Custom filtering function that overrides the default filtering behavior.
   * This must be an sync function. If you need the async filtering, set this function equal to (opts) => opts,
   * and use a state to set the options from outside
   */
  handleFiltering?: (
    options: Array<T>,
    state: { inputValue: string; getOptionLabel: (option: T) => string }
  ) => Array<T>;

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

   /** Text displayed when no options are available */
  noResultsText?: string;

  /** Custom components to replace default icons and states */
  slots?: AutocompleteSlots;

  /** Props to pass to the custom slot components */
  slotProps?: AutocompleteSlotProps;

  /** Controlled autocomplete value that overrides internal state */
  value?: AutocompleteValue<T, Multiple>;

  /** Controlled input value that overrides internal state */
  inputValue?: string;

  /** Custom render function for each option in the dropdown */
  renderOption?: (value: T, index: number) => ReactNode;

  /** Callback fired when the autocomplete value changes */
  onChange?: (value: AutocompleteValue<T, Multiple>) => void;

  /** Callback fired when the input value changes */
  onInputChange?: (value: string, reason: InputChangeReason) => void;

  /** Custom function to determine what value to set in the input after selection (return null to clear input) */
  setInputValueOnSelect?: (option: T) => string | null;

  /** Custom style applied to the root container */
  sx?: SxProps;
}

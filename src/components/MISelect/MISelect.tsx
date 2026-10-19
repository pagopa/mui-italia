'use client';

import { KeyboardArrowDown } from '@mui/icons-material';
import {
  Box,
  InputLabel,
  Select as MuiSelect,
  type SelectChangeEvent,
  type SelectProps,
  styled,
} from '@mui/material';
import {
  cloneElement,
  forwardRef,
  useId,
  useState,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
} from 'react';

import { MIChip } from '../MIChip';
import { MIFormControl, MIFormHelperText } from '../MIForm';
import MISelectItem from './MISelectItem';

export type MISelectOption = {
  value: string | number;
  label: ReactNode;
  disabled?: boolean;
  startIcon?: ReactNode;
};

export type MISelectProps = Omit<
  SelectProps,
  | 'autoWidth'
  | 'classes'
  | 'children'
  | 'defaultOpen'
  | 'defaultValue'
  | 'displayEmpty'
  | 'IconComponent'
  | 'input'
  | 'label'
  | 'MenuProps'
  | 'native'
  | 'SelectDisplayProps'
  | 'sx'
  | 'variant'
  | 'components'
  | 'componentsProps'
  | 'color'
  | 'renderSuffix'
  | 'rows'
  | 'minRows'
  | 'maxRows'
  | 'endAdornment'
  | 'inputComponent'
  | 'disableInjectingGlobalStyles'
  | 'margin'
  | 'multiline'
  | 'size'
  | 'slots'
  | 'slotProps'
  | 'type'
  | 'disableUnderline'
> & {
  label: ReactNode;
  helperText?: ReactNode;
  options: ReadonlyArray<MISelectOption>;
  renderOptions?: (option: MISelectOption) => ReactElement;
  fullWidth?: boolean;
  getChipDeleteAriaLabel?: (label: ReactNode) => string;
};

const StyledSelect = styled(MuiSelect)(({ theme }) => ({
  borderRadius: theme.shape.radius[8],
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.colors.neutral.grey[650],
  },
  '& .MuiSelect-icon': {
    color: theme.colors.neutral.black,
  },
  '&.Mui-focused ': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.colors.blue[500],
    },
    '& .MuiSelect-icon': {
      color: theme.colors.blue[500],
    },
  },
  '&.Mui-error': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.colors.error[600],
    },
  },
}));

const renderSelectedChips = (
  selectedValues: unknown,
  options: ReadonlyArray<MISelectOption>,
  onDelete: (value: unknown) => (event: MouseEvent) => void,
  getChipDeleteAriaLabel?: (label: ReactNode) => string,
  disabled = false
): ReactNode => {
  if (!Array.isArray(selectedValues)) {
    return null;
  }

  const optionLabels = new Map<unknown, ReactNode>(
    options.map((option) => [option.value, option.label])
  );

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
      {selectedValues.map((value, index) => (
        <MIChip
          key={`${String(value)}-${index}`}
          label={optionLabels.get(value) ?? String(value)}
          disabled={disabled}
          aria-label={getChipDeleteAriaLabel?.(optionLabels.get(value) ?? String(value))}
          onMouseDown={(event) => event.stopPropagation()}
          onDelete={disabled ? undefined : onDelete(value)}
        />
      ))}
    </Box>
  );
};

const MISelect = forwardRef<HTMLDivElement, MISelectProps>((props, ref) => {
  const generatedLabelId = useId();
  const {
    fullWidth,
    label,
    labelId = generatedLabelId,
    helperText,
    'aria-describedby': ariaDescribedBy,
    inputProps,
    options,
    renderOptions,
    renderValue,
    getChipDeleteAriaLabel,
    ...selectProps
  } = props;
  const hasHelperText = helperText != null && helperText !== false && helperText !== '';
  const helperTextId = hasHelperText ? `${generatedLabelId}-helper-text` : undefined;
  const describedBy =
    [ariaDescribedBy, inputProps?.['aria-describedby'], helperTextId].filter(Boolean).join(' ') ||
    undefined;
  const isValueControlled = props.value !== undefined;

  // State for uncontrolled multiple select value, this will hold the selected values when the component is not controlled externally.
  const [uncontrolledMultipleValue, setUncontrolledMultipleValue] = useState<Array<unknown>>([]);

  const selectValue =
    props.multiple && !isValueControlled ? uncontrolledMultipleValue : props.value;

  const handleChange: NonNullable<SelectProps['onChange']> = (event, child) => {
    if (props.multiple && !isValueControlled && Array.isArray(event.target.value)) {
      setUncontrolledMultipleValue(event.target.value);
    }

    props.onChange?.(event, child);
  };

  const handleChipDelete = (removedValue: unknown) => (event: MouseEvent) => {
    event.stopPropagation();
    if (props.disabled || props.readOnly) {
      return;
    }

    const selectedValues = Array.isArray(selectValue) ? selectValue : [];
    const nextSelectedValues = selectedValues.filter((value) => value !== removedValue);

    if (!isValueControlled) {
      setUncontrolledMultipleValue(nextSelectedValues);
    }

    props.onChange?.(
      {
        target: { name: props.name, value: nextSelectedValues },
      } as SelectChangeEvent<unknown>,
      null
    );
  };
  const resolvedRenderValue =
    renderValue ??
    (props.multiple
      ? (selectedValues: unknown) =>
          renderSelectedChips(
            selectedValues,
            options,
            handleChipDelete,
            getChipDeleteAriaLabel,
            Boolean(props.disabled || props.readOnly)
          )
      : (selectedValue: unknown) =>
          options.find((option) => String(option.value) === String(selectedValue))?.label);

  return (
    <MIFormControl
      disabled={props.disabled}
      error={props.error}
      fullWidth={fullWidth}
      required={props.required}
    >
      <InputLabel id={labelId}>{label}</InputLabel>
      <StyledSelect
        ref={ref}
        {...selectProps}
        aria-describedby={describedBy}
        inputProps={{ ...inputProps, 'aria-describedby': describedBy }}
        value={selectValue}
        label={label}
        labelId={labelId}
        onChange={handleChange}
        renderValue={resolvedRenderValue}
        IconComponent={KeyboardArrowDown}
      >
        {options.map((option) =>
          renderOptions ? (
            cloneElement(renderOptions(option), { key: option.value })
          ) : (
            <MISelectItem
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              startIcon={option.startIcon}
            >
              {option.label}
            </MISelectItem>
          )
        )}
      </StyledSelect>
      {hasHelperText && <MIFormHelperText id={helperTextId}>{helperText}</MIFormHelperText>}
    </MIFormControl>
  );
});

MISelect.displayName = 'MISelect';

export default MISelect;

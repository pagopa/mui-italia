'use client';

import { KeyboardArrowDown, ReportRounded as ReportRoundedIcon } from '@mui/icons-material';
import { Box, type SelectChangeEvent, type SelectProps } from '@mui/material';
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
import { StyledInputLabel, StyledSelect } from './styles';

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
  | 'displayEmpty'
  | 'IconComponent'
  | 'input'
  | 'label'
  | 'MenuProps'
  | 'native'
  | 'SelectDisplayProps'
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
    labelId: providedLabelId,
    helperText,
    'aria-describedby': ariaDescribedBy,
    inputProps,
    options,
    renderOptions,
    renderValue,
    getChipDeleteAriaLabel,
    ...selectProps
  } = props;
  const hasLabel = label != null && label !== false && label !== '';
  const labelId = providedLabelId ?? (hasLabel ? generatedLabelId : undefined);
  const hasHelperText = helperText != null && helperText !== false && helperText !== '';
  const helperTextId = hasHelperText ? `${generatedLabelId}-helper-text` : undefined;
  const describedBy =
    [ariaDescribedBy, inputProps?.['aria-describedby'], helperTextId].filter(Boolean).join(' ') ||
    undefined;
  const isValueControlled = props.value !== undefined;

  // State for uncontrolled multiple select value, this will hold the selected values when the component is not controlled externally.
  const [uncontrolledMultipleValue, setUncontrolledMultipleValue] = useState<Array<unknown>>(() =>
    Array.isArray(props.defaultValue) ? props.defaultValue : []
  );

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
      {hasLabel && <StyledInputLabel id={labelId}>{label}</StyledInputLabel>}
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
      {hasHelperText && (
        <MIFormHelperText id={helperTextId}>
          {props.error ? (
            <Box
              component="span"
              sx={(theme) => ({
                alignItems: 'center',
                display: 'flex',
                fontSize: theme.typography.pxToRem(14),
                gap: theme.spacing(0.75),
                lineHeight: theme.typography.pxToRem(20),
              })}
            >
              <ReportRoundedIcon
                aria-hidden="true"
                sx={(theme) => ({
                  color: theme.palette.error.main,
                  fontSize: theme.typography.pxToRem(16),
                })}
              />
              {helperText}
            </Box>
          ) : (
            helperText
          )}
        </MIFormHelperText>
      )}
    </MIFormControl>
  );
});

MISelect.displayName = 'MISelect';

export default MISelect;

'use client';

import { Close, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Box, IconButton, Paper, Popper, TextField } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import {
  ChangeEvent,
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
  MouseEvent,
  FocusEvent,
  useId,
} from 'react';
import { AutocompleteProps, AutocompleteValue, InputChangeReason } from 'types/autocomplete';
import { isMobileDevice } from 'utils/device';
import { filterOptionsInternal } from 'utils/autocomplete';
import AutocompleteContent from './AutocompleteContent';
import MultiSelectChips from './MultiSelectChips';
import DefaultEmptyState from './DefaultEmptyState';

const Autocomplete = <T, M extends boolean | undefined = false>({
  id,
  options,
  getOptionLabel = (option: any) => option.label ?? option,
  isOptionEqualToValue = (option, value) => option === value,
  label,
  placeholder,
  multiple = false,
  handleFiltering = filterOptionsInternal,
  disabled = false,
  required = false,
  error = false,
  helperText,
  loading = false,
  noResultsText = 'There are no matches to show',
  slots = {},
  slotProps = {},
  value,
  inputValue,
  renderOption,
  onChange,
  onInputChange,
  setInputValueOnSelect,
  sx,
  ...other // all the HTML default properties (i.e. data-testid)
}: AutocompleteProps<T, M>) => {
  const [inputInternalValue, setInputInternalValue] = useState<string>('');
  const [internalValue, setInternalValue] = useState<Array<T> | T | null>(
    (multiple ? [] : null) as Array<T> | T | null
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const listboxId = `${inputId}-listbox`;

  const currentInputValue = inputValue ?? inputInternalValue;
  const currentValue = value ?? internalValue;
  const {
    startIcon: StartIcon,
    loadingSkeleton: LoadingSkeleton,
    emptyState: EmptyState = DefaultEmptyState,
  } = slots;

  const {
    clearButton: clearButtonProps = { 'aria-label': 'Clear the entered text' },
    toggleButton: toggleButtonProps = {
      hidden: false,
      'open-aria-label': 'Open the dropdown menu',
      'close-aria-label': 'Close the dropdown menu',
    },
    announcementBox: announcementBoxProps = {
      loadingText: 'Loading',
      selectionText: '%s selected',
    },
    selectionBox: selectionBoxProps = { 'aria-label': 'Selected options' },
    selectionChip: selectionChipProps = {},
    textField: textFieldProps = {},
  } = slotProps;

  const filteredOptions = handleFiltering(options, {
    inputValue: currentInputValue,
    getOptionLabel,
  });

  const setInputValue = (v: string, reason: InputChangeReason) => {
    // non controlled input
    if (inputValue === undefined) {
      setInputInternalValue(v);
    }
    if (v !== currentInputValue) {
      setActiveIndex(-1);
    }
    onInputChange?.(v, reason);
  };

  const setAutocompleteValue = (v: T | Array<T> | null) => {
    // non controlled autocomplete
    if (value === undefined) {
      setInternalValue(v);
    }
    onChange?.(v as AutocompleteValue<T, M>);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }

    setInputValue(e.target.value, 'input');
    setIsOpen(true);
  };

  const handleOptionSelect = (option: T) => {
    if (disabled) {
      return;
    }

    if (multiple && Array.isArray(currentValue)) {
      const isAlreadySelected = currentValue.some((selected) =>
        isOptionEqualToValue(selected, option)
      );

      let newSelectedOptions;
      if (isAlreadySelected) {
        newSelectedOptions = currentValue.filter(
          (selected) => !isOptionEqualToValue(selected, option)
        );
      } else {
        newSelectedOptions = [...currentValue, option];
      }
      setInputValue('', 'selectOption');
      setAutocompleteValue(newSelectedOptions);
    } else {
      setInputFocus(false);
      if (setInputValueOnSelect) {
        const newValue = setInputValueOnSelect(option);
        if (newValue !== null) {
          setInputValue(newValue, 'selectOption');
        }
      } else {
        setInputValue(getOptionLabel(option), 'selectOption');
      }
      setAutocompleteValue(option);
    }
  };

  const handleChipDelete = (optionToRemove: T) => {
    if (disabled) {
      return;
    }

    if (multiple && Array.isArray(currentValue)) {
      const newSelectedOptions = currentValue.filter(
        (option) => !isOptionEqualToValue(option, optionToRemove)
      );
      setAutocompleteValue(newSelectedOptions);
      inputRef.current?.focus();
    }
  };

  const setInputFocus = (open: boolean = true) => {
    if (disabled) {
      return;
    }

    inputRef.current?.focus();
    setIsOpen(open);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }

    if (filteredOptions.length === 0) {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setIsOpen(true);
        setActiveIndex((prev) => (prev < filteredOptions.length - 1 ? prev + 1 : 0));
        break;

      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : filteredOptions.length - 1));
        break;

      case 'Enter':
        e.preventDefault();
        if (activeIndex >= 0 && filteredOptions[activeIndex]) {
          handleOptionSelect(filteredOptions[activeIndex]);
        }
        break;

      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        setActiveIndex(-1);
        break;

      default:
        break;
    }
  };

  const handleClearValue = () => {
    if (disabled) {
      return;
    }

    setInputValue('', 'clear');
    setAutocompleteValue(multiple ? [] : null);
    setIsOpen(false);
  };

  const handleToggleOpen = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (disabled) {
      return;
    }

    const focusingAnOption = activeIndex !== -1;
    const keepMenuOpen = isOpen && isMobileDevice();
    if (focusingAnOption && keepMenuOpen) {
      return;
    }

    // If the newly focused element isn't in the autocomplete component, we can close the dropdown
    // and deselect the option
    if (
      !containerRef.current?.contains(event.relatedTarget) &&
      !popperRef.current?.contains(event.relatedTarget)
    ) {
      setIsOpen(false);
      setActiveIndex(-1);
    }
  };

  const getStartInputAdornment = () => {
    if (!StartIcon && (!multiple || (Array.isArray(currentValue) && currentValue.length === 0))) {
      return undefined;
    }

    return (
      <>
        {StartIcon && (
          <StartIcon
            sx={{
              color: disabled ? 'text.disabled' : 'text.secondary',
            }}
          />
        )}
        {multiple && Array.isArray(currentValue) && currentValue.length > 0 && (
          <MultiSelectChips
            selectedOptions={currentValue}
            handleChipDelete={handleChipDelete}
            disabled={disabled}
            getOptionLabel={getOptionLabel}
            slotProps={{
              list: { 'aria-label': selectionBoxProps['aria-label'] },
              chip: { 'aria-label': selectionChipProps['aria-label'] },
            }}
          />
        )}
      </>
    );
  };

  const getEndInputAdornment = () => {
    const showClearIcon =
      currentInputValue || (Array.isArray(currentValue) ? currentValue.length > 0 : currentValue);
    const showArrowIcon = !toggleButtonProps.hidden;

    if ((!showClearIcon && !showArrowIcon) || disabled) {
      return null;
    }

    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
        }}
      >
        {showClearIcon && (
          <IconButton
            size="small"
            onClick={handleClearValue}
            onMouseDown={(e) => e.preventDefault()}
            aria-label={clearButtonProps['aria-label']}
            disabled={disabled}
            sx={{
              padding: 0,
              color: 'text.secondary',
            }}
          >
            <Close />
          </IconButton>
        )}
        {showArrowIcon && (
          <IconButton
            size="small"
            onClick={handleToggleOpen}
            aria-label={
              isOpen ? toggleButtonProps['close-aria-label'] : toggleButtonProps['open-aria-label']
            }
            disabled={disabled}
            sx={{
              padding: 0,
              color: disabled ? 'text.disabled' : 'text.secondary',
              cursor: disabled ? 'default' : 'pointer',
            }}
          >
            {isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        )}
      </Box>
    );
  };

  useEffect(() => {
    if (disabled) {
      setIsOpen(false);
      setActiveIndex(-1);
      return;
    }

    if (isOpen && activeIndex >= 0 && listboxRef.current) {
      const optionElement = listboxRef.current.querySelector(
        CSS.escape(`#${listboxId}-option-${activeIndex}`)
      );
      optionElement?.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIndex, isOpen, disabled]);

  return (
    <>
      <Box position="relative" ref={containerRef} onBlur={handleBlur} sx={sx} {...other}>
        <TextField
          id={inputId}
          fullWidth
          inputRef={inputRef}
          value={currentInputValue}
          onChange={handleInputChange}
          onClick={() => setInputFocus(true)}
          onKeyDown={handleKeyDown}
          label={label}
          placeholder={
            multiple && Array.isArray(currentValue) && currentValue.length > 0 ? '' : placeholder
          }
          variant="outlined"
          autoComplete="off"
          disabled={disabled}
          required={required}
          error={error}
          helperText={helperText}
          inputProps={{
            role: 'combobox',
            'aria-expanded': isOpen,
            'aria-controls': listboxId,
            'aria-autocomplete': 'list',
            'aria-activedescendant':
              activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined,
            'aria-haspopup': 'listbox',
            'aria-disabled': disabled,
          }}
          InputProps={{
            startAdornment: getStartInputAdornment(),
            endAdornment: getEndInputAdornment(),
          }}
          sx={{
            '& .MuiInputBase-root': {
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 1,
              padding: '0.625rem 0.75rem',
              borderRadius: '0.5rem',
              borderWidth: '0.125rem',
              backgroundColor: disabled ? '#F4F5F8' : 'transparent',
              minHeight: '3rem',
            },
            '& .MuiInputBase-input': {
              flex: '1 1 3.75rem',
              minWidth: '3.75rem',
              padding: '0',
              boxSizing: 'border-box',
            },
            '& .MuiInputLabel-root': {
              transform: 'translate(0.875rem, 0.663rem) scale(1)',

              '&.MuiInputLabel-shrink': {
                transform: 'translate(0.875rem, -0.663rem) scale(0.75)',
              },
            },
          }}
          {...textFieldProps}
        />

        <Popper
          ref={popperRef}
          open={isOpen && !disabled}
          anchorEl={containerRef.current}
          keepMounted
          placement="bottom-start"
          modifiers={[
            {
              name: 'flip',
              enabled: true,
              options: {
                altBoundary: true,
                rootBoundary: 'viewport',
                padding: 8,
              },
            },
            {
              name: 'sameWidth',
              enabled: true,
              phase: 'beforeWrite',
              requires: ['computeStyles'],
              fn: ({ state }) => {
                state.styles.popper.width = `${state.rects.reference.width}px`;
              },
            },
            {
              name: 'offset',
              options: {
                // [skidding, distance]
                // skidding: lateral movement (0)
                // distance: distance from the input (es. 8px)
                offset: [0, 8],
              },
            },
          ]}
          style={{ zIndex: 1300 }}
          role="presentation"
        >
          <Paper
            elevation={4}
            variant="elevation"
            sx={{
              maxHeight: '15rem',
              overflowY: 'auto',
            }}
          >
            {filteredOptions.length > 0 && (
              <AutocompleteContent
                multiple={multiple}
                filteredOptions={filteredOptions}
                selectedOptions={currentValue}
                handleOptionSelect={handleOptionSelect}
                listboxId={listboxId}
                listboxRef={listboxRef}
                inputId={inputId}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                renderOption={renderOption}
                loading={loading}
                slots={{ loadingSkeleton: LoadingSkeleton }}
                getOptionLabel={getOptionLabel}
                isOptionEqualToValue={isOptionEqualToValue}
              />
            )}
            <Box aria-live="polite" role="status">
              <EmptyState noResultsText={noResultsText} filteredOptions={filteredOptions} />
            </Box>
          </Paper>
        </Popper>
      </Box>

      {/*
        This box is needed to announce the results of search and selection to users with visual impairments.
        It announces the option selected each time user does a selection.
        It announces when options are loaded asynchronously and loading state is needed: it announces when loading is shown and
        when results (or no result) are found.
       */}
      <Box aria-live="polite" role="status" sx={visuallyHidden} aria-atomic="true">
        {loading && announcementBoxProps.loadingText}
        {Array.isArray(currentValue) &&
          currentValue.length > 0 &&
          `${announcementBoxProps.selectionText?.replace(
            '%s',
            currentValue.map((opt) => getOptionLabel(opt)).join(', ')
          )}`}
      </Box>
    </>
  );
};

export default Autocomplete;

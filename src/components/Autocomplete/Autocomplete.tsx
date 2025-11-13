'use client';

import { Close, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Box, IconButton, Paper, Popper, TextField } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import React, { useEffect, useRef, useState } from 'react';
import { AutocompleteProps, OptionType } from 'types/autocomplete';
import { isIosDevice } from 'utils/device';
import AutocompleteContent from './AutocompleteContent';
import DefaultEmptyState from './DefaultEmptyState';
import MultiSelectChips from './MultiSelectChips';

const Autocomplete: React.FC<AutocompleteProps> = ({
  options,
  label,
  placeholder,
  multiple = false,
  avoidLocalFiltering = false,
  noResultsText = 'Non ci sono corrispondenze da mostrare',
  disabled = false,
  required = false,
  loading = false,
  loadingAriaLabel = 'Loading',
  slots = {},
  slotProps = {},
  value,
  renderOption,
  onInputChange,
  onSelect,
  setInputValueOnSelect,
}) => {
  const [inputValue, setInputValue] = useState<string>(value || '');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [selectedOptions, setSelectedOptions] = useState<Array<OptionType>>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);
  const listboxId = 'autocomplete-listbox';
  const inputId = 'autocomplete-input';

  const { startIcon: StartIcon, loadingSkeleton: LoadingSkeleton } = slots;

  const {
    startIcon: startIconProps = {},
    clearIcon: clearIconProps = {},
    expandIcon: expandIconProps = {},
    collapseIcon: collapseIconProps = {},
    input: inputProps = {},
    loadingSkeleton: loadingSkeletonProps = {},
    selectionBox: selectionBoxProps = {},
    hideArrows = false,
  } = slotProps;

  const clearButtonLabel = clearIconProps?.['aria-label'] ?? 'Clear the entered text';
  const collapseButtonLabel = collapseIconProps?.['aria-label'] ?? 'Close the dropdown menu';
  const expandButtonLabel = expandIconProps?.['aria-label'] ?? 'Open the dropdown menu';
  const selectedOptionsLabel = selectionBoxProps?.['aria-label'] ?? 'Selected options';

  const filteredOptions =
    inputValue.trim() === '' || avoidLocalFiltering
      ? options
      : options.filter((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()));

  const handleInputBlur = () => {
    if (disabled) {
      return;
    }

    const focusingAnOption = activeIndex !== -1;
    const keepMenuOpen = isOpen && isIosDevice();
    if (!focusingAnOption && !keepMenuOpen) {
      setIsOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }

    setInputValue(e.target.value);
    setIsOpen(true);
    setActiveIndex(-1);
    onInputChange?.(e.target.value);
  };

  const handleOptionSelect = (option: OptionType) => {
    if (disabled) {
      return;
    }

    if (multiple) {
      const isAlreadySelected = selectedOptions.some((selected) => selected.id === option.id);

      let newSelectedOptions: Array<OptionType>;
      if (isAlreadySelected) {
        newSelectedOptions = selectedOptions.filter((selected) => selected.id !== option.id);
      } else {
        newSelectedOptions = [...selectedOptions, option];
      }

      setSelectedOptions(newSelectedOptions);
      setInputValue('');
      setActiveIndex(-1);
      onSelect?.(newSelectedOptions);
    } else {
      setInputFocus(false);
      setActiveIndex(-1);
      onSelect?.(option);

      if (setInputValueOnSelect) {
        const newValue = setInputValueOnSelect(option);
        if (newValue !== null) {
          setInputValue(newValue);
        }
      } else {
        setInputValue(option.label);
      }
    }
  };

  const handleChipDelete = (optionToRemove: OptionType) => {
    if (disabled) {
      return;
    }

    const newSelectedOptions = selectedOptions.filter((option) => option.id !== optionToRemove.id);
    setSelectedOptions(newSelectedOptions);
    onSelect?.(newSelectedOptions);
  };

  const setInputFocus = (open: boolean = true) => {
    if (disabled) {
      return;
    }

    inputRef.current?.focus();
    setIsOpen(open);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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

    setInputValue('');
    if (multiple) {
      setSelectedOptions([]);
      onSelect?.([]);
    }
    setIsOpen(false);
    setActiveIndex(-1);
    onInputChange?.('');
  };

  const handleToggleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const getStartInputAdornment = () => {
    if (!StartIcon && (!multiple || selectedOptions.length === 0)) {
      return undefined;
    }

    return (
      <>
        {StartIcon && (
          <StartIcon
            sx={{
              color: disabled ? 'text.disabled' : 'text.secondary',
              ...startIconProps.sx,
            }}
            {...startIconProps}
          />
        )}
        {multiple && selectedOptions.length > 0 && (
          <MultiSelectChips
            selectedOptions={selectedOptions}
            handleChipDelete={handleChipDelete}
            disabled={disabled}
            selectedOptionsLabel={selectedOptionsLabel}
          />
        )}
      </>
    );
  };

  const getEndInputAdornment = () => {
    const showCloseIcon = inputValue && !disabled;
    const showArrowIcon = !hideArrows;

    if (!showCloseIcon && !showArrowIcon) {
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
        {showCloseIcon && (
          <IconButton
            size="small"
            onClick={handleClearValue}
            onMouseDown={(e) => e.preventDefault()}
            aria-label={clearButtonLabel}
            disabled={disabled}
            sx={{
              padding: 0,
              color: 'text.secondary',
            }}
          >
            <Close {...clearIconProps} />
          </IconButton>
        )}
        {showArrowIcon && (
          <IconButton
            size="small"
            onClick={handleToggleOpen}
            aria-label={isOpen ? collapseButtonLabel : expandButtonLabel}
            disabled={disabled}
            sx={{
              padding: 0,
              color: disabled ? 'text.disabled' : 'text.secondary',
              cursor: disabled ? 'default' : 'pointer',
            }}
          >
            {isOpen ? (
              <KeyboardArrowUp {...collapseIconProps} />
            ) : (
              <KeyboardArrowDown {...expandIconProps} />
            )}
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
      const optionElement = listboxRef.current.querySelector(`#${listboxId}-option-${activeIndex}`);
      optionElement?.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIndex, isOpen, disabled]);

  useEffect(() => {
    if (value !== undefined) {
      setInputValue(value);
    }
  }, [value]);

  return (
    <>
      <Box position="relative" width="100%" ref={containerRef}>
        <TextField
          fullWidth
          inputRef={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          onClick={() => setInputFocus(true)}
          onKeyDown={handleKeyDown}
          onBlur={handleInputBlur}
          label={label}
          placeholder={multiple && selectedOptions.length > 0 ? '' : placeholder}
          variant="outlined"
          autoComplete="off"
          disabled={disabled}
          required={required}
          inputProps={{
            role: 'combobox',
            id: inputId,
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
            ...inputProps,
          }}
          sx={{
            '& .MuiInputBase-root': {
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 1,
              padding: '10px 12px',
              borderRadius: '8px',
              borderWidth: '2px',
              position: 'relative',
              backgroundColor: disabled ? '#F4F5F8' : 'transparent',
              minHeight: '60px',
            },
            '& .MuiInputBase-input': {
              flex: '1 1 60px',
              minWidth: '60px',
              padding: '8px 0',
              boxSizing: 'border-box',
            },
          }}
        />

        <Popper
          open={isOpen && !disabled}
          anchorEl={containerRef.current}
          keepMounted
          placement="bottom-start"
          modifiers={[
            {
              name: 'sameWidth',
              enabled: true,
              phase: 'beforeWrite',
              requires: ['computeStyles'],
              fn: ({ state }) => {
                state.styles.popper.width = `${state.rects.reference.width}px`;
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
              maxHeight: '240px',
              overflowY: 'auto',
              my: 1,
            }}
          >
            {filteredOptions.length > 0 ? (
              <AutocompleteContent
                multiple={multiple}
                filteredOptions={filteredOptions}
                selectedOptions={selectedOptions}
                isOptionSelected={() => false}
                handleOptionSelect={handleOptionSelect}
                listboxId={listboxId}
                listboxRef={listboxRef}
                inputId={inputId}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                renderOption={renderOption}
                loading={loading}
                LoadingSkeleton={LoadingSkeleton}
                loadingSkeletonProps={loadingSkeletonProps}
              />
            ) : (
              <DefaultEmptyState noResultsText={noResultsText} />
            )}
          </Paper>
        </Popper>
      </Box>

      <Box aria-live="polite" sx={visuallyHidden}>
        {selectedOptions.length > 0 &&
          `${selectedOptions.map((opt) => opt.label).join(', ')} selected`}
      </Box>

      <Box aria-live="polite" sx={visuallyHidden}>
        {loading && loadingAriaLabel}
      </Box>
    </>
  );
};

export default Autocomplete;

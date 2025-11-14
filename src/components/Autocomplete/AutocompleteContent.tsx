import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Skeleton,
} from '@mui/material';
import React, { MouseEvent } from 'react';

type Props<T> = {
  multiple: boolean;
  filteredOptions: Array<T>;
  selectedOptions: Array<T>;
  inputValue?: string;
  getOptionLabel: (option: T) => string;
  isOptionEqualToValue?: (option: T, value: T) => boolean;
  handleOptionSelect: (option: T) => void;
  listboxId: string;
  listboxRef: React.RefObject<HTMLUListElement>;
  inputId: string;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  renderOption?: (option: T, index: number) => React.ReactNode;
  loading?: boolean;
  LoadingSkeleton?: React.ComponentType;
  loadingSkeletonProps?: Record<string, any>;
};

const DefaultLoadingSkeleton: React.FC = () => (
  <ListItem disablePadding>
    <ListItemButton sx={{ py: 1, px: 2, cursor: 'default' }}>
      <ListItemText
        primary={<Skeleton variant="text" width="40%" sx={{ borderRadius: 8 }} />}
        secondary={<Skeleton variant="text" width="80%" sx={{ borderRadius: 8 }} />}
        sx={{ margin: 0 }}
      />
    </ListItemButton>
  </ListItem>
);

const AutocompleteContent = <T,>({
  multiple,
  filteredOptions,
  selectedOptions = [],
  inputValue = '',
  getOptionLabel,
  isOptionEqualToValue,
  handleOptionSelect,
  listboxId,
  listboxRef,
  inputId,
  activeIndex,
  setActiveIndex,
  renderOption,
  loading = false,
  LoadingSkeleton,
  loadingSkeletonProps = {},
}: Props<T>) => {
  const handleOptionMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    // Safari triggers focusOut before click, but if you
    // preventDefault on mouseDown, you can stop that from happening.
    // If this is removed, clicking on an option in Safari will trigger
    // `handleOptionBlur`, which closes the menu, and the click will
    // trigger on the element underneath instead.
    // See: http://stackoverflow.com/questions/7621711/how-to-prevent-blur-running-when-clicking-a-link-in-jquery
    event.preventDefault();
  };

  const handleOptionClick = (event: MouseEvent<HTMLDivElement>, option: T) => {
    event.preventDefault();
    event.stopPropagation();
    handleOptionSelect(option);
  };

  const isOptionSelectedInternal = (option: T) =>
    multiple
      ? selectedOptions.some((selected) => isOptionEqualToValue?.(selected, option))
      : inputValue === getOptionLabel(option);

  const SkeletonComponent = LoadingSkeleton || DefaultLoadingSkeleton;

  return (
    <List id={listboxId} ref={listboxRef} role="listbox" aria-labelledby={inputId} sx={{ p: 0 }}>
      {loading
        ? Array.from({ length: 4 }).map((_, index) => (
            <SkeletonComponent key={`skeleton-${index}`} {...loadingSkeletonProps} />
          ))
        : filteredOptions.map((option, index) => {
            const optionLabel = getOptionLabel(option);
            const isSelected = isOptionSelectedInternal(option);

            return (
              <ListItem
                key={`option-${index}-${optionLabel}`}
                disablePadding
                sx={{
                  backgroundColor: index === activeIndex ? 'rgba(0, 0, 0, 0.08)' : 'transparent',
                }}
              >
                <ListItemButton
                  id={`${listboxId}-option-${index}`}
                  role="option"
                  tabIndex={-1}
                  aria-selected={isSelected}
                  onClick={(event) => handleOptionClick(event, option)}
                  onMouseOver={() => setActiveIndex(index)}
                  onMouseDown={handleOptionMouseDown}
                  aria-posinset={index + 1}
                  aria-setsize={filteredOptions.length}
                  sx={{
                    py: 1,
                    px: 2,
                    cursor: 'pointer',
                    backgroundColor: isSelected ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                    ...(multiple && { pr: 6 }),
                  }}
                >
                  <ListItemText
                    primary={renderOption ? renderOption(option, index) : optionLabel}
                    sx={{ margin: 0 }}
                  />
                  {multiple && (
                    <ListItemSecondaryAction>
                      <Checkbox checked={isSelected} size="small" sx={{ p: 0 }} />
                    </ListItemSecondaryAction>
                  )}
                </ListItemButton>
              </ListItem>
            );
          })}
    </List>
  );
};

export default AutocompleteContent;

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
import { OptionType } from './utils/types';

type Props = {
  multiple: boolean;
  filteredOptions: Array<OptionType>;
  selectedOptions?: Array<OptionType>;
  inputValue?: string;
  isOptionSelected: (option: OptionType) => boolean;
  handleOptionSelect: (option: OptionType) => void;
  listboxId: string;
  listboxRef: React.RefObject<HTMLUListElement>;
  inputId: string;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  renderOption?: (option: OptionType, index: number) => React.ReactNode;
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

const AutocompleteContent: React.FC<Props> = ({
  multiple,
  filteredOptions,
  selectedOptions = [],
  inputValue = '',
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
}) => {
  const handleOptionMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    // Safari triggers focusOut before click, but if you
    // preventDefault on mouseDown, you can stop that from happening.
    // If this is removed, clicking on an option in Safari will trigger
    // `handleOptionBlur`, which closes the menu, and the click will
    // trigger on the element underneath instead.
    // See: http://stackoverflow.com/questions/7621711/how-to-prevent-blur-running-when-clicking-a-link-in-jquery
    event.preventDefault();
  };

  const handleOptionClick = (event: MouseEvent<HTMLDivElement>, option: OptionType) => {
    event.preventDefault();
    event.stopPropagation();
    handleOptionSelect(option);
  };

  const isOptionSelected = (option: OptionType) =>
    multiple
      ? selectedOptions.some((selected) => selected.id === option.id)
      : inputValue === option.label;

  const SkeletonComponent = LoadingSkeleton || DefaultLoadingSkeleton;

  return (
    <List id={listboxId} ref={listboxRef} role="listbox" aria-labelledby={inputId} sx={{ p: 0 }}>
      {loading
        ? Array.from({ length: 4 }).map((_, index) => (
            <SkeletonComponent key={`skeleton-${index}`} {...loadingSkeletonProps} />
          ))
        : filteredOptions.map((option, index) => (
            <ListItem
              key={option.id}
              disablePadding
              sx={{
                backgroundColor: index === activeIndex ? 'rgba(0, 0, 0, 0.08)' : 'transparent',
              }}
            >
              <ListItemButton
                id={`${listboxId}-option-${index}`}
                role="option"
                tabIndex={-1}
                aria-selected={isOptionSelected(option)}
                onClick={(event) => handleOptionClick(event, option)}
                onMouseOver={() => setActiveIndex(index)}
                onMouseDown={handleOptionMouseDown}
                aria-posinset={index + 1}
                aria-setsize={filteredOptions.length}
                sx={{
                  py: 1,
                  px: 2,
                  cursor: 'pointer',
                  backgroundColor: isOptionSelected(option)
                    ? 'rgba(25, 118, 210, 0.08)'
                    : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                  ...(multiple && { pr: 6 }),
                }}
              >
                <ListItemText
                  primary={renderOption ? renderOption(option, index) : option.label}
                  sx={{ margin: 0 }}
                />
                {multiple && (
                  <ListItemSecondaryAction>
                    <Checkbox checked={isOptionSelected(option)} size="small" sx={{ p: 0 }} />
                  </ListItemSecondaryAction>
                )}
              </ListItemButton>
            </ListItem>
          ))}
    </List>
  );
};

export default AutocompleteContent;

import { Chip } from '@components/Chip';
import { Box, ChipProps, ListProps } from '@mui/material';

interface Props<T> {
  selectedOptions: Array<T>;
  getOptionLabel: (option: T) => string;
  disabled?: boolean;
  handleChipDelete: (option: T) => void;
  slotProps: {
    list?: ListProps;
    chip?: ChipProps;
  };
}

// Here we need a Box with a ‘contents’ display to ensure that the buttons
// are rendered as if they were direct children of the container Box.
// This way, the buttons are positioned correctly within the TextField.
const MultiSelectChips = <T,>({
  selectedOptions,
  getOptionLabel,
  disabled,
  handleChipDelete,
  slotProps,
}: Props<T>) => {
  const getOptionKey = (option: T, index: number): string => {
    const label = getOptionLabel(option);
    return `selected-chip-${index}-${label}`;
  };

  return (
    <Box display="contents" role="list">
      {selectedOptions.map((option, index) => (
        <Chip
          key={getOptionKey(option, index)}
          label={getOptionLabel(option)}
          onDelete={() => handleChipDelete(option)}
          disabled={disabled}
          aria-setsize={selectedOptions.length}
          aria-posinset={index + 1}
          role="listitem"
          size="small"
          {...slotProps.chip}
        />
      ))}
    </Box>
  );
};

export default MultiSelectChips;

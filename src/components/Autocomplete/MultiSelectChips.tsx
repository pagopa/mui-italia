import CloseIcon from '@mui/icons-material/Close';
import { Box, Button } from '@mui/material';

interface Props<T> {
  selectedOptions: Array<T>;
  getOptionLabel: (option: T) => string;
  disabled?: boolean;
  handleChipDelete: (option: T) => void;
  selectedOptionsLabel: string;
}

// Here we need a Box with a ‘contents’ display to ensure that the buttons
// are rendered as if they were direct children of the container Box.
// This way, the buttons are positioned correctly within the TextField.
const MultiSelectChips = <T,>({
  selectedOptions,
  getOptionLabel,
  disabled,
  handleChipDelete,
  selectedOptionsLabel,
}: Props<T>) => {
  const getOptionKey = (option: T, index: number): string => {
    const label = getOptionLabel(option);
    return `selected-chip-${index}-${label}`;
  };

  return (
    <Box component="span" role="group" aria-label={selectedOptionsLabel} display="contents">
      {selectedOptions.map((option, index) => (
        <Button
          key={getOptionKey(option, index)}
          variant="contained"
          size="small"
          endIcon={<CloseIcon sx={{ color: '#0B3EE3' }} />}
          onClick={() => handleChipDelete(option)}
          disabled={disabled}
          sx={{
            borderRadius: 8,
            alignItems: 'center',
            backgroundColor: '#E8EBF1',
            color: 'text.primary',
            height: 32,
            px: 1,
            '&:hover': {
              backgroundColor: '#D1D7E0 !important',
            },
          }}
        >
          {getOptionLabel(option)}
        </Button>
      ))}
    </Box>
  );
};

export default MultiSelectChips;

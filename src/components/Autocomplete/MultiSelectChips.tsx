import CloseIcon from '@mui/icons-material/Close';
import { Box, Button } from '@mui/material';
import { OptionType } from 'types/autocomplete';

interface Props {
  selectedOptions: Array<OptionType>;
  disabled?: boolean;
  handleChipDelete: (option: OptionType) => void;
  selectedOptionsLabel: string;
}

// Here we need a Box with a ‘contents’ display to ensure that the buttons
// are rendered as if they were direct children of the container Box.
// This way, the buttons are positioned correctly within the TextField.
const MultiSelectChips: React.FC<Props> = ({
  selectedOptions,
  disabled,
  handleChipDelete,
  selectedOptionsLabel,
}) => (
  <Box component="span" role="group" aria-label={selectedOptionsLabel} sx={{ display: 'contents' }}>
    {selectedOptions.map((option) => (
      <Button
        key={option.id}
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
        {option.label}
      </Button>
    ))}
  </Box>
);

export default MultiSelectChips;

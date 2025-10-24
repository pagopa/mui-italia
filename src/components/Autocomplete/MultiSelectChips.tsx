import CloseIcon from '@mui/icons-material/Close';
import { Box, Button } from '@mui/material';
import { OptionType } from './utils/types';

interface Props {
  selectedOptions: Array<OptionType>;
  disabled?: boolean;
  handleChipDelete: (option: OptionType) => void;
  selectedOptionsLabel: string;
}

// Qui abbiamo bisogno di un Box con display "contents" per fare in modo che i bottoni
// vengano renderizzati come se fossero figli diretti del Box contenitore.
// In questo modo, i bottoni si dispongono correttamente all'interno del TextField.
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

import MuiChip, { ChipOwnProps, ChipProps } from '@mui/material/Chip';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { FC } from 'react';

type AllowedChipColors = 'default' | 'error' | 'success' | 'warning' | 'highlight' | 'neutral';
type CustomChipProps = Omit<ChipProps, 'color' | 'label'> & {
  label: string;
  color?: AllowedChipColors;
};

const Chip: FC<CustomChipProps> = (props) => {
  const { sx, label, color, 'aria-label': ariaLabel, ...other } = props;

  // Standard case: we render the default component
  return (
    <MuiChip
      sx={sx}
      label={label}
      deleteIcon={<CloseRoundedIcon />}
      color={color as ChipOwnProps['color']}
      {...other}
      aria-label={ariaLabel}
    />
  );
};

export default Chip;

import MuiChip, { ChipOwnProps, ChipProps } from '@mui/material/Chip';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { FC } from 'react';

type AllowedChipColors = 'default' | 'error' | 'success' | 'warning' | 'highlight' | 'neutral';

type BaseChipProps = Omit<ChipProps, 'color' | 'deleteIcon' | 'label'> & {
  label: string;
};

// Props for the standard mode
type StandardChipProps = BaseChipProps & {
  mode?: 'standard';
  color?: AllowedChipColors;
};

// Props for the deletable mode, with color fixed to 'neutral'
type DeletableChipProps = BaseChipProps & {
  mode: 'deletable';
  color?: 'neutral';
};

export type CustomChipProps = StandardChipProps | DeletableChipProps;

const Chip: FC<CustomChipProps> = (props) => {
  const {
    mode = 'standard',
    sx,
    label,
    onClick,
    onDelete,
    'aria-label': ariaLabel,
    ...other
  } = props;

  // Determine the correct color based on the mode and provided props
  const color = props.color ?? (mode === 'deletable' ? 'neutral' : 'default');

  const applyDeletableA11yFix = mode === 'deletable' && onDelete && !onClick;

  if (applyDeletableA11yFix) {
    return (
      <MuiChip
        label={label}
        onDelete={onDelete}
        tabIndex={-1}
        role={undefined}
        color="neutral" // Hardcoded to neutral to ensure the UI respects the rule
        sx={{
          cursor: 'default',
          ...sx,
          '& .MuiChip-deleteIcon': {
            cursor: 'pointer',
          },
        }}
        deleteIcon={
          <CloseRoundedIcon
            tabIndex={0}
            role="button"
            aria-label={(ariaLabel ?? `Delete %s`).replace('%s', label)}
            style={{ cursor: 'pointer' }}
            aria-hidden={false}
            focusable={true}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                onDelete?.(e as any);
              }
            }}
            sx={{
              color: '#2962FF',
              backgroundColor: 'transparent',
              borderRadius: 0,
            }}
          />
        }
        {...other}
      />
    );
  }

  // Standard case
  return (
    <MuiChip
      sx={sx}
      label={label}
      deleteIcon={<CloseRoundedIcon />}
      onClick={onClick}
      onDelete={onDelete}
      color={color as ChipOwnProps['color']}
      {...other}
      aria-label={ariaLabel}
    />
  );
};

export default Chip;

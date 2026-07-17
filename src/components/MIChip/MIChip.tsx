import React, { forwardRef } from 'react';
import MuiChip, { ChipProps } from '@mui/material/Chip';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { styled, SxProps } from '@mui/material/styles';
import { useTheme } from '@mui/material';

type AllowedMIChipColors =
  | 'default'
  | 'error'
  | 'success'
  | 'warning'
  | 'highlight'
  | 'neutral'
  | 'info';

type BaseMIChipProps = Omit<ChipProps, 'color' | 'deleteIcon' | 'onClick' | 'onDelete' | 'size'> & {
  sx?: SxProps;
};

// Props for the standard mode
type StandardMIChipProps = BaseMIChipProps & {
  color?: Exclude<AllowedMIChipColors, 'neutral'>;
  onDelete?: never;
};

// Props for the deletable mode, with color fixed to 'neutral'
type DeletableMIChipProps = BaseMIChipProps & {
  color?: 'neutral';
  variant?: 'filled';
  onDelete?: React.EventHandler<any>;
};

type CustomMIChipProps = StandardMIChipProps | DeletableMIChipProps;

const StyledChip = styled(MuiChip, {
  shouldForwardProp: (prop) => prop !== 'customColor',
})<{ customColor: AllowedMIChipColors }>(({ theme, customColor, variant = 'filled' }) => ({
  height: 'auto',
  borderRadius: theme.spacing(5),
  wordWrap: 'break-word',
  '& .MuiChip-label': {
    fontSize: '0.75rem',
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: 1.5,
    letterSpacing: 0.5,
    padding: `3px ${theme.spacing(1)}`,
  },
  '& .MuiChip-deleteIcon': {
    color: theme.colors.blue[500],
    opacity: 1,
  },
  '&&': {
    //outlined variant
    ...(variant === 'outlined' && {
      ...(customColor === 'default' && {
        color: theme.colors.blue[600],
        borderColor: theme.colors.blue[600],
      }),
      ...(customColor === 'neutral' && {
        color: theme.colors.neutral.black,
        borderColor: theme.colors.neutral.black,
      }),
      ...(customColor === 'warning' && {
        color: theme.colors.warning[850],
        borderColor: theme.colors.warning[850],
      }),
      ...(customColor === 'error' && {
        color: theme.colors.error[600],
        borderColor: theme.colors.error[600],
        backgroundColor: 'transparent',
      }),
      ...(customColor === 'success' && {
        color: theme.colors.success[850],
        borderColor: theme.colors.success[850],
      }),
      ...(customColor === 'highlight' && {
        color: theme.colors.turquoise[850],
        borderColor: theme.colors.turquoise[850],
        backgroundColor: 'transparent',
      }),
      ...(customColor === 'info' && {
        color: theme.colors.info[850],
        borderColor: theme.colors.info[850],
      }),
    }),

    // filled variant
    ...(variant === 'filled' && {
      ...(customColor === 'default' && {
        backgroundColor: theme.colors.blue[50],
        color: theme.colors.blue[850],
      }),
      ...(customColor === 'error' && {
        backgroundColor: theme.colors.error[100],
        color: theme.colors.error[850],
      }),
      ...(customColor === 'success' && {
        backgroundColor: theme.colors.success[100],
        color: theme.colors.success[850],
      }),
      ...(customColor === 'warning' && {
        backgroundColor: theme.colors.warning[100],
        color: theme.colors.warning[850],
      }),
      ...(customColor === 'neutral' && {
        color: theme.colors.neutral.black,
      }),
      ...(customColor === 'highlight' && {
        backgroundColor: theme.colors.turquoise[50],
        color: theme.colors.turquoise[850],
      }),
      ...(customColor === 'info' && {
        backgroundColor: theme.colors.info[100],
        color: theme.colors.info[850],
      }),
    }),
  },
}));

const MIChip = forwardRef<HTMLDivElement, CustomMIChipProps>((props, ref) => {
  const { color: colorProp, sx, label, onDelete, 'aria-label': ariaLabel, ...other } = props;

  const isDeletable = Boolean(onDelete);

  const color = colorProp ?? (isDeletable ? 'neutral' : 'default');

  const accessibilityProps = isDeletable ? { tabIndex: -1, role: undefined } : {};
  const theme = useTheme();

  const deleteIconProps = {
    tabIndex: 0,
    role: 'button',
    'aria-label': ariaLabel ?? 'Delete',
    style: { cursor: 'pointer' },
    'aria-hidden': false,
    focusable: true,
    onKeyDown: (e: React.KeyboardEvent<SVGSVGElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        onDelete?.(e);
      }
    },
    sx: {
      color: theme.colors.blue[500],
      backgroundColor: 'transparent',
      borderRadius: 0,
    },
  };

  return (
    <StyledChip
      customColor={color}
      label={label}
      onDelete={onDelete}
      deleteIcon={<CloseRoundedIcon {...deleteIconProps} />}
      sx={sx}
      aria-label={ariaLabel}
      ref={ref}
      {...other}
      {...accessibilityProps}
    />
  );
});

export default MIChip;

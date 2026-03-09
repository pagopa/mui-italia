import { FC } from 'react';
import MuiChip, { ChipProps } from '@mui/material/Chip';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { styled } from '@mui/material/styles';
import { colors, none } from 'theme/foundations/colors';

export type AllowedMIChipColors =
  | 'default'
  | 'error'
  | 'success'
  | 'warning'
  | 'highlight'
  | 'neutral';

type BaseMIChipProps = Omit<ChipProps, 'color' | 'deleteIcon' | 'label'> & {
  label: string;
};

// Props for the standard mode
export type StandardMIChipProps = BaseMIChipProps & {
  mode?: 'standard';
  color?: AllowedMIChipColors;
};

// Props for the deletable mode, with color fixed to 'neutral'
export type DeletableMIChipProps = BaseMIChipProps & {
  mode: 'deletable';
  color?: 'neutral';
};

export type CustomMIChipProps = StandardMIChipProps | DeletableMIChipProps;

const StyledChip = styled(MuiChip, {
  shouldForwardProp: (prop) => prop !== 'customColor' && prop !== 'mode',
})<{ customColor: AllowedMIChipColors; mode: 'standard' | 'deletable' }>(
  ({ theme, customColor, variant = 'filled', size = 'medium', mode }) => ({
    height: 'auto',
    borderRadius: theme.spacing(5),
    maxWidth: '15ch',
    ...(mode === 'deletable' && {
      cursor: 'default',
    }),
    '& .MuiChip-label': {
      fontSize: '0.875rem',
      fontWeight: theme.typography.fontWeightMedium,
      lineHeight: 1.3,
      letterSpacing: 0.5,
      textAlign: 'center',
      overflowWrap: 'break-word',
      whiteSpace: 'normal',
      textOverflow: 'clip',
      padding:
        size === 'small'
          ? `${theme.spacing(0.5)} ${theme.spacing(1)}`
          : `${theme.spacing(1)} ${theme.spacing(1.5)}`,
    },
    '& .MuiChip-deleteIcon': {
      color: colors.blue[500],
      opacity: 1,
      ...(mode === 'deletable' && {
        cursor: 'pointer',
      }),
    },
    '&&': {
      //outlined variant
      ...(variant === 'outlined' && {
        ...(customColor === 'default' && {
          color: colors.blue[600],
          borderColor: colors.blue[600],
        }),
        ...(customColor === 'neutral' && {
          color: colors.neutral.black,
          borderColor: colors.neutral.black,
        }),
        ...(customColor === 'warning' && {
          color: colors.warning[850],
          borderColor: colors.warning[850],
        }),
        ...(customColor === 'error' && {
          color: colors.error[600],
          borderColor: colors.error[600],
          backgroundColor: 'transparent',
        }),
        ...(customColor === 'success' && {
          color: colors.success[850],
          borderColor: colors.success[850],
        }),
        ...(customColor === 'highlight' && {
          color: colors.turquoise[850],
          borderColor: colors.turquoise[850],
          backgroundColor: none,
        }),
      }),

      // filled variant
      ...(variant === 'filled' && {
        ...(customColor === 'default' && {
          backgroundColor: colors.blue[50],
          color: colors.blue[850],
        }),
        ...(customColor === 'error' && {
          backgroundColor: colors.error[100],
          color: colors.error[850],
        }),
        ...(customColor === 'success' && {
          backgroundColor: colors.success[100],
          color: colors.success[850],
        }),
        ...(customColor === 'warning' && {
          backgroundColor: colors.warning[100],
          color: colors.warning[850],
        }),
        ...(customColor === 'neutral' && {
          color: colors.neutral.black,
        }),
        ...(customColor === 'highlight' && {
          backgroundColor: colors.turquoise[50],
          color: colors.turquoise[850],
        }),
      }),
    },
  })
);

const MIChip: FC<CustomMIChipProps> = (props) => {
  const {
    mode = 'standard',
    color: colorProp,
    sx,
    label,
    onClick,
    onDelete,
    'aria-label': ariaLabel,
    ...other
  } = props;

  const color = colorProp ?? (mode === 'deletable' ? 'neutral' : 'default');

  const applyDeletableA11yFix = mode === 'deletable' && onDelete && !onClick;

  const accessibilityProps = applyDeletableA11yFix ? { tabIndex: -1, role: undefined } : {};

  const deleteIconProps = applyDeletableA11yFix
    ? {
        tabIndex: 0,
        role: 'button',
        'aria-label': (ariaLabel ?? `Delete %s`).replace('%s', label),
        style: { cursor: 'pointer' },
        'aria-hidden': false,
        focusable: true,
        onKeyDown: (e: React.KeyboardEvent<SVGSVGElement>) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            onDelete?.(e as any);
          }
        },
        sx: {
          color: colors.blue[500],
          backgroundColor: 'transparent',
          borderRadius: 0,
        },
      }
    : {};

  return (
    <StyledChip
      mode={mode}
      customColor={color}
      label={label}
      onClick={onClick}
      onDelete={onDelete}
      deleteIcon={<CloseRoundedIcon {...deleteIconProps} />}
      sx={sx}
      aria-label={ariaLabel}
      {...other}
      {...accessibilityProps}
    />
  );
};

export default MIChip;

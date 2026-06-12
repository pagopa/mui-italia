import { Skeleton } from '@mui/lab';
import { Box, CircularProgress } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import { SxProps, Theme } from '@mui/material/styles';
import React from 'react';
import { colors } from './../../theme/foundations/colors';
import { getColorSx } from './styles';
import { MIButtonProps } from './types';

const MIButton: React.FC<MIButtonProps> = ({
  color = 'primary',
  variant = 'contained',
  loaderType,
  isLoading,
  loadingAriaLabel,
  children,
  sx,
  onClick,
  ...props
}) => {
  const colorSx = getColorSx(color, variant);

  const mergeSx = (extra?: SxProps<Theme>): SxProps<Theme> => [
    colorSx,
    extra,
    ...(Array.isArray(sx) ? sx : [sx]),
  ];

  const handleClick: ButtonProps['onClick'] = (event) => {
    if (isLoading) {
      return;
    }
    onClick?.(event);
  };

  if (isLoading && loaderType === 'skeleton') {
    const skeletonLoaderWidth = props.fullWidth ? '80%' : '141px';

    return (
      <Button {...props} variant={variant} onClick={handleClick} aria-busy sx={mergeSx()}>
        <Box sx={{ width: skeletonLoaderWidth }}>
          <Skeleton sx={{ backgroundColor: colors.neutral.grey[450] }} />
        </Box>
      </Button>
    );
  }

  if (isLoading) {
    const spinnerMinWidth = props.fullWidth ? '100%' : '72px';

    return (
      <Button
        {...props}
        variant={variant}
        onClick={handleClick}
        aria-busy
        sx={mergeSx({ minWidth: spinnerMinWidth })}
      >
        <CircularProgress
          size={24}
          color="inherit"
          aria-label={loadingAriaLabel || 'Caricamento in corso'}
        />
      </Button>
    );
  }

  return (
    <Button {...props} variant={variant} onClick={onClick} sx={mergeSx()}>
      {children}
    </Button>
  );
};

export default MIButton;

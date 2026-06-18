import { MISpinner } from '@components/MISpinner';
import { Skeleton } from '@mui/lab';
import { Box } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import { SxProps, Theme } from '@mui/material/styles';
import React from 'react';
import { colors } from './../../theme/foundations/colors';
import { getColorSx, getSpinnerColor } from './styles';
import { MIButtonLoaderType, MIButtonProps } from './types';

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

  const renderContent = (): React.ReactNode => {
    if (isLoading && loaderType === MIButtonLoaderType.SKELETON) {
      return (
        <Box sx={{ width: props.fullWidth ? '80%' : '141px' }}>
          <Skeleton sx={{ backgroundColor: colors.neutral.grey[450] }} />
        </Box>
      );
    }

    if (isLoading) {
      return (
        <MISpinner
          color={getSpinnerColor(color, variant)}
          aria-label={loadingAriaLabel || 'Caricamento in corso'}
        />
      );
    }

    return children;
  };

  const extraSx =
    isLoading && loaderType !== MIButtonLoaderType.SKELETON
      ? { minWidth: props.fullWidth ? '100%' : '72px' }
      : undefined;

  return (
    <Button
      {...props}
      variant={variant}
      onClick={handleClick}
      aria-busy={isLoading || undefined}
      disableRipple
      disableTouchRipple
      sx={mergeSx(extraSx)}
    >
      {renderContent()}
    </Button>
  );
};

export default MIButton;

import Button, { ButtonProps } from '@mui/material/Button';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import React from 'react';
import MIButtonLoader from './MIButtonLoader';
import { getColorSx } from './styles';
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
  const theme = useTheme();
  const colorSx = getColorSx(theme, color, variant);

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
      {isLoading ? (
        <MIButtonLoader
          color={color}
          variant={variant}
          loaderType={loaderType}
          loadingAriaLabel={loadingAriaLabel}
          fullWidth={props.fullWidth}
        />
      ) : (
        children
      )}
    </Button>
  );
};

export default MIButton;

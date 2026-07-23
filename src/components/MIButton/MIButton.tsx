import Button, { ButtonProps } from '@mui/material/Button';
import { SxProps, Theme } from '@mui/material/styles';
import { FC } from 'react';
import MIButtonLoader from './MIButtonLoader';
import { getColorSx } from './styles';
import { MIButtonLoaderType, MIButtonProps } from './types';

const MIButton: FC<MIButtonProps> = ({
  color = 'primary',
  variant = 'contained',
  loaderType,
  isLoading,
  fullWidth,
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

  const extraSx =
    isLoading && loaderType !== MIButtonLoaderType.SKELETON
      ? { minWidth: fullWidth ? '100%' : '72px' }
      : undefined;

  return (
    <Button
      {...props}
      variant={variant}
      onClick={handleClick}
      aria-busy={isLoading || undefined}
      disableRipple
      disableTouchRipple
      fullWidth={fullWidth}
      startIcon={isLoading ? null : props.startIcon}
      endIcon={isLoading ? null : props.endIcon}
      sx={mergeSx(extraSx)}
    >
      {isLoading ? (
        <MIButtonLoader
          color={color}
          variant={variant}
          loaderType={loaderType}
          loadingAriaLabel={loadingAriaLabel}
          fullWidth={fullWidth}
        />
      ) : (
        children
      )}
    </Button>
  );
};

export default MIButton;

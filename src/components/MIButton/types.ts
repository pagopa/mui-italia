import { ButtonProps } from '@mui/material/Button';
import { MarginSxProps } from '@types';

type PickedButtonProps = Pick<
  ButtonProps,
  'fullWidth' | 'endIcon' | 'startIcon' | 'size' | 'variant' | 'children' | 'onClick'
>;

export enum MIButtonLoaderType {
  SKELETON = 'skeleton',
  SPINNER = 'spinner',
}

export type MIButtonColor = 'primary' | 'error' | 'contrasted';

export interface MIButtonProps extends PickedButtonProps {
  color?: MIButtonColor;
  isLoading?: boolean;
  loaderType?: MIButtonLoaderType;
  loadingAriaLabel?: string;
  sx?: MarginSxProps;
}

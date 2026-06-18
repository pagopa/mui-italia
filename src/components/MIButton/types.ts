import { ButtonProps } from '@mui/material/Button';
import { MarginSxProps } from '@types';

type PickedButtonProps = Pick<
  ButtonProps,
  'fullWidth' | 'endIcon' | 'startIcon' | 'size' | 'children' | 'onClick'
>;

export enum MIButtonLoaderType {
  SKELETON = 'skeleton',
  SPINNER = 'spinner',
}

export type MIButtonColor = 'primary' | 'error' | 'contrasted';

/**
 * We need to override the variant because, in the current theme,
 * we add `naked` to the default button variants.
 * The `naked` variant is used by the ButtonNaked component.
 */
export type MIButtonVariant = 'contained' | 'outlined' | 'text';

export interface MIButtonProps extends PickedButtonProps {
  variant?: MIButtonVariant;
  color?: MIButtonColor;
  isLoading?: boolean;
  loaderType?: MIButtonLoaderType;
  loadingAriaLabel?: string;
  sx?: MarginSxProps;
}

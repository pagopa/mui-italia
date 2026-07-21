import { ButtonProps } from '@mui/material/Button';
import { SxProps } from '@mui/system';

type PickedButtonProps = Pick<ButtonProps, 'fullWidth' | 'endIcon' | 'startIcon' | 'size'>;

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

interface MIButtonBaseProps extends PickedButtonProps, React.HTMLAttributes<HTMLButtonElement> {
  color?: MIButtonColor;
  isLoading?: boolean;
  loaderType?: MIButtonLoaderType;
  loadingAriaLabel?: string;
  sx?: SxProps;
}

interface MITextButtonProps extends MIButtonBaseProps {
  variant: 'text';
  href?: ButtonProps['href'];
}

interface MISolidButtonProps extends MIButtonBaseProps {
  variant?: Exclude<MIButtonVariant, 'text'>;
  href?: never;
}

export type MIButtonProps = MITextButtonProps | MISolidButtonProps;

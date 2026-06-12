import { ButtonProps } from '@mui/material/Button';

type MIButtonLoaderType = 'skeleton' | 'loading';
export type MIButtonColor = 'primary' | 'error' | 'contrasted';

export type MIButtonProps = Omit<ButtonProps, 'disabled' | 'color'> & {
  color?: MIButtonColor;
  isLoading?: boolean;
  loaderType?: MIButtonLoaderType;
  loadingAriaLabel?: string;
};

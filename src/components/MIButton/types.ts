import React from 'react';
import { ButtonProps } from '@mui/material/Button';

type PickedButtonProps = Pick<
  ButtonProps,
  'fullWidth' | 'endIcon' | 'startIcon' | 'size' | 'sx' | 'href'
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

interface MIButtonBaseProps
  extends PickedButtonProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: MIButtonColor;
  isLoading?: boolean;
  loaderType?: MIButtonLoaderType;
  loadingAriaLabel?: string;
  variant?: MIButtonVariant;
}

export type MIButtonProps = MIButtonBaseProps;

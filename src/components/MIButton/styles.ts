import { CSSObject } from '@mui/material/styles';
import { AllowedMISpinnerColor } from '../MISpinner/MISpinner';
import { MIButtonColor, MIButtonVariant } from './types';
import { Theme } from '@mui/material';

type ButtonSx = CSSObject;

const containedStyles: (theme: Theme) => Record<MIButtonColor, ButtonSx> = (theme) => ({
  primary: {
    backgroundColor: theme.colors.blue[500],
    color: theme.colors.neutral.white,
    border: `2px solid ${theme.colors.blue[500]}`,
    '&:hover': {
      backgroundColor: theme.colors.blue[600],
      color: theme.colors.neutral.white,
      borderColor: theme.colors.blue[600],
    },
  },
  error: {
    backgroundColor: theme.colors.error[600],
    color: theme.colors.neutral.white,
    border: `2px solid ${theme.colors.error[600]}`,
    '&:hover': {
      backgroundColor: theme.colors.error[700],
      color: theme.colors.neutral.white,
      borderColor: theme.colors.error[700],
    },
  },
  contrasted: {
    backgroundColor: theme.colors.neutral.white,
    color: theme.colors.blue[500],
    border: `2px solid ${theme.colors.neutral.white}`,
    '&:hover': {
      backgroundColor: theme.colors.blue[50],
      color: theme.colors.blue[600],
      borderColor: theme.colors.blue[50],
    },
  },
});

const outlinedStyles: (theme: Theme) => Record<MIButtonColor, ButtonSx> = (theme) => ({
  primary: {
    backgroundColor: 'transparent',
    color: theme.colors.blue[500],
    borderColor: theme.colors.blue[500],
    '&:hover': {
      backgroundColor: theme.colors.blue[50],
      color: theme.colors.blue[600],
      borderColor: theme.colors.blue[600],
    },
  },
  error: {
    backgroundColor: 'transparent',
    color: theme.colors.error[500],
    borderColor: theme.colors.error[500],
    '&:hover': {
      backgroundColor: theme.colors.error[100],
      color: theme.colors.error[700],
      borderColor: theme.colors.error[700],
    },
  },
  contrasted: {
    backgroundColor: 'transparent',
    color: theme.colors.neutral.white,
    borderColor: theme.colors.neutral.white,
    '&:hover': {
      backgroundColor: theme.colors.blue[600],
      color: theme.colors.neutral.white,
      borderColor: theme.colors.neutral.white,
    },
  },
});

const textButtonBaseStyle: ButtonSx = {
  backgroundColor: 'transparent',
  padding: 0,
  height: 'auto',
  minWidth: 'auto',
  '&:hover, &:active, &.Mui-focusVisible': { backgroundColor: 'transparent' },
};

const textStyles: (theme: Theme) => Record<MIButtonColor, ButtonSx> = (theme) => ({
  primary: {
    ...textButtonBaseStyle,
    color: theme.colors.blue[500],
    '&:hover': { backgroundColor: 'transparent', color: theme.colors.blue[600] },
  },
  error: {
    ...textButtonBaseStyle,
    color: theme.colors.error[600],
    '&:hover': { backgroundColor: 'transparent', color: theme.colors.error[700] },
  },
  contrasted: {
    ...textButtonBaseStyle,
    color: theme.colors.neutral.white,
    '&:hover': { backgroundColor: 'transparent', color: theme.colors.neutral.white },
  },
});

const stylesByVariant = {
  contained: containedStyles,
  outlined: outlinedStyles,
  text: textStyles,
};

const focusRing: (theme: Theme) => Record<MIButtonColor, string> = (theme) => ({
  primary: theme.colors.blue[400],
  error: theme.colors.error[500],
  contrasted: theme.colors.blue[150],
});

const spinnerColorByVariant: Record<
  keyof typeof stylesByVariant,
  Record<MIButtonColor, AllowedMISpinnerColor>
> = {
  contained: { primary: 'secondary', error: 'secondary', contrasted: 'primary' },
  outlined: { primary: 'primary', error: 'error', contrasted: 'secondary' },
  text: { primary: 'primary', error: 'error', contrasted: 'secondary' },
};

export const getSpinnerColor = (
  color: MIButtonColor,
  variant: MIButtonVariant
): AllowedMISpinnerColor => {
  const variantColors =
    spinnerColorByVariant[variant as keyof typeof stylesByVariant] ??
    spinnerColorByVariant.contained;

  return variantColors[color];
};

export const getColorSx = (
  theme: Theme,
  color: MIButtonColor,
  variant: MIButtonVariant
): ButtonSx => {
  const variantStyles = stylesByVariant[variant as keyof typeof stylesByVariant] ?? containedStyles;
  // `&&` raises specificity to beat the global MuiButton theme's compound
  // hover/focus selectors (e.g. `&.MuiButton-contained:hover`).
  return {
    '&&': {
      ...variantStyles(theme)[color],
      '&.Mui-focusVisible': { outlineColor: focusRing(theme)[color] },
    },
  };
};

import { ButtonProps } from '@mui/material';
import { CSSObject } from '@mui/material/styles';
import { AllowedMISpinnerColor } from '../MISpinner';
import { colors } from '../../theme/foundations/colors';
import { MIButtonColor } from './types';

type ButtonSx = CSSObject;

const containedStyles: Record<MIButtonColor, ButtonSx> = {
  primary: {
    backgroundColor: colors.blue[500],
    color: colors.neutral.white,
    border: `2px solid ${colors.blue[500]}`,
    '&:hover': {
      backgroundColor: colors.blue[600],
      color: colors.neutral.white,
      borderColor: colors.blue[600],
    },
  },
  error: {
    backgroundColor: colors.error[600],
    color: colors.neutral.white,
    border: `2px solid ${colors.error[600]}`,
    '&:hover': {
      backgroundColor: colors.error[700],
      color: colors.neutral.white,
      borderColor: colors.error[700],
    },
  },
  contrasted: {
    backgroundColor: colors.neutral.white,
    color: colors.blue[500],
    border: `2px solid ${colors.neutral.white}`,
    '&:hover': {
      backgroundColor: colors.blue[50],
      color: colors.blue[600],
      borderColor: colors.blue[50],
    },
  },
};

const outlinedStyles: Record<MIButtonColor, ButtonSx> = {
  primary: {
    backgroundColor: colors.neutral.white,
    color: colors.blue[500],
    borderColor: colors.blue[500],
    '&:hover': {
      backgroundColor: colors.blue[50],
      color: colors.blue[600],
      borderColor: colors.blue[600],
    },
  },
  error: {
    backgroundColor: colors.neutral.white,
    color: colors.error[500],
    borderColor: colors.error[500],
    '&:hover': {
      backgroundColor: colors.error[100],
      color: colors.error[700],
      borderColor: colors.error[700],
    },
  },
  contrasted: {
    backgroundColor: colors.blue[500],
    color: colors.neutral.white,
    borderColor: colors.neutral.white,
    '&:hover': {
      backgroundColor: colors.blue[600],
      color: colors.neutral.white,
      borderColor: colors.neutral.white,
    },
  },
};

const textButtonBaseStyle: ButtonSx = {
  backgroundColor: 'transparent',
  padding: 0,
  height: 'auto',
  minWidth: 'auto',
  '&:hover, &:active, &.Mui-focusVisible': { backgroundColor: 'transparent' },
};

const textStyles: Record<MIButtonColor, ButtonSx> = {
  primary: {
    ...textButtonBaseStyle,
    color: colors.blue[500],
    '&:hover': { backgroundColor: 'transparent', color: colors.blue[600] },
  },
  error: {
    ...textButtonBaseStyle,
    color: colors.error[600],
    '&:hover': { backgroundColor: 'transparent', color: colors.error[700] },
  },
  contrasted: {
    ...textButtonBaseStyle,
    color: colors.neutral.white,
    '&:hover': { backgroundColor: 'transparent', color: colors.neutral.white },
  },
};

const stylesByVariant = {
  contained: containedStyles,
  outlined: outlinedStyles,
  text: textStyles,
};

const focusRing: Record<MIButtonColor, string> = {
  primary: colors.blue[400],
  error: colors.error[500],
  contrasted: colors.blue[150],
};

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
  variant: ButtonProps['variant']
): AllowedMISpinnerColor => {
  const variantColors =
    spinnerColorByVariant[variant as keyof typeof stylesByVariant] ??
    spinnerColorByVariant.contained;

  return variantColors[color];
};

export const getColorSx = (color: MIButtonColor, variant: ButtonProps['variant']): ButtonSx => {
  const variantStyles = stylesByVariant[variant as keyof typeof stylesByVariant] ?? containedStyles;
  // `&&` raises specificity to beat the global MuiButton theme's compound
  // hover/focus selectors (e.g. `&.MuiButton-contained:hover`).
  return {
    '&&': {
      ...variantStyles[color],
      '&.Mui-focusVisible': { outlineColor: focusRing[color] },
    },
  };
};

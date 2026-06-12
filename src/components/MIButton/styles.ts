import { ButtonProps } from '@mui/material';
import { CSSObject } from '@mui/material/styles';
import { error } from 'theme/colors';
import { colors } from '../../theme/foundations/colors';
import { MIButtonColor } from './types';

type ButtonSx = CSSObject;

const containedStyles: Record<MIButtonColor, ButtonSx> = {
  primary: {
    backgroundColor: colors.blue[500],
    color: colors.neutral.white,
    '&:hover': { backgroundColor: colors.blue[600], color: colors.neutral.white },
  },
  error: {
    backgroundColor: colors.error[600],
    color: colors.neutral.white,
    '&:hover': { backgroundColor: error.pressed, color: colors.neutral.white },
  },
  contrasted: {
    backgroundColor: colors.neutral.white,
    color: colors.blue[500],
    '&:hover': { backgroundColor: colors.blue[50], color: colors.blue[600] },
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
      color: error.pressed,
      borderColor: error.pressed,
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

const textStyles: Record<MIButtonColor, ButtonSx> = {
  primary: {
    backgroundColor: colors.neutral.white,
    color: colors.blue[500],
    '&:hover': { backgroundColor: colors.neutral.white, color: colors.blue[600] },
  },
  error: {
    backgroundColor: colors.neutral.white,
    color: colors.error[600],
    '&:hover': { backgroundColor: colors.neutral.white, color: error.pressed },
  },
  contrasted: {
    backgroundColor: colors.blue[600],
    color: colors.neutral.white,
    '&:hover': { backgroundColor: colors.blue[600], color: colors.neutral.white },
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

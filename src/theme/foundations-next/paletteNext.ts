import { colors } from '../colors';

/**
 * Semantic palette NEXT definitions and MUI palette extensions.
 */

export const paletteNext = {
  mode: 'light',
  background: {
    paper: colors.neutral.white,
  },
  primary: {
    main: colors.blue[500],
    light: colors.blue[300],
    dark: colors.blue[600],
    contrastText: colors.neutral.white,
  },
  info: {
    main: colors.info[500],
    contrastText: colors.neutral.black,
  },
  success: {
    main: colors.success[500],
    contrastText: colors.neutral.black,
  },
  warning: {
    main: colors.warning[500],
    contrastText: colors.neutral.black,
  },
  /* Indicator/Validation */
  error: {
    main: colors.error[600],
    dark: colors.error[700],
    light: colors.error[500],
    contrastText: colors.neutral.black,
  },
  shadow: {
    main: '#002B55',
  },
  text: {
    primary: colors.neutral.black,
    secondary: colors.neutral.grey[700],
    disabled: colors.neutral.grey[450],
  },
  backdrop: {
    background: '#17324D',
  },

  menuItem: {
    background: '#17324D',
  },

  primaryContained: {
    hover: colors.blue[500],
  },
  divider: colors.neutral.grey[100],
} as const;

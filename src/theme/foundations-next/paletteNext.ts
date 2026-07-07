import { colors } from '../foundations/colors';

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
    light: '#2185E9',
    dark: '#0062C3',
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
    main: colors.error[500],
    dark: '#D85757',
    light: '#FE7A7A',
    contrastText: colors.neutral.black,
  },
  shadow: {
    main: '#002B55',
  },
  text: {
    primary: '#17324D',
    secondary: '#5C6F82',
    disabled: '#A2ADB8',
  },
  backdrop: {
    background: '#17324D',
  },

  menuItem: {
    background: '#17324D',
  },

  primaryContained: {
    hover: '#0055AA',
  },
  divider: colors.neutral.grey[100],
} as const;

import { colors } from '../foundations/colors';

/**
 * Semantic palette NEXT definitions and MUI palette extensions.
 */

export const paletteNext = {
  mode: 'light',
  background: {
    paper: colors.neutral.white,
    default: '#F2F2F2',
  },
  primary: {
    main: colors.blue[500],
    light: '#2185E9',
    dark: '#0062C3',
    contrastText: colors.neutral.white,
  },
  info: {
    main: colors.info[500],
    dark: '#5BB0D5',
    light: '#7ED5FC',
    extraLight: '#86E1FD',
    contrastText: colors.neutral.black,
  },
  success: {
    main: colors.success[500],
    dark: '#5CA85A',
    light: '#7FCD7D',
    extraLight: '#B5E2B4',
    contrastText: colors.neutral.black,
  },
  warning: {
    main: colors.warning[500],
    dark: '#D9AD3C',
    light: '#FFD25E',
    extraLight: '#FFE5A3',
    contrastText: colors.neutral.black,
  },
  /* Indicator/Validation */
  error: {
    main: colors.error[500],
    dark: '#D85757',
    light: '#FE7A7A',
    extraLight: '#FB9EAC',
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

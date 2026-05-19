import { indigo } from '@mui/material/colors';
import { colors } from './colors';

/**
 * There are 2 categories of colors:
 *
 * 1. NEW CUSTOM COLORS (neutral, turquoise, blueitalia, purple):
 *    - They do not exist in MUI by default
 *    - They can be fully defined inside Palette and PaletteOptions
 *    - Each one has its own specific interface (e.g. NeutralPaletteColor)
 *
 * 2. STANDARD MUI COLORS (info, success, warning, error):
 *    - They already exist in MUI as PaletteColor
 *    - They cannot be overridden directly in Palette (this would cause TypeScript errors)
 *    - To add custom properties (700, 500, 400, etc.) we need to extend
 *      PaletteColor and SimplePaletteColorOptions
 *
 * The global extensions below add all possible numeric properties
 * as optional fields. This allows each color to use only the properties it needs.
 */

export const semanticColors = {
  text: {
    primary: '#17324D',
  },

  shadow: {
    main: '#002B55',
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

  decorativeIcon: colors.neutral[300],
  divider: colors.neutral.grey[100],
} as const;

export const palette = {
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
  secondary: {
    main: colors.turquoise[500],
    light: '#21CDD1',
    dark: '#00A7AC',
    contrastText: colors.turquoise[850],
  },
  pagoPA: {
    main: '#0066CC',
    contrastText: colors.neutral.white,
  },
  checkIban: {
    main: '#008CA8',
    contrastText: colors.neutral.white,
  },
  europeanUnion: {
    main: '#264CA4',
    contrastText: colors.neutral.white,
  },
  indigo: {
    main: indigo[500],
    contrastText: colors.neutral.white,
  },
  negative: {
    main: colors.neutral.white,
    contrastText: '#0066CC',
  },
  text: {
    primary: semanticColors.text.primary,
    secondary: '#5C6F82',
    disabled: '#A2ADB8',
  },
  action: {
    active: '#5C6F82' /* Text/Secondary */,
    hover: 'rgba(23, 50, 77, 0.08)' /* Text/Primary 8% */,
    hoverOpacity: 0.08,
    selected: 'rgba(23, 50, 77, 0.12)' /* Text/Primary 12% */,
    disabled: 'rgba(23, 50, 77, 0.26)' /* Text/Primary 26% */,
    disabledBackground: 'rgba(23, 50, 77, 0.12)' /* Text/Primary 12% */,
    focus: 'rgba(23, 50, 77, 0.12)' /* Text/Primary 12% */,
  },
  primaryAction: {
    hover: 'rgba(0, 115, 230, 0.12)' /* Primary 12% */,
    selected: 'rgba(0, 115, 230, 0.08)' /* Primary 8% */,
  },
  divider: semanticColors.divider,
  /* Indicator/Validation */
  error: {
    //TODO manca contrastText?
    main: colors.error[500],
    dark: '#D85757',
    light: '#FE7A7A',
    extraLight: '#FB9EAC',
    contrastText: semanticColors.text.primary,
  },
  info: {
    //TODO manca contrastText?
    main: colors.info[500],
    dark: '#5BB0D5',
    light: '#7ED5FC',
    extraLight: '#86E1FD',
    contrastText: semanticColors.text.primary,
  },
  success: {
    main: colors.success[500],
    dark: '#5CA85A',
    light: '#7FCD7D',
    extraLight: '#B5E2B4',
    contrastText: semanticColors.text.primary,
  },
  warning: {
    main: colors.warning[500],
    dark: '#D9AD3C',
    light: '#FFD25E',
    extraLight: '#FFE5A3',
    contrastText: semanticColors.text.primary,
  },
} as const;

declare module '@mui/material/styles' {
  interface Theme {
    colors: typeof colors;
  }

  interface ThemeOptions {
    colors?: typeof colors;
  }

  interface PaletteColor {
    extraLight?: string;
  }

  interface SimplePaletteColorOptions {
    extraLight?: string;
  }
}

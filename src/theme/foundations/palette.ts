import { indigo } from '@mui/material/colors';
import { colors } from './colors';

/**
 * Semantic palette definitions and MUI palette extensions.
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

  decorativeIcon: colors.neutral.grey[300],
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
    100: colors.blue[100],
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
    100: colors.error[100],
    850: colors.error[850],
  },
  info: {
    //TODO manca contrastText?
    main: colors.info[500],
    dark: '#5BB0D5',
    light: '#7ED5FC',
    extraLight: '#86E1FD',
    contrastText: semanticColors.text.primary,
    100: colors.info[100],
    850: colors.info[850],
  },
  success: {
    main: colors.success[500],
    dark: '#5CA85A',
    light: '#7FCD7D',
    extraLight: '#B5E2B4',
    contrastText: semanticColors.text.primary,
    100: colors.success[100],
    850: colors.success[850],
  },
  warning: {
    main: colors.warning[500],
    dark: '#D9AD3C',
    light: '#FFD25E',
    extraLight: '#FFE5A3',
    contrastText: semanticColors.text.primary,
    100: colors.warning[100],
    850: colors.warning[850],
  },
} as const;

declare module '@mui/material/styles' {
  interface Theme {
    colors: typeof colors;
  }

  interface ThemeOptions {
    colors?: typeof colors;
  }

  interface Palette {
    pagoPA: Palette['primary'];
    europeanUnion: Palette['primary'];
    checkIban: Palette['primary'];
    extraLight: Palette['warning'];
    primaryAction: Palette['action'];
    negative: SimplePaletteColorOptions;
    indigo: Palette['primary'];
  }

  interface PaletteOptions {
    pagoPA?: PaletteOptions['primary'];
    europeanUnion: PaletteOptions['primary'];
    checkIban?: PaletteOptions['primary'];
    extraLight?: PaletteOptions['warning'];
    primaryAction: PaletteOptions['action'];
    negative: SimplePaletteColorOptions;
    indigo: SimplePaletteColorOptions;
  }

  interface PaletteColor {
    extraLight?: string;
    100: string;
    850: string;
  }

  interface SimplePaletteColorOptions {
    dark?: string;
    light?: string;
    contrastText?: string;
    extraLight?: string;
  }
}

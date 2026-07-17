import { indigo } from '@mui/material/colors';
import { colors } from './colors';

/**
 * Semantic palette definitions and MUI palette extensions.
 */
export const palette = {
  mode: 'light',
  background: {
    paper: colors.neutral.white,
    default: '#F2F2F2',
  },
  primary: {
    main: '#0073E6',
    light: '#2185E9',
    dark: '#0062C3',
    contrastText: '#FFFFFF',
    100: '#C4DCF5',
  },

  secondary: {
    main: '#00C5CA',
    light: '#21CDD1',
    dark: '#00A7AC',
    contrastText: '#FFFFFF',
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
    primary: '#17324D',
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
  divider: '#E3E7EB',
  /* Indicator/Validation */
  error: {
    main: '#FE6666',
    dark: '#D85757',
    light: '#FE7A7A',
    extraLight: '#FB9EAC',
    contrastText: '#17324D',
    100: '#FFE0E0',
    850: '#761F1F',
  },

  info: {
    main: '#6BCFFB',
    dark: '#5BB0D5',
    light: '#7ED5FC',
    extraLight: '#86E1FD',
    contrastText: '#17324D',
    100: '#E1F5FE',
    850: '#215C76',
  },
  success: {
    main: '#6CC66A',
    dark: '#5CA85A',
    light: '#7FCD7D',
    extraLight: '#B5E2B4',
    contrastText: '#17324D',
    100: '#E1F4E1',
    850: '#224021',
  },
  warning: {
    main: '#FFCB46',
    dark: '#D9AD3C',
    light: '#FFD25E',
    extraLight: '#FFE5A3',
    contrastText: '#17324D',
    100: '#FFF5DA',
    850: '#614C15',
  },
} as const;

declare module '@mui/material/styles' {
  interface Palette {
    pagoPA: Palette['primary'];
    europeanUnion: Palette['primary'];
    checkIban: Palette['primary'];
    extraLight: Palette['warning'];
    primaryAction: Palette['action'];
    primaryContained: PrimaryContainedPalette;
    shadow: ShadowPalette;
    backdrop: BackgroundPalette;
    menuItem: BackgroundPalette;
    decorativeIcon?: string;
    negative: SimplePaletteColorOptions;
    indigo: Palette['primary'];
  }

  type PrimaryContainedPalette = {
    hover: string;
  };

  type ShadowPalette = {
    main: string;
  };

  type BackgroundPalette = {
    background: string;
  };

  interface PaletteOptions {
    pagoPA?: PaletteOptions['primary'];
    europeanUnion?: PaletteOptions['primary'];
    checkIban?: PaletteOptions['primary'];
    extraLight?: PaletteOptions['warning'];
    primaryAction?: PaletteOptions['action'];
    negative?: SimplePaletteColorOptions;
    indigo?: SimplePaletteColorOptions;
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

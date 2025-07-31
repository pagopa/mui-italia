import { alpha, createTheme, Theme } from '@mui/material/styles';

import { indigo } from '@mui/material/colors';
import { shadowColor, colorTextPrimary } from './colors';
import { mainTypeface } from './fonts';

const shadowValues = {
  /* Elevation 4 */
  4: `0px 2px 4px -1px ${alpha(shadowColor, 0.1)},
        0px 4px 5px ${alpha(shadowColor, 0.05)},
        0px 1px 10px ${alpha(shadowColor, 0.1)}`,
  /* Elevation 8 = Elevation 16 */
  8: `0px 8px 10px -5px ${alpha(shadowColor, 0.1)},
        0px 16px 24px 2px ${alpha(shadowColor, 0.05)},
        0px 6px 30px 5px ${alpha(shadowColor, 0.1)}`,
  /* Elevation 16 */
  16: `0px 8px 10px -5px ${alpha(shadowColor, 0.1)},
        0px 16px 24px 2px ${alpha(shadowColor, 0.05)},
        0px 6px 30px 5px ${alpha(shadowColor, 0.1)}`,
};

const shadowsArray = Array(25).fill('none') as any;

const foundation: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: 'light',
    background: {
      paper: '#FFFFFF',
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
      contrastText: '#fff',
    },
    checkIban: {
      main: '#008CA8',
      contrastText: '#fff',
    },
    europeanUnion: {
      main: '#264CA4',
      contrastText: '#fff',
    },
    indigo: {
      main: indigo[500],
      contrastText: '#fff',
    },
    negative: {
      main: '#FFFFFF',
      contrastText: '#0066CC',
    },
    text: {
      primary: colorTextPrimary,
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
    /* Other */
    divider: '#E3E7EB',
    /* Indicator/Validation */
    error: {
      main: '#FE6666',
      dark: '#D85757',
      light: '#FE7A7A',
      extraLight: '#FB9EAC',
      contrastText: colorTextPrimary,
      100: '#FFE0E0',
      600: '#D13333',
      850: '#761F1F',
    },
    info: {
      main: '#6BCFFB',
      dark: '#5BB0D5',
      light: '#7ED5FC',
      extraLight: '#86E1FD',
      contrastText: colorTextPrimary,
      100: '#E1F5FE',
      850: '#215C76',
    },
    success: {
      main: '#6CC66A',
      dark: '#5CA85A',
      light: '#7FCD7D',
      extraLight: '#B5E2B4',
      contrastText: colorTextPrimary,
      100: '#E1F4E1',
      850: '#224021',
    },
    warning: {
      main: '#FFCB46',
      dark: '#D9AD3C',
      light: '#FFD25E',
      extraLight: '#FFE5A3',
      contrastText: colorTextPrimary,
      100: '#FFF5DA',
      850: '#614C15',
    },
    neutral: {
      100: '#E8EBF1',
      700: '#555C70',
    },
  },
  typography: {
    /* Using a constant because type variants
    don't inherit the typeface general color */
    allVariants: {
      color: colorTextPrimary,
    },
    /* Using a constant because type variants
    don't inherit the typeface font family */
    fontFamily: mainTypeface,
    fontWeightRegular: 400,
    fontWeightMedium: 600 /* Semibold */,
    fontWeightBold: 700,
    fontSize: 16,
    htmlFontSize: 16,
  },
  shadows: { ...shadowsArray, ...shadowValues },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
});

export default foundation;

import { alpha, createTheme, Theme } from '@mui/material/styles';

import { indigo } from '@mui/material/colors';
import { colors } from './colors';
import { mainTypeface } from '../fonts';

const shadowValues = {
  /* Elevation 4 */
  4: `0px 2px 4px -1px ${alpha(colors.shadow.main, 0.1)},
        0px 4px 5px ${alpha(colors.shadow.main, 0.05)},
        0px 1px 10px ${alpha(colors.shadow.main, 0.1)}`,
  /* Elevation 8 = Elevation 16 */
  8: `0px 8px 10px -5px ${alpha(colors.shadow.main, 0.1)},
        0px 16px 24px 2px ${alpha(colors.shadow.main, 0.05)},
        0px 6px 30px 5px ${alpha(colors.shadow.main, 0.1)}`,
  /* Elevation 16 */
  16: `0px 8px 10px -5px ${alpha(colors.shadow.main, 0.1)},
        0px 16px 24px 2px ${alpha(colors.shadow.main, 0.05)},
        0px 6px 30px 5px ${alpha(colors.shadow.main, 0.1)}`,
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
      primary: colors.text.primary,
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
    /* Other */ //TODO va messo il grey 100?
    divider: '#E3E7EB',
    /* Indicator/Validation */
    error: {
      //TODO manca contrastText?
      main: colors.error[500],
      dark: '#D85757',
      light: '#FE7A7A',
      extraLight: '#FB9EAC',
      contrastText: colors.text.primary,
    },
    info: {
      //TODO manca contrastText?
      main: colors.info[500],
      dark: '#5BB0D5',
      light: '#7ED5FC',
      extraLight: '#86E1FD',
      contrastText: colors.text.primary,
    },
    success: {
      main: colors.success[500],
      dark: '#5CA85A',
      light: '#7FCD7D',
      extraLight: '#B5E2B4',
      contrastText: colors.text.primary,
    },
    warning: {
      main: colors.warning[500],
      dark: '#D9AD3C',
      light: '#FFD25E',
      extraLight: '#FFE5A3',
      contrastText: colors.text.primary,
    },
  },
  typography: {
    /* Using a constant because type variants
    don't inherit the typeface general color */
    allVariants: {
      color: colors.text.primary,
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

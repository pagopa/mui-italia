import { indigo } from '@mui/material/colors';
import { alpha } from '@mui/system';

export const colorTextPrimary = '#17324D';
export const shadowColor = '#002B55';
export const backdropBackground = '#17324D';
export const menuItemBackground = '#17324D';
export const colorPrimaryContainedHover = '#0055AA';
export const none = 'transparent'; // Not exposed by the theme object

const neutral = {
  black: '#0E0F13',
  grey: {
    850: '#2B2E38',
    700: '#555C70',
    650: '#636B82',
    450: '#99A3C1',
    300: '#BBC2D6',
    200: '#D2D6E3',
    100: '#E8EBF1',
    50: '#F4F5F8',
  },
  white: '#FFFFFF',
};

const blue = {
  850: '#031344',
  600: '#0932B6',
  500: '#0B3EE3',
  400: '#3C65E9',
  300: '#6D8BEE',
  200: '#9DB2F4',
  150: '#B6C5F7',
  100: '#CED8F9',
  50: '#E7ECFC',
};

const turquoise = {
  850: '#003B3D',
  600: '#009EA2',
  500: '#00C5CA',
  300: '#61DCDF',
  150: '#AAEEEF',
  100: '#C2F3F4',
  50: '#DBF9FA',
};

const blueitalia = {
  850: '#001F3D',
  600: '#0052A3',
  500: '#0066CC',
  400: '#3184D6',
  100: '#C4DCF5',
  50: '#DDEBFA',
};

const info = {
  850: '#225C76',
  700: '#418DAF',
  500: '#6BCFFB',
  400: '#89D9FC',
  100: '#E1F5FE',
};

const success = {
  850: '#224021',
  700: '#427940',
  500: '#6CC66A',
  100: '#E1F4E1',
};

const warning = {
  850: '#614C15',
  700: '#A5822A',
  500: '#FFC824',
  400: '#FFD56B',
  100: '#FFF5DA',
};

const error = {
  850: '#5D1313',
  600: '#D13333',
  500: '#FF4040',
  400: '#FF6666',
  100: '#FFD9D9',
};

const purple = {
  850: '#1A0744',
  500: '#5517E3',
  250: '#CCB9F7',
  100: '#DDD1F9',
  50: '#EEE8FC',
};

export const customPalette = {
  background: {
    // default: neutral.white,
    paper: neutral.white,
    // primary: neutral.white,
    overlay: alpha(neutral.black, 0.2),
    blue: blue[500],
    skeleton: neutral.grey[100],
    opacity: neutral.grey[450],
    placeholder: neutral.grey[50],
    blueitalia: blueitalia[50],
  },
  primary: {
    main: blue[500],
    contrastText: neutral.white,
    light: blue[400], // to update with design system
    dark: blue[600], // to update with design system
  },
  primaryAction: {
    hover: alpha(blue[500], 0.12) /* Primary 12% */,
    selected: alpha(blue[500], 0.08) /* Primary 8% */,
  },
  negative: {
    main: neutral.white,
    contrastText: blue[500],
  },
  common: {
    black: neutral.black,
    white: neutral.white,
  },

  // REMOVED in new design system
  secondary: {
    main: '#00C5CA',
    light: '#21CDD1',
    dark: '#00A7AC',
    contrastText: neutral.white,
  },
  pagoPA: {
    main: '#0066CC',
    contrastText: neutral.white,
  },
  io: {
    main: '#0073e6ff',
  },
  checkIban: {
    main: '#008CA8',
    contrastText: neutral.white,
  },
  europeanUnion: {
    main: '#264CA4',
    contrastText: neutral.white,
  },
  indigo: {
    main: indigo[500],
    contrastText: neutral.white,
  },
  action: {
    active: '#5C6F82' /* Text/Secondary */,
    hover: blue[600],
    hoverOpacity: 0.08,
    selected: 'rgba(23, 50, 77, 0.12)' /* Text/Primary 12% */,
    disabled: 'rgba(23, 50, 77, 0.26)' /* Text/Primary 26% */,
    // disabledOpacity: 'rgba(23, 50, 77, 0.26)', // find correct value
    disabledBackground: 'rgba(23, 50, 77, 0.12)' /* Text/Primary 12% */,
    focus: 'rgba(23, 50, 77, 0.12)' /* Text/Primary 12% */,
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
  // end removed

  text: {
    primary: neutral.black,
    secondary: neutral.grey[700],
    disabled: neutral.grey[300],
  },

  /* Other */
  divider: neutral.grey[100],

  /* Indicator/Validation */

  warning: {
    main: warning[850],
    contrastText: warning[100],
    // dark: '#D9AD3C',
    // light: '#FFD25E',
    // extraLight: '#FFE5A3',
    // 100: '#FFF5DA',
    // 850: '#614C15',
  },
  success: {
    main: success[850],
    contrastText: neutral.white,
    // dark: '#5CA85A',
    // light: '#7FCD7D',
    // extraLight: '#B5E2B4',
    // 100: '#E1F4E1',
    // 850: '#224021',
  },
  error: {
    main: error[600],
    contrastText: neutral.white,
    dark: error[850], // to update with design system
    // light: '#FE7A7A',
    // extraLight: '#FB9EAC',
    // 100: '#FFE0E0',
    // 850: '#761F1F',
  },
  highlighted: {
    main: turquoise[850],
    contrastText: turquoise[50],
  },
  neutral: {
    main: neutral.grey[100],
    contrastText: neutral.black,
  },
};

export const colors = {
  neutral,
  blue,
  turquoise,
  blueitalia,
  info,
  success,
  warning,
  error,
  purple,
};

export const text = {
  heading: neutral.black,
  description: neutral.grey[700],
};

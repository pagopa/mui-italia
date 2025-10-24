import { border, hexToRgb } from '@mui/system';

export const colorTextPrimary = '#17324D';
export const shadowColor = '#002B55';
export const backdropBackground = '#17324D';
export const menuItemBackground = '#17324D';
export const colorPrimaryContainedHover = '#0055AA'; // Not exposed by the theme object

// base palette
export const neutral = {
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

export const blue = {
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

export const turquoise = {
  850: '#003B3D',
  600: '#009EA2',
  500: '#00C5CA',
  300: '#61DCDF',
  150: '#AAEEEF',
  100: '#C2F3F4',
  50: '#DBF9FA',
};

export const blueitalia = {
  850: '#001F3D',
  600: '#0052A3',
  500: '#0066CC',
  400: '#3184D6',
  100: '#C4DCF5',
  50: '#DDEBFA',
};

export const info = {
  850: '#225C76',
  700: '#418DAF',
  500: '#6BCFFB',
  400: '#89D9FC',
  100: '#E1F5FE',
};

export const success = {
  850: '#224021',
  700: '#427940',
  500: '#6CC66A',
  100: '#E1F4E1',
};

export const warning = {
  850: '#614C15',
  700: '#A5822A',
  500: '#FFC824',
  400: '#FFD56B',
  100: '#FFF5DA',
};

export const error = {
  850: '#5D1313',
  600: '#D13333',
  500: '#FF4040',
  400: '#FF6666',
  100: '#FFD9D9',
};

export const purple = {
  850: '#1A0744',
  500: '#5517E3',
  250: '#CCB9F7',
  100: '#DDD1F9',
  50: '#EEE8FC',
};

// elements colors
export const opacity = {
  black: {
    20: `rgba(${hexToRgb(neutral.black)}, 0.2)`, // #0E0F13 · 20%
    60: `rgba(${hexToRgb(neutral.black)}, 0.6)`, // #0E0F13 · 60%
  },
  blue: {
    8: `rgba(${hexToRgb(blue[500])}, 0.08)`, // #0B3EE3 · 8%
    20: `rgba(${hexToRgb(blue[500])}, 0.2)`, // #0B3EE3 · 20%
  },
};

export const text = {
  heading: neutral.black,
  description: neutral.grey[700],
};

export const surface = {
  primary: neutral.white,
  overlay: opacity.black[20],
  blue: blue[500],
  skeleton: neutral.grey[100],
  skeletonOpacity: neutral.grey[450],
  placeholder: neutral.grey[50],
  blueItalia: blueitalia[50],
};

export const icon = {
  active: neutral.black,
  decorative: neutral.grey[300],
  action: blue[500],
  success: success[700],
  info: info[700],
  warning: warning[700],
  error: error[600],
  button: opacity.black[60],
};

export const divider = {
  default: neutral.grey[100],
};

export const chip = {
  default: {
    filled: { background: blue[50], text: blue[850] },
    outlined: { background: 'transparent', text: blue[600], border: blue[600] },
  },
  warning: {
    filled: { background: warning[100], text: warning[850] },
    outlined: { background: 'transparent', text: warning[850], border: warning[850] },
  },
  success: {
    filled: { background: success[100], text: warning[850] },
    outlined: { background: 'transparent', text: warning[850] },
  },
  error: {
    filled: { background: error[100], text: error[850] },
    outlined: { background: 'transparent', text: error[600] },
  },
  highlighted: {
    filled: { background: turquoise[50], text: turquoise[850] },
    outlined: { background: 'transparent', text: turquoise[850] },
  },
  neutral: {
    filled: { background: neutral.grey[100], text: neutral.black },
    outlined: { background: 'transparent', text: neutral.black, border: neutral.black },
  },
};

export const progress = {
  track: blue[500],
  total: neutral.white,
};

export const button = {
  primary: {
    default: { background: blue[500], text: neutral.white },
    hover: { background: blue[600], text: neutral.white },
    disabled: {
      background: `rgba(${hexToRgb(neutral.grey[200])}, 0.5)`,
      text: `rgba(${hexToRgb(neutral.grey[700])}, 0.5)`,
    },
    contrast: {
      default: { background: neutral.white, text: blue[500] },
      hover: { background: blue[50], text: blue[600] },
      disabled: {
        background: `rgba(${hexToRgb(blue[200])}, 0.5)`,
        text: `rgba(${hexToRgb(neutral.grey[700])}, 0.5)`,
      },
    },
  },
  secondary: {
    default: { background: 'transparent', text: blue[500], border: blue[500] },
    hover: { background: blue[50], text: blue[600], border: blue[600] },
    disabled: {
      background: `rgba(${hexToRgb(neutral.grey[700])}, 0.5)`,
      text: `rgba(${hexToRgb(neutral.grey[200])}, 0.5)`,
    },
    contrast: {
      default: { background: 'transparent', text: neutral.white },
      hover: { background: blue[600], text: neutral.white },
      disabled: {
        background: 'transparent',
        text: `rgba(${hexToRgb(blue[200])}, 0.5)`,
      },
    },
  },
  tertiary: {
    default: { background: 'transparent', text: blue[500] },
    hover: { background: 'transparent', text: blue[600] },
    disabled: { background: 'transparent', text: `rgba(${hexToRgb(neutral.grey[700])}, 0.5)` },
    contrast: {
      default: { background: 'transparent', text: neutral.white },
      hover: { background: 'transparent', text: neutral.white },
      disabled: {
        background: 'transparent',
        text: `rgba(${hexToRgb(blue[200])}, 0.5)`,
      },
    },
  },
};

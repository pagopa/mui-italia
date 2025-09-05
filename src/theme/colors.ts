export const colorTextPrimary = '#17324D';
export const shadowColor = '#002B55';
export const backdropBackground = '#17324D';
export const menuItemBackground = '#17324D';
export const colorPrimaryContainedHover = '#0055AA'; // Not exposed by the theme object

export const neutral = {
  black: '#0E0F13',
  850: '#2B2E38',
  700: '#555C70',
  650: '#636B82',
  450: '#99A3C1',
  300: '#BBC2D6',
  200: '#D2D6E3',
  100: '#E8EBF1',
  50: '#F4F5F8',
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

export const opacity = {
  black: {
    20: '#0f101533', // #0E0F13 · 20%
    60: '#0f101599', // #0E0F13 · 60%
  },
  blue: {
    8: '#0b3ee314', // #0B3EE3 · 8%
    20: '#0b3ee333', // #0B3EE3 · 20%
  },
};

export const text = {
  heading: neutral.black,
  description: neutral[700],
};

export const surface = {
  primary: neutral.white,
  overlay: opacity.black[20],
  blue: blue[500],
  skeleton: neutral[100],
  skeletonOpacity: neutral[450],
  placeholder: neutral[50],
  blueItalia: blueitalia[50],
};

export const badge = {
  default: { filled: blue[50], filledText: blue[850], outline: blue[600] },
  warning: { filled: warning[100], filledText: warning[850], outline: warning[850] },
  success: { filled: success[100], filledText: success[850], outline: success[850] },
  error: { filled: error[100], filledText: error[850], outline: error[600] },
  highlighted: { filled: turquoise[50], filledText: turquoise[850], outline: turquoise[850] },
};

export const icon = {
  active: neutral.black,
  decorative: neutral[300],
  action: blue[500],
  success: success[700],
  info: info[700],
  warning: warning[700],
  error: error[600],
  navbar: neutral[850],
  button: opacity.black[60],
};

export const button = {
  primary: {
    text: {
      default: neutral.white, // text button primary
      contrast: text.description, // text button primary contrast
    },
    button: blue[500], // button primary
    contrast: neutral.white, //  button primary contrast
    pressed: {
      default: blue[600], // button primary pressed
      contrast: blue[50], // button primary contrast pressed
    },
  },
  secondary: {
    contrast: {
      pressed: surface.overlay, // button primary contrast pressed
    },
  },
  tertiary: {
    button: blue[500], // button tertiary
  },
  disabled: {
    text: text.description, // text button disabled
    button: neutral[200], //  button primary disabled
    contrast: blue[200], //  button primary contrast disabled
  },
};

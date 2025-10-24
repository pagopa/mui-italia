export const colorTextPrimary = '#17324D';
export const shadowColor = '#002B55';
export const backdropBackground = '#17324D';
export const menuItemBackground = '#17324D';
export const colorPrimaryContainedHover = '#0055AA'; // Not exposed by the theme object

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

export const palette = {
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

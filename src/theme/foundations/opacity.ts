import { hexToRgb } from '@mui/system';
import { palette } from './colors';

export const opacity = {
  black: {
    20: `rgba(${hexToRgb(palette.neutral.black)}, 0.2)`, // #0E0F13 · 20%
    60: `rgba(${hexToRgb(palette.neutral.black)}, 0.6)`, // #0E0F13 · 60%
  },
  blue: {
    8: `rgba(${hexToRgb(palette.blue[500])}, 0.08)`, // #0B3EE3 · 8%
    20: `rgba(${hexToRgb(palette.blue[500])}, 0.2)`, // #0B3EE3 · 20%
  },
};

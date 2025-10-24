import { hexToRgb } from '@mui/system';
import { palette } from '../foundations/colors';

export const button = {
  primary: {
    default: { background: palette.blue[500], text: palette.neutral.white },
    hover: { background: palette.blue[600], text: palette.neutral.white },
    disabled: {
      background: `rgba(${hexToRgb(palette.neutral.grey[200])}, 0.5)`,
      text: `rgba(${hexToRgb(palette.neutral.grey[700])}, 0.5)`,
    },
    contrast: {
      default: { background: palette.neutral.white, text: palette.blue[500] },
      hover: { background: palette.blue[50], text: palette.blue[600] },
      disabled: {
        background: `rgba(${hexToRgb(palette.blue[200])}, 0.5)`,
        text: `rgba(${hexToRgb(palette.neutral.grey[700])}, 0.5)`,
      },
    },
  },
  secondary: {
    default: { background: 'transparent', text: palette.blue[500], border: palette.blue[500] },
    hover: { background: palette.blue[50], text: palette.blue[600], border: palette.blue[600] },
    disabled: {
      background: `rgba(${hexToRgb(palette.neutral.grey[700])}, 0.5)`,
      text: `rgba(${hexToRgb(palette.neutral.grey[200])}, 0.5)`,
    },
    contrast: {
      default: { background: 'transparent', text: palette.neutral.white },
      hover: { background: palette.blue[600], text: palette.neutral.white },
      disabled: {
        background: 'transparent',
        text: `rgba(${hexToRgb(palette.blue[200])}, 0.5)`,
      },
    },
  },
  tertiary: {
    default: { background: 'transparent', text: palette.blue[500] },
    hover: { background: 'transparent', text: palette.blue[600] },
    disabled: {
      background: 'transparent',
      text: `rgba(${hexToRgb(palette.neutral.grey[700])}, 0.5)`,
    },
    contrast: {
      default: { background: 'transparent', text: palette.neutral.white },
      hover: { background: 'transparent', text: palette.neutral.white },
      disabled: {
        background: 'transparent',
        text: `rgba(${hexToRgb(palette.blue[200])}, 0.5)`,
      },
    },
  },
};

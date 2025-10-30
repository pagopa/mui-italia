import { pxToRem } from 'theme/utility';
import { palette } from '../foundations/colors';

export const divider = {
  styleOverrides: {
    root: {
      color: palette.neutral.grey[100],
      '&.MuiDivider': {
        position: 'relative',
        transform: 'translate(0,0)',
        boxShadow: `0 0 0 2px ${alpha(foundation.palette.common.white, 0.5)}`,
      },
    },
  },
};

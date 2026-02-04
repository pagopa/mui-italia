import foundation from './foundation';
import { pxToRem } from './utility';
import type { Components, Theme } from '@mui/material/styles';
const responsiveBreakpoint = 'sm';

const muiAlertTitle: Components<Theme>['MuiAlertTitle'] = {
  styleOverrides: {
    root: {
      fontSize: pxToRem(16),
      fontWeight: foundation.typography.fontWeightMedium,
      letterSpacing: 0.15,
      margin: 0,
      /* It inherits from `body1`, so I have to reset -_- */
      [foundation.breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(16),
      },
    },
  },
};

export default muiAlertTitle;

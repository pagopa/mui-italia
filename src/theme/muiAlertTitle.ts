import foundation from './foundation';
import { pxToRem } from './utility';
import type { Components, Theme } from '@mui/material/styles';
const responsiveBreakpoint = 'sm';

const muiAlertTitle: Components<Theme>['MuiAlertTitle'] = {
  styleOverrides: {
    root: {
      fontSize: pxToRem(18),
      fontWeight: foundation.typography.fontWeightMedium,
      lineHeight: '26px',
      letterSpacing: 0.15,
      margin: 0,
      /* It inherits from `body1`, so I have to reset -_- */
      [foundation.breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(18),
      },
    },
  },
};

export default muiAlertTitle;

import { colorTextPrimary } from './colors';
import foundation from './foundation';

const responsiveBreakpoint = 'sm';

const alertBorderWidth = '4px';

const muiAlert = {
  styleOverrides: {
    root: {
      border: `1px solid`,
      padding: foundation.spacing(1),
      color: colorTextPrimary,
      alignItems: 'center',
      [foundation.breakpoints.up(responsiveBreakpoint)]: {
        padding: foundation.spacing(2),
      },
    },
    icon: {
      opacity: 1,
      padding: 0,
      alignItems: 'center',
      marginRight: foundation.spacing(1),
      [foundation.breakpoints.up(responsiveBreakpoint)]: {
        marginRight: foundation.spacing(2),
      },
    },
    message: {
      padding: 0,
      overflow: 'inherit', // Fix overflow: auto bug introduced by MUI
    },
    action: {
      marginRight: 0,
      paddingTop: 0,
    },
    outlined: {
      backgroundColor: foundation.palette.common.white,
      boxShadow: foundation.shadows[4],
      borderWidth: `0 0 0 ${alertBorderWidth}`,
    },
    standard: {
      '& .MuiAlert-icon': {
        color: colorTextPrimary,
      },
    },
    standardSuccess: {
      borderColor: foundation.palette.success.main,
    },
    outlinedSuccess: {
      borderColor: foundation.palette.success.main,
      '& .MuiAlert-icon': {
        color: foundation.palette.success.main,
      },
    },
    standardError: {
      borderColor: foundation.palette.error.main,
    },
    outlinedError: {
      borderColor: foundation.palette.error.main,
      '& .MuiAlert-icon': {
        color: foundation.palette.error.main,
      },
    },
    standardInfo: {
      borderColor: foundation.palette.info.main,
    },
    outlinedInfo: {
      borderColor: foundation.palette.info.main,
      '& .MuiAlert-icon': {
        color: foundation.palette.info.main,
      },
    },
    standardWarning: {
      borderColor: foundation.palette.warning.main,
    },
    outlinedWarning: {
      borderColor: foundation.palette.warning.main,
      '& .MuiAlert-icon': {
        color: foundation.palette.warning.main,
      },
    },
  },
};

export default muiAlert;

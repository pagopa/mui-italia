import foundation from './foundation';

const responsiveBreakpoint = 'sm';

import { Theme } from '@mui/material/styles';
import { ComponentsOverrides } from '@mui/material/styles/overrides';

const muiAlert: { styleOverrides: ComponentsOverrides<Theme>['MuiAlert'] } = {
  styleOverrides: {
    root: {
      border: `1px solid`,
      borderRadius: 8,
      padding: foundation.spacing(2),
      alignItems: 'flex-start',
      [foundation.breakpoints.up(responsiveBreakpoint)]: {
        padding: foundation.spacing(3),
      },
    },
    icon: {
      opacity: 1,
      padding: '2px 8px',
      alignItems: 'center',
      marginRight: foundation.spacing(1),
      [foundation.breakpoints.up(responsiveBreakpoint)]: {
        marginRight: foundation.spacing(1),
      },
      height: '20px',
      width: '20px',
    },
    message: {
      padding: 0,
      overflow: 'inherit',
      lineHeight: '22px',
      fontWeight: foundation.typography.fontWeightRegular,
      flex: 1,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflowWrap: 'anywhere',
      wordBreak: 'break-word',
    },

    action: {
      marginRight: 0,
      paddingTop: 0,
    },
    standardSuccess: {
      borderColor: foundation.palette.success.main,
      backgroundColor: foundation.palette.success[100],
      '& .MuiAlert-icon': {
        color: foundation.palette.success[850],
      },
      '& .MuiAlert-message': {
        color: foundation.palette.success[850],
      },
    },
    standardError: {
      borderColor: foundation.palette.error.main,
      backgroundColor: foundation.palette.error[100],
      '& .MuiAlert-icon': {
        color: foundation.palette.error[850],
      },
      '& .MuiAlert-message': {
        color: foundation.palette.error[850],
      },
    },
    standardInfo: {
      borderColor: foundation.palette.info.main,
      backgroundColor: foundation.palette.info[100],
      '& .MuiAlert-icon': {
        color: foundation.palette.info[850],
      },
      '& .MuiAlert-message': {
        color: foundation.palette.info[850],
      },
    },
    standardWarning: {
      borderColor: foundation.palette.warning.main,
      backgroundColor: foundation.palette.warning[100],
      '& .MuiAlert-icon': {
        color: foundation.palette.warning[850],
      },
      '& .MuiAlert-message': {
        color: foundation.palette.warning[850],
      },
    },
  },
};

export default muiAlert;

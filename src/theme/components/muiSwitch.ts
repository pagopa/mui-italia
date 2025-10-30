import { alpha } from '@mui/material/styles';
import { pxToRem } from '../utility';
import foundation from '../foundation';

const muiSwitch = {
  defaultProps: {
    disableRipple: true,
    focusVisibleClassName: '.Mui-focusVisible',
  },
  styleOverrides: {
    root: {
      width: 42,
      height: 26,
      padding: 0,
      overflow: 'visible',
    },
    switchBase: {
      padding: 0,
      top: pxToRem(9),
      left: pxToRem(9),
      margin: 2,
      transitionDuration: '300ms',
      transform: 'translate(-9px, -9px)',
      ':hover': {
        boxShadow: `0 0 0 8px ${foundation.palette.action.hover}`,
      },
      '&.Mui-checked': {
        transform: 'translate(7px, -9px)',
        color: '#fff',
        ':hover': {
          boxShadow: `0 0 0 10px ${foundation.palette.primaryAction.hover}`,
        },
        '& + .MuiSwitch-track': {
          backgroundColor: foundation.palette.primary,
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible': {
        borderRadius: '100% ',
        boxShadow: 'none',
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color:
          foundation.palette.mode === 'light'
            ? foundation.palette.grey[700]
            : foundation.palette.primary,
        border: `6px solid #fff`,
      },
      '&.Mui-focusVisible.Mui-checked .MuiSwitch-thumb': {
        color: foundation.palette.primary.main,
        border: `6px solid #fff`,
      },
      '&.MuiSwitch-colorError + .MuiSwitch-track': {
        backgroundColor: foundation.palette.error.dark,
      },
      '&.MuiSwitch-colorError.Mui-focusVisible .MuiSwitch-thumb': {
        color: foundation.palette.error.dark,
        border: `6px solid #fff`,
      },
      '&.MuiSwitch-colorError:hover': {
        boxShadow: `0 0 0 10px ${alpha(foundation.palette.error.dark, 0.08)}`,
      },

      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          foundation.palette.mode === 'light'
            ? foundation.palette.grey[100]
            : foundation.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.2,
      },
    },
    thumb: {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },

    track: {
      borderRadius: 26 / 2,
      backgroundColor:
        foundation.palette.mode === 'light'
          ? foundation.palette.grey[700]
          : foundation.palette.primary,
      opacity: 1,
      transition: foundation.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  },
};

export default muiSwitch;

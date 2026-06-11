import { blue } from 'theme/colors';
import { focusButtonOffset, focusWidth } from 'theme/theme';
import { pxToRem } from 'theme/utility';

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    secondary: false;
    info: false;
    success: false;
    warning: false;
    error: false;
  }
}

export const muiIconButton = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      color: blue[500],
      '&:active, &:hover': {
        backgroundColor: blue[50],
      },
      '&.Mui-focusVisible': {
        outline: `solid ${focusWidth} ${blue[400]}`,
        outlineOffset: `${focusButtonOffset}`,
        boxShadow: 'none',
      },
      minHeight: pxToRem(24),
      minWidth: pxToRem(24),
    },
  },
};

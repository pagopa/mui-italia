import { blue } from 'theme/colors';

declare module '@mui/material/CircularProgress' {
  interface CircularProgressPropsColorOverrides {
    primary: true;
    secondary: true;
    error: false;
    warning: false;
    info: false;
    success: false;
  }
}

export const muiCircularProgress = {
  defaultProps: {
    thickness: 5,
    disableShrink: true,
    size: 24,
  },
  styleOverrides: {
    root: {
      borderRadius: '50%',
      '&.MuiCircularProgress-indeterminate': {
        '@supports (mask-image: radial-gradient(farthest-side, transparent 0, black 100%))': {
          '& svg': {
            display: 'none',
          },
          maskImage:
            'radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))',
          WebkitMaskImage:
            'radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))',
          background: `
                radial-gradient(circle closest-side, currentColor calc(100% - 0.5px), transparent 100%) 50% 0 / 2px 2px no-repeat,
                conic-gradient(from 0deg, transparent 0%, currentColor 30%, currentColor 100%)
              `,
        },
      },
    },
    colorPrimary: {
      color: blue[500],
    },
    colorSecondary: {
      color: 'white',
    },
  },
};

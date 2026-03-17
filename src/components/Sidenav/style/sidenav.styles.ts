import { alpha, type SxProps, type Theme } from '@mui/material';
import { blue } from 'theme/colors';

export const sidenavStyles = (theme: Theme, open: boolean): Record<string, SxProps> => ({
  container: {
    top: '0rem',
    background: theme.palette.background.paper,
    zIndex: open ? 10 : 1,
    display: 'block',
    position: 'sticky',
    height: 'calc(100vh - 8rem)',
    width: open ? '300px' : 'fit-content',
    overscrollBehavior: 'auto',
    overflowY: 'auto',
    scrollbarWidth: 'thin',
  },

  itemButtonActive: {
    '.MuiListItemIcon-root': {
      fill: blue[500],
      color: `${blue[500]}!important`,
    },

    '&.Mui-selected': {
      borderRight: `4px solid ${blue[500]}`,
      backgroundColor: blue[50],
    },

    '&.active': {
      fontWeight: 'bold',
      '.MuiTypography-root': {
        fontWeight: 600,
        color: blue[500],
      },
    },
  },
  hamburgerBox: {
    marginTop: 'auto',
  },
  hamburgerIcon: {
    pt: 3,
    pb: 6,
    pl: 2,
    [theme.breakpoints.down('lg')]: {
      mr: 0,
    },
  },
});

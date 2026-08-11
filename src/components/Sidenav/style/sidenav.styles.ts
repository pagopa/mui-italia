import {  type SxProps, type Theme } from '@mui/material';
import { colors } from 'theme/foundations/colors';

export const sidenavStyles = (theme: Theme, open: boolean): Record<string, SxProps> => ({
  container: {
    top: '0rem',
    background: theme.palette.background.paper,
    zIndex: open ? 10 : 1,
    display: 'block',
    position: 'sticky',
    height: 'calc(100vh - 1rem)',
    width: open ? '300px' : 'fit-content',
    overscrollBehavior: 'auto',
    overflowY: 'auto',
    scrollbarWidth: 'thin',
  },

  itemButtonActive: {
    '.MuiListItemIcon-root': {
      fill: colors.blue[500],
      color: `${colors.blue[500]}!important`,
    },

    '&.Mui-selected': {
      borderRight: `4px solid ${colors.blue[500]}`,
      backgroundColor: colors.blue[50],
    },

    '&.active': {
      fontWeight: 'bold',
      '.MuiTypography-root': {
        fontWeight: 600,
        color: colors.blue[500],
      },
    },
  },
  hamburgerBox: {
    position: 'absolute',
    bottom:1,
    marginTop: '0',
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

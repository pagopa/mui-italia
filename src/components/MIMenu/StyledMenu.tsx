import { Menu as MUIMenu, styled } from '@mui/material';

export const StyledMenu = styled(MUIMenu)(({ theme }) => ({
  '& .MuiDivider-root': {
    margin: '0 !important',
  },
  '& .MuiMenu-list': {
    padding: 0,
  },
  '& .MuiPaper-root': {
    width: '17rem',
    maxWidth: `calc(100vw - ${theme.spacing(2)})`,
    boxSizing: 'border-box',
    borderRadius: theme.spacing(1),
  },
}));

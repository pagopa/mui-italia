import { MenuItem as MUIMenuItem, styled } from '@mui/material';

export const StyledMenuItem = styled(MUIMenuItem)(({ theme }) => ({
  display: 'flex',
  cursor: 'pointer',
  margin: 0,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  color: theme.colors.blue[500],
  '& .MuiListItemIcon-root': {
    color: 'inherit',
  },
  '& .MuiListItemText-root': {
    color: 'inherit',
    overflowWrap: 'break-word',
  },
}));

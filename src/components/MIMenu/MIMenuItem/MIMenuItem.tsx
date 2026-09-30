import { ListItemIcon, ListItemText, MenuItemProps } from '@mui/material';
import { FC, ReactNode } from 'react';
import { StyledMenuItem } from './StyledMenuItem';

export type MIMenuItemProps = Omit<MenuItemProps, 'children'> & {
  label: ReactNode;
  startIcon?: ReactNode;
};

const MIMenuItem: FC<MIMenuItemProps> = ({ label, startIcon, ...props }) => (
  <StyledMenuItem {...props}>
    {startIcon && <ListItemIcon>{startIcon}</ListItemIcon>}
    <ListItemText primary={label} />
  </StyledMenuItem>
);

export default MIMenuItem;

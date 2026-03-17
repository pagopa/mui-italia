import React from 'react';
import { type SvgIconComponent } from '@mui/icons-material';
import { ListItemIcon } from '@mui/material';

type SidenavIconProps = {
  Icon: SvgIconComponent;
  notification?: number;
};

export const SidenavIcon: React.FC<SidenavIconProps> = ({ Icon }) => {
  return (
    <ListItemIcon>
      <Icon fontSize="inherit" />
    </ListItemIcon>
  );
};

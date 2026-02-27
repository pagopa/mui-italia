import React from 'react';
import { type SvgIconComponent } from '@mui/icons-material';
import { ListItemIcon, Badge } from '@mui/material';

type SidenavIconProps = {
  Icon: SvgIconComponent;
  notification?: number;
};

export const SidenavIcon: React.FC<SidenavIconProps> = ({ Icon, notification }) => {
  return (
    <ListItemIcon>
      {!notification ? (
        <Icon fontSize="inherit" />
      ) : (
        <Badge color="primary" badgeContent={notification} variant="dot">
          <Icon fontSize="inherit" />
        </Badge>
      )}
    </ListItemIcon>
  );
};

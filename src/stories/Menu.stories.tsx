import { Meta, StoryFn } from '@storybook/react-vite';
import { MouseEvent, useState } from 'react';

import { Button, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';

import { AddCircleRounded as AddCircleRoundedIcon } from '@mui/icons-material';

/* Icons */

export default {
  title: 'MUI Components/Navigation/Menu',
  component: Menu,
} as Meta<typeof Menu>;

export const Default: StoryFn<typeof Menu> = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        variant="contained"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Action Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={handleClose}>A very looooong item</MenuItem>
        <MenuItem onClick={handleClose}>A normal one</MenuItem>
        <MenuItem onClick={handleClose}>Short</MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AddCircleRoundedIcon fontSize="inherit" />
          </ListItemIcon>
          <ListItemText>With icon</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};

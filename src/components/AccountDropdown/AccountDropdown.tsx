'use client';

import { Fragment, ReactNode, SyntheticEvent, useState } from 'react';
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

import { ButtonNaked } from '@components/ButtonNaked';

type JwtUser = {
  id: string;
  name?: string;
  surname?: string;
  email?: string;
};

type UserAction = {
  id: string;
  icon: ReactNode;
  label: string;
  onClick: () => void;
};

type AccountDropdownProps = {
  user: JwtUser;
  userActions?: Array<UserAction>;
};

export const AccountDropdown = ({ user, userActions }: AccountDropdownProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);
  const handleClick = (e: SyntheticEvent) => {
    const currentTarget = e.currentTarget as HTMLButtonElement;
    setAnchorEl(currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const wrapOnClick = (onClick: () => void) => (e: SyntheticEvent) => {
    if (e) {
      e.preventDefault();
    }

    onClick();
    handleClose();
  };

  return (
    <Fragment>
      {/* START Account Button MOBILE/DESKTOP */}
      <ButtonNaked
        size="small"
        aria-label="party-menu-button"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={<AccountCircleRoundedIcon />}
        endIcon={open ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
        sx={{ display: ['none', 'flex'] }}
        weight="default"
      >
        {user.name && user.surname ? `${user.name} ${user.surname}` : 'Utente'}
      </ButtonNaked>
      <IconButton
        aria-label="Assistenza"
        size="small"
        sx={{ display: ['flex', 'none'], color: 'text.primary' }}
        onClick={handleClick}
      >
        <AccountCircleRoundedIcon fontSize="inherit" />
      </IconButton>
      {/* END Account Button MOBILE/DESKTOP */}

      {userActions && Boolean(userActions.length > 0) && (
        <Menu
          /* PaperProps={{ style: { maxHeight: 220, width: 200 } }} */
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{
            vertical: -8,
            horizontal: 'right',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ 'aria-labelledby': 'party-menu-button' }}
        >
          {userActions.map(({ id, label, onClick, icon }) => (
            <MenuItem key={id} onClick={wrapOnClick(onClick)} sx={{ display: 'flex' }}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              {label && <ListItemText>{label}</ListItemText>}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Fragment>
  );
};

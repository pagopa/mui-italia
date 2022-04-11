import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import { ButtonNaked } from "@components/ButtonNaked";

type JwtUser = {
  id: string;
  name?: string;
  surname?: string;
  email?: string;
};

type UserAction = {
  id: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
};

type AccountDropdownProps = {
  user: JwtUser;
  userActions?: Array<UserAction>;
};

export const AccountDropdown = ({
  user,
  userActions,
}: AccountDropdownProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: React.SyntheticEvent) => {
    const currentTarget = e.currentTarget as HTMLButtonElement;
    setAnchorEl(currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const wrapOnClick = (onClick: () => void) => (e: React.SyntheticEvent) => {
    if (e) {
      e.preventDefault();
    }

    onClick();
    handleClose();
  };

  return (
    <React.Fragment>
      {/* START Account Button MOBILE/DESKTOP */}
      <ButtonNaked
        size="small"
        aria-label="party-menu-button"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={<AccountCircleIcon />}
        endIcon={
          open ? (
            <KeyboardArrowUpIcon fontSize="small" />
          ) : (
            <KeyboardArrowDownIcon fontSize="small" />
          )
        }
        sx={{ display: ["none", "flex"] }}
      >
        {user.name && user.surname ? `${user.name} ${user.surname}` : "Utente"}
      </ButtonNaked>
      <IconButton
        aria-label="Assistenza"
        size="small"
        sx={{ display: ["flex", "none"] }}
        onClick={handleClick}
      >
        <AccountCircleIcon fontSize="inherit" />
      </IconButton>
      {/* END Account Button MOBILE/DESKTOP */}

      {userActions && Boolean(userActions.length > 0) && (
        <Menu
          /* PaperProps={{ style: { maxHeight: 220, width: 200 } }} */
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ "aria-labelledby": "party-menu-button" }}
        >
          {userActions.map(({ id, label, onClick, icon }) => (
            <MenuItem
              key={id}
              onClick={wrapOnClick(onClick)}
              sx={{ display: "flex" }}
            >
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              {label && <ListItemText>{label}</ListItemText>}
            </MenuItem>
          ))}
        </Menu>
      )}
    </React.Fragment>
  );
};

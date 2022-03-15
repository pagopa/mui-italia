import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
  Box,
  Badge,
  Divider,
} from "@mui/material";
import { ListItemBadge } from "@components/ListItemBadge";

/* Icons */
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import SupervisedUserCircleRoundedIcon from "@mui/icons-material/SupervisedUserCircleRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

export default {
  title: "Composition/Sidenav",
  component: List,
  parameters: { controls: { sort: "size" } },
} as ComponentMeta<typeof List>;

export const Default: ComponentStory<typeof List> = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      sx={{
        height: "100%",
        maxWidth: 360,
        backgroundColor: "background.paper",
      }}
    >
      <List component="nav" aria-label="main piattaforma-notifiche sender">
        <ListItemButton
          disableRipple
          selected={selectedIndex === 0}
          onClick={() => handleListItemClick(0)}
        >
          <ListItemIcon>
            <EmailRoundedIcon fontSize="inherit" />
          </ListItemIcon>
          <ListItemText primary="Notifiche" />
        </ListItemButton>
        <ListItemButton
          disableRipple
          selected={selectedIndex === 1}
          onClick={() => handleListItemClick(1)}
        >
          <ListItemIcon>
            <KeyRoundedIcon fontSize="inherit" />
          </ListItemIcon>
          <ListItemText primary="Chiavi API" />
        </ListItemButton>
        <ListItemButton
          disableRipple
          selected={selectedIndex === 2}
          onClick={() => handleListItemClick(2)}
        >
          <ListItemIcon>
            <SettingsRoundedIcon fontSize="inherit" />
          </ListItemIcon>
          <ListItemText primary="Impostazioni" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary piattaforma-notifiche sender">
        <ListItemButton disableRipple>
          <ListItemIcon>
            <PeopleRoundedIcon fontSize="inherit" />
          </ListItemIcon>
          <ListItemText primary="Ruoli" />
          <ListItemIcon>
            <ExitToAppRoundedIcon color="action" />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton disableRipple>
          <ListItemIcon>
            <SupervisedUserCircleRoundedIcon fontSize="inherit" />
          </ListItemIcon>
          <ListItemText primary="Gruppi" />
          <ListItemIcon>
            <ExitToAppRoundedIcon color="action" />
          </ListItemIcon>
        </ListItemButton>
      </List>
    </Box>
  );
};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
Default.decorators = [
  (Story) => (
    <div
      style={{
        display: "grid",
        height: "100vh",
        padding: "1em",
        backgroundColor: "#F5F5F5",
      }}
    >
      <Story />
    </div>
  ),
];

export const Nested: ComponentStory<typeof List> = () => {
  const [selectedTarget, setSelectedTarget] = React.useState("delegations");
  const [open, setOpen] = React.useState(true);

  const handleCollapseClick = () => {
    setOpen(!open);
  };

  const handleListItemClick = (target: string) => {
    setSelectedTarget(target);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        backgroundColor: "background.paper",
      }}
    >
      <List component="nav" aria-label="main piattaforma-notifiche sender">
        <ListItemButton disableRipple onClick={handleCollapseClick}>
          <ListItemIcon>
            <Badge color="primary" variant="dot">
              <EmailRoundedIcon fontSize="small" />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="Notifiche" />
          {open ? (
            <ExpandLessRoundedIcon color="action" />
          ) : (
            <ExpandMoreRoundedIcon color="action" />
          )}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              disableRipple
              sx={{ pl: 6 }}
              selected={selectedTarget === "your-notifications"}
              onClick={() => handleListItemClick("your-notifications")}
            >
              <ListItemText primary="Le tue notifiche" />
            </ListItemButton>
            <ListItemButton
              disableRipple
              sx={{ pl: 6 }}
              selected={selectedTarget === "giovanni-bianchi"}
              onClick={() => handleListItemClick("giovanni-bianchi")}
            >
              <ListItemText primary="Giovanni Bianchi" />
              <ListItemBadge
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={23}
              />
            </ListItemButton>
            <ListItemButton
              disableRipple
              sx={{ pl: 6 }}
              selected={selectedTarget === "maria-rossi"}
              onClick={() => handleListItemClick("maria-rossi")}
            >
              <ListItemText primary="Maria Rossi" />
              <ListItemBadge
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={2}
              />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton
          disableRipple
          selected={selectedTarget === "delegations"}
          onClick={() => handleListItemClick("delegations")}
        >
          <ListItemIcon>
            <PeopleRoundedIcon fontSize="inherit" />
          </ListItemIcon>
          <ListItemText primary="Deleghe" />
        </ListItemButton>
      </List>
    </Box>
  );
};
Nested.parameters = {
  controls: { hideNoControlsWarning: true },
};
Nested.decorators = [
  (Story) => (
    <div
      style={{
        display: "grid",
        height: "100vh",
        padding: "1em",
        backgroundColor: "#F5F5F5",
      }}
    >
      <Story />
    </div>
  ),
];

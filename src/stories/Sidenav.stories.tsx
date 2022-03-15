import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Box,
  Divider,
} from "@mui/material";

/* Icons */
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

export default {
  title: "Components/Sidenav",
  component: List,
  parameters: { controls: { sort: "size" } },
} as ComponentMeta<typeof List>;

// Mock Data
/* const notificationStatusHistory: Array<{
  statusLabel: string;
  state: string;
  activeFrom: string;
  description?: string;
}> = [
  {
    statusLabel: "Pagata",
    state: "success",
    activeFrom: "2022-02-22T11:22:00.957Z",
  },
  {
    statusLabel: "In inoltro",
    state: "warning",
    description: "Lorem ipsum dolor bla bla",
    activeFrom: "2022-02-22T11:22:12.971Z",
  },
  {
    statusLabel: "Perfezionata per visione",
    state: "success",
    activeFrom: "2022-02-22T08:12:29.991Z",
  },
  {
    statusLabel: "Destinatario irreperibile",
    state: "error",
    activeFrom: "2022-02-09T11:24:33.061Z",
  },
]; */

export const Default: ComponentStory<typeof List> = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
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
        <ListItemButton
          disableRipple
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <EmailRoundedIcon fontSize="inherit" />
          </ListItemIcon>
          <ListItemText primary="Notifiche" />
        </ListItemButton>
        <ListItemButton
          disableRipple
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <KeyRoundedIcon fontSize="inherit" />
          </ListItemIcon>
          <ListItemText primary="Chiavi API" />
        </ListItemButton>
        <ListItemButton
          disableRipple
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <SettingsRoundedIcon fontSize="inherit" />
          </ListItemIcon>
          <ListItemText primary="Impostazioni" />
        </ListItemButton>
      </List>
      <Divider />
      {/* <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Trash" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemText primary="Spam" />
        </ListItemButton>
      </List> */}
    </Box>
  );
};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
Default.decorators = [
  (Story) => (
    <div style={{ padding: "1em", backgroundColor: "#F5F5F5" }}>
      <Story />
    </div>
  ),
];

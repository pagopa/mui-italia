import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Snackbar, IconButton, Button, Alert } from "@mui/material";

/* Icons */
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default {
  title: "MUI Components/Feedback/Snackbar",
  component: Snackbar,
} as ComponentMeta<typeof Snackbar>;

export const Default: ComponentStory<typeof Snackbar> = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button size="small" variant="text">
        Action
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseRoundedIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Open snackbar
      </Button>
      <Snackbar
        open={open}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />
    </div>
  );
};

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const WithStatus: ComponentStory<typeof Alert> = (args) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Open snackbar
      </Button>
      <Snackbar open={open} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          variant="outlined"
          sx={{ width: "100%" }}
          {...args}
        >
          An important message you should read
        </Alert>
      </Snackbar>
    </div>
  );
};

WithStatus.argTypes = {
  severity: {
    options: ["error", "warning", "info", "success"],
    control: { type: "radio" },
    table: {
      type: { summary: "string" },
    },
  },
};

WithStatus.args = {
  severity: "success",
};

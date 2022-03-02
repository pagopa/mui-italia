import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Backdrop, Button, Typography } from "@mui/material";

/* Icons */

export default {
  title: "MUI Components/Feedback/Backdrop",
  component: Backdrop,
} as ComponentMeta<typeof Backdrop>;

export const Default: ComponentStory<typeof Backdrop> = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button variant="contained" onClick={handleToggle}>
        Show backdrop
      </Button>
      <Backdrop open={open} onClick={handleClose}>
        <Typography color="white" variant="h3">
          Click/Tap to close
        </Typography>
      </Backdrop>
    </>
  );
};

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};

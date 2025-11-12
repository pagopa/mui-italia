import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Backdrop, Button, Typography } from '@mui/material';

/* Icons */

export default {
  title: 'MUI Components/Feedback/Backdrop',
  component: Backdrop,
} as Meta<typeof Backdrop>;

export const Default: StoryFn<typeof Backdrop> = () => {
  const [open, setOpen] = useState(false);
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

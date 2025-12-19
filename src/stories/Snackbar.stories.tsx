import { Fragment, SyntheticEvent, useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Snackbar, IconButton, Button, Alert, Stack } from '@mui/material';

/* Icons */
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default {
  title: 'MUI Components/Feedback/Snackbar',
  component: Snackbar,
} as Meta<typeof Snackbar>;

export const Default: StoryFn<typeof Snackbar> = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (_event: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <Fragment>
      <Button size="small" variant="text">
        Action
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseRoundedIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Open snackbar
      </Button>
      <Snackbar open={open} onClose={handleClose} message="Important message" action={action} />
    </div>
  );
};

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const WithStatus: StoryFn<typeof Alert> = (args) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (_event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <Stack gap={1} direction="row" alignItems="center">
      <Button size="small" variant="text">
        Action
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseRoundedIcon fontSize="small" />
      </IconButton>
    </Stack>
  );

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Open snackbar
      </Button>
      <Snackbar open={open} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          variant="outlined"
          sx={{ width: '100%' }}
          action={action}
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
    options: ['error', 'warning', 'info', 'success'],
    control: { type: 'radio' },
    table: {
      type: { summary: 'string' },
    },
  },
};

WithStatus.args = {
  severity: 'success',
};

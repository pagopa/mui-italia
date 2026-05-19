import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { MISnackbar } from '@components/MISnackbar/MISnackbar';

const meta: Meta<typeof MISnackbar> = {
  title: 'Components/MISnackbar',
  component: MISnackbar,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: 'radio',
      options: ['success', 'info', 'warning', 'error'],
      defaultValue: 'success',
    },
    title: {
      control: 'text',
      description: 'Optional title for the alert',
    },
    description: {
      control: 'text',
      description: 'Main content of the alert',
    },
    errorCode: {
      control: 'text',
      description: 'Optional error code to display with a copy button',
    },
    open: {
      control: 'boolean',
      description: 'Controls the visibility of the snackbar',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MISnackbar>;

export const Default: Story = {
  args: {
    severity: 'success',
    title: 'Titolo della snackbar',
    description: 'Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid',
    open: false,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
      <Box sx={{ p: 4, display: 'flex', justifyContent: 'center', bgcolor: 'grey.50' }}>
        <Stack
          spacing={3}
          sx={{
            width: '100%',
            maxWidth: 720,
            p: 4,
            borderRadius: 3,
            bgcolor: 'background.paper',
            boxShadow: 2,
          }}
        >
          <Typography variant="h5">Test Snackbar in una pagina con più elementi</Typography>

          <Typography component="p" variant="body1">
            Questa storia simula una pagina con piu contenuti e azioni concorrenti, in modo da
            verificare come la snackbar si comporta quando il focus non parte da un contesto
            minimale.
          </Typography>

          <Typography component="p" variant="body1">
            Il primo pulsante rappresenta l&apos;azione principale della pagina e apre la snackbar.
            Il secondo resta indipendente, il TextField serve a simulare un ulteriore elemento
            interattivo. Senza force focus sulla snackbar, quando questa si apre il focus rimarrebbe
            sul pulsante e non verrebbe annunciata correttamente dagli screen reader.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="contained" onClick={handleOpen}>
              Trigger Snackbar
            </Button>
            <Button variant="outlined">Button</Button>
            <TextField label="TextField" />
          </Stack>

          <MISnackbar
            {...args}
            open={isOpen || args.open}
            onClose={() => {
              handleClose();
              args.onClose?.();
            }}
          />
        </Stack>
      </Box>
    );
  },
};

export const SnackbarWithoutTitle: Story = {
  args: {
    severity: 'success',
    description: 'Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid',
    open: false,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
      <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" onClick={handleOpen}>
          Trigger Snackbar
        </Button>

        <MISnackbar
          {...args}
          open={isOpen || args.open}
          onClose={() => {
            handleClose();
            args.onClose?.();
          }}
        />
      </div>
    );
  },
};

export const SnackbarWithErrorCode: Story = {
  args: {
    title: 'Titolo della snackbar',
    severity: 'error',
    description: 'Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid',
    errorCode: 'ERROR-404',
    open: false,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
      <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" onClick={handleOpen}>
          Trigger Snackbar
        </Button>

        <MISnackbar
          {...args}
          open={isOpen || args.open}
          onClose={() => {
            handleClose();
            args.onClose?.();
          }}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        />
      </div>
    );
  },
};

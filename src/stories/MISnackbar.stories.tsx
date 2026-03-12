import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '@mui/material';
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
        />
      </div>
    );
  },
};

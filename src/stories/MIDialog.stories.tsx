import { CopyToClipboardButton } from '@components/CopyToClipboardButton';
import { MIBoxedModule } from '@components/MIBoxedModule';
import MIBoxedModuleContent from '@components/MIBoxedModule/MIBoxedModuleContent';
import { MIButton } from '@components/MIButton';
import {
  MIDialog,
  MIDialogTitle,
  MIDialogContent,
  MIDialogContentText,
  MIDialogActions,
} from '@components/MIDialog';
import { Close } from '@mui/icons-material';
import { Checkbox, FormControlLabel, IconButton, Stack, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

type MIDialogStoryArgs = React.ComponentProps<typeof MIDialog>;

const meta: Meta<MIDialogStoryArgs> = {
  title: 'Components/MIDialog',
  component: MIDialog,
};

export default meta;

type Story = StoryObj<MIDialogStoryArgs>;

const ExampleDialog = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <MIButton onClick={() => setOpen(true)}>Open Dialog</MIButton>
      <MIDialog open={open} onClose={() => setOpen(false)} aria-labelledby="example-dialog">
        <MIDialogTitle>Dialog Title</MIDialogTitle>
        <IconButton
          onClick={() => setOpen(false)}
          aria-label="close"
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.colors.neutral.black,
          })}
        >
          <Close fontSize="small" />
        </IconButton>
        <MIDialogContent>
          <MIDialogContentText variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut
            aliquid ex ea commodi consequat.
          </MIDialogContentText>
        </MIDialogContent>
        <MIDialogActions>
          <MIButton variant="text">Secondary</MIButton>
          <MIButton>Primary</MIButton>
        </MIDialogActions>
      </MIDialog>
    </>
  );
};

const ExampleDialogWithCheckbox = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <MIButton onClick={() => setOpen(true)}>Open Dialog with Checkbox</MIButton>
      <MIDialog open={open} onClose={() => setOpen(false)} aria-labelledby="example-dialog">
        <MIDialogTitle>Dialog Title</MIDialogTitle>
        <IconButton
          onClick={() => setOpen(false)}
          aria-label="close"
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.colors.neutral.black,
          })}
        >
          <Close fontSize="small" />
        </IconButton>
        <MIDialogContent>
          <MIDialogContentText variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut
            aliquid ex ea commodi consequat.
          </MIDialogContentText>
          <FormControlLabel
            sx={{
              marginTop: '16px',
            }}
            control={<Checkbox />}
            label="Checkbox"
          />
        </MIDialogContent>
        <MIDialogActions>
          <MIButton variant="text">Secondary</MIButton>
          <MIButton>Primary</MIButton>
        </MIDialogActions>
      </MIDialog>
    </>
  );
};

const ExampleDialogWithError = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <MIButton onClick={() => setOpen(true)}>Open Dialog with Error</MIButton>
      <MIDialog open={open} onClose={() => setOpen(false)} aria-labelledby="example-dialog">
        <MIDialogTitle>Dialog Title</MIDialogTitle>
        <IconButton
          onClick={() => setOpen(false)}
          aria-label="close"
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.colors.neutral.black,
          })}
        >
          <Close fontSize="small" />
        </IconButton>
        <MIDialogContent>
          <MIDialogContentText variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut
            aliquid ex ea commodi consequat.
          </MIDialogContentText>
          <Stack
            gap={2}
            sx={{
              marginTop: '24px',
            }}
          >
            <Typography variant="caption-semibold">Codice di errore per l'assistenza</Typography>
            <MIBoxedModule>
              <MIBoxedModuleContent>
                <Stack direction="row" justifyContent="space-between" alignContent="center">
                  <Typography alignContent="center">[Codice errore]</Typography>
                  <CopyToClipboardButton value={() => ''} />
                </Stack>
              </MIBoxedModuleContent>
            </MIBoxedModule>
          </Stack>
        </MIDialogContent>
        <MIDialogActions>
          <MIButton variant="text">Secondary</MIButton>
          <MIButton>Primary</MIButton>
        </MIDialogActions>
      </MIDialog>
    </>
  );
};

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Esempio di componente Dialog',
      },
    },
  },
  render: () => <ExampleDialog />,
};

export const SimpleDialog: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Esempio di componente Dialog semplice con testo e azioni',
      },
    },
  },
  render: () => <ExampleDialog />,
};

export const DialogWithCheckbox: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Esempio di componente Dialog con checkbox',
      },
    },
  },
  render: () => <ExampleDialogWithCheckbox />,
};

export const DialogWithError: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Esempio di componente Dialog per la richiesta assistenza per un errore',
      },
    },
  },
  render: () => <ExampleDialogWithError />,
};

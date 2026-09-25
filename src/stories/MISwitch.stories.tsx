// src/stories/MISwitch.stories.tsx
import { FormControlLabel, FormGroup, Stack, Typography } from '@mui/material';
import { Report } from '@mui/icons-material';
import { Meta, StoryObj } from '@storybook/react-vite';

import { MISwitch } from '@components/MISwitch';

const meta: Meta<typeof MISwitch> = {
  title: 'components/MISwitch',
  component: MISwitch,
  tags: ['!dev'],
  parameters: {
    controls: {
      include: [
        'checked',
        'defaultChecked',
        'disabled',
        'disableRipple',
        'disableFocusRipple',
        'edge',
        'readOnly',
        'required',
        'name',
      ],
    },
  },
  argTypes: {
    checked: {
      description: "Stato controllato dello switch (acceso/spento). Richiede 'onChange'.",
    },
    defaultChecked: {
      description: 'Stato iniziale non controllato.',
    },
    disabled: {
      description: 'Disabilita lo switch impedendone l’interazione.',
    },
    disableRipple: {
      description: 'Disabilita l’effetto ripple al click/focus.',
    },
    disableFocusRipple: {
      description: 'Disabilita il ripple sul solo focus da tastiera.',
    },
    edge: {
      description: 'Margine negativo per allineare lo switch a inizio/fine riga.',
    },
    readOnly: {
      description: 'Rende lo switch non modificabile, mantenendo lo stato visibile.',
    },
    required: {
      description: 'Contrassegna l’input sottostante come obbligatorio in un form.',
    },
    name: {
      description: 'Nome dell’input, utile per la gestione del form.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof MISwitch>;

export const Playground: Story = {
  args: {
    defaultChecked: false,
  },
};

export const PrimaryChecked: Story = {
  parameters: { controls: { include: [] } },
  args: {
    checked: true,
  },
};

export const PrimaryDisabled: Story = {
  parameters: { controls: { include: [] } },
  render: () => (
    <Stack direction="row" alignItems="center" gap={4}>
      <MISwitch checked disabled />
      <MISwitch disabled />
    </Stack>
  ),
};

export const WithLabel: Story = {
  parameters: { controls: { include: [] } },
  render: () => (
    <FormGroup>
      <FormControlLabel
        control={<MISwitch />}
        label={
          <Stack sx={{ ml: 1 }}>
            <Typography variant="caption-semibold">Label</Typography>
            <Typography variant="body2">Label</Typography>
          </Stack>
        }
      />
    </FormGroup>
  ),
};

export const WithError: Story = {
  parameters: { controls: { include: [] } },
  render: () => (
    <FormGroup>
      <FormControlLabel
        control={
          <MISwitch inputProps={{ 'aria-describedby': 'mi-switch-error-helper-text' }} />
        }
        label={
          <Stack sx={{ ml: 1 }}>
            <Typography variant="caption-semibold">Label</Typography>
            <Typography variant="body2">Label</Typography>
            <Stack direction="row" alignItems="center" gap={0.5}>
              <Report color="error" fontSize="small" />
              <Typography id="mi-switch-error-helper-text" color="error" variant="caption">
                Helper text
              </Typography>
            </Stack>
          </Stack>
        }
      />
    </FormGroup>
  ),
};
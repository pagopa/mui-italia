// src/stories/MISwitch.stories.tsx
import { Stack } from '@mui/material';
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
        'label',
        'description',
        'error',
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
    label: {
      control: 'text',
      description: 'Testo principale associato allo switch.',
    },
    description: {
      control: 'text',
      description: 'Testo descrittivo facoltativo associato allo switch.',
    },
    error: {
      control: 'text',
      description: 'Messaggio di errore facoltativo associato allo switch.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof MISwitch>;

export const Playground: Story = {
  args: {
    defaultChecked: false,
    label: 'Notifiche',
    description: 'Ricevi aggiornamenti sulle attività del tuo account.',
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
      <MISwitch label="Notifiche attive" checked disabled />
      <MISwitch label="Notifiche disattive" disabled />
    </Stack>
  ),
};

export const WithLabel: Story = {
  parameters: { controls: { include: [] } },
  args: {
    label: 'Notifiche',
    description: 'Ricevi aggiornamenti sulle attività del tuo account.',
  },
};

export const WithError: Story = {
  parameters: { controls: { include: [] } },
  args: {
    label: 'Notifiche',
    description: 'Ricevi aggiornamenti sulle attività del tuo account.',
    error: 'Seleziona se desideri ricevere notifiche.',
  },
};
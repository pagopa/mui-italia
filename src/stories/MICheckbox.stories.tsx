import { Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';

import { breakpointsChromaticValues } from '@theme';
import { MICheckbox, type MICheckboxProps } from '@components/MICheckbox';

const meta: Meta<typeof MICheckbox> = {
  title: 'Components/MICheckbox',
  component: MICheckbox,
  tags: ['!dev'],
  parameters: {
    controls: {
      include: ['checked', 'disabled', 'label', 'error'],
    },
    chromatic: {
      viewports: breakpointsChromaticValues,
    },
  },
  args: {
    checked: false,
    label: 'Ricevi aggiornamenti sul servizio',
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Stato controllato della checkbox.',
    },
    defaultChecked: {
      control: false,
      description: 'Stato iniziale quando la checkbox non è controllata.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabilita la checkbox.',
    },
    label: {
      control: 'text',
      description: 'Testo visibile associato alla checkbox.',
    },
    error: {
      control: 'text',
      description: 'Messaggio di errore associato alla checkbox.',
    },
    inputProps: {
      control: false,
      table: { disable: true },
      description:
        'Props dell’input nativo, utili anche per configurare il nome o le descrizioni accessibili.',
    },
    onChange: {
      control: false,
      table: { disable: true },
    },
  },
  render: function RenderPlayground({
    disabled,
    label = 'Ricevi aggiornamenti sul servizio',
    error,
  }) {
    const [{ checked = false }, updateArgs] = useArgs<MICheckboxProps>();

    return (
      <MICheckbox
        checked={checked}
        onChange={(event) => updateArgs({ checked: event.target.checked })}
        disabled={disabled}
        label={label}
        error={error}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof MICheckbox>;

export const Playground: Story = {};

export const Selected: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <MICheckbox label="Ricevi aggiornamenti sul servizio" checked onChange={() => {}} />
  ),
};

export const Disabled: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => <MICheckbox label="Ricevi aggiornamenti sul servizio" defaultChecked disabled />,
};

export const WithError: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <MICheckbox label="Ricevi aggiornamenti sul servizio" error="La selezione non è valida." />
  ),
};

export const LongLabel: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <MICheckbox
      label="Desidero ricevere aggiornamenti via email sulle novità, le funzionalità e gli eventi del servizio."
    />
  ),
};

export const AccessibleName: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Stack spacing={2}>
      <MICheckbox />
    </Stack>
  ),
};

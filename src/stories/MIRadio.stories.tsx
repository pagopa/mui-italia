import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';

import { breakpointsChromaticValues } from '@theme';
import { MIRadio, type MIRadioProps } from '@components/MIRadio';
import { RadioGroup } from '@mui/material';

const meta: Meta<typeof MIRadio> = {
  title: 'Components/MIRadio',
  component: MIRadio,
  tags: ['!dev'],
  parameters: {
    controls: {
      include: ['value', 'disabled', 'label', 'error'],
    },
    chromatic: {
      viewports: breakpointsChromaticValues,
    },
  },
  args: {
    value: 'email',
    label: 'Ricevi aggiornamenti sul servizio',
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Valore del radio all’interno del gruppo.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabilita il radio.',
    },
    label: {
      control: 'text',
      description: 'Testo visibile associato al radio.',
    },
    error: {
      control: 'text',
      description: 'Messaggio di errore associato al radio.',
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
  render: function RenderPlayground({ disabled, label, error }) {
    const [{ value = 'email' }, updateArgs] = useArgs<MIRadioProps>();

    return (
      <RadioGroup value={value} onChange={(event) => updateArgs({ value: event.target.value })}>
        <MIRadio
          value="email"
          label={label ?? 'Ricevi aggiornamenti sul servizio'}
          error={error}
          disabled={disabled}
        />
        <MIRadio value="sms" label="Ricevi aggiornamenti via SMS" disabled={disabled} />
      </RadioGroup>
    );
  },
};

export default meta;

type Story = StoryObj<typeof MIRadio>;

export const Playground: Story = {};

export const Selected: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <RadioGroup value="email">
      <MIRadio value="email" label="Ricevi aggiornamenti sul servizio" />
      <MIRadio value="sms" label="Ricevi aggiornamenti via SMS" />
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <RadioGroup value="email">
      <MIRadio value="email" label="Ricevi aggiornamenti sul servizio" disabled />
      <MIRadio value="sms" label="Ricevi aggiornamenti via SMS" disabled />
    </RadioGroup>
  ),
};

export const WithError: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <RadioGroup value="">
      <MIRadio
        value="email"
        label="Ricevi aggiornamenti sul servizio"
        error="La selezione non è valida."
      />
      <MIRadio value="sms" label="Ricevi aggiornamenti via SMS" />
    </RadioGroup>
  ),
};

export const LongLabel: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <RadioGroup value="email">
      <MIRadio
        value="email"
        label="Desidero ricevere aggiornamenti via email sulle novità, le funzionalità e gli eventi del servizio."
      />
    </RadioGroup>
  ),
};

export const AccessibleName: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <RadioGroup value="email">
      <MIRadio value="email" inputProps={{ 'aria-label': 'Ricevi aggiornamenti via email' }} />
    </RadioGroup>
  ),
};

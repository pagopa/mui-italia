import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { useId } from 'react';

import { breakpointsChromaticValues } from '@theme';
import { MIRadio, type MIRadioProps } from '@components/MIRadio';
import { FormControl, FormLabel, RadioGroup } from '@mui/material';
import type { RadioGroupProps } from '@mui/material/RadioGroup';

const componentMaxWidth = 400;

const UpdatesRadioGroup = ({ children, ...props }: RadioGroupProps) => {
  const groupId = useId();
  const labelId = `${groupId}-label`;

  return (
    <FormControl component="fieldset">
      <FormLabel id={labelId} component="legend">
        Come desideri ricevere gli aggiornamenti?
      </FormLabel>
      <RadioGroup {...props} aria-labelledby={labelId} name={groupId}>
        {children}
      </RadioGroup>
    </FormControl>
  );
};

const meta: Meta<typeof MIRadio> = {
  title: 'Components/MIRadio',
  component: MIRadio,
  tags: ['!dev'],
  parameters: {
    controls: {
      include: ['value', 'disabled', 'label', 'error'],
    },
    chromatic: {
      viewports: breakpointsChromaticValues.filter(
        (resolution) => resolution <= componentMaxWidth
      ),
    },
  },
  args: {
    value: 'email',
    label: 'Ricevi aggiornamenti sul servizio',
  },
  argTypes: {
    value: {
      control: 'select',
      options: ['email', 'sms'],
      description: 'Valore selezionato per il gruppo; cambia la selezione del radio.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabilita il radio.',
    },
    label: {
      control: 'text',
      description: 'Testo visibile del primo radio nel gruppo.',
    },
    error: {
      control: 'text',
      description: 'Messaggio di errore del primo radio nel gruppo.',
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
      <UpdatesRadioGroup
        value={value}
        onChange={(event) => updateArgs({ value: event.target.value })}
      >
        <MIRadio
          value="email"
          label={label ?? 'Ricevi aggiornamenti sul servizio'}
          error={error}
          disabled={disabled}
        />
        <MIRadio value="sms" label="Ricevi aggiornamenti via SMS" disabled={disabled} />
      </UpdatesRadioGroup>
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
    <UpdatesRadioGroup defaultValue="email">
      <MIRadio value="email" label="Ricevi aggiornamenti sul servizio" />
      <MIRadio value="sms" label="Ricevi aggiornamenti via SMS" />
    </UpdatesRadioGroup>
  ),
};

export const Disabled: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <UpdatesRadioGroup defaultValue="email">
      <MIRadio value="email" label="Ricevi aggiornamenti sul servizio" disabled />
      <MIRadio value="sms" label="Ricevi aggiornamenti via SMS" disabled />
    </UpdatesRadioGroup>
  ),
};

export const WithError: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <UpdatesRadioGroup defaultValue="">
      <MIRadio
        value="email"
        label="Ricevi aggiornamenti sul servizio"
        error="La selezione non è valida."
      />
      <MIRadio value="sms" label="Ricevi aggiornamenti via SMS" />
    </UpdatesRadioGroup>
  ),
};

export const LongLabel: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <UpdatesRadioGroup defaultValue="email">
      <MIRadio
        value="email"
        label="Desidero ricevere aggiornamenti via email sulle novità, le funzionalità e gli eventi del servizio."
      />
    </UpdatesRadioGroup>
  ),
};

export const AccessibleName: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <UpdatesRadioGroup defaultValue="email">
      <MIRadio value="email" inputProps={{ 'aria-label': 'Ricevi aggiornamenti via email' }} />
    </UpdatesRadioGroup>
  ),
};

import { Meta, StoryObj } from '@storybook/react-vite';

import { MICheckbox } from '@components/MICheckbox';

const meta: Meta<typeof MICheckbox> = {
  title: 'Components/MICheckbox',
  component: MICheckbox,
  parameters: {
    controls: {
      include: ['checked', 'defaultChecked', 'disabled', 'label', 'error'],
    },
  },
  args: {
    label: 'Checkbox label',
  },
  argTypes: {
    checked: {
      description: 'Stato controllato della checkbox. Richiede onChange.',
    },
    defaultChecked: {
      description: 'Stato iniziale della checkbox non controllata.',
    },
    disabled: {
      description: 'Disabilita la checkbox e ne attenua l’aspetto.',
    },
    label: {
      control: 'text',
      description: 'Testo visibile e accessibile associato alla checkbox.',
    },
    error: {
      control: 'text',
      description: 'Messaggio di errore facoltativo associato alla checkbox.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof MICheckbox>;

export const Playground: Story = {
  args: {
    defaultChecked: false,
    label: 'Checkbox label',
  },
};

export const Selected: Story = {
  args: {
    checked: true,
    label: 'Checkbox label',
  },
};

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Checkbox label',
  },
};

export const WithError: Story = {
  args: {
    label: 'Checkbox label',
    error: 'Helper text',
  },
};

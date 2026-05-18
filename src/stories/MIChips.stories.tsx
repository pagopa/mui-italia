import { MIChip } from '@components/MIChip';
import { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'MUI Components/Data Display/MIChips',
  component: MIChip,
  argTypes: {
    label: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    mode: {
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'standard' },
      },
    },
    color: {
      options: ['default', 'warning', 'error', 'success', 'neutral', 'highlight'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    variant: {
      options: ['filled', 'outlined'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'filled' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  parameters: {
    layout: 'centered',
    controls: {
      include: ['label', 'color', 'variant', 'disabled'],
    },
  },
} as Meta<typeof MIChip>;

const Template: StoryFn<typeof MIChip> = (args) => <MIChip {...args} />;

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

export const Default = Template.bind({});
Default.args = {
  label: 'Consegnata',
  color: 'default',
};

export const Deletable = Template.bind({});
Deletable.args = {
  ...Default.args,
  color: 'neutral',
  onDelete: handleDelete,
};
Deletable.argTypes = {
  onDelete: {
    table: {
      disable: true,
    },
  },
};

import { MIChip } from '@components/MIChip';
import { StoryFn, Meta } from '@storybook/react';

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
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
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
      include: ['label', 'mode', 'color', 'variant', 'size', 'disabled'],
    },
  },
} as Meta<typeof MIChip>;

const Template: StoryFn<typeof MIChip> = (args) => <MIChip {...args} />;

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

export const Default = Template.bind({});
Default.args = {
  mode: 'standard',
  label: 'Consegnata',
  color: 'default',
};

export const Deletable = Template.bind({});
Deletable.args = {
  ...Default.args,
  mode: 'deletable',
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

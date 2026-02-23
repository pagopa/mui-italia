import { StoryFn, Meta } from '@storybook/react-vite';

import { Chip } from '@mui/material';

export default {
  title: 'MUI Components/Data Display/Chips',
  component: Chip,
  argTypes: {
    color: {
      options: ['default', 'warning', 'error', 'success', 'neutral', 'highlight'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      onDelete: { action: 'Deleted' },
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
  },
} as Meta<typeof Chip>;

const Template: StoryFn<typeof Chip> = (args) => <Chip {...args} />;

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

export const Default = Template.bind({});
Default.args = {
  label: 'Consegnata',
};

export const Deletable = Template.bind({});
Deletable.args = {
  ...Default.args,
  onDelete: handleDelete,
};
Deletable.argTypes = {
  onDelete: {
    table: {
      disable: true,
    },
  },
};

/* export const WithAvatar = Template.bind({});
WithAvatar.args = {
  ...Default.args,
  avatar: <Avatar>M</Avatar>,
};
WithAvatar.argTypes = {
  avatar: {
    table: {
      disable: true,
    },
  },
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  icon: <FaceRoundedIcon />,
};
WithIcon.argTypes = {
  icon: {
    table: {
      disable: true,
    },
  },
}; */

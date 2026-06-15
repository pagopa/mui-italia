import { Meta, StoryFn } from '@storybook/react-vite';
import DeleteIcon from '@mui/icons-material/Delete';
import { MIIconButton } from '@components/MIIconButton';

export default {
  title: 'Components/MIIconButton',
  component: MIIconButton,
  args: {
    children: <DeleteIcon />,
    disabled: false,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    edge: {
      control: 'select',
      options: [false, 'start', 'end'],
    },
  },
} as Meta<typeof MIIconButton>;

const Template: StoryFn<typeof MIIconButton> = (args) => <MIIconButton {...args} />;

export const DefaultIconButton = Template.bind({});

export const DisabledIconButton = Template.bind({});
DisabledIconButton.args = {
  disabled: true,
};

import { StoryFn, Meta } from '@storybook/react-vite';

import { ButtonNaked } from '@components/ButtonNaked';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';

const disableControl = {
  table: {
    disable: true,
  },
};

// this must be done to avoid the error "Expression produces a union type that is too complex to represent."
// this error shows when the combinations inferred from the type are too much
type ButtonNakedProps = Omit<typeof ButtonNaked, 'component'>;

export default {
  title: 'Components/ButtonNaked',
  component: ButtonNaked,
  args: {
    children: 'Discover more',
    disabled: false,
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    color: {
      options: ['text', 'primary', 'error'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    variant: { ...disableControl },
    disableElevation: { ...disableControl },
    disableRipple: { ...disableControl },
    disableTouchRipple: { ...disableControl },
    TouchRippleProps: { ...disableControl },
    touchRippleRef: { ...disableControl },
    FocusRipple: { ...disableControl },
    centerRipple: { ...disableControl },
  },
} as Meta<ButtonNakedProps>;

const Template: StoryFn<ButtonNakedProps> = (args) => <ButtonNaked {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  color: 'text',
};

export const WithEndIcon = Template.bind({});
WithEndIcon.storyName = 'Default + End Icon';
WithEndIcon.args = {
  ...Default.args,
  endIcon: <LogoutRoundedIcon />,
};

export const WithStartIcon = Template.bind({});
WithStartIcon.storyName = 'Default + Start Icon';
WithStartIcon.args = {
  ...Default.args,
  children: 'Download file',
  startIcon: <AttachFileRoundedIcon />,
};

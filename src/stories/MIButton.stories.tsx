import { StoryFn, Meta } from '@storybook/react-vite';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import MIButton from '@components/MIButton/MIButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'MUI Components/MIButton',
  component: MIButton,
  args: {
    variant: 'contained',
    loadingButton: false,
    children: 'Press me',
    fullWidth: false,
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
    fullWidth: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    color: {
      options: ['primary', 'error', 'contrastedPrimary', 'contrastedError'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    isLoading: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loaderType: {
      options: ['skeleton', 'loading'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'loading' },
      },
    },
    contrasted: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    /* Disabled controls */
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'contained' },
      },
    },
  },
  parameters: {
    controls: {
      sort: 'size',
      include: [
        'variant',
        'children',
        'fullWidth',
        'size',
        'color',
        'isLoading',
        'loaderType',
        'contrasted',
      ],
    },
  },
} as Meta<typeof MIButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof MIButton> = (args) => <MIButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'contained',
  size: 'medium',
};
Default.decorators = [
  (Story) => (
    <div style={{ padding: '1em', backgroundColor: '#E8EBF1' }}>
      <Story />
    </div>
  ),
];

export const WithEndIcon = Template.bind({});
WithEndIcon.storyName = 'Default + End Icon';
WithEndIcon.args = {
  ...Default.args,
  endIcon: <ArrowForwardRoundedIcon />,
};

export const WithStartIcon = Template.bind({});
WithStartIcon.storyName = 'Default + Start Icon';
WithStartIcon.args = {
  ...Default.args,
  startIcon: <ArrowBackRoundedIcon />,
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'contained',
  size: 'medium',
  children: 'Delete',
  color: 'error',
};
Danger.argTypes = {
  variant: { table: { disable: true } },
};

export const DangerWithEndIcon = Template.bind({});
DangerWithEndIcon.storyName = 'Danger + End Icon';
DangerWithEndIcon.args = {
  ...Danger.args,
  endIcon: <DeleteOutlineRoundedIcon />,
};
DangerWithEndIcon.argTypes = {
  ...Danger.argTypes,
};

export const DangerWithStartIcon = Template.bind({});
DangerWithStartIcon.storyName = 'Danger + Start Icon';
DangerWithStartIcon.args = {
  ...Danger.args,
  startIcon: <DeleteOutlineRoundedIcon />,
};
DangerWithStartIcon.argTypes = {
  ...Danger.argTypes,
};

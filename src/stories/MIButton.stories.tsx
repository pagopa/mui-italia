import { MIButton } from '@components/MIButton';
import { MIButtonLoaderType } from '@components/MIButton/types';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { Meta, StoryFn } from '@storybook/react-vite';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/MIButton',
  component: MIButton,
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Press me',
    fullWidth: false,
    isLoading: false,
    loaderType: MIButtonLoaderType.SPINNER,
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
      options: ['primary', 'error', 'contrasted'],
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
      options: [MIButtonLoaderType.SKELETON, MIButtonLoaderType.SPINNER],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: MIButtonLoaderType.SPINNER },
      },
    },
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
      include: ['variant', 'children', 'fullWidth', 'size', 'color', 'isLoading', 'loaderType'],
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

const onDarkSurface = [
  (Story: StoryFn) => (
    <div style={{ padding: '1em', backgroundColor: '#0B3EE3' }}>
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

export const Contrasted = Template.bind({});
Contrasted.args = {
  variant: 'contained',
  size: 'medium',
  color: 'contrasted',
};
Contrasted.decorators = onDarkSurface;

export const LoadingSpinner = Template.bind({});
LoadingSpinner.storyName = 'Spinner Loading';
LoadingSpinner.args = {
  ...Default.args,
  isLoading: true,
  loaderType: MIButtonLoaderType.SPINNER,
};

export const LoadingSkeleton = Template.bind({});
LoadingSkeleton.storyName = 'Skeleton Loading';
LoadingSkeleton.args = {
  ...Default.args,
  isLoading: true,
  loaderType: MIButtonLoaderType.SKELETON,
};

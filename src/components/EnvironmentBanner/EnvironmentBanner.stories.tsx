import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { Meta, StoryFn } from '@storybook/react';
import { breakpointsChromaticValues } from '@theme';
import { EnvironmentBanner } from './EnvironmentBanner';

const componentMaxWidth = 900;

export default {
  title: 'Components/EnvironmentBanner',
  component: EnvironmentBanner,
  parameters: {
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
  },
  argTypes: {
    bgColor: {
      control: {
        type: 'radio',
        options: ['white', 'info'],
      },
    },
    message: {
      control: {
        type: 'text',
      },
    },
    icon: {
      control: {
        disable: true,
      },
    },
  },
} as Meta<typeof EnvironmentBanner>;

export const Default: StoryFn<typeof EnvironmentBanner> = (args) => (
  <EnvironmentBanner
    {...args}
    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    icon={<LightbulbOutlinedIcon fontSize="small" />}
    onClose={() => {}}
    actionButton={{
      label: 'Scopri di più',
      onClick: () => {},
    }}
  />
);

Default.args = {
  bgColor: 'info',
};

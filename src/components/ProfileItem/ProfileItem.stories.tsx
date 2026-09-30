import { StoryFn, Meta } from '@storybook/react-vite';

import { Box, Stack } from '@mui/material';

import { breakpointsChromaticValues } from '@theme';

import { ProfileItem } from './ProfileItem';

const componentMaxWidth = 360;

export default {
  title: 'Components/ProfileItem',
  component: ProfileItem,
  args: {
    profileInitials: 'EC',
    profileName: 'Ente Creditore',
    caption: 'Stai operando come',
    switchLabel: 'Cambia profilo',
    showSwitchProfile: true,
    onSwitchProfile: () => {
      console.log('Clicked/Tapped on switch profile');
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ maxWidth: componentMaxWidth, backgroundColor: '#F5F5F5', p: 2 }}>
        <Story />
      </Box>
    ),
  ],
  parameters: {
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= 640),
    },
  },
} as Meta<typeof ProfileItem>;

const Template: StoryFn<typeof ProfileItem> = (args) => <ProfileItem {...args} />;

export const Default = Template.bind({});

export const Compact: StoryFn<typeof ProfileItem> = (args) => (
  <Box sx={{ width: 72 }}>
    <ProfileItem {...args} />
  </Box>
);

export const LongProfileName: StoryFn<typeof ProfileItem> = () => (
  <Stack gap={2} sx={{ maxWidth: componentMaxWidth }}>
    <ProfileItem
      profileInitials="IT"
      profileName="Intermediario Tecnologico"
      onSwitchProfile={() => {
        console.log('Clicked/Tapped on switch profile');
      }}
    />
  </Stack>
);

export const WithoutSwitchProfile = Template.bind({});
WithoutSwitchProfile.args = {
  showSwitchProfile: false,
};

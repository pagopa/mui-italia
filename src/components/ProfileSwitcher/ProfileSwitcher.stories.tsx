import { StoryFn, Meta } from '@storybook/react-vite';

import { Box, Stack } from '@mui/material';

import { breakpointsChromaticValues } from '@theme';

import { ProfileSwitcher } from './ProfileSwitcher';

const componentMaxWidth = 360;

export default {
  title: 'Components/ProfileSwitcher',
  component: ProfileSwitcher,
  args: {
    profileInitials: 'PT',
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
} as Meta<typeof ProfileSwitcher>;

const Template: StoryFn<typeof ProfileSwitcher> = (args) => <ProfileSwitcher {...args} />;

export const Default = Template.bind({});

export const Compact: StoryFn<typeof ProfileSwitcher> = (args) => (
  <Box sx={{ width: 72 }}>
    <ProfileSwitcher {...args} />
  </Box>
);

export const LongProfileName: StoryFn<typeof ProfileSwitcher> = () => (
  <Stack gap={2} sx={{ maxWidth: componentMaxWidth }}>
    <ProfileSwitcher
      profileInitials="PT"
      profileName="Commissario straordinario per la realizzazione di interventi complementari"
      onSwitchProfile={() => {
        console.log('Clicked/Tapped on switch profile');
      }}
    />
  </Stack>
);

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithoutSwitchProfile = Template.bind({});
WithoutSwitchProfile.args = {
  showSwitchProfile: false,
};

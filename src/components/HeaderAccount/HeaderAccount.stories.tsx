/* import { useState } from "react"; */
import { StoryFn, Meta } from '@storybook/react';

/* Icons */
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

import { breakpointsChromaticValues } from '@theme';

import { HeaderAccount, RootLinkType, JwtUser } from './HeaderAccount';

export default {
  title: 'Components/HeaderAccount (WIP)',
  component: HeaderAccount,
  decorators: [
    (Story) => (
      <div style={{ padding: 0, backgroundColor: '#F5F5F5' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: { hideNoControlsWarning: true },
    chromatic: {
      viewports: breakpointsChromaticValues,
    },
  },
} as Meta<typeof HeaderAccount>;

/*
User info
*/
const user: JwtUser = {
  id: '1',
  name: 'Ermenegildo',
  surname: 'Zegna',
  email: 'mario.rossi@gmail.com',
};

/*
Links Section
*/
const pagoPALink: RootLinkType = {
  label: 'PagoPA S.p.A.',
  href: 'https://www.pagopa.it/',
  ariaLabel: 'Link: vai al sito di PagoPA S.p.A.',
  title: 'Sito di PagoPA S.p.A.',
};

export const LoggedOut: StoryFn<typeof HeaderAccount> = () => (
  <HeaderAccount
    rootLink={pagoPALink}
    loggedUser={false}
    onAssistanceClick={() => {
      console.log('Clicked/Tapped on Assistance');
    }}
    onLogin={() => {
      console.log('User login');
    }}
  />
);

export const LoggedIn: StoryFn<typeof HeaderAccount> = () => (
  <HeaderAccount
    rootLink={pagoPALink}
    loggedUser={user}
    /*  loggedUser={party !== null ? user : undefined} */
    onAssistanceClick={() => {
      console.log('Clicked/Tapped on Assistance');
    }}
    onLogin={() => {
      console.log('User login');
    }}
    onLogout={() => {
      console.log('User logout');
    }}
  />
);

export const LoggedInWithDropdown: StoryFn<typeof HeaderAccount> = () => (
  <HeaderAccount
    enableDropdown
    rootLink={pagoPALink}
    loggedUser={user}
    /*  loggedUser={party !== null ? user : undefined} */
    onAssistanceClick={() => {
      console.log('Clicked/Tapped on Assistance');
    }}
    onLogin={() => {
      console.log('User login');
    }}
    userActions={[
      {
        id: 'profile',
        label: 'Profilo',
        onClick: () => {
          console.log('Clicked/Tapped on Profile');
        },
        icon: <SettingsIcon fontSize="small" color="inherit" />,
      },
      {
        id: 'logout',
        label: 'Esci',
        onClick: () => {
          console.log('User logged out');
        },
        icon: <LogoutRoundedIcon fontSize="small" color="inherit" />,
      },
    ]}
  />
);

export const WithoutLogin: StoryFn<typeof HeaderAccount> = () => (
  <HeaderAccount
    enableLogin={false}
    rootLink={pagoPALink}
    onAssistanceClick={() => {
      console.log('Clicked/Tapped on Assistance');
    }}
  />
);

export const WithoutAssistance: StoryFn<typeof HeaderAccount> = () => (
  <HeaderAccount
    enableAssistanceButton={false}
    rootLink={pagoPALink}
    onAssistanceClick={() => {
      console.log('Clicked/Tapped on Assistance');
    }}
  />
);

export const WithDocumentation: StoryFn<typeof HeaderAccount> = () => (
  <HeaderAccount
    rootLink={pagoPALink}
    onDocumentationClick={() => {
      console.log('Clicked/Tapped on Assistance');
    }}
    onAssistanceClick={() => {
      console.log('Clicked/Tapped on Assistance');
    }}
  />
);

export const fullyLocalizedHeaderAccount: StoryFn<typeof HeaderAccount> = () => (
  <HeaderAccount
    enableDropdown
    rootLink={pagoPALink}
    loggedUser={user}
    onAssistanceClick={() => {
      console.log('Clicked/Tapped on Assistance');
    }}
    onDocumentationClick={() => {
      console.log('Clicked/Tapped on Assistance');
    }}
    onLogin={() => {
      console.log('User login');
    }}
    userActions={[
      {
        id: 'profile',
        label: 'Profile',
        onClick: () => {
          console.log('Clicked/Tapped on Profile');
        },
        icon: <SettingsIcon fontSize="small" color="inherit" />,
      },
      {
        id: 'logout',
        label: 'Logout',
        onClick: () => {
          console.log('User logged out');
        },
        icon: <LogoutRoundedIcon fontSize="small" color="inherit" />,
      },
    ]}
    translationsMap={{ assistance: 'Help', documentation: 'Documentation' }}
  />
);

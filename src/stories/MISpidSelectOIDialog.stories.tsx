import { Button } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-vite';
import { breakpointsChromaticValues } from '@theme';
import { useEffect, useState } from 'react';

import { IDPS_MOCK, MOCK_IDP_UNAVAILABLE } from './__mocks__/IDPS.mock';
import { MISpidSelectOIDialog } from '@components/MISpidSelectOIDialog';

const meta: Meta<typeof MISpidSelectOIDialog> = {
  title: 'Components/MISpidSelectOIDialog',
  component: MISpidSelectOIDialog,
  parameters: {
    chromatic: {
      viewports: breakpointsChromaticValues,
    },
    docs: {
      description: {
        component:
          'Modal dialog that lets the user authenticate with SPID by choosing one of the available Identity Providers. It handles the loading, error and "provider unavailable" states internally, renders fullscreen on mobile and locks while an authentication request is in flight. All copy can be localized through `translationsMap`.',
      },
      // The dialog portals to `document.body`. Rendering each doc preview in its own
      // iframe keeps the (potentially fullscreen) dialog contained within the canvas
      // instead of covering the whole Docs page.
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
  argTypes: {
    show: { table: { disable: true } },
    idps: { control: false },
    translationsMap: { control: false },
    oneIdentityCdnBaseUrl: {
      control: 'radio',
      options: ['https://assets.uat.oneid.pagopa.it', 'https://assets.oneid.pagopa.it'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof MISpidSelectOIDialog>;

export const Default: Story = {
  args: {
    show: true,
    idps: IDPS_MOCK,
    loading: false,
    error: false,
    oneIdentityCdnBaseUrl: 'https://assets.oneid.pagopa.it',
    onClose: () => {},
    handleSelectIDP: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Default state showing the full list of available Identity Providers.',
      },
    },
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    idps: [],
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state shown while the provider list is being fetched.',
      },
    },
  },
};

export const UnavailableIdp: Story = {
  args: {
    ...Default.args,
    idps: [...IDPS_MOCK, MOCK_IDP_UNAVAILABLE],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Selecting an inactive or non-`OK` provider surfaces a warning alert instead of starting authentication.',
      },
    },
  },
};

export const Authorizing: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Once a provider is selected the dialog locks (close button disabled) while the authentication request is in flight.',
      },
    },
  },
  render: (args) => {
    useEffect(() => {
      const btn = document.getElementById(`spid-select-${IDPS_MOCK[0].entityID}`);
      if (btn) btn.click();
    }, []);
    return <MISpidSelectOIDialog {...args} />;
  },
};

export const CustomTranslations: Story = {
  args: {
    ...Default.args,
    translationsMap: {
      title: 'Login with SPID',
      closeButtonAriaLabel: 'Close',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'All visible copy can be localized by passing a partial `translationsMap`; omitted keys fall back to the Italian defaults.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    docs: {
      description: {
        story:
          'End-to-end example wiring the dialog to a trigger button and managing its open state.',
      },
    },
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Accedi con SPID
        </Button>
        <MISpidSelectOIDialog
          {...args}
          show={open}
          onClose={() => {
            setOpen(false);
          }}
          handleSelectIDP={() => {}}
        />
      </>
    );
  },
};

export const NoIdpsError: Story = {
  args: {
    ...Default.args,
    idps: [],
    error: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Error state shown when the provider list cannot be loaded or comes back empty.',
      },
    },
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { breakpointsChromaticValues } from '@theme';
import { MIAlert } from '@components/MIAlert';
import { Box } from '@mui/material';

const componentMaxWidth = 900;

const DEFAULT_TITLE = "Titolo default dell'Alert";

const DEFAULT_MESSAGE = 'Aggiungi un messaggio esplicativo sul motivo della segnalazione.';

const DEFAULT_CTA = 'Ok, ho capito!';

const LONG_UNBROKEN =
  'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong';

const meta: Meta<React.ComponentProps<typeof MIAlert>> = {
  title: 'MUI Components/Feedback/MIAlert',
  component: MIAlert,
  parameters: {
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 2, pb: 4, boxSizing: 'border-box', width: '100%' }}>
        <Box sx={{ maxWidth: '100%', mx: 'auto' }}>
          <Story />
        </Box>
      </Box>
    ),
  ],
  argTypes: {
    severity: {
      control: { type: 'radio' },
      options: ['success', 'error', 'info', 'warning'],
      defaultValue: 'success',
    },
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
    action: { table: { disable: true } },
  },
  render: (args) => {
    const { action, ...MIAlertArgs } = args;

    return <MIAlert {...MIAlertArgs} action={action} />;
  },
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof MIAlert>>;

/* ------------------------------ Normal stories ------------------------------ */

export const DefaultCTALink: Story = {
  args: {
    title: DEFAULT_TITLE,
    description: DEFAULT_MESSAGE,
    action: {
      label: DEFAULT_CTA,
      href: 'https://test.com',
      target: '_self',
    },
  },
};

export const DefaultCTAClick: Story = {
  args: {
    title: DEFAULT_TITLE,
    description: DEFAULT_MESSAGE,
    action: {
      label: DEFAULT_CTA,
      onClick: () => console.log('CTA clicked'),
    },
  },
};

export const NoCTA: Story = {
  args: {
    title: DEFAULT_TITLE,
    description: DEFAULT_MESSAGE,
  },
};

export const NoTitle: Story = {
  args: {
    description: DEFAULT_MESSAGE,
  },
};

/* ------------------------------ Stress-test stories ------------------------------ */

export const Stress_MIAlert_Unbroken: Story = {
  args: {
    title: `Very long title ${LONG_UNBROKEN}`,
    description: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
    action: {
      label: DEFAULT_CTA,
      href: 'https://test.com',
      target: '_self',
    },
  },
};

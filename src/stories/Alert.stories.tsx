import { Alert } from '@components/Alert/Alert';
import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { breakpointsChromaticValues } from '@theme';

const componentMaxWidth = 900;

const DEFAULT_TITLE = "Titolo default dell'Alert";

const DEFAULT_MESSAGE = 'Aggiungi un messaggio esplicativo sul motivo della segnalazione.';

const DEFAULT_CTA = 'Ok, ho capito!';

const LONG_UNBROKEN =
  'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong';

const meta: Meta<React.ComponentProps<typeof Alert>> = {
  title: 'MUI Components/Feedback/Alert',
  component: Alert,
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
    const { action, ...AlertArgs } = args;

    return <Alert {...AlertArgs} action={action} />;
  },
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof Alert>>;

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
      onClick: () => alert('CTA clicked'),
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

export const Stress_Alert_Unbroken: Story = {
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

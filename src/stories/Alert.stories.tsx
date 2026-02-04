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
    variant: { control: { type: 'radio' }, options: ['standard'], defaultValue: 'standard' },
    severity: {
      control: { type: 'radio' },
      options: ['success', 'error', 'info', 'warning'],
      defaultValue: 'info',
    },
    title: { control: { type: 'text' } },
    message: { control: { type: 'text' } },
    cta: { table: { disable: true } },
  },
  render: (args) => {
    const { cta, ...AlertArgs } = args;

    return <Alert {...AlertArgs} cta={cta} />;
  },
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof Alert>>;

/* ------------------------------ Normal stories ------------------------------ */

export const Default: Story = {
  args: {
    title: DEFAULT_TITLE,
    description: DEFAULT_MESSAGE,
    // cta: {
    //   label: DEFAULT_CTA,
    //   href: 'https://test.com',
    //   target: '_self',
    // },
  },
};

/* ------------------------------ Stress-test stories ------------------------------ */

export const Stress_Primary_Unbroken: Story = {
  args: {
    title: `Very long title ${LONG_UNBROKEN}`,
    description: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
    // cta: {
    //   label: DEFAULT_CTA,
    //   href: 'https://test.com',
    //   target: '_self',
    // },
  },
};

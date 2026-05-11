import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '@mui/material';
import { breakpointsChromaticValues } from '@theme';

import MIWizardStepper from '@components/MIWizard/MIWizardStepper';

const componentMaxWidth = 900;

const steps = [{ label: 'Personal data' }, { label: 'Review' }, { label: 'Confirmation' }];

const meta = {
  title: 'MUI Components/Navigation/MIWizardStepper',
  component: MIWizardStepper,
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
    activeStep: {
      control: { type: 'number', min: 0, max: steps.length - 1 },
    },
  },
} satisfies Meta<React.ComponentProps<typeof MIWizardStepper>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FirstStep: Story = {
  args: {
    steps,
    activeStep: 0,
  },
};

export const MiddleStep: Story = {
  args: {
    steps,
    activeStep: 1,
  },
};

export const LastStep: Story = {
  args: {
    steps,
    activeStep: 2,
  },
};

export const LongLabels: Story = {
  args: {
    activeStep: 1,
    steps: [
      { label: 'Insert personal and contact information' },
      { label: 'Review all entered information before submitting' },
      { label: 'Confirm and complete the wizard flow' },
    ],
  },
};

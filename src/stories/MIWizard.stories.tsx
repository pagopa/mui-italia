import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Box, Typography } from '@mui/material';

import { breakpointsChromaticValues } from '@theme';

import { MIWizard, MIWizardStep } from '@components/MIWizard';

const componentMaxWidth = 900;

const meta = {
  title: 'MUI Components/Navigation/MIWizard',
  parameters: {
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
  },
  decorators: [
    (Story: React.ElementType) => (
      <Box sx={{ p: 2, pb: 4, boxSizing: 'border-box', width: '100%' }}>
        <Box sx={{ maxWidth: componentMaxWidth, mx: 'auto' }}>
          <Story />
        </Box>
      </Box>
    ),
  ],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

type WizardDemoProps = {
  initialStep?: number;
};

const WizardDemo = ({ initialStep = 0 }: WizardDemoProps) => {
  const [activeStep, setActiveStep] = useState(initialStep);

  return (
    <MIWizard
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      title={
        <Typography variant="h4" fontWeight={700}>
          Example wizard
        </Typography>
      }
      slotsProps={{
        nextButton: {
          label: activeStep === 2 ? 'Complete' : 'Continue',
          onClick: (next) => next(),
        },
        prevButton: {
          disabled: activeStep === 0,
        },
        feedback: {
          title: 'Wizard completed',
          content: 'The wizard flow has been completed successfully.',
          buttonText: 'Back to start',
          onClick: () => setActiveStep(0),
        },
      }}
    >
      <MIWizardStep label="Personal data">
        <Typography variant="h6" gutterBottom>
          Personal data
        </Typography>

        <Typography variant="body2">
          This is the first step content. Use it to collect user information.
        </Typography>
      </MIWizardStep>

      <MIWizardStep label="Review">
        <Typography variant="h6" gutterBottom>
          Review
        </Typography>

        <Typography variant="body2">
          This is the second step content. Use it to review entered data.
        </Typography>
      </MIWizardStep>

      <MIWizardStep label="Confirmation">
        <Typography variant="h6" gutterBottom>
          Confirmation
        </Typography>

        <Typography variant="body2">
          This is the final step content. Click complete to show feedback.
        </Typography>
      </MIWizardStep>
    </MIWizard>
  );
};

export const FirstStep: Story = {
  render: () => <WizardDemo initialStep={0} />,
};

export const ReviewStep: Story = {
  render: () => <WizardDemo initialStep={1} />,
};

export const ConfirmationStep: Story = {
  render: () => <WizardDemo initialStep={2} />,
};

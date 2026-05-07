import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import { breakpointsChromaticValues } from '@theme';

import MIWizard from '../components/MIWizard/MIWizard';
import MIWizardStep from '../components/MIWizard/MIWizardStep';

const componentMaxWidth = 900;

const meta: Meta<typeof MIWizard> = {
  title: 'MUI Components/Navigation/MIWizard',
  component: MIWizard,
  parameters: {
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 2, pb: 4, boxSizing: 'border-box', width: '100%' }}>
        <Box sx={{ maxWidth: componentMaxWidth, mx: 'auto' }}>
          <Story />
        </Box>
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof MIWizard>;

const WizardDemo = () => {
  const [activeStep, setActiveStep] = useState(0);

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

export const DefaultStepper: Story = {
  render: () => <WizardDemo />,
};

export const WithCustomFeedback: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(2);

    return (
      <MIWizard
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        title="Wizard Title"
        slotsProps={{
          feedback: {
            title: 'Custom title',
            content: 'Custom content',
            buttonText: 'Custom button text',
            onClick: () => setActiveStep(0),
          },
        }}
      >
        <MIWizardStep label="Label Step 1">Step 1</MIWizardStep>

        <MIWizardStep label="Label Step 2">Step 2</MIWizardStep>
      </MIWizard>
    );
  },
};

export const WithCustomButtonsClick: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(1);

    const customNextClick = (next: () => void) => {
      console.log('custom next click');
      next();
    };

    const customPrevClick = (prev: () => void) => {
      console.log('custom prev click');
      prev();
    };

    const onExitMock = () => {
      console.log('exit click');
    };

    return (
      <MIWizard
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        title="Wizard Title"
        slotsProps={{
          nextButton: { onClick: customNextClick },
          prevButton: { onClick: customPrevClick },
          exitButton: { onClick: onExitMock },
        }}
      >
        <MIWizardStep label="Label Step 1">Step 1</MIWizardStep>
        <MIWizardStep label="Label Step 2">Step 2</MIWizardStep>
      </MIWizard>
    );
  },
};

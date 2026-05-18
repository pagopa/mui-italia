'use client';

import React, { ReactNode } from 'react';

import { Box, CircularProgress, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';

import { useIsMobile } from '@hooks/useIsMobile';

export type MIWizardStepperLocaleText = {
  stepLabel?: (currentStep: number) => string;
  stepOfLabel?: (currentStep: number, totalSteps: number) => string;
};

const defaultLocaleText: Required<MIWizardStepperLocaleText> = {
  stepLabel: (currentStep) => `Step ${currentStep}`,
  stepOfLabel: (currentStep, totalSteps) => `${currentStep} of ${totalSteps}`,
};

type Props = {
  steps: Array<{ label: ReactNode }>;
  activeStep: number;
  localeText?: MIWizardStepperLocaleText;
};

const MIWizardStepper: React.FC<Props> = ({ steps, activeStep, localeText }) => {
  const isMobile = useIsMobile();

  const resolvedLocaleText = {
    ...defaultLocaleText,
    ...localeText,
  };

  return isMobile ? (
    <Stack direction="row" spacing={2} alignItems="center">
      <Box sx={{ position: 'relative', display: 'inline-flex' }} data-testid="mobileWizardStepper">
        <CircularProgress
          variant="determinate"
          value={100}
          size={48}
          sx={{ color: '#D9D9D9' }}
          thickness={3}
        />
        <CircularProgress
          variant="determinate"
          value={((activeStep + 1) * 100) / steps.length}
          size={48}
          sx={{ position: 'absolute' }}
          thickness={3}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" fontSize="12px">
            {resolvedLocaleText.stepOfLabel(activeStep + 1, steps.length)}
          </Typography>
        </Box>
      </Box>
      <Stack direction="column">
        <Typography variant="caption">{resolvedLocaleText.stepLabel(activeStep + 1)}</Typography>
        <Typography variant="caption" fontWeight={600}>
          {steps[activeStep].label}
        </Typography>
      </Stack>
    </Stack>
  ) : (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      data-testid="desktopWizardStepper"
      role="list"
    >
      {steps.map((step, index) => {
        const isCurrent = index === activeStep;
        return (
          <Step
            role="listitem"
            key={index}
            aria-current={isCurrent ? 'step' : undefined}
            data-testid={`step-${index}`}
          >
            <StepLabel>{step.label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default MIWizardStepper;

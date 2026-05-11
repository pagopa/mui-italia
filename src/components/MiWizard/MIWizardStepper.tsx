'use client';

const MIWizardStepper = () => {
  return <div>MIWizardStepper debug</div>;
};

export default MIWizardStepper;

/*import React, { ReactNode } from 'react';

import { Box, CircularProgress, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';

import { useIsMobile } from './hooks/useIsMobile';
import { getLocalizedOrDefaultLabel } from './utility/localization.utility';

type Props = {
  steps: Array<{ label: ReactNode }>;
  activeStep: number;
};

const MIWizardStepper: React.FC<Props> = ({ steps, activeStep }) => {
  const isMobile = useIsMobile();

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
            {getLocalizedOrDefaultLabel('common', 'wizard.stepper.of', undefined, {
              currentStep: activeStep + 1,
              totalSteps: steps.length,
            })}
          </Typography>
        </Box>
      </Box>
      <Stack direction="column">
        <Typography variant="caption">
          {getLocalizedOrDefaultLabel('common', 'wizard.stepper.activeStep', undefined, {
            currentStep: activeStep + 1,
          })}
        </Typography>
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

export default MIWizardStepper;*/

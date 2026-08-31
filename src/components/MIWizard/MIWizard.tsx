'use client';

import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';

import { IllustrationProps } from '@components/Illustration';
import { MIButton } from '@components/MIButton';
import { MIButtonProps } from '@components/MIButton/types';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Box, Paper, PaperProps, Stack, StackProps, Typography } from '@mui/material';

import { IllusCompleted } from '../../illustrations/Completed';
import { checkChildren } from '../../utils/children.utility';
import MIStep, { MIStepProps } from '../MIStepper/MIStep';
import MIStepper, { MIStepperLocaleText } from '../MIStepper/MIStepper';

type MIWizardLocaleText = MIStepperLocaleText & {
  exitButton?: string;
  previousButton?: string;
  nextButton?: string;
};

const defaultLocaleText = {
  exitButton: 'Exit',
  previousButton: 'Back',
  nextButton: 'Confirm',
};

type NextButtonProps = Omit<MIButtonProps, 'onClick' | 'href'> & {
  onClick?: (next: () => void, step: number) => void;
  label?: string;
  herf?: never;
};

type PrevButtonProps = Omit<MIButtonProps, 'onClick' | 'href'> & {
  onClick?: (previous: () => void, step: number) => void;
  herf?: never;
};

export type MIWizardProps = {
  activeStep: number;
  setActiveStep: (step: number) => void;
  title: ReactNode;
  children: ReactNode;
  localeText?: MIWizardLocaleText;
  slots?: {
    nextButton?: JSXElementConstructor<NextButtonProps>;
    prevButton?: JSXElementConstructor<PrevButtonProps>;
    exitButton?: JSXElementConstructor<MIButtonProps>;
    feedbackIcon?: JSXElementConstructor<IllustrationProps>;
  };
  slotsProps?: {
    stepContainer?: Partial<PaperProps>;
    nextButton?: NextButtonProps;
    prevButton?: PrevButtonProps;
    exitButton?: MIButtonProps;
    actions?: StackProps;
    container?: Omit<StackProps, 'children'> & { 'data-testid'?: string };
    feedback?: {
      title: string;
      content?: ReactNode;
      buttonText: string;
      iconProps?: Partial<IllustrationProps>;
      onClick: () => void;
      onFeedbackShow?: () => void;
    };
    belowStepContent?: ReactNode;
  };
};

const MIWizard: React.FC<MIWizardProps> = ({
  activeStep,
  setActiveStep,
  title,
  children,
  localeText,
  slots,
  slotsProps,
}) => {
  checkChildren(children, [{ cmp: MIStep }], 'MIWizard');
  const PrevButton = slots?.prevButton || MIButton;
  const NextButton = slots?.nextButton || MIButton;
  const ExitButton = slots?.exitButton || MIButton;
  const FeedbackIcon = slots?.feedbackIcon || IllusCompleted;

  const resolvedLocaleText = {
    ...defaultLocaleText,
    ...localeText,
  };

  const childrens = React.Children.toArray(children);
  const steps = childrens
    .filter(
      (child): child is ReactElement<MIStepProps> =>
        React.isValidElement(child) && child.type === MIStep && child.props.label
    )
    .map((child) => ({ label: child.props.label }));

  const goToStep = (step: number) => {
    if (step >= 0 && step < steps.length) {
      setActiveStep(step);
    }
  };

  const handleNextStep = async () => {
    if (slotsProps?.nextButton?.onClick) {
      slotsProps.nextButton.onClick(() => goToStep(activeStep + 1), activeStep);
      return;
    }
    goToStep(activeStep + 1);
  };

  const handlePrevStep = async () => {
    if (slotsProps?.prevButton?.onClick) {
      slotsProps.prevButton.onClick(() => goToStep(activeStep - 1), activeStep);
      return;
    }
    goToStep(activeStep - 1);
  };

  if (activeStep >= childrens.length && slotsProps?.feedback) {
    const feedback = slotsProps.feedback;

    feedback.onFeedbackShow?.();

    return (
      <Box
        sx={{ minHeight: '350px', height: '100%', display: 'flex' }}
        data-testid="wizard-feedback-step"
      >
        <Box sx={{ mt: 11, mx: 'auto', textAlign: 'center', width: '80vw' }}>
          <FeedbackIcon {...slotsProps.feedback.iconProps} />
          <Typography
            data-testid="wizard-feedback-title"
            variant="h4"
            color="text.primary"
            sx={{ mt: 4, mb: 1, mx: '0px auto' }}
          >
            {feedback.title}
          </Typography>
          <Typography
            data-testid="wizard-feedback-content"
            color="text.primary"
            variant="body2"
            sx={{
              mt: 1,
              mb: 2,
              mx: '0px auto',
              fontSize: { xs: '14px', sm: '16px' },
              fontWeight: 400,
            }}
          >
            {feedback.content}
          </Typography>

          <MIButton
            data-testid="wizard-feedback-button"
            variant="contained"
            sx={{ mt: 2, mb: 11 }}
            onClick={feedback.onClick}
          >
            {feedback.buttonText}
          </MIButton>
        </Box>
      </Box>
    );
  }

  return (
    <Stack
      {...slotsProps?.container}
      sx={{
        ...slotsProps?.container?.sx,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ p: 3 }}>
        <ExitButton
          {...slotsProps?.exitButton}
          data-testid="exit-button"
          size="medium"
          color="primary"
          startIcon={<ArrowBackIcon />}
          variant="text"
        >
          {resolvedLocaleText.exitButton}
        </ExitButton>
        <Box sx={{ mt: 2, mb: 3 }} data-testid="wizard-title">
          {title}
        </Box>

        {steps.length > 0 && (
          <MIStepper steps={steps} activeStep={activeStep} localeText={localeText} />
        )}

        <Paper
          elevation={0}
          {...slotsProps?.stepContainer}
          sx={{ p: 3, mb: '20px', mt: 3, ...slotsProps?.stepContainer?.sx }}
        >
          {childrens[activeStep]}
        </Paper>

        {slotsProps?.belowStepContent}

        <Stack
          {...slotsProps?.actions}
          direction={{ xs: 'column-reverse', md: 'row' }}
          sx={{ ...slotsProps?.actions?.sx, justifyContent: 'space-between' }}
        >
          <PrevButton
            {...slotsProps?.prevButton}
            data-testid="prev-button"
            sx={{ mt: { xs: 2, md: 0 } }}
            onClick={handlePrevStep}
            variant="outlined"
          >
            {resolvedLocaleText.previousButton}
          </PrevButton>

          <NextButton
            {...slotsProps?.nextButton}
            data-testid="next-button"
            variant="contained"
            sx={{ ml: { md: 'auto' } }}
            onClick={handleNextStep}
          >
            {slotsProps?.nextButton?.label || resolvedLocaleText.nextButton}
          </NextButton>
        </Stack>
      </Box>
    </Stack>
  );
};

export default MIWizard;

'use client';

import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Box,
  Button,
  ButtonProps,
  Paper,
  PaperProps,
  Stack,
  StackProps,
  Typography,
} from '@mui/material';
import { IllusCompleted } from '../../illustrations/Completed';
import { IllustrationProps } from '@components/Illustration';
import { ButtonNaked } from '@components/ButtonNaked';

import { checkChildren } from '../../utils/children.utility';
import MIWizardStep, { MIWizardStepProps } from './MIWizardStep';
import MIWizardStepper, { MIWizardStepperLocaleText } from './MIWizardStepper';

type MIWizardLocaleText = MIWizardStepperLocaleText & {
  exitButton?: string;
  previousButton?: string;
  nextButton?: string;
};

const defaultLocaleText = {
  exitButton: 'Exit',
  previousButton: 'Back',
  nextButton: 'Confirm',
};

type Props = {
  activeStep: number;
  setActiveStep: (step: number) => void;
  title: ReactNode;
  children: ReactNode;
  localeText?: MIWizardLocaleText;
  slots?: {
    nextButton?: JSXElementConstructor<ButtonProps>;
    prevButton?: JSXElementConstructor<ButtonProps>;
    exitButton?: JSXElementConstructor<ButtonProps>;
    feedbackIcon?: JSXElementConstructor<IllustrationProps>;
  };
  slotsProps?: {
    stepContainer?: Partial<PaperProps>;
    nextButton?: Omit<ButtonProps, 'onClick'> & {
      onClick?: (next: () => void, step: number) => void;
      label?: string;
    };
    prevButton?: Omit<ButtonProps, 'onClick'> & {
      onClick?: (previous: () => void, step: number) => void;
    };
    exitButton?: ButtonProps;
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

const MIWizard: React.FC<Props> = ({
  activeStep,
  setActiveStep,
  title,
  children,
  localeText,
  slots,
  slotsProps,
}) => {
  checkChildren(children, [{ cmp: MIWizardStep }], 'MIWizard');
  const PrevButton = slots?.prevButton || Button;
  const NextButton = slots?.nextButton || Button;
  const ExitButton = slots?.exitButton || ButtonNaked;
  const FeedbackIcon = slots?.feedbackIcon || IllusCompleted;

  const resolvedLocaleText = {
    ...defaultLocaleText,
    ...localeText,
  };

  const childrens = React.Children.toArray(children);
  const steps = childrens
    .filter(
      (child): child is ReactElement<MIWizardStepProps> =>
        React.isValidElement(child) && child.type === MIWizardStep && child.props.label
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
    const feedback = slotsProps?.feedback;

    feedback.onFeedbackShow?.();

    return (
      <Box
        sx={{ minHeight: '350px', height: '100%', display: 'flex' }}
        data-testid="wizard-feedback-step"
      >
        <Box sx={{ mt: 11, mx: 'auto', textAlign: 'center', width: '80vw' }}>
          <FeedbackIcon {...slotsProps?.feedback?.iconProps} />
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
            fontWeight="400"
            sx={{ mt: 1, mb: 2, mx: '0px auto', fontSize: { xs: '14px', sm: '16px' } }}
          >
            {feedback.content}
          </Typography>

          <Button
            data-testid="wizard-feedback-button"
            variant="contained"
            sx={{ mt: 2, mb: 11 }}
            onClick={feedback.onClick}
          >
            {feedback.buttonText}
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Stack display="flex" alignItems="center" justifyContent="center" {...slotsProps?.container}>
      <Box p={3}>
        <ExitButton
          data-testid="exit-button"
          type="button"
          size="medium"
          color="primary"
          startIcon={<ArrowBackIcon />}
          {...slotsProps?.exitButton}
        >
          {resolvedLocaleText.exitButton}
        </ExitButton>
        <Box sx={{ mt: 2, mb: 3 }} data-testid="wizard-title">
          {title}
        </Box>

        {steps.length > 0 && (
          <MIWizardStepper steps={steps} activeStep={activeStep} localeText={localeText} />
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
          direction={{ xs: 'column-reverse', md: 'row' }}
          justifyContent="space-between"
          {...slotsProps?.actions}
        >
          <PrevButton
            data-testid="prev-button"
            sx={{ mt: { xs: 2, md: 0 } }}
            {...slotsProps?.prevButton}
            onClick={handlePrevStep}
          >
            {resolvedLocaleText.previousButton}
          </PrevButton>

          <NextButton
            data-testid="next-button"
            variant="contained"
            sx={{ ml: { md: 'auto' } }}
            {...slotsProps?.nextButton}
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

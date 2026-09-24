'use client';

import React from 'react';
import { Theme, useMediaQuery } from '@mui/material';
import {
  CheckCircleRounded as CheckCircleRoundedIcon,
  Close as CloseIcon,
  ReportRounded as ReportRoundedIcon,
} from '@mui/icons-material';
import { InputAdornment, TextFieldProps } from '@mui/material';
import { MIIconButton } from '../MIIconButton';
import { StyledTextField } from './StyledTextField';

const validationIcons = {
  success: <CheckCircleRoundedIcon color="success" />,
  error: <ReportRoundedIcon color="error" />,
} as const;

export type MITextFieldProps = Omit<TextFieldProps, 'size'> & {
  success?: boolean;
  onDelete?: () => void;
};

export const MITextField: React.FC<MITextFieldProps> = ({
  InputProps,
  error,
  success,
  fullWidth,
  disabled,
  onDelete,
  ...props
}) => {
  const isSuccess = !error && Boolean(success);
  const validationIcon = error
    ? validationIcons.error
    : isSuccess
      ? validationIcons.success
      : undefined;

  function getDefaultAriaLabels() {
    if (typeof window !== 'undefined') {
      const activeLang = window.document.documentElement.lang.trim().toLowerCase().split('-')[0];

      switch (activeLang) {
        case 'fr':
          return 'Effacer la saisie';
        case 'en':
          return 'Clear input';
        case 'es':
          return 'Borrar entrada';
        case 'de':
          return 'Eingabe löschen';
      }
    }

    return 'Pulisci input';
  }

  const actionIconsAdornment = onDelete ? (
    <InputAdornment position="end">
      <MIIconButton
        aria-label={getDefaultAriaLabels()}
        onClick={onDelete}
        edge="end"
        disabled={disabled}
      >
        <CloseIcon sx={{ color: (theme) => theme.colors.neutral.black }} />
      </MIIconButton>
    </InputAdornment>
  ) : undefined;

  const validationAdornment = validationIcon ? (
    <InputAdornment position="end">{validationIcon}</InputAdornment>
  ) : undefined;

  const endAdornment = InputProps?.endAdornment ?? actionIconsAdornment ?? validationAdornment;

  const isMobileResolution = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const effectiveFullWidth = isMobileResolution ? true : (fullWidth ?? true);

  return (
    <StyledTextField
      {...props}
      size="medium"
      error={error}
      disabled={disabled}
      successState={isSuccess}
      fullWidth={effectiveFullWidth}
      InputProps={{
        ...InputProps,
        endAdornment,
      }}
    />
  );
};

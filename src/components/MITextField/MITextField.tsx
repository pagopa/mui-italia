'use client';

import React from 'react';
import { Theme, useMediaQuery } from '@mui/material';
import {
  CheckCircleRounded as CheckCircleRoundedIcon,
  Close as CloseIcon,
  ReportRounded as ReportRoundedIcon,
} from '@mui/icons-material';
import { IconButton, InputAdornment, TextFieldProps } from '@mui/material';
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
  onDelete,
  ...props
}) => {
  const isSuccess = !error && Boolean(success);
  const validationIcon = error
    ? validationIcons.error
    : isSuccess
      ? validationIcons.success
      : undefined;

  const actionIconsAdornment = onDelete ? (
    <InputAdornment position="end">
      <IconButton aria-label="Pulisci input" onClick={onDelete} edge="end">
        <CloseIcon sx={{ color: (theme) => theme.colors.neutral.black }} />
      </IconButton>
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
      successState={isSuccess}
      fullWidth={effectiveFullWidth}
      InputProps={{
        ...InputProps,
        endAdornment,
      }}
    />
  );
};

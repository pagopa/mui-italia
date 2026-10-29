'use client';

import { FormControlLabel, Stack, Typography } from '@mui/material';
import MuiCheckbox, { type CheckboxProps } from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import { forwardRef, useId } from 'react';

import { Report } from '@mui/icons-material';

type MICheckboxContentProps =
  | { label: string; description?: string; error?: string }
  | { label?: undefined; description?: never; error?: never };

export type MICheckboxProps = CheckboxProps & MICheckboxContentProps;

const StyledCheckbox = styled(MuiCheckbox, {
  shouldForwardProp: (prop) => prop !== 'hasError',
})<{ hasError: boolean }>(({ theme, hasError }) => ({
  width: theme.spacing(3),
  height: theme.spacing(3),
  padding: 0,
  color: theme.colors.neutral.black,
  '&:not(.Mui-checked)': hasError
    ? {
        color: theme.colors.error[600],
      }
    : {},
  '&.Mui-checked': {
    color: theme.colors.blue[500],
  },
  '&.Mui-focusVisible': {
    outline: `2px solid ${theme.colors.blue[500]}`,
    outlineOffset: 2,
  },
}));

const StyledFormControlLabel = styled(FormControlLabel, {
  shouldForwardProp: (prop) => prop !== 'hasLabel',
})<{ hasLabel: boolean }>(({ theme, hasLabel }) => ({
  alignItems: 'flex-start',
  gap: theme.spacing(1),
  margin: 0,
  padding: hasLabel ? theme.spacing(2, 0) : 0,
  '&.Mui-disabled': {
    opacity: 0.5,
  },
}));

export const MICheckbox = forwardRef<HTMLButtonElement, MICheckboxProps>(
  ({ error, inputProps, label, ...props }, ref) => {
    const id = useId();
    const labelId = label ? `${id}-label` : undefined;
    const errorId = error ? `${id}-error` : undefined;
    const describedBy = [inputProps?.['aria-describedby'], errorId].filter(Boolean).join(' ');
    const labelledBy = [inputProps?.['aria-labelledby'], labelId].filter(Boolean).join(' ');

    const checkbox = (
      <StyledCheckbox
        ref={ref}
        hasError={Boolean(error)}
        {...props}
        inputProps={{
          ...inputProps,
          ...(labelledBy ? { 'aria-labelledby': labelledBy } : {}),
          ...(describedBy ? { 'aria-describedby': describedBy } : {}),
          ...(error ? { 'aria-invalid': true } : {}),
        }}
      />
    );

    return (
      <StyledFormControlLabel
        hasLabel={Boolean(label)}
        control={checkbox}
        label={
          label ? (
            <Stack component="div" spacing={0.25}>
              <Typography
                id={labelId}
                component="span"
                sx={{
                  color: (theme) => theme.colors.neutral.black,
                  fontSize: 16,
                  fontWeight: (theme) => theme.typography.fontWeightMedium,
                  marginLeft: (theme) => `${theme.spacing(0.5)}!important`,
                }}
              >
                {label}
              </Typography>
              {error && (
                <Stack
                  id={errorId}
                  direction="row"
                  alignItems="center"
                  gap={0.5}
                  sx={{ color: (theme) => theme.colors.error[600] }}
                >
                  <Report color="inherit" fontSize="small" aria-hidden="true" />
                  <Typography color="inherit" variant="caption">
                    {error}
                  </Typography>
                </Stack>
              )}
            </Stack>
          ) : null
        }
      />
    );
  }
);

MICheckbox.displayName = 'MICheckbox';

export default MICheckbox;

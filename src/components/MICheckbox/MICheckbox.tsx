'use client';

import { Stack, Typography } from '@mui/material';
import { type CheckboxProps } from '@mui/material/Checkbox';
import { forwardRef, useId } from 'react';

import { Report } from '@mui/icons-material';
import { StyledCheckbox, StyledFormControlLabel } from './styles';

type MICheckboxContentProps =
  | { label: string; error?: string }
  | { label?: undefined; error?: never };

export type MICheckboxProps = CheckboxProps & MICheckboxContentProps;

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

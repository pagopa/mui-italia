'use client';

import { Report, RadioButtonUnchecked, CheckCircle } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import { type RadioProps } from '@mui/material/Radio';
import { forwardRef, useId } from 'react';

import { StyledFormControlLabel, StyledRadio } from './styles';

type MIRadioContentProps =
  | { label: string; error?: string }
  | { label?: undefined; error?: never };

export type MIRadioProps = RadioProps & MIRadioContentProps;

export const MIRadio = forwardRef<HTMLButtonElement, MIRadioProps>(
  ({ error, inputProps, label, ...props }, ref) => {
    const id = useId();
    const labelId = label ? `${id}-label` : undefined;
    const errorId = error ? `${id}-error` : undefined;
    const describedBy = [inputProps?.['aria-describedby'], errorId].filter(Boolean).join(' ');
    const labelledBy = [inputProps?.['aria-labelledby'], labelId].filter(Boolean).join(' ');

    const radio = (
      <StyledRadio
        ref={ref}
        hasError={Boolean(error)}
        {...props}
        icon={props.icon ?? <RadioButtonUnchecked />}
        checkedIcon={props.checkedIcon ?? <CheckCircle />}
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
        control={radio}
        label={
          label ? (
            <Stack component="div" spacing={0.25}>
              <Typography
                id={labelId}
                component="span"
                sx={{
                  color: (theme) => theme.colors.neutral.black,
                  fontSize: (theme) => theme.typography.fontSize,
                  fontWeight: (theme) => theme.typography.fontWeightMedium,
                  lineHeight: '22px',
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

MIRadio.displayName = 'MIRadio';

export default MIRadio;

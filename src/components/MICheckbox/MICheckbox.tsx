'use client';

import { Stack, Typography } from '@mui/material';
import { type CheckboxProps } from '@mui/material/Checkbox';
import { forwardRef, useId, type AriaAttributes } from 'react';
import { pxToRem } from '@theme';
import { Report } from '@mui/icons-material';
import { StyledCheckbox, StyledFormControlLabel } from './styles';

type MICheckboxContentProps =
  | { label: string; error?: string }
  | { label?: undefined; error?: never };

export type MICheckboxProps = Omit<
  CheckboxProps,
  | 'color'
  | 'size'
  | 'classes'
  | 'className'
  | 'style'
  | 'focusVisibleClassName'
  | 'indeterminate'
  | 'indeterminateIcon'
> &
  MICheckboxContentProps;

export const MICheckbox = forwardRef<HTMLButtonElement, MICheckboxProps>(
  ({ error, inputProps, label, ...props }, ref) => {
    const ariaProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => key.startsWith('aria-'))
    ) as AriaAttributes;
    const checkboxProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !key.startsWith('aria-'))
    ) as CheckboxProps;
    const id = useId();
    const labelId = label ? `${id}-label` : undefined;
    const errorId = error ? `${id}-error` : undefined;
    const describedBy = [ariaProps['aria-describedby'], inputProps?.['aria-describedby'], errorId]
      .filter(Boolean)
      .join(' ');

    const labelledBy = [ariaProps['aria-labelledby'], inputProps?.['aria-labelledby'], labelId]
      .filter(Boolean)
      .join(' ');

    const checkbox = (
      <StyledCheckbox
        ref={ref}
        hasError={Boolean(error)}
        {...checkboxProps}
        inputProps={{
          ...inputProps,
          ...ariaProps,
          ...(labelledBy ? { 'aria-labelledby': labelledBy } : {}),
          ...(describedBy ? { 'aria-describedby': describedBy } : {}),
          ...(error ? { 'aria-invalid': true } : {}),
        }}
      />
    );

    return (
      <Stack>
        <StyledFormControlLabel
          control={checkbox}
          label={
            label ? (
              <Typography
                id={labelId}
                component="span"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontSize: pxToRem(16),
                  fontWeight: (theme) => theme.typography.fontWeightMedium,
                }}
              >
                {label}
              </Typography>
            ) : null
          }
        />
        {error && (
          <Stack
            id={errorId}
            direction="row"
            alignItems="center"
            gap={0.5}
            sx={{
              color: (theme) => theme.palette.error.main,
              marginLeft: (theme) => theme.spacing(4),
              marginTop: (theme) => theme.spacing(0.25),
            }}
          >
            <Report color="inherit" fontSize="small" aria-hidden="true" />
            <Typography color="inherit" variant="caption">
              {error}
            </Typography>
          </Stack>
        )}
      </Stack>
    );
  }
);

MICheckbox.displayName = 'MICheckbox';

export default MICheckbox;

'use client';

import { Report, RadioButtonUnchecked, CheckCircle } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import { type RadioProps } from '@mui/material/Radio';
import { forwardRef, useId, type AriaAttributes } from 'react';
import { pxToRem } from '@theme';

import { StyledFormControlLabel, StyledRadio } from './styles';

type MIRadioContentProps =
  | { label: string; error?: string }
  | { label?: undefined; error?: never };

export type MIRadioProps = Omit<
  RadioProps,
  | 'color'
  | 'size'
  | 'icon'
  | 'checkedIcon'
  | 'disableRipple'
  | 'classes'
  | 'className'
  | 'style'
  | 'focusVisibleClassName'
> &
  MIRadioContentProps;

export const MIRadio = forwardRef<HTMLButtonElement, MIRadioProps>(
  ({ error, inputProps, label, ...props }, ref) => {
    const ariaProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => key.startsWith('aria-'))
    ) as AriaAttributes;
    const radioProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !key.startsWith('aria-'))
    ) as RadioProps;
    const id = useId();
    const labelId = label ? `${id}-label` : undefined;
    const errorId = error && label ? `${id}-error` : undefined;
    const describedBy = [ariaProps['aria-describedby'], inputProps?.['aria-describedby'], errorId]
      .filter(Boolean)
      .join(' ');
    const labelledBy = [ariaProps['aria-labelledby'], inputProps?.['aria-labelledby'], labelId]
      .filter(Boolean)
      .join(' ');

    const radio = (
      <StyledRadio
        ref={ref}
        hasError={Boolean(error)}
        {...radioProps}
        icon={<RadioButtonUnchecked />}
        checkedIcon={<CheckCircle />}
        inputProps={{
          ...inputProps,
          ...ariaProps,
          ...(labelledBy ? { 'aria-labelledby': labelledBy } : {}),
          ...(describedBy ? { 'aria-describedby': describedBy } : {}),
        }}
      />
    );

    return (
      <Stack sx= {(theme) => ({ paddingY: theme.spacing(1) })}>
        <StyledFormControlLabel
          control={radio}
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
        {error && label && (
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

MIRadio.displayName = 'MIRadio';

export default MIRadio;

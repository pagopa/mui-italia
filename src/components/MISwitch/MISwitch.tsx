import { Report } from '@mui/icons-material';
import { FormControlLabel, Stack, Typography } from '@mui/material';
import MuiSwitch, { type SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { forwardRef, useId } from 'react';

type MISwitchContentProps =
  | { label: string; description?: string; error?: string }
  | { label?: undefined; description?: never; error?: never };

export type MISwitchProps = Omit<
  SwitchProps,
  'color' | 'size' | 'classes' | 'className' | 'style' | 'focusVisibleClassName'
> &
  MISwitchContentProps;

const StyledSwitch = styled(MuiSwitch)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    '& + .MuiSwitch-track': {
      backgroundColor: theme.colors.neutral.grey[700],
    },
    '&.Mui-focusVisible': {
      '& .MuiSwitch-thumb': {
        color: theme.colors.neutral.grey[700],
      },
    },
    '&.Mui-checked': {
      '&.Mui-focusVisible': {
        '& .MuiSwitch-thumb': {
          color: theme.colors.blue[500],
        },
      },
      '& + .MuiSwitch-track': {
        backgroundColor: theme.colors.blue[500],
      },
    },
  },
}));

export const MISwitch = forwardRef<HTMLButtonElement, MISwitchProps>(
  ({ description, error, inputProps, label, ...props }, ref) => {
    const id = useId();
    const labelId = label ? `${id}-label` : undefined;
    const descriptionId = description ? `${id}-description` : undefined;
    const errorId = error ? `${id}-error` : undefined;
    const describedBy = [inputProps?.['aria-describedby'], descriptionId, errorId]
      .filter(Boolean)
      .join(' ');
    const labelledBy = [inputProps?.['aria-labelledby'], labelId].filter(Boolean).join(' ');
    const details = (
      <>
        {label && (
          <Typography
            id={labelId}
            variant="caption-semibold"
            sx={{ color: (theme) => theme.colors.neutral.black }}
          >
            {label}
          </Typography>
        )}
        {description && (
          <Typography
            id={descriptionId}
            variant="body2"
            sx={{ color: (theme) => theme.colors.neutral.grey[700] }}
          >
            {description}
          </Typography>
        )}
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
      </>
    );

    return (
      <>
        <FormControlLabel
          control={
            <StyledSwitch
              ref={ref}
              {...props}
              inputProps={{
                ...inputProps,
                ...(labelledBy ? { 'aria-labelledby': labelledBy } : {}),
                ...(describedBy ? { 'aria-describedby': describedBy } : {}),
                ...(error ? { 'aria-invalid': true } : {}),
              }}
            />
          }
          label={label ? <Stack sx={{ ml: 1 }}>{details}</Stack> : null}
        />
      </>
    );
  }
);

MISwitch.displayName = 'MISwitch';

export default MISwitch;

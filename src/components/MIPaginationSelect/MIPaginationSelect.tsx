'use client';

import { type SxProps, type Theme, Typography, Stack } from '@mui/material';
import { forwardRef, useId } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/system';

import { MISelect, type MISelectProps } from '../MISelect';

export type MIPaginationSelectProps = Pick<
  MISelectProps,
  'options' | 'value' | 'onChange' | 'label' | 'inputProps'
> & {
  label: string;
};

const paginationSelectSx: SxProps<Theme> = (theme) => ({
  '&.MuiOutlinedInput-root': {
    padding: 0,
    backgroundColor: theme.palette.background.paper,
  },
  '&.MuiOutlinedInput-root .MuiSelect-select.MuiSelect-outlined': {
    padding: theme.spacing(1.5, 5.5, 1.5, 1.5),
  },
  '& .MuiSelect-icon': {
    right: theme.spacing(1),
    color: 'inherit',
  },
});

const MIPaginationSelect = forwardRef<HTMLDivElement, MIPaginationSelectProps>(
  ({ label, options, value, onChange, inputProps }, ref) => {
    const generatedId = useId();
    const labelId = `${generatedId}-label`;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const hasInputAriaLabel =
      inputProps?.['aria-label'] !== undefined && inputProps['aria-label'] !== '';
    const resolvedInputProps =
      isMobile && !hasInputAriaLabel ? { ...inputProps, 'aria-label': label } : inputProps;

    return (
      <Stack direction="row" alignItems="center" spacing={0.75}>
        {!isMobile && (
          <Typography component="span" id={labelId} variant="caption">
            {label}
          </Typography>
        )}
        <MISelect
          ref={ref}
          options={options}
          value={value}
          onChange={onChange}
          inputProps={resolvedInputProps}
          label={null}
          multiple={false}
          labelId={hasInputAriaLabel || isMobile ? undefined : labelId}
          sx={paginationSelectSx}
        />
      </Stack>
    );
  }
);

MIPaginationSelect.displayName = 'MIPaginationSelect';

export default MIPaginationSelect;

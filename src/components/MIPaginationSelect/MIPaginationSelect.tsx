'use client';

import { type SxProps, type Theme, Typography, Stack } from '@mui/material';
import { forwardRef, useId } from 'react';

import { MISelect, type MISelectProps } from '../MISelect';

export type MIPaginationSelectProps = Pick<MISelectProps, 'options' | 'value' | 'onChange' | 'label'> & {
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
  ({ label, options, value, onChange }, ref) => {
    const generatedId = useId();
    const labelId = `${generatedId}-label`;

    return (
      <Stack direction="row" alignItems="center" spacing={1.5}>
        <Typography component="span" id={labelId} variant="caption">
          {label}
        </Typography>
        <MISelect
          ref={ref}
          options={options}
          value={value}
          onChange={onChange}
          label={null}
          multiple={false}
          labelId={labelId}
          sx={paginationSelectSx}
        />
      </Stack>
    );
  }
);

MIPaginationSelect.displayName = 'MIPaginationSelect';

export default MIPaginationSelect;

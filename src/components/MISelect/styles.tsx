'use client';

import { InputLabel, Select as MuiSelect, styled } from '@mui/material';

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  '&.MuiInputLabel-root': {
    fontSize: theme.typography.fontSize,
  },
}));

export const StyledSelect = styled(MuiSelect)(({ theme }) => ({
  width: theme.spacing(34),
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& .MuiInputLabel-root.Mui-focused.Mui-error': {
    color: theme.palette.error.main,
  },
  '&.MuiSelect-outlined': {
    background: theme.palette.warning.main,
    padding: theme.spacing(0),
  },
  '&.MuiOutlinedInput-root': {
    borderRadius: theme.shape.radius[8],
    padding: theme.spacing(1.5),
  },
  '&.Mui-disabled': {
    backgroundColor: theme.colors.neutral.grey[50],
  },
  '& .MuiSelect-select': {
    padding: theme.spacing(0),
  },
  '& .MuiOutlinedInput-notchedOutline > legend > span': {
    paddingRight: 0,
  },
  '&.Mui-error .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.error.main,
  },
  '&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.error.main,
  },
}));

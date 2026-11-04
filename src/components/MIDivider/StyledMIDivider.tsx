import { Divider as MUIDivider, DividerProps, styled } from '@mui/material';

export const StyledMIDivider = styled(MUIDivider)<DividerProps>(({ theme }) => ({
  margin: 0,
  borderColor: theme.colors.neutral.grey[100],
  '&.MuiDivider-root::before': {
    borderTopWidth: '1px',
  },
  '& .MuiDivider-wrapper': {
    color: theme.colors.neutral.grey[700],
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '1.25rem',
  },
}));
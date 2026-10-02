import { Divider as MUIDivider, styled } from '@mui/material';

export const StyledMenuDivider = styled(MUIDivider)(({ theme }) => ({
  margin: 0,
  borderColor: theme.colors.neutral.grey[100],
}));

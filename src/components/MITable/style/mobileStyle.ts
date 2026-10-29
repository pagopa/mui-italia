import { styled, Stack, Typography } from '@mui/material';

type StyledMobileCellContentProps = {
  ownerState: {
    alignItems: 'flex-start' | 'flex-end';
  };
};

export const StyledMobileRows = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
}));

export const StyledMobileRow = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  margin: 0,
}));

export const StyledMobileCell = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
}));

export const StyledMobileCellContent = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'ownerState',
})<StyledMobileCellContentProps>(({ ownerState }) => ({
  width: '100%',
  alignItems: ownerState.alignItems,
  margin: 0,
}));

export const StyledMobileActions = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
}));

export const StyledMobileHeaderText = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular,
}));

export const StyledMobileCellText = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
}));

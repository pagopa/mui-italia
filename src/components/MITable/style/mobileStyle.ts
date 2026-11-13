import { styled, Stack, Typography } from '@mui/material';

type StyledMobileCellContentProps = {
  ownerState: {
    alignItems: 'flex-start' | 'flex-end';
  };
};

/** @internal */
export const StyledMobileRows = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
}));

/** @internal */
export const StyledMobileRow = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  margin: 0,
}));

/** @internal */
export const StyledMobileCell = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
}));

/** @internal */
export const StyledMobileCellContent = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'ownerState',
})<StyledMobileCellContentProps>(({ ownerState }) => ({
  width: '100%',
  alignItems: ownerState.alignItems,
  margin: 0,
}));

/** @internal */
export const StyledMobileActions = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
}));

/** @internal */
export const StyledMobileHeaderText = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular,
}));

/** @internal */
export const StyledMobileCellText = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
}));

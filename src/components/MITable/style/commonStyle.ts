import { styled, Stack, Box, TableBody, TableCell, TableHead, TableSortLabel } from '@mui/material';

type StyledCellWithMinWidthProps = {
  ownerState: {
    minWidth?: number | string;
  };
};

type StyledBodyCellProps = {
  ownerState: {
    minWidth?: number | string;
    isLastRow: boolean;
    isActionCell?: boolean;
  };
};

export const StyledRoot = styled(Box)(({ theme }) => ({
  backgroundColor: theme.colors.neutral.grey[100],
  borderRadius: theme.shape.radius[8],
  padding: theme.spacing(1),
  width: '100%',
}));

export const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.colors.neutral.grey[100],
}));

export const StyledHeaderCell = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== 'ownerState',
})<StyledCellWithMinWidthProps>(({ theme, ownerState }) => ({
  padding: theme.spacing(1.5, 2),
  borderBottom: 'none',
  minWidth: ownerState.minWidth,
}));

export const StyledSortLabel = styled(TableSortLabel)({
  '& .MuiTableSortLabel-icon': {
    opacity: 1,
  },
  '&.Mui-active .MuiTableSortLabel-icon': {
    color: 'inherit',
  },
});

export const StyledBody = styled(TableBody)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
}));

export const StyledBodyCell = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== 'ownerState',
})<StyledBodyCellProps>(({ theme, ownerState }) => ({
  padding: theme.spacing(1.5, 2),
  minWidth: ownerState.minWidth,
  borderBottom: ownerState.isLastRow ? 'none' : `1px solid ${theme.colors.neutral.grey[100]}`,
  ...(ownerState.isActionCell && {
    textAlign: 'right',
    whiteSpace: 'nowrap',
  }),
}));

export const StyledActionStack = styled(Stack)({
  justifyContent: 'flex-end',
  alignItems: 'center',
});

export const StyledPaginationWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  '& .mipagination-items-per-page-select': {
    backgroundColor: theme.palette.common.white,
  },
}));

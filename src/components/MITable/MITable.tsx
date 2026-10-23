'use client';

import { ArrowDownward as ArrowDownwardIcon } from '@mui/icons-material';
import {
  Box,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { visuallyHidden } from '@mui/utils';
import { Children, isValidElement } from 'react';
import type { ReactElement, ReactNode } from 'react';

import { MIPagination } from '@components/MIPagination';

import type { MITableProps, MITableRowProps } from './types';

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

type StyledMobileCellContentProps = {
  ownerState: {
    alignItems: 'flex-start' | 'flex-end';
  };
};

const StyledRoot = styled(Box)(({ theme }) => ({
  backgroundColor: theme.colors.neutral.grey[100],
  borderRadius: theme.shape.radius[8],
  padding: theme.spacing(1),
  width: '100%',
}));

const StyledMobileRows = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
}));

const StyledMobileRow = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  margin: 0,
}));

const StyledMobileCell = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
}));

const StyledMobileCellContent = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'ownerState',
})<StyledMobileCellContentProps>(({ ownerState }) => ({
  width: '100%',
  alignItems: ownerState.alignItems,
  margin: 0,
}));

const StyledMobileActions = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.colors.neutral.grey[100],
}));

const StyledHeaderCell = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== 'ownerState',
})<StyledCellWithMinWidthProps>(({ theme, ownerState }) => ({
  padding: theme.spacing(1.5, 2),
  borderBottom: 'none',
  minWidth: ownerState.minWidth,
}));

const StyledSortLabel = styled(TableSortLabel)({
  '& .MuiTableSortLabel-icon': {
    opacity: 1,
  },
  '&.Mui-active .MuiTableSortLabel-icon': {
    color: 'inherit',
  },
});

const StyledBody = styled(TableBody)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
}));

const StyledBodyCell = styled(TableCell, {
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

const StyledActionStack = styled(Stack)({
  justifyContent: 'flex-end',
  alignItems: 'center',
});

const StyledPaginationWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  '& [data-testid="items-per-page-select"]': {
    backgroundColor: theme.palette.common.white,
  },
}));

export const MITableRow = <RowData,>(props: MITableRowProps<RowData>) => {
  void props;
  return null;
};

MITableRow.displayName = 'MITableRow';

const isMITableRowElement = <RowData,>(
  child: ReactNode
): child is ReactElement<MITableRowProps<RowData>> =>
  isValidElement<MITableRowProps<RowData>>(child) && child.type === MITableRow;

const MITable = <RowData,>({
  columns,
  children,
  getRowId,
  pagination,
  sx,
  containerProps,
  desktopTableProps,
  mobileTableProps,
}: MITableProps<RowData>) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const contentColumns = columns.filter((column) => !column.isAction);
  const actionColumns = columns.filter((column) => column.isAction);
  const hasActionColumns = actionColumns.length > 0;

  const paginationItemsPerPageOptions = pagination?.itemsPerPageOptions
    ? {
        ...pagination.itemsPerPageOptions,
        inputProps: {
          ...pagination.itemsPerPageOptions.inputProps,
        },
      }
    : undefined;
  const hasMobileAccessibleName =
    mobileTableProps?.['aria-label'] !== undefined ||
    mobileTableProps?.['aria-labelledby'] !== undefined;
  const mobileRowsRole = mobileTableProps?.role ?? (hasMobileAccessibleName ? 'group' : undefined);

  const rows = Children.toArray(children).flatMap((child, index) => {
    if (!isMITableRowElement<RowData>(child)) {
      return [];
    }

    const row = child.props.row;
    const rowId = child.props.rowId ?? getRowId?.(row, index) ?? index;

    return [{ row, rowId }];
  });

  return (
    <StyledRoot sx={sx} {...containerProps}>
      <Box>
        {isMobile ? (
          <StyledMobileRows divider={<Divider />} {...mobileTableProps} role={mobileRowsRole}>
            {rows.map(({ row, rowId }) => (
              <Box key={rowId} component="dl" sx={{ margin: 0 }}>
                <StyledMobileRow spacing={1}>
                  {contentColumns.map((column) => {
                    const alignItems = column.align === 'right' ? 'flex-end' : 'flex-start';
                    const mobileTermId = `mi-table-${String(rowId)}-${column.id}-term`;

                    return (
                      <StyledMobileCell
                        key={column.id}
                        direction="row"
                        spacing={1}
                        alignItems="center"
                      >
                        <Box component="dt" id={mobileTermId} sx={visuallyHidden}>
                          {column.header}
                        </Box>
                        <Box
                          component="dd"
                          aria-labelledby={mobileTermId}
                          sx={{
                            margin: 0,
                            width: '100%',
                          }}
                        >
                          <StyledMobileCellContent spacing={0.25} ownerState={{ alignItems }}>
                            <Typography variant="body2" component="div">
                              {column.renderCell(row)}
                            </Typography>
                          </StyledMobileCellContent>
                        </Box>
                      </StyledMobileCell>
                    );
                  })}

                  {hasActionColumns && (
                    <StyledMobileActions
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center"
                      spacing={1}
                    >
                      {actionColumns.map((column) => (
                        <Box key={column.id}>{column.renderCell(row)}</Box>
                      ))}
                    </StyledMobileActions>
                  )}
                </StyledMobileRow>
              </Box>
            ))}
          </StyledMobileRows>
        ) : (
          <TableContainer>
            <Table size="small" {...desktopTableProps}>
              <StyledTableHead>
                <TableRow>
                  {contentColumns.map((column) => {
                    const isSortable = Boolean(column.sortable);
                    const direction = column.sortDirection ?? 'asc';

                    return (
                      <StyledHeaderCell
                        key={column.id}
                        align={column.align}
                        ownerState={{ minWidth: column.minWidth }}
                        sortDirection={isSortable ? (column.sortDirection ?? false) : false}
                      >
                        {isSortable ? (
                          <StyledSortLabel
                            active
                            direction={direction}
                            onClick={column.onSort}
                            IconComponent={ArrowDownwardIcon}
                          >
                            <Typography variant="body2" fontWeight={600}>
                              {column.header}
                            </Typography>
                          </StyledSortLabel>
                        ) : (
                          <Typography variant="body2" fontWeight={600}>
                            {column.header}
                          </Typography>
                        )}
                      </StyledHeaderCell>
                    );
                  })}

                  {hasActionColumns && <StyledHeaderCell ownerState={{ minWidth: undefined }} />}
                </TableRow>
              </StyledTableHead>

              <StyledBody>
                {rows.map(({ row, rowId }, index) => {
                  const isLastRow = index === rows.length - 1;

                  return (
                    <TableRow key={rowId}>
                      {contentColumns.map((column) => (
                        <StyledBodyCell
                          key={column.id}
                          align={column.align}
                          ownerState={{ minWidth: column.minWidth, isLastRow }}
                        >
                          <Typography variant="body2">{column.renderCell(row)}</Typography>
                        </StyledBodyCell>
                      ))}

                      {hasActionColumns && (
                        <StyledBodyCell
                          ownerState={{
                            minWidth: undefined,
                            isLastRow,
                            isActionCell: true,
                          }}
                        >
                          <StyledActionStack direction="row" spacing={1}>
                            {actionColumns.map((column) => (
                              <Box key={column.id}>{column.renderCell(row)}</Box>
                            ))}
                          </StyledActionStack>
                        </StyledBodyCell>
                      )}
                    </TableRow>
                  );
                })}
              </StyledBody>
            </Table>
          </TableContainer>
        )}

        {pagination && (
          <StyledPaginationWrapper>
            <MIPagination {...pagination} itemsPerPageOptions={paginationItemsPerPageOptions} />
          </StyledPaginationWrapper>
        )}
      </Box>
    </StyledRoot>
  );
};

MITable.displayName = 'MITable';

export default MITable;

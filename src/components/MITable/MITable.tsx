'use client';

import { ArrowDownward as ArrowDownwardIcon } from '@mui/icons-material';
import { Box, Table, TableContainer, TableRow, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { MIDivider } from '@components/MIDivider';
import { MIPagination } from '@components/MIPagination';

import type { MITableProps } from './types';
import MITableSkeleton from './MITableSkeleton';
import {
  StyledRoot,
  StyledTableHead,
  StyledHeaderCell,
  StyledSortLabel,
  StyledBody,
  StyledBodyCell,
  StyledActionStack,
  StyledPaginationWrapper,
} from './style/commonStyle';
import {
  StyledMobileRows,
  StyledMobileRow,
  StyledMobileCell,
  StyledMobileHeaderText,
  StyledMobileCellContent,
  StyledMobileCellText,
  StyledMobileActions,
} from './style/mobileStyle';

const MITable = <RowData,>({
  columns,
  rows,
  isLoading = false,
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

  const tableRows = isLoading
    ? []
    : rows.map((row, index) => ({ row, rowId: getRowId?.(row, index) ?? index }));

  return (
    <StyledRoot sx={sx} {...containerProps}>
      <Box>
        {isMobile ? (
          <StyledMobileRows
            divider={<MIDivider />}
            {...mobileTableProps}
            role={mobileRowsRole}
            aria-busy={isLoading || mobileTableProps?.['aria-busy']}
          >
            {isLoading && <MITableSkeleton columns={columns} isMobile />}
            {tableRows.map(({ row, rowId }) => (
              <Box key={rowId} component="dl" sx={{ margin: 0 }}>
                <StyledMobileRow spacing={1}>
                  {contentColumns.map((column) => {
                    const alignItems = column.align === 'right' ? 'flex-end' : 'flex-start';
                    const mobileTermId = `mi-table-${String(rowId)}-${column.id}-term`;

                    return (
                      <StyledMobileCell
                        key={column.id}
                        direction="column"
                        spacing={1}
                        alignItems={alignItems}
                      >
                        <Box component="dt" id={mobileTermId}>
                          <StyledMobileHeaderText variant="body2">
                            {column.header}
                          </StyledMobileHeaderText>
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
                            <StyledMobileCellText variant="body2">
                              {column.renderCell(row)}
                            </StyledMobileCellText>
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
            <Table
              size="small"
              {...desktopTableProps}
              aria-busy={isLoading || desktopTableProps?.['aria-busy']}
            >
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
                {isLoading && <MITableSkeleton columns={columns} isMobile={false} />}
                {tableRows.map(({ row, rowId }, index) => {
                  const isLastRow = index === tableRows.length - 1;

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

        {pagination && !isLoading && (
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

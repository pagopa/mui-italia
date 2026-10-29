'use client';

import { Fragment } from 'react';
import { Box, Skeleton, TableRow, Typography } from '@mui/material';
import { MIDivider } from '@components/MIDivider';

import type { MITableProps } from './types';
import { StyledActionStack, StyledBodyCell } from './style/commonStyle';
import {
  StyledMobileRow,
  StyledMobileCell,
  StyledMobileHeaderText,
  StyledMobileCellText,
  StyledMobileActions,
} from './style/mobileStyle';

type MITableSkeletonProps<RowData> = Pick<MITableProps<RowData>, 'columns'> & {
  isMobile: boolean;
};

const LOADING_ROW_COUNT = 10;

const MITableSkeleton = <RowData,>({ columns, isMobile }: MITableSkeletonProps<RowData>) => {
  const contentColumns = columns.filter((column) => !column.isAction);
  const actionColumns = columns.filter((column) => column.isAction);

  return (
    <>
      {Array.from({ length: LOADING_ROW_COUNT }, (_, index) =>
        isMobile ? (
          <Fragment key={index}>
            {index > 0 && <MIDivider aria-hidden="true" />}
            <Box component="dl" aria-hidden="true" sx={{ margin: 0 }}>
              <StyledMobileRow spacing={1}>
                {contentColumns.map((column) => (
                  <StyledMobileCell
                    key={column.id}
                    direction="column"
                    spacing={1}
                    alignItems={column.align === 'right' ? 'flex-end' : 'flex-start'}
                  >
                    <Box component="dt">
                      <StyledMobileHeaderText variant="body2">
                        {column.header}
                      </StyledMobileHeaderText>
                    </Box>
                    <Box component="dd" sx={{ margin: 0 }}>
                      <StyledMobileCellText variant="body2">
                        <Skeleton width="12ch" />
                      </StyledMobileCellText>
                    </Box>
                  </StyledMobileCell>
                ))}
                {actionColumns.length > 0 && (
                  <StyledMobileActions direction="row" justifyContent="flex-end" spacing={1}>
                    {actionColumns.map((column) => (
                      <Skeleton key={column.id} width="6ch" />
                    ))}
                  </StyledMobileActions>
                )}
              </StyledMobileRow>
            </Box>
          </Fragment>
        ) : (
          <TableRow key={index} aria-hidden="true">
            {contentColumns.map((column) => (
              <StyledBodyCell
                key={column.id}
                align={column.align}
                ownerState={{
                  minWidth: column.minWidth,
                  isLastRow: index === LOADING_ROW_COUNT - 1,
                }}
              >
                <Typography variant="body2">
                  <Skeleton />
                </Typography>
              </StyledBodyCell>
            ))}
            {actionColumns.length > 0 && (
              <StyledBodyCell
                ownerState={{
                  isLastRow: index === LOADING_ROW_COUNT - 1,
                  isActionCell: true,
                }}
              >
                <StyledActionStack direction="row" spacing={1}>
                  {actionColumns.map((column) => (
                    <Skeleton key={column.id} width="6ch" />
                  ))}
                </StyledActionStack>
              </StyledBodyCell>
            )}
          </TableRow>
        )
      )}
    </>
  );
};

export default MITableSkeleton;

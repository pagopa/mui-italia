'use client';

import MuiPaginationItem from '@mui/material/PaginationItem';
import MuiPagination, { PaginationProps } from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/system';
import { InputBaseComponentProps, MenuItem, Stack } from '@mui/material';
import { MISelect } from '@components/MISelect';
import { useEffect } from 'react';

export type MIPaginationProps = Omit<
  PaginationProps,
  | 'color'
  | 'shape'
  | 'size'
  | 'sx'
  | 'variant'
  | 'classes'
  | 'renderItem'
  | 'siblingCount'
  | 'boundaryCount'
  | 'hideNextButton'
  | 'hidePrevButton'
  | 'showFirstButton'
  | 'showLastButton'
  | 'rowPerPageOptions'
> & {
  rowPerPageOptions?: {
    options?: Array<number>;
    onLimitChange: (limit: number) => void;
    limit: number;
    inputProps?: InputBaseComponentProps;
  };
};

const StyledPaginationItem = styled(MuiPaginationItem)(({ theme }) => ({
  background: 'transparent',
  color: theme.colors.neutral.black,
  padding: theme.spacing(1.5),
  height: theme.spacing(5.75),
  minWidth: theme.spacing(5),
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '22px',
  borderRadius: theme.shape.radius[8],
  '&:hover': {
    background: 'transparent',
    textDecoration: 'underline',
    color: theme.colors.blue[500],
  },
  '&.Mui-focusVisible': {
    background: 'transparent',
    outlineOffset: 0,
    outline: `2px solid ${theme.colors.blue[400]}`,
  },
  '&.Mui-selected': {
    background: theme.colors.blue[500],
    color: theme.colors.neutral.white,
    '&:hover': {
      textDecoration: 'none',
      color: theme.colors.neutral.white,
      background: theme.colors.blue[500],
    },
    '&.Mui-disabled': {
      color: theme.colors.neutral.white,
      background: theme.colors.neutral.grey[100],
    },
    '&.Mui-focusVisible': {
      background: theme.colors.blue[500],
      outlineOffset: 0,
      outline: `2px solid ${theme.colors.blue[400]}`,
    },
  },
  '&.MuiPaginationItem-previousNext': {
    width: '40px',
    height: '40px',
    border: `2px solid ${theme.colors.neutral.grey[100]}`,
    '&.Mui-disabled': {
      display: 'none',
    },
  },
  '& .MuiPaginationItem-icon': {
    color: theme.colors.blue[500],
  },
}));

const StyledPagination = styled(MuiPagination)({});

const DEFAULT_OPTIONS = [10, 24, 36];

export const MIPagination: React.FC<MIPaginationProps> = ({ rowPerPageOptions, ...rest }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const pageOptionsValues = rowPerPageOptions?.options || DEFAULT_OPTIONS;
  const limit = rowPerPageOptions?.limit || pageOptionsValues[0];

  useEffect(() => {
    if (rowPerPageOptions) {
      if (!pageOptionsValues.includes(limit)) {
        // If Limit is wrong and not included within pageOptsionValues, will be selected first element of select
        rowPerPageOptions.onLimitChange(pageOptionsValues[0]);
      }
    }
  }, [rowPerPageOptions, pageOptionsValues, limit]);

  return (
    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} width="100%">
      {rowPerPageOptions && (
        <MISelect
          labelId="rows-per-page-select"
          id="rows-per-page-select"
          data-testid="rows-per-page-select"
          inputProps={{
            'aria-label': 'Select number of rows per page',
            ...rowPerPageOptions.inputProps,
          }}
          value={limit}
          onChange={(event) => rowPerPageOptions.onLimitChange(event.target.value as number)}
        >
          {pageOptionsValues.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </MISelect>
      )}
      <StyledPagination
        siblingCount={0}
        renderItem={(item) => {
          if (isMobile) {
            const isNavButton = item.type === 'previous' || item.type === 'next';
            if (!isNavButton && !item.selected) {
              return null;
            }
          }
          return <StyledPaginationItem {...item} />;
        }}
        {...rest}
      />
    </Stack>
  );
};

export default MIPagination;

import type { BoxProps, TableCellProps } from '@mui/material';
import type { HTMLAttributes, ReactNode, TableHTMLAttributes } from 'react';

import type { MIPaginationProps } from '@components/MIPagination';

type DataAttributes = {
  [key: `data-${string}`]: string | number | boolean | undefined;
};

export type MITableColumn<RowData> = {
  id: string;
  header: string;
  renderCell: (row: RowData) => ReactNode;
  isAction?: boolean;
  align?: TableCellProps['align'];
  minWidth?: number | string;
  sortable?: boolean;
  sortDirection?: 'asc' | 'desc';
  onSort?: () => void;
};

export type MITableProps<RowData> = Pick<BoxProps, 'sx'> & {
  columns: Array<MITableColumn<RowData>>;
  rows: Array<RowData>;
  isLoading?: boolean;
  getRowId?: (row: RowData, index: number) => string | number;
  pagination?: MIPaginationProps;
  containerProps?: Omit<HTMLAttributes<HTMLDivElement>, 'children'> & DataAttributes;
  desktopTableProps?: Omit<TableHTMLAttributes<HTMLTableElement>, 'children'> & DataAttributes;
  mobileTableProps?: Omit<HTMLAttributes<HTMLDivElement>, 'children'> & DataAttributes;
};

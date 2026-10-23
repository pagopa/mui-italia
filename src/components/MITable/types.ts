import type { BoxProps, TableCellProps } from '@mui/material';
import type {
  HTMLAttributes,
  ReactElement,
  ReactNode,
  TableHTMLAttributes,
} from 'react';

import type { MIPaginationProps } from '@components/MIPagination';

export type MITableColumn<RowData> = {
  id: string;
  header: ReactNode;
  renderCell: (row: RowData) => ReactNode;
  isAction?: boolean;
  align?: TableCellProps['align'];
  minWidth?: number | string;
  sortable?: boolean;
  sortDirection?: 'asc' | 'desc';
  onSort?: () => void;
};

export type MITableRowProps<RowData> = {
  row: RowData;
  rowId?: string | number;
};

export type MITableProps<RowData> = Pick<BoxProps, 'sx'> & {
  columns: Array<MITableColumn<RowData>>;
  children?: ReactElement<MITableRowProps<RowData>> | Array<ReactElement<MITableRowProps<RowData>>>;
  getRowId?: (row: RowData, index: number) => string | number;
  pagination?: MIPaginationProps;
  containerProps?: Omit<HTMLAttributes<HTMLDivElement>, 'children'>;
  desktopTableProps?: Omit<TableHTMLAttributes<HTMLTableElement>, 'children'>;
  mobileTableProps?: Omit<HTMLAttributes<HTMLDivElement>, 'children'>;
};

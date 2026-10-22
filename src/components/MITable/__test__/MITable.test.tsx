import { render, screen } from '../../../test-utils';
import { createMatchMedia } from '../../../test-utils';

import MITable, { MITableRow } from '../MITable';
import type { MITableColumn } from '../types';

type Row = {
  id: string;
  category: string;
  date: string;
};

const columns: Array<MITableColumn<Row>> = [
  {
    id: 'id',
    header: 'ID',
    sortable: true,
    renderCell: (row) => row.id,
  },
  {
    id: 'category',
    header: 'Category',
    renderCell: (row) => row.category,
  },
  {
    id: 'date',
    header: 'Date',
    renderCell: (row) => row.date,
  },
];

const rows: Array<Row> = [
  { id: '0123456', category: 'Label', date: '31/12/2028' },
  { id: '0123457', category: 'Label', date: '01/01/2029' },
];

const renderRows = (tableRows: Array<Row>) =>
  tableRows.map((row) => <MITableRow key={row.id} row={row} />);

describe('MITable', () => {
  afterEach(() => {
    Reflect.deleteProperty(window, 'matchMedia');
  });

  it('renders desktop table layout', () => {
    render(<MITable columns={columns}>{renderRows(rows)}</MITable>);

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('0123456')).toBeInTheDocument();
    expect(screen.getByText('01/01/2029')).toBeInTheDocument();
  });

  it('renders mobile stacked layout below sm breakpoint', () => {
    window.matchMedia = createMatchMedia(400);
    render(<MITable columns={columns}>{renderRows(rows)}</MITable>);

    expect(screen.queryByRole('table')).not.toBeInTheDocument();
    expect(screen.getAllByText('Label')).toHaveLength(rows.length);
    expect(screen.getByText('0123456')).toBeInTheDocument();
  });

  it('does not render any row content when rows are empty', () => {
    render(<MITable columns={columns}>{renderRows([])}</MITable>);

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.queryByText('0123456')).not.toBeInTheDocument();
    expect(screen.queryByText('Qui vedrai le tue notifiche')).not.toBeInTheDocument();
  });

  it('renders pagination with rows per page selector when provided', () => {
    const onPageChange = vi.fn();
    const onLimitChange = vi.fn();
    render(
      <MITable
        columns={columns}
        pagination={{
          count: 10,
          page: 1,
          onPageChange,
          itemsPerPageOptions: {
            options: [2080, 500],
            limit: 2080,
            onLimitChange,
          },
        }}
      >
        {renderRows(rows)}
      </MITable>
    );

    expect(screen.getByTestId('items-per-page-select')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to next page')).toBeInTheDocument();
  });
});

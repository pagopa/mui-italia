import { render, screen, within } from '../../../test-utils';
import { createMatchMedia } from '../../../test-utils';

import MITable from '../MITable';
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

describe('MITable', () => {
  afterEach(() => {
    Reflect.deleteProperty(window, 'matchMedia');
  });

  it('renders desktop table layout', () => {
    render(<MITable columns={columns} rows={rows} />);

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('0123456')).toBeInTheDocument();
    expect(screen.getByText('01/01/2029')).toBeInTheDocument();
  });

  it('keeps sortable icon active and announces direction only when explicit sortDirection is provided', () => {
    render(<MITable columns={columns} rows={rows} />);

    const idHeader = screen.getByRole('columnheader', { name: 'ID' });
    const idSortButton = within(idHeader).getByRole('button', { name: 'ID' });

    expect(idSortButton).toHaveClass('Mui-active');
    expect(idHeader).not.toHaveAttribute('aria-sort');
  });

  it('renders mobile stacked layout below sm breakpoint', () => {
    window.matchMedia = createMatchMedia(400);
    const { container } = render(<MITable columns={columns} rows={rows} />);

    expect(screen.queryByRole('table')).not.toBeInTheDocument();
    const mobileRows = container.querySelectorAll('dl');
    expect(mobileRows).toHaveLength(rows.length);

    const firstRow = mobileRows[0];
    expect(firstRow.querySelectorAll('dt')).toHaveLength(columns.length);
    expect(firstRow.querySelectorAll('dd')).toHaveLength(columns.length);
    expect(within(firstRow).getByText('ID')).toBeInTheDocument();
    expect(within(firstRow).getByText('Category')).toBeInTheDocument();
    expect(within(firstRow).getByText('Date')).toBeInTheDocument();

    expect(screen.getAllByText('Label')).toHaveLength(rows.length);
    expect(screen.getByText('0123456')).toBeInTheDocument();
  });

  it('does not render any row content when rows are empty', () => {
    render(<MITable columns={columns} rows={[]} />);

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.queryByText('0123456')).not.toBeInTheDocument();
    expect(screen.queryByText('Qui vedrai le tue notifiche')).not.toBeInTheDocument();
  });

  it('passes each row and its index to getRowId', () => {
    const getRowId = vi.fn((row: Row) => row.id);
    render(<MITable columns={columns} rows={rows} getRowId={getRowId} />);

    expect(getRowId).toHaveBeenCalledWith(rows[0], 0);
    expect(getRowId).toHaveBeenCalledWith(rows[1], 1);
  });

  it('uses getRowId to build the mobile term ids', () => {
    window.matchMedia = createMatchMedia(400);
    const { container } = render(
      <MITable columns={columns} rows={rows} getRowId={(row) => row.id} />
    );

    expect(container.querySelector('#mi-table-0123456-id-term')).toBeInTheDocument();
    expect(container.querySelector('#mi-table-0123457-id-term')).toBeInTheDocument();
  });

  it('falls back to the row index when getRowId is not provided', () => {
    window.matchMedia = createMatchMedia(400);
    const { container } = render(<MITable columns={columns} rows={rows} />);

    expect(container.querySelector('#mi-table-0-id-term')).toBeInTheDocument();
    expect(container.querySelector('#mi-table-1-id-term')).toBeInTheDocument();
  });

  it('renders pagination with rows per page selector when provided', () => {
    const onPageChange = vi.fn();
    const onLimitChange = vi.fn();
    render(
      <MITable
        columns={columns}
        rows={rows}
        pagination={{
          count: 10,
          page: 1,
          onChange: onPageChange,
          itemsPerPageOptions: {
            options: [2080, 500],
            limit: 2080,
            onLimitChange,
          },
        }}
      />
    );

    expect(screen.getByTestId('items-per-page-select')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to next page')).toBeInTheDocument();
  });

  it('forwards container attributes separately from desktop table labeling attributes', () => {
    const { container } = render(
      <>
        <span id="desktop-table-label">Transactions desktop table</span>
        <MITable
          columns={columns}
          rows={rows}
          containerProps={{
            id: 'table-container',
            className: 'table-wrapper',
            'aria-labelledby': 'container-label',
          }}
          desktopTableProps={{
            id: 'desktop-table',
            className: 'transactions-table',
            'aria-labelledby': 'desktop-table-label',
          }}
        />
      </>
    );

    const rootContainer = container.querySelector('#table-container');
    expect(rootContainer).toHaveClass('table-wrapper');
    expect(rootContainer).toHaveAttribute('aria-labelledby', 'container-label');

    const desktopTable = screen.getByRole('table', { name: 'Transactions desktop table' });
    expect(desktopTable).toHaveAttribute('id', 'desktop-table');
    expect(desktopTable).toHaveClass('transactions-table');
  });

  it('supports labeling the mobile table equivalent independently from the outer container', () => {
    window.matchMedia = createMatchMedia(400);

    const { container } = render(
      <>
        <span id="mobile-table-label">Transactions mobile table</span>
        <MITable
          columns={columns}
          rows={rows}
          containerProps={{ id: 'mobile-table-container' }}
          mobileTableProps={{
            id: 'mobile-table',
            className: 'mobile-table-layout',
            'aria-labelledby': 'mobile-table-label',
          }}
        />
      </>
    );

    const rootContainer = container.querySelector('#mobile-table-container');
    expect(rootContainer).toBeInTheDocument();

    const mobileEquivalent = screen.getByRole('group', { name: 'Transactions mobile table' });
    expect(mobileEquivalent).toHaveAttribute('id', 'mobile-table');
    expect(mobileEquivalent).toHaveClass('mobile-table-layout');
  });
});

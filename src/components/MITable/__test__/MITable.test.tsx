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

  it('uses a block-compatible wrapper for desktop cell content', () => {
    window.matchMedia = createMatchMedia(1280);
    const blockContentColumns: Array<MITableColumn<Row>> = [
      {
        id: 'id',
        header: 'ID',
        renderCell: (row) => <div data-testid="block-content">{row.id}</div>,
      },
    ];

    render(<MITable columns={blockContentColumns} rows={rows} />);

    const blockContents = screen.getAllByTestId('block-content');
    expect(blockContents).toHaveLength(rows.length);
    blockContents.forEach((blockContent) => {
      expect(blockContent.closest('td')).toBeInTheDocument();
      expect(blockContent.closest('p')).toBeNull();
    });
  });

  it.each([
    { width: 400, withActions: false },
    { width: 400, withActions: true },
    { width: 1280, withActions: false },
    { width: 1280, withActions: true },
  ])('renders 10 skeleton rows at $width with actions=$withActions', ({ width, withActions }) => {
    window.matchMedia = createMatchMedia(width);
    const renderCell = vi.fn((row: Row) => row.id);
    const renderAction = vi.fn((row: Row) => <button>Open {row.id}</button>);
    const getRowId = vi.fn((row: Row) => row.id);
    const loadingColumns: Array<MITableColumn<Row>> = [
      { id: 'id', header: 'Identifier', renderCell },
      ...(withActions
        ? [
            { id: 'action', header: '', isAction: true, renderCell: renderAction },
            { id: 'other-action', header: '', isAction: true, renderCell: renderAction },
          ]
        : []),
    ];
    const props = {
      columns: loadingColumns,
      rows,
      getRowId,
      desktopTableProps: { 'aria-label': 'Transactions', 'aria-busy': false as const },
      mobileTableProps: { 'aria-label': 'Transactions', 'aria-busy': false as const },
      pagination: { count: 5, page: 1, onChange: vi.fn() },
    };
    const { container, rerender } = render(<MITable {...props} isLoading />);
    const role = width < 600 ? 'group' : 'table';
    const loadingTable = screen.getByRole(role, { name: 'Transactions' });
    const loadingRows = loadingTable.querySelectorAll(width < 600 ? 'dl' : 'tbody tr');

    expect(loadingTable).toHaveAttribute('aria-busy', 'true');
    expect(loadingRows).toHaveLength(10);
    loadingRows.forEach((row) => {
      expect(row).toHaveAttribute('aria-hidden', 'true');
      if (width < 600) {
        expect(row.parentElement).toHaveAttribute('aria-hidden', 'true');
        expect(row.parentElement?.querySelectorAll('.MuiSkeleton-root')).toHaveLength(
          loadingColumns.length
        );
        expect(row.children).toHaveLength(loadingColumns.length - (withActions ? 2 : 0));
      } else {
        expect(row.querySelectorAll('.MuiSkeleton-root')).toHaveLength(loadingColumns.length);
      }
    });
    if (width < 600) {
      expect(loadingTable.querySelectorAll('hr')).toHaveLength(9);
    } else {
      expect(screen.getByRole('columnheader', { name: 'Identifier' })).toBeInTheDocument();
      expect(loadingRows[0].querySelectorAll('td')).toHaveLength(withActions ? 2 : 1);
    }
    expect(screen.queryByText(rows[0].id)).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /^Open/ })).not.toBeInTheDocument();
    expect(renderCell).not.toHaveBeenCalled();
    expect(renderAction).not.toHaveBeenCalled();
    expect(getRowId).not.toHaveBeenCalled();
    expect(screen.queryByLabelText('Go to next page')).not.toBeInTheDocument();

    rerender(<MITable {...props} rows={[]} isLoading />);
    expect(container.querySelectorAll('.MuiSkeleton-root')).toHaveLength(
      10 * loadingColumns.length
    );

    rerender(<MITable {...props} isLoading={false} />);
    expect(screen.getByRole(role, { name: 'Transactions' })).toHaveAttribute('aria-busy', 'false');
    expect(screen.getByLabelText('Go to next page')).toBeInTheDocument();
    expect(container.querySelectorAll('.MuiSkeleton-root')).toHaveLength(0);
    expect(screen.getByText(rows[0].id)).toBeInTheDocument();
    expect(renderCell).toHaveBeenCalledWith(rows[0]);
    expect(getRowId).toHaveBeenCalledWith(rows[0], 0);
    if (withActions) {
      expect(screen.getAllByRole('button', { name: `Open ${rows[0].id}` })).toHaveLength(2);
      expect(renderAction).toHaveBeenCalledWith(rows[0]);
    }
  });

  it('keeps sortable icon active and announces direction only when explicit sortDirection is provided', () => {
    render(<MITable columns={columns} rows={rows} />);

    const idHeader = screen.getByRole('columnheader', { name: 'ID' });
    const idSortButton = within(idHeader).getByRole('button', { name: 'ID' });

    expect(idSortButton).toHaveClass('Mui-active');
    expect(idHeader).toHaveAttribute('aria-sort');
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
    expect(firstRow.children).toHaveLength(columns.length);
    Array.from(firstRow.children).forEach((cellGroup) => {
      expect(cellGroup.tagName).toBe('DIV');
      expect(cellGroup.children[0].tagName).toBe('DT');
      expect(cellGroup.children[1].tagName).toBe('DD');
    });
    expect(within(firstRow).getByText('ID')).toBeInTheDocument();
    expect(within(firstRow).getByText('Category')).toBeInTheDocument();
    expect(within(firstRow).getByText('Date')).toBeInTheDocument();

    expect(screen.getAllByText('Label')).toHaveLength(rows.length);
    expect(screen.getByText('0123456')).toBeInTheDocument();
  });

  it('keeps mobile row actions outside the description list', () => {
    window.matchMedia = createMatchMedia(400);
    const actionColumns: Array<MITableColumn<Row>> = [
      ...columns,
      {
        id: 'action',
        header: '',
        isAction: true,
        renderCell: (row) => <button type="button">Open {row.id}</button>,
      },
    ];

    const { container } = render(<MITable columns={actionColumns} rows={rows} />);
    const mobileRows = container.querySelectorAll('dl');

    mobileRows.forEach((mobileRow) => {
      const rowActions = mobileRow.parentElement?.querySelector('button');
      expect(rowActions).toBeInTheDocument();
      expect(rowActions?.closest('dl')).toBeNull();
    });
  });

  it('does not wrap mobile cell content in typography when renderCell returns a React element', () => {
    window.matchMedia = createMatchMedia(400);
    const elementColumns: Array<MITableColumn<Row>> = [
      {
        id: 'id',
        header: 'ID',
        renderCell: (row) => <button type="button">{row.id}</button>,
      },
    ];

    render(<MITable columns={elementColumns} rows={rows} />);

    const cellButton = screen.getByRole('button', { name: rows[0].id });
    expect(cellButton.closest('.MuiTypography-root')).toBeNull();
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
    const terms = Array.from(container.querySelectorAll('dt[id]'));

    expect(terms.map((term) => term.id)).toEqual(
      expect.arrayContaining([
        expect.stringMatching(/-0123456-id-term$/),
        expect.stringMatching(/-0123457-id-term$/),
      ])
    );
    terms.forEach((term) => {
      expect(term.nextElementSibling).toHaveAttribute('aria-labelledby', term.id);
    });
  });

  it('falls back to the row index when getRowId is not provided', () => {
    window.matchMedia = createMatchMedia(400);
    const { container } = render(<MITable columns={columns} rows={rows} />);
    const terms = Array.from(container.querySelectorAll('dt[id]'));

    expect(terms.map((term) => term.id)).toEqual(
      expect.arrayContaining([
        expect.stringMatching(/-0-id-term$/),
        expect.stringMatching(/-1-id-term$/),
      ])
    );
    terms.forEach((term) => {
      expect(term.nextElementSibling).toHaveAttribute('aria-labelledby', term.id);
    });
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

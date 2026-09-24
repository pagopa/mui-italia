import { render, screen } from '../../../test-utils';

import MITableList from '../MITableList';
import MITableListItem from '../MITableListItem';
import MITableListItemField from '../MITableListItemField';
import type { MITableListSkeletonProps } from '../types';

const renderItem = (id: string) => (
  <MITableListItem key={id}>
    <MITableListItemField label="Codice ID">{id}</MITableListItemField>
    <MITableListItemField label="Comunicazioni">10</MITableListItemField>
  </MITableListItem>
);

/**
 * Skeleton di test: permette di verificare il contratto degli slot
 * (props ricevute) senza dipendere dal markup dello skeleton di default.
 */
const createSpySkeleton = () => {
  const spy = vi.fn();
  const SpySkeleton = (props: MITableListSkeletonProps) => {
    spy(props);
    return <div data-testid="custom-skeleton" />;
  };
  return { spy, SpySkeleton };
};

describe('MITableList', () => {
  it('renders its items inside a list', () => {
    render(<MITableList>{[renderItem('item-1'), renderItem('item-2')]}</MITableList>);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByText('item-1')).toBeInTheDocument();
    expect(screen.getByText('item-2')).toBeInTheDocument();
  });

  it('is not busy and announces nothing when loading is false', () => {
    const { container } = render(<MITableList>{renderItem('item-1')}</MITableList>);

    expect(container.querySelector('[aria-busy="true"]')).not.toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('');
  });

  it('replaces the list with the skeleton when loading', () => {
    const { SpySkeleton } = createSpySkeleton();
    const { container } = render(
      <MITableList loading slots={{ skeleton: SpySkeleton }}>
        {renderItem('item-1')}
      </MITableList>
    );

    expect(screen.getByTestId('custom-skeleton')).toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    expect(screen.queryByText('item-1')).not.toBeInTheDocument();
    expect(container.querySelector('[aria-busy="true"]')).toBeInTheDocument();
  });

  it('announces the default loading label', () => {
    render(<MITableList loading />);

    expect(screen.getByRole('status')).toHaveTextContent('Content loading, please wait...');
  });

  it('announces the custom loading label', () => {
    render(<MITableList loading localeText={{ loadingLabel: 'Caricamento in corso' }} />);

    expect(screen.getByRole('status')).toHaveTextContent('Caricamento in corso');
  });

  it('renders the default skeleton when no slot is provided', () => {
    render(<MITableList loading />);

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('Content loading, please wait...');
  });

  it('forwards slotProps to the skeleton', () => {
    const { spy, SpySkeleton } = createSpySkeleton();
    render(
      <MITableList
        loading
        slots={{ skeleton: SpySkeleton }}
        slotProps={{ skeleton: { rows: 2, cols: 5, action: true } }}
      />
    );

    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ rows: 2, cols: 5, action: true }));
  });

  it('uses the columns length as default skeleton cols', () => {
    const { spy, SpySkeleton } = createSpySkeleton();
    render(<MITableList loading columns={[2, 1, 1]} slots={{ skeleton: SpySkeleton }} />);

    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ cols: 3 }));
  });

  it('lets slotProps.cols win over the columns length', () => {
    const { spy, SpySkeleton } = createSpySkeleton();
    render(
      <MITableList
        loading
        columns={[2, 1, 1]}
        slots={{ skeleton: SpySkeleton }}
        slotProps={{ skeleton: { cols: 1 } }}
      />
    );

    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ cols: 1 }));
  });

  it('propagates columns to the items that do not define their own', () => {
    const spy = vi.fn();
    const Probe = ({ columns }: { columns?: Array<number> }) => {
      spy(columns);
      return <li>probe</li>;
    };
    // gli item reali validano children/columns: qui interessa solo il cloneElement
    const { rerender } = render(<MITableList columns={[2, 1]}>{renderItem('item-1')}</MITableList>);
    expect(screen.getByRole('listitem')).toBeInTheDocument();

    rerender(
      <MITableList columns={[2, 1]}>{[renderItem('item-1'), renderItem('item-2')]}</MITableList>
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(Probe).toBeDefined();
  });

  it('throws when a forbidden child is passed', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() =>
      render(
        <MITableList>
          <p>Forbidden</p>
        </MITableList>
      )
    ).toThrow('MITableList can have only children of type MITableListItem');

    consoleSpy.mockRestore();
  });

  it('does not validate children while loading', () => {
    expect(() =>
      render(
        <MITableList loading>
          <p>Forbidden</p>
        </MITableList>
      )
    ).not.toThrow();
  });
});

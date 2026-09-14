import { fireEvent, render, screen } from '../../../test-utils';

import MITableList from '../MITableList';
import MITableListItem from '../MITableListItem';
import MITableListItemField from '../MITableListItemField';

const fields = [
  <MITableListItemField key="1" label="22/11/2025">
    Titolo campagna
  </MITableListItemField>,
  <MITableListItemField key="2" label="Codice ID">
    0000000000
  </MITableListItemField>,
];

describe('MITableListItem', () => {
  it('renders its fields', () => {
    render(<MITableListItem>{fields}</MITableListItem>);

    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByText('22/11/2025')).toBeInTheDocument();
    expect(screen.getByText('Titolo campagna')).toBeInTheDocument();
    expect(screen.getByText('0000000000')).toBeInTheDocument();
  });

  it('does not render an action when the prop is not provided', () => {
    render(<MITableListItem>{fields}</MITableListItem>);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders the action and calls onClick', () => {
    const onClick = vi.fn();
    render(<MITableListItem action={{ content: 'Apri', onClick }}>{fields}</MITableListItem>);

    fireEvent.click(screen.getByRole('button', { name: 'Apri' }));

    expect(onClick).toHaveBeenCalledOnce();
  });

  it('uses the action ariaLabel when provided', () => {
    render(
      <MITableListItem action={{ content: 'Apri', onClick: vi.fn(), ariaLabel: 'Apri campagna' }}>
        {fields}
      </MITableListItem>
    );

    expect(screen.getByRole('button', { name: 'Apri campagna' })).toBeInTheDocument();
  });

  it('renders the default action icon', () => {
    render(
      <MITableListItem action={{ content: 'Apri', onClick: vi.fn() }}>{fields}</MITableListItem>
    );

    expect(screen.getByTestId('ArrowForwardIcon')).toBeInTheDocument();
  });

  it('renders a custom action icon', () => {
    render(
      <MITableListItem
        action={{ content: 'Apri', onClick: vi.fn(), icon: <span data-testid="custom-icon" /> }}
      >
        {fields}
      </MITableListItem>
    );

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('ArrowForwardIcon')).not.toBeInTheDocument();
  });

  it('renders no icon when action.icon is null', () => {
    render(
      <MITableListItem action={{ content: 'Apri', onClick: vi.fn(), icon: null }}>
        {fields}
      </MITableListItem>
    );

    expect(screen.queryByTestId('ArrowForwardIcon')).not.toBeInTheDocument();
  });

  it('renders a custom action button through slots and forwards slotProps', () => {
    const CustomButton = ({
      children,
      endIcon,
      ...props
    }: {
      children?: React.ReactNode;
      endIcon?: React.ReactNode;
    } & React.ComponentProps<'button'>) => (
      <button data-testid="custom-button" {...props}>
        {children}
        {endIcon}
      </button>
    );

    render(
      <MITableListItem
        action={{ content: 'Apri', onClick: vi.fn() }}
        slots={{ actionButton: CustomButton as never }}
        slotProps={{ actionButton: { disabled: true } }}
      >
        {fields}
      </MITableListItem>
    );

    const button = screen.getByTestId('custom-button');
    expect(button).toHaveTextContent('Apri');
    expect(button).toBeDisabled();
  });

  it('does not let slotProps override onClick', () => {
    const onClick = vi.fn();
    const slotOnClick = vi.fn();

    render(
      <MITableListItem
        action={{ content: 'Apri', onClick }}
        slotProps={{ actionButton: { onClick: slotOnClick } as never }}
      >
        {fields}
      </MITableListItem>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Apri' }));

    expect(onClick).toHaveBeenCalledOnce();
    expect(slotOnClick).not.toHaveBeenCalled();
  });

  it('throws when columns length does not match the fields count', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => render(<MITableListItem columns={[1]}>{fields}</MITableListItem>)).toThrow(
      'MITableListItem: columns length (1) must match fields count (2).'
    );

    consoleSpy.mockRestore();
  });

  it('receives the columns coming from the list', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    // la lista passa columns di lunghezza 3 a un item con 2 campi
    expect(() =>
      render(
        <MITableList columns={[1, 1, 1]}>
          <MITableListItem>{fields}</MITableListItem>
        </MITableList>
      )
    ).toThrow('MITableListItem: columns length (3) must match fields count (2).');

    consoleSpy.mockRestore();
  });

  it('lets the item columns win over the list ones', () => {
    render(
      <MITableList columns={[1, 1, 1]}>
        <MITableListItem columns={[2, 1]}>{fields}</MITableListItem>
      </MITableList>
    );

    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });

  it('throws when a forbidden child is passed', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() =>
      render(
        <MITableListItem>
          <p>Forbidden</p>
        </MITableListItem>
      )
    ).toThrow('MITableListItem can have only children of type MITableListItemField');

    consoleSpy.mockRestore();
  });
});

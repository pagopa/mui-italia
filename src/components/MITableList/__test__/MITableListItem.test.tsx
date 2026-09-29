import { MailOutline as MailOutlineIcon } from '@mui/icons-material';

import { MIButton } from '@components/MIButton';
import { MIIconButton } from '@components/MIIconButton';

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

  it('renders the action element as it is', () => {
    render(
      <MITableListItem action={<MIButton variant="text">Apri</MIButton>}>{fields}</MITableListItem>
    );

    expect(screen.getByRole('button', { name: 'Apri' })).toBeInTheDocument();
  });

  it('calls the onClick defined on the action element', () => {
    const onClick = vi.fn();
    render(
      <MITableListItem
        action={
          <MIButton variant="text" onClick={onClick}>
            Apri
          </MIButton>
        }
      >
        {fields}
      </MITableListItem>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Apri' }));

    expect(onClick).toHaveBeenCalledOnce();
  });

  it('keeps the props defined on the action element', () => {
    render(
      <MITableListItem
        action={
          <MIButton variant="text" endIcon={<MailOutlineIcon data-testid="action-icon" />}>
            Apri
          </MIButton>
        }
      >
        {fields}
      </MITableListItem>
    );

    expect(screen.getByRole('button', { name: 'Apri' })).toBeInTheDocument();
    expect(screen.getByTestId('action-icon')).toBeInTheDocument();
  });

  it('supports an icon only action', () => {
    const onClick = vi.fn();
    render(
      <MITableListItem
        action={
          <MIIconButton aria-label="Apri campagna" onClick={onClick}>
            <MailOutlineIcon />
          </MIIconButton>
        }
      >
        {fields}
      </MITableListItem>
    );

    const button = screen.getByRole('button', { name: 'Apri campagna' });
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledOnce();
    expect(button).toHaveTextContent('');
  });

  it('does not add a default icon to the action element', () => {
    render(
      <MITableListItem action={<MIButton variant="text">Apri</MIButton>}>{fields}</MITableListItem>
    );

    expect(screen.queryByTestId('ArrowForwardIcon')).not.toBeInTheDocument();
  });

  it('renders the action inside the item', () => {
    render(
      <MITableListItem action={<MIButton variant="text">Apri</MIButton>}>{fields}</MITableListItem>
    );

    const item = screen.getByRole('listitem');
    expect(item).toContainElement(screen.getByRole('button', { name: 'Apri' }));
  });

  it('throws when columns length does not match the fields count', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => render(<MITableListItem columns={[1]}>{fields}</MITableListItem>)).toThrow(
      'MITableListItem: columns length (1) must match fields count (2).'
    );

    consoleSpy.mockRestore();
  });

  it('does not count the action as a field', () => {
    expect(() =>
      render(
        <MITableListItem columns={[2, 1]} action={<MIButton variant="text">Apri</MIButton>}>
          {fields}
        </MITableListItem>
      )
    ).not.toThrow();
  });

  it('receives the columns coming from the list', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

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

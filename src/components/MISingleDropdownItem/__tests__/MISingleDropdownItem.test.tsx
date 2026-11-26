import { fireEvent, render, screen } from '../../../test-utils';
import { MISelect } from '../../MISelect';
import { MISingleDropdownItem } from '..';

describe('MISingleDropdownItem', () => {
  it('works as a direct MISelect option and renders optional content slots', () => {
    const onChange = vi.fn();

    render(
      <MISelect
        label="Organization"
        open
        value="pagopa"
        onChange={onChange}
        options={[
          { value: 'pagopa', label: 'PagoPA' },
          { value: 'agency', label: 'Agenzia delle Entrate' },
        ]}
        renderOptions={(option) => (
          <MISingleDropdownItem
            value={option.value}
            centralSlot={
              <>
                <span>{option.label}</span>
                {option.value === 'pagopa' && <span>Organization description</span>}
              </>
            }
            leftSlot={option.value === 'pagopa' ? <span>Left slot</span> : undefined}
            rightSlot={option.value === 'pagopa' ? <span>Active</span> : undefined}
          />
        )}
      />
    );

    const option = screen.getByRole('option', {
      name: 'PagoPA Organization description Active',
    });

    expect(option).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('combobox', { hidden: true })).toHaveTextContent('PagoPA');
    expect(screen.getByText('Left slot')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('option', { name: 'Agenzia delle Entrate' }));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].target.value).toBe('agency');
  });

  it('applies the selected state outside a controlled MISelect', () => {
    render(<MISingleDropdownItem value="pagopa" centralSlot="PagoPA" selected />);

    expect(screen.getByRole('menuitem', { name: 'PagoPA' })).toHaveClass('Mui-selected');
  });

  it('shows the decorative checkbox only for a selected option', () => {
    const { rerender } = render(
      <MISingleDropdownItem
        value="pagopa"
        centralSlot="PagoPA"
        selected
        data-testid="dropdown-item"
      />
    );

    const item = screen.getByTestId('dropdown-item');
    const checkedInput = item.querySelector<HTMLInputElement>('input[type="checkbox"]');
    expect(checkedInput).toBeChecked();
    expect(checkedInput).toHaveAttribute('aria-hidden', 'true');
    expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();

    rerender(
      <MISingleDropdownItem value="pagopa" centralSlot="PagoPA" data-testid="dropdown-item" />
    );

    expect(
      screen.getByTestId('dropdown-item').querySelector('input[type="checkbox"]')
    ).not.toBeInTheDocument();
    expect(screen.getByTestId('dropdown-item')).toHaveStyle({ alignItems: 'center' });
  });

  it('uses selection state injected by MISelect for multiple option checkboxes', () => {
    const onChange = vi.fn();
    render(
      <MISelect
        label="Organizations"
        open
        multiple
        value={['pagopa']}
        onChange={onChange}
        options={[
          { value: 'pagopa', label: 'PagoPA' },
          { value: 'agency', label: 'Agenzia delle Entrate' },
        ]}
        renderOptions={(option) => (
          <MISingleDropdownItem value={option.value} centralSlot={option.label} />
        )}
      />
    );

    const selectedOption = screen.getByRole('option', { name: 'PagoPA' });
    const unselectedOption = screen.getByRole('option', { name: 'Agenzia delle Entrate' });
    expect(selectedOption).toHaveAttribute('aria-selected', 'true');
    expect(selectedOption.querySelector<HTMLInputElement>('input[type="checkbox"]')).toBeChecked();
    expect(unselectedOption).toHaveAttribute('aria-selected', 'false');
    expect(
      unselectedOption.querySelector<HTMLInputElement>('input[type="checkbox"]')
    ).not.toBeInTheDocument();

    fireEvent.click(unselectedOption);
    expect(onChange.mock.calls[0][0].target.value).toEqual(['pagopa', 'agency']);
  });

  it('omits side slots when they are not provided and forwards DOM attributes', () => {
    render(
      <MISingleDropdownItem value="pagopa" centralSlot="PagoPA" data-testid="dropdown-item" />
    );

    const option = screen.getByRole('menuitem', { name: 'PagoPA' });

    expect(option).toHaveAttribute('data-testid', 'dropdown-item');
    expect(option.querySelectorAll('span[aria-hidden="true"]')).toHaveLength(0);
    expect(option.children).toHaveLength(1);
  });

  it('renders left, central and right slots in order with custom translated content', () => {
    render(
      <MISingleDropdownItem
        value="pagopa"
        leftSlot={<span>Sinistra</span>}
        centralSlot={<span>Centro</span>}
        rightSlot={<span>Destra</span>}
      />
    );

    const option = screen.getByRole('menuitem', { name: 'Centro Destra' });

    expect(option).toHaveTextContent('SinistraCentroDestra');
    expect(screen.getByText('Sinistra').closest('[aria-hidden="true"]')).toBeInTheDocument();
  });
});

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
            label={option.label}
            description={option.value === 'pagopa' ? 'Organization description' : undefined}
            avatar={option.value === 'pagopa' ? <span>Avatar</span> : undefined}
            chip={option.value === 'pagopa' ? <span>Active</span> : undefined}
          />
        )}
      />
    );

    const option = screen.getByRole('option', {
      name: 'PagoPA Organization description Active',
    });

    expect(option).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('combobox', { hidden: true })).toHaveTextContent('PagoPA');
    expect(screen.getByText('Avatar')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('option', { name: 'Agenzia delle Entrate' }));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].target.value).toBe('agency');
  });

  it.each(['selected', 'checked'] as const)(
    'applies the selected state when %s is true outside a controlled MISelect',
    (stateProp) => {
      render(<MISingleDropdownItem value="pagopa" label="PagoPA" {...{ [stateProp]: true }} />);

      expect(screen.getByRole('menuitem', { name: 'PagoPA' })).toHaveClass('Mui-selected');
    }
  );

  it('omits optional content when it is not provided and forwards DOM attributes', () => {
    render(<MISingleDropdownItem value="pagopa" label="PagoPA" data-testid="dropdown-item" />);

    const option = screen.getByRole('menuitem', { name: 'PagoPA' });

    expect(option).toHaveAttribute('data-testid', 'dropdown-item');
    expect(screen.queryByText('Organization description')).not.toBeInTheDocument();
  });
});

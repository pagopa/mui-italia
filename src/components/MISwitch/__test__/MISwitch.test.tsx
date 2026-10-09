import { vi } from 'vitest';

import { fireEvent, render } from '../../../test-utils';
import MISwitch from '../MISwitch';

describe('MISwitch', () => {
  it('renders without a label when no supporting text is provided', () => {
    const { getByRole } = render(<MISwitch />);

    expect(getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders a switch, unchecked by default', () => {
    const { getByRole } = render(<MISwitch label="Notifiche" />);

    expect(getByRole('checkbox', { name: 'Notifiche' })).toBeInTheDocument();
    expect(getByRole('checkbox', { name: 'Notifiche' })).not.toBeChecked();
  });

  it('renders as checked when the checked prop is true', () => {
    const { getByRole } = render(<MISwitch label="Notifiche" checked onChange={() => {}} />);

    expect(getByRole('checkbox', { name: 'Notifiche' })).toBeChecked();
  });

  it('updates checked state when the checked prop changes', () => {
    const { getByRole, rerender } = render(
      <MISwitch label="Notifiche" checked={false} onChange={() => {}} />
    );
    expect(getByRole('checkbox', { name: 'Notifiche' })).not.toBeChecked();

    rerender(<MISwitch label="Notifiche" checked onChange={() => {}} />);
    expect(getByRole('checkbox', { name: 'Notifiche' })).toBeChecked();
  });

  it('calls onChange with the new checked state when toggled', () => {
    const handleChange = vi.fn();
    const { getByRole } = render(
      <MISwitch label="Notifiche" checked={false} onChange={handleChange} />
    );

    fireEvent.click(getByRole('checkbox', { name: 'Notifiche' }));

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.anything(), true);
  });

  it('renders as disabled when the disabled prop is set', () => {
    const { getByRole } = render(<MISwitch label="Notifiche" disabled />);

    expect(getByRole('checkbox', { name: 'Notifiche' })).toBeDisabled();
  });

  it('forwards standard input props such as name and value', () => {
    const { getByRole } = render(
      <MISwitch label="Notifiche" name="notifications" value="enabled" />
    );

    expect(getByRole('checkbox', { name: 'Notifiche' })).toHaveAttribute('name', 'notifications');
    expect(getByRole('checkbox', { name: 'Notifiche' })).toHaveAttribute('value', 'enabled');
  });

  it('renders a label, optional description, and accessible error message', () => {
    const { getByRole, getByText } = render(
      <MISwitch
        label="Notifiche"
        description="Ricevi aggiornamenti."
        error="Conferma la preferenza."
      />
    );
    const switchInput = getByRole('checkbox', { name: 'Notifiche' });
    const description = getByText('Ricevi aggiornamenti.');
    const error = getByText('Conferma la preferenza.');
    const describedBy = switchInput.getAttribute('aria-describedby')?.split(' ') ?? [];

    expect(describedBy).toContain(description.id);
    expect(describedBy).toContain(error.parentElement?.id);
    expect(switchInput).toHaveAttribute('aria-invalid', 'true');
  });
});

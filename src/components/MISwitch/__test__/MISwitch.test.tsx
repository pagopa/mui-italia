import { vi } from 'vitest';

import { fireEvent, render } from '../../../test-utils';
import MISwitch from '../MISwitch';

describe('MISwitch', () => {
  it('renders a switch, unchecked by default', () => {
    const { getByRole } = render(<MISwitch />);

    expect(getByRole('checkbox')).toBeInTheDocument();
    expect(getByRole('checkbox')).not.toBeChecked();
  });

  it('renders as checked when the checked prop is true', () => {
    const { getByRole } = render(<MISwitch checked onChange={() => {}} />);

    expect(getByRole('checkbox')).toBeChecked();
  });

  it('updates checked state when the checked prop changes', () => {
    const { getByRole, rerender } = render(<MISwitch checked={false} onChange={() => {}} />);
    expect(getByRole('checkbox')).not.toBeChecked();

    rerender(<MISwitch checked onChange={() => {}} />);
    expect(getByRole('checkbox')).toBeChecked();
  });

  it('calls onChange with the new checked state when toggled', () => {
    const handleChange = vi.fn();
    const { getByRole } = render(<MISwitch checked={false} onChange={handleChange} />);

    fireEvent.click(getByRole('checkbox'));

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.anything(), true);
  });

  it('renders as disabled when the disabled prop is set', () => {
    const { getByRole } = render(<MISwitch disabled />);

    expect(getByRole('checkbox')).toBeDisabled();
  });

  it('forwards standard input props such as name and value', () => {
    const { getByRole } = render(<MISwitch name="notifications" value="enabled" />);

    expect(getByRole('checkbox')).toHaveAttribute('name', 'notifications');
    expect(getByRole('checkbox')).toHaveAttribute('value', 'enabled');
  });
});

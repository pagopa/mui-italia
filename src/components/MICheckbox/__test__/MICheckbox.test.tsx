import { themeNext } from '@theme';
import { fireEvent, render } from '../../../test-utils';

import MICheckbox from '../MICheckbox';

describe('MICheckbox', () => {
  it('renders without a label when no supporting text is provided', () => {
    const { getByRole } = render(<MICheckbox />);

    expect(getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders an unchecked checkbox with its accessible label', () => {
    const { getByRole } = render(<MICheckbox label="Checkbox label" />);

    expect(getByRole('checkbox', { name: 'Checkbox label' })).not.toBeChecked();
  });

  it('forwards aria-label and aria-describedby to the checkbox input', () => {
    const { getByRole } = render(
      <>
        <span id="help">Accepting confirms your agreement.</span>
        <MICheckbox
          aria-label="Accept the terms"
          aria-describedby="help"
        />
      </>
    );
    const checkbox = getByRole('checkbox', {
      name: 'Accept the terms',
      description: 'Accepting confirms your agreement.',
    });

    expect(checkbox).toHaveAttribute('aria-label', 'Accept the terms');
    expect(checkbox).toHaveAttribute('aria-describedby', 'help');
    expect(checkbox.closest('.MuiCheckbox-root')).not.toHaveAttribute('aria-label');
  });

  it('renders as checked when the checked prop is true', () => {
    const { getByRole } = render(<MICheckbox label="Checkbox label" checked onChange={() => {}} />);

    expect(getByRole('checkbox', { name: 'Checkbox label' })).toBeChecked();
  });

  it('updates checked state when the checked prop changes', () => {
    const { getByRole, rerender } = render(
      <MICheckbox label="Checkbox label" checked={false} onChange={() => {}} />
    );
    expect(getByRole('checkbox', { name: 'Checkbox label' })).not.toBeChecked();

    rerender(<MICheckbox label="Checkbox label" checked onChange={() => {}} />);
    expect(getByRole('checkbox', { name: 'Checkbox label' })).toBeChecked();
  });

  it('toggles an uncontrolled checkbox when clicked', () => {
    const { getByRole } = render(<MICheckbox label="Checkbox label" />);
    const checkbox = getByRole('checkbox', { name: 'Checkbox label' });

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it('calls onChange with the new checked state when toggled', () => {
    const handleChange = vi.fn();
    const { getByRole } = render(
      <MICheckbox label="Checkbox label" checked={false} onChange={handleChange} />
    );

    fireEvent.click(getByRole('checkbox', { name: 'Checkbox label' }));

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.anything(), true);
  });

  it('renders as disabled when the disabled prop is set', () => {
    const { getByRole } = render(<MICheckbox label="Checkbox label" disabled />);

    expect(getByRole('checkbox', { name: 'Checkbox label' })).toBeDisabled();
  });

  it('forwards standard input props such as name and value', () => {
    const { getByRole } = render(
      <MICheckbox label="Checkbox label" name="preferences" value="enabled" />
    );

    expect(getByRole('checkbox', { name: 'Checkbox label' })).toHaveAttribute(
      'name',
      'preferences'
    );
    expect(getByRole('checkbox', { name: 'Checkbox label' })).toHaveAttribute('value', 'enabled');
  });

  it('associates configurable errors with the checkbox', () => {
    const { getByRole, getByText } = render(
      <MICheckbox
        label="Checkbox label"
        error="A translated error."
        aria-describedby="additional-help"
        inputProps={{ 'aria-describedby': 'input-help' }}
      />
    );
    const checkbox = getByRole('checkbox', { name: 'Checkbox label' });
    const error = getByText('A translated error.');
    const describedBy = checkbox.getAttribute('aria-describedby')?.split(' ') ?? [];

    expect(describedBy).toContain('additional-help');
    expect(describedBy).toContain('input-help');
    expect(describedBy).toContain(error.parentElement?.id);
    expect(checkbox).toHaveAttribute('aria-invalid', 'true');
  });

  it('does not toggle the checkbox when the error message is clicked', () => {
    const { getByRole, getByText } = render(
      <MICheckbox label="Checkbox label" error="A translated error." />
    );
    const checkbox = getByRole('checkbox', { name: 'Checkbox label' });

    fireEvent.click(getByText('A translated error.'));

    expect(checkbox).not.toBeChecked();
    expect(getByText('A translated error.').closest('label')).toBeNull();
  });

  it('uses the error color for the unchecked checkbox border', () => {
    const { getByRole } = render(<MICheckbox label="Checkbox label" error="Required field" />);
    const checkboxRoot = getByRole('checkbox', { name: 'Checkbox label' }).closest(
      '.MuiCheckbox-root'
    );

    expect(checkboxRoot).toHaveStyle({ color: themeNext.palette.error.main });
  });

  it('keeps the checked checkbox blue when an error is present', () => {
    const { getByRole } = render(
      <MICheckbox
        label="Checkbox label"
        checked
        onChange={() => {}}
        error="Required field"
      />
    );
    const checkboxRoot = getByRole('checkbox', { name: 'Checkbox label' }).closest(
      '.MuiCheckbox-root'
    );

    expect(checkboxRoot).toHaveStyle({ color: themeNext.palette.primary.main });
  });
});

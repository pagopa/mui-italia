import { RadioGroup } from '@mui/material';
import { fireEvent, render } from '../../../test-utils';
import MIRadio from '../MIRadio';

describe('MIRadio', () => {
  it('renders without a visible label when an accessible name is provided', () => {
    const { getByRole } = render(<MIRadio inputProps={{ 'aria-label': 'Email updates' }} />);

    expect(getByRole('radio', { name: 'Email updates' })).toBeInTheDocument();
  });

  it('renders an unchecked radio with its accessible label', () => {
    const { getByRole } = render(<MIRadio label="Email updates" />);

    expect(getByRole('radio', { name: 'Email updates' })).not.toBeChecked();
  });

  it('renders as checked when the checked prop is true', () => {
    const { getByRole } = render(<MIRadio label="Email updates" checked onChange={() => {}} />);

    expect(getByRole('radio', { name: 'Email updates' })).toBeChecked();
  });

  it('selects the clicked radio in a radio group', () => {
    const { getByRole } = render(
      <RadioGroup defaultValue="sms">
        <MIRadio label="Email updates" value="email" />
        <MIRadio label="SMS updates" value="sms" />
      </RadioGroup>
    );
    const emailRadio = getByRole('radio', { name: 'Email updates' });
    const smsRadio = getByRole('radio', { name: 'SMS updates' });

    expect(smsRadio).toBeChecked();
    fireEvent.click(emailRadio);

    expect(emailRadio).toBeChecked();
    expect(smsRadio).not.toBeChecked();
  });

  it('calls onChange with the selected value', () => {
    const handleChange = vi.fn();
    const { getByRole } = render(<MIRadio label="Email updates" value="email" onChange={handleChange} />);

    fireEvent.click(getByRole('radio', { name: 'Email updates' }));

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange.mock.calls[0][0].target.value).toBe('email');
  });

  it('renders as disabled when the disabled prop is set', () => {
    const { getByRole } = render(<MIRadio label="Email updates" disabled />);

    expect(getByRole('radio', { name: 'Email updates' })).toBeDisabled();
  });

  it('associates configurable errors with the radio and preserves existing descriptions', () => {
    const { getByRole, getByText } = render(
      <MIRadio
        label="Email updates"
        error="A translated error."
        inputProps={{ 'aria-describedby': 'additional-help' }}
      />
    );
    const radio = getByRole('radio', { name: 'Email updates' });
    const error = getByText('A translated error.');
    const describedBy = radio.getAttribute('aria-describedby')?.split(' ') ?? [];

    expect(describedBy).toContain('additional-help');
    expect(describedBy).toContain(error.parentElement?.id);
    expect(radio).toHaveAttribute('aria-invalid', 'true');
  });

  it('uses the error color for an unchecked radio', () => {
    const { getByRole } = render(<MIRadio label="Email updates" error="Required field" />);
    const radioRoot = getByRole('radio', { name: 'Email updates' }).closest('.MuiRadio-root');

    expect(radioRoot).toHaveStyle({ color: 'rgb(209, 51, 51)' });
  });

  it('keeps a checked radio blue when an error is present', () => {
    const { getByRole } = render(
      <MIRadio label="Email updates" checked onChange={() => {}} error="Required field" />
    );
    const radioRoot = getByRole('radio', { name: 'Email updates' }).closest('.MuiRadio-root');

    expect(radioRoot).toHaveStyle({ color: 'rgb(11, 62, 227)' });
  });
});

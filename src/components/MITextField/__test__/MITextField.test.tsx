import { vi } from 'vitest';

import { fireEvent, render } from '../../../test-utils';
import { createMatchMedia } from '../../../test-utils';
import { MITextField } from '../MITextField';

describe('MITextField', () => {
  afterEach(() => {
    Reflect.deleteProperty(window, 'matchMedia');
  });

  it('renders as disabled when the disabled prop is set', () => {
    const { getByRole } = render(<MITextField disabled />);

    expect(getByRole('textbox')).toBeDisabled();
  });

  it('is full width by default on desktop', () => {
    window.matchMedia = createMatchMedia(1200);
    const { getByRole } = render(<MITextField label="Email" />);

    const textFieldRoot = getByRole('textbox').closest('.MuiFormControl-root');
    expect(textFieldRoot).toHaveClass('MuiFormControl-fullWidth');
  });

  it('keeps non-fullWidth on desktop when fullWidth is false', () => {
    window.matchMedia = createMatchMedia(1200);
    const { getByRole } = render(<MITextField label="Email" fullWidth={false} />);

    const textFieldRoot = getByRole('textbox').closest('.MuiFormControl-root');
    expect(textFieldRoot).not.toHaveClass('MuiFormControl-fullWidth');
  });

  it('forces fullWidth on mobile even when fullWidth is false', () => {
    window.matchMedia = createMatchMedia(500);
    const { getByRole } = render(<MITextField label="Email" fullWidth={false} />);

    const textFieldRoot = getByRole('textbox').closest('.MuiFormControl-root');
    expect(textFieldRoot).toHaveClass('MuiFormControl-fullWidth');
  });

  it('renders success validation icon when success is true', () => {
    const { container } = render(<MITextField success />);

    expect(container.querySelector('.MuiSvgIcon-colorSuccess')).toBeInTheDocument();
  });

  it('renders error validation icon when error is true', () => {
    const { container } = render(<MITextField error />);

    expect(container.querySelector('.MuiSvgIcon-colorError')).toBeInTheDocument();
  });

  it('renders delete action icon and calls onDelete handler', () => {
    const onDelete = vi.fn();
    const { getByLabelText, queryByLabelText } = render(
      <MITextField onDelete={onDelete} value="abc" />
    );

    fireEvent.click(getByLabelText('Pulisci input'));

    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(queryByLabelText('Copia input')).not.toBeInTheDocument();
  });

  it('uses custom endAdornment when provided via InputProps', () => {
    const { getByTestId, queryByLabelText, container } = render(
      <MITextField
        success
        onDelete={vi.fn()}
        InputProps={{ endAdornment: <span data-testid="custom-end-adornment">custom</span> }}
      />
    );

    expect(getByTestId('custom-end-adornment')).toBeInTheDocument();
    expect(queryByLabelText('Pulisci input')).not.toBeInTheDocument();
    expect(queryByLabelText('Copia input')).not.toBeInTheDocument();
    expect(container.querySelector('.MuiSvgIcon-colorSuccess')).not.toBeInTheDocument();
  });
});

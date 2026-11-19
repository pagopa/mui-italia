import { render, screen } from '../../../test-utils';
import MIHelperTextError from '../MIHelperTextError';

describe('MIHelperTextError', () => {
  it('renders the supplied error message and marks the decorative icon as hidden', () => {
    render(
      <MIHelperTextError id="field-error" data-testid="field-error">
        Custom error message
      </MIHelperTextError>
    );

    const helperText = screen.getByTestId('field-error');
    expect(helperText).toHaveTextContent('Custom error message');
    expect(helperText).toHaveClass('MuiFormHelperText-root', 'Mui-error');
    expect(helperText).toHaveAttribute('id', 'field-error');
    expect(helperText.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });
});

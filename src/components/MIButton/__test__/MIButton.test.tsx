import { fireEvent, render, screen } from '../../../test-utils';
import MIButton from '../MIButton';
import { MIButtonLoaderType } from '../types';

describe('MIButton', () => {
  it('renders its children as a contained button by default', () => {
    render(<MIButton>Continue</MIButton>);

    expect(screen.getByRole('button', { name: 'Continue' })).toHaveClass('MuiButton-contained');
  });

  it('supports button props and calls onClick', () => {
    const onClick = vi.fn();
    render(
      <MIButton variant="outlined" color="error" fullWidth data-testid="submit" onClick={onClick}>
        Submit
      </MIButton>
    );

    const button = screen.getByTestId('submit');
    expect(button).toHaveClass('MuiButton-outlined', 'MuiButton-fullWidth');
    expect(button).toHaveAttribute('type', 'button');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders the accessible spinner and marks the button busy while loading', () => {
    render(
      <MIButton isLoading loadingAriaLabel="Saving changes">
        Save
      </MIButton>
    );

    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
    expect(screen.getByRole('progressbar', { name: 'Saving changes' })).toBeInTheDocument();
    expect(screen.queryByText('Save')).not.toBeInTheDocument();
  });

  it('does not call onClick while loading', () => {
    const onClick = vi.fn();
    render(
      <MIButton isLoading onClick={onClick}>
        Save
      </MIButton>
    );

    fireEvent.click(screen.getByRole('button'));

    expect(onClick).not.toHaveBeenCalled();
  });

  it('renders the skeleton loader when requested', () => {
    render(
      <MIButton isLoading loaderType={MIButtonLoaderType.SKELETON} loadingAriaLabel="Loading">
        Save
      </MIButton>
    );

    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
    expect(screen.getByLabelText('Loading')).toBeInTheDocument();
    expect(screen.queryByText('Save')).not.toBeInTheDocument();
  });

  it.each([
    { name: 'default', variant: undefined, variantClass: 'MuiButton-contained' },
    { name: 'contained', variant: 'contained' as const, variantClass: 'MuiButton-contained' },
    { name: 'outlined', variant: 'outlined' as const, variantClass: 'MuiButton-outlined' },
    { name: 'text', variant: 'text' as const, variantClass: 'MuiButton-text' },
  ])('renders an href as a link with the $name variant', ({ variant, variantClass }) => {
    const variantProps = variant === undefined ? {} : { variant };
    render(
      <MIButton href="/destination" {...variantProps}>
        button-link
      </MIButton>
    );

    const link = screen.getByRole('link', { name: 'button-link' });
    expect(link).toHaveAttribute('href', '/destination');
    expect(link).toHaveClass(variantClass);
  });
});

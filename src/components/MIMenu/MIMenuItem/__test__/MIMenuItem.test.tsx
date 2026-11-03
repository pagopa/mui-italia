import { fireEvent, render, screen } from '../../../../test-utils';
import MIMenuItem from '../MIMenuItem';

describe('MIMenuItem', () => {
  it('renders the label', () => {
    render(<MIMenuItem label="Profile" onClick={vi.fn()} />);

    expect(screen.getByRole('menuitem', { name: 'Profile' })).toBeInTheDocument();
  });

  it('renders the icon when startIcon is provided', () => {
    render(
      <MIMenuItem
        label="Profile"
        startIcon={<span data-testid="profile-icon" />}
        onClick={vi.fn()}
      />
    );

    expect(screen.getByTestId('profile-icon')).toBeInTheDocument();
  });

  it('does not render an icon when startIcon is omitted', () => {
    render(<MIMenuItem label="Logout" onClick={vi.fn()} />);

    expect(document.querySelector('.MuiListItemIcon-root')).not.toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<MIMenuItem label="Settings" onClick={handleClick} />);

    fireEvent.click(screen.getByRole('menuitem', { name: 'Settings' }));

    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('forwards standard MenuItem props', () => {
    render(<MIMenuItem label="Disabled item" onClick={vi.fn()} disabled />);

    expect(screen.getByRole('menuitem', { name: 'Disabled item' })).toHaveAttribute(
      'aria-disabled',
      'true'
    );
  });
});

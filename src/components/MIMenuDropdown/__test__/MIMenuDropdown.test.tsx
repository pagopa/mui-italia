import { fireEvent, render, screen } from '../../../test-utils';
import MIMenuDropdown, { MIMenuDropdownProps } from '../MIMenuDropdown';

const renderMenu = (props: Partial<MIMenuDropdownProps> = {}) => {
  const defaultProps: MIMenuDropdownProps = {
    anchorEl: document.body,
    onClose: vi.fn(),
    items: [
      {
        label: 'Profile',
        icon: <span data-testid="profile-icon" />,
        onClick: vi.fn(),
      },
      {
        label: 'Logout',
        onClick: vi.fn(),
      },
    ],
    open: true,
  };

  return render(<MIMenuDropdown {...defaultProps} {...props} />);
};

describe('MIMenuDropdown', () => {
  it('renders the menu items and their optional icons when open', () => {
    renderMenu();

    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Profile' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Logout' })).toBeInTheDocument();
    expect(screen.getByTestId('profile-icon')).toBeInTheDocument();
  });

  it('does not render the menu when closed', () => {
    renderMenu({ anchorEl: null, open: false });

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('calls the item action and closes the menu when an item is clicked', () => {
    const handleItemClick = vi.fn();
    const handleClose = vi.fn();
    renderMenu({
      onClose: handleClose,
      items: [{ label: 'Settings', onClick: handleItemClick }],
    });

    fireEvent.click(screen.getByRole('menuitem', { name: 'Settings' }));

    expect(handleItemClick).toHaveBeenCalledOnce();
    expect(handleClose).toHaveBeenCalledOnce();
    expect(handleItemClick.mock.invocationCallOrder[0]).toBeLessThan(
      handleClose.mock.invocationCallOrder[0]
    );
  });

  it('calls handleClose when the Escape key is pressed', () => {
    const handleClose = vi.fn();
    renderMenu({ onClose: handleClose });

    fireEvent.keyDown(screen.getByRole('menu'), { key: 'Escape' });

    expect(handleClose).toHaveBeenCalledOnce();
  });

  it('forwards standard Menu props', () => {
    renderMenu({ className: 'custom-menu', id: 'account-menu' });

    expect(document.getElementById('account-menu')).toHaveClass('custom-menu');
  });
});

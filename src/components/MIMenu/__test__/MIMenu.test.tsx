import { useState } from 'react';

import { fireEvent, render, screen, waitFor } from '../../../test-utils';
import MIMenu, { MIMenuProps } from '../MIMenu';
import MIMenuItem from '../MIMenuItem/MIMenuItem';

const renderMenu = (props: Partial<MIMenuProps> = {}) => {
  const defaultProps: MIMenuProps = {
    anchorEl: document.body,
    onClose: vi.fn(),
    open: true,
  };

  return render(
    <MIMenu {...defaultProps} {...props}>
      <li>Profile</li>
      <li>Logout</li>
    </MIMenu>
  );
};

const ControlledMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <>
      <button onClick={(event) => setAnchorEl(event.currentTarget)}>Open menu</button>
      <MIMenu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        <MIMenuItem label="Profile" onClick={vi.fn()} />
        <MIMenuItem label="Logout" onClick={vi.fn()} />
      </MIMenu>
    </>
  );
};

describe('MIMenu', () => {
  it('renders the children when open', () => {
    renderMenu();

    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  it('does not render the menu when closed', () => {
    renderMenu({ anchorEl: null, open: false });

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('calls onClose when the Escape key is pressed', () => {
    const handleClose = vi.fn();
    renderMenu({ onClose: handleClose });

    fireEvent.keyDown(screen.getByRole('menu'), { key: 'Escape' });

    expect(handleClose).toHaveBeenCalledOnce();
  });

  it('forwards standard Menu props', () => {
    renderMenu({ className: 'custom-menu', id: 'account-menu' });

    expect(document.getElementById('account-menu')).toHaveClass('custom-menu');
  });

  describe('accessibility', () => {
    it('moves focus to the first item when it opens', () => {
      render(<ControlledMenu />);

      fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));

      expect(screen.getByRole('menuitem', { name: 'Profile' })).toHaveFocus();
    });

    it('supports moving focus between items with the arrow keys', () => {
      render(<ControlledMenu />);

      fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
      fireEvent.keyDown(screen.getByRole('menuitem', { name: 'Profile' }), {
        key: 'ArrowDown',
      });

      expect(screen.getByRole('menuitem', { name: 'Logout' })).toHaveFocus();
    });

    it('returns focus to the anchor element when closed', async () => {
      render(<ControlledMenu />);

      const trigger = screen.getByRole('button', { name: 'Open menu' });
      trigger.focus();
      fireEvent.click(trigger);
      fireEvent.keyDown(screen.getByRole('menu'), { key: 'Escape' });

      await waitFor(() => expect(trigger).toHaveFocus());
    });
  });
});


import { useState } from 'react';

import { fireEvent, render, screen, waitFor } from '../../../test-utils';
import MIMenu, { MIMenuProps } from '../MIMenu';

const defaultItems: MIMenuProps['items'] = [
  { label: 'Profile', onClick: vi.fn() },
  { label: 'Logout', onClick: vi.fn() },
];

const renderMenu = (props: Partial<MIMenuProps> = {}) => {
  const defaultProps: MIMenuProps = {
    anchorEl: document.body,
    onClose: vi.fn(),
    open: true,
    items: defaultItems,
  };

  return render(<MIMenu {...defaultProps} {...props} />);
};

const ControlledMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <>
      <button onClick={(event) => setAnchorEl(event.currentTarget)}>Open menu</button>
      <MIMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        items={defaultItems}
      />
    </>
  );
};

describe('MIMenu', () => {
  it('renders a MIMenuItem for each item when open', () => {
    renderMenu();

    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Profile' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Logout' })).toBeInTheDocument();
  });

  it('renders a divider between items but not after the last one', () => {
    renderMenu({
      items: [
        { label: 'Profile', onClick: vi.fn() },
        { label: 'Settings', onClick: vi.fn() },
        { label: 'Logout', onClick: vi.fn() },
      ],
    });

    // Menu portals outside the render container, so query the whole document
    expect(document.querySelectorAll('li.MuiDivider-root')).toHaveLength(2);
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

  it('calls the top-level onClick when the menu is clicked', () => {
    const handleClick = vi.fn();
    renderMenu({ onClick: handleClick });

    fireEvent.click(screen.getByRole('menu'));

    expect(handleClick).toHaveBeenCalledOnce();
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



import { ListItemIcon, ListItemText, Menu, MenuItem, MenuProps } from '@mui/material';
import { SyntheticEvent, FC, ReactNode } from 'react';

export type MIMenuDropdownProps = {
  items: Array<{
    label: string;
    onClick: VoidFunction;
    icon?: ReactNode;
  }>;
  handleClose: VoidFunction;
  selected?: string;
} & MenuProps;

const MIMenuDropdown: FC<MIMenuDropdownProps> = ({
  items,
  handleClose,
  open,
  anchorEl,
  selected,
  ...props
}) => {
  const wrapOnClick = (itemOnClick?: () => void) => (e: SyntheticEvent) => {
    e.preventDefault();

    itemOnClick?.();
    handleClose();
  };

  const isItemSelected = (itemLabel: string): boolean => itemLabel === selected;

  return (
    <Menu
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{
        vertical: -8,
        horizontal: 'right',
      }}
      onClose={handleClose}
      aria-labelledby="menu-dropdown"
      {...props}
    >
      {items.map(({ label, icon, onClick: itemOnClick }, index) => {
        const isSelected = isItemSelected(label);

        return (
          <MenuItem
            key={`menu-item-${index}-${label}`}
            onClick={wrapOnClick(itemOnClick)}
            sx={(theme) => ({
              display: 'flex',
              py: 1,
              px: 2,
              cursor: 'pointer',
              color: theme.colors.blue[500],
              '& .MuiListItemIcon-root': {
                color: 'inherit',
              },
              '& .MuiListItemText-root': {
                color: 'inherit',
              },
              '&.Mui-selected': {
                backgroundColor: isSelected ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                color: theme.colors.blue[500],
              },
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            })}
            selected={isSelected}
            aria-selected={isSelected}
          >
            {icon && <ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText primary={label} />
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default MIMenuDropdown;

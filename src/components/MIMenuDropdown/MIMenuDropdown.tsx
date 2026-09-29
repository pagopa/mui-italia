import { Divider, ListItemIcon, ListItemText, Menu, MenuItem, MenuProps } from '@mui/material';
import { Fragment, SyntheticEvent, FC, ReactNode } from 'react';

export type MIMenuDropdownProps = {
  items: Array<{
    label: string;
    onClick: VoidFunction;
    icon?: ReactNode;
  }>;
  handleClose: VoidFunction;
} & MenuProps;

const MIMenuDropdown: FC<MIMenuDropdownProps> = ({
  items,
  handleClose,
  open,
  anchorEl,
  ...props
}) => {
  const wrapOnClick = (itemOnClick?: () => void) => (e: SyntheticEvent) => {
    e.preventDefault();

    itemOnClick?.();
    handleClose();
  };

  return (
    <Menu
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      onClose={handleClose}
      aria-labelledby="menu-dropdown"
      MenuListProps={{ sx: { p: 0 }, ...props.MenuListProps }}
      slotProps={{
        paper: {
          sx: (theme) => ({
            width: '17rem',
            borderRadius: theme.spacing(1),
          }),
        },
        ...props.slotProps,
      }}
      {...props}
    >
      {items.map(({ label, icon, onClick: itemOnClick }, index) => (
        <Fragment key={`menu-item-${index}-${label}`}>
          <MenuItem
            onClick={wrapOnClick(itemOnClick)}
            sx={(theme) => ({
              display: 'flex',
              cursor: 'pointer',
              m: 0,
              py: 1,
              color: theme.colors.blue[500],
              '& .MuiListItemIcon-root': {
                color: 'inherit',
              },
              '& .MuiListItemText-root': {
                color: 'inherit',
              },
             
            })}
          >
            {icon && <ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText sx={{ overflowWrap: 'break-word' }} primary={label} />
          </MenuItem>
          {index < items.length - 1 && <Divider sx={{borderColor: (theme) => theme.colors.neutral.grey[100] , margin: '0!important'}} component="li" />}
        </Fragment>
      ))}
    </Menu>
  );
};

export default MIMenuDropdown;

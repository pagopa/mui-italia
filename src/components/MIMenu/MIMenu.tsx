import { MenuProps } from '@mui/material';
import { FC, MouseEventHandler } from 'react';
import { StyledMenu } from './StyledMenu';
import MIMenuDivider from './MIMenuDivider/MIMenuDivider';
import MIMenuItem, { MIMenuItemProps } from './MIMenuItem/MIMenuItem';

export type MIMenuProps = Omit<MenuProps, 'children'> & {
  items: Array<MIMenuItemProps>;
  onClick?: MouseEventHandler<HTMLElement>;
};

const MIMenu: FC<MIMenuProps> = ({ items, ...props }) => (
  <StyledMenu anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} {...props}>
    {items.flatMap((item, index) => [
      <MIMenuItem key={`item-${index}`} {...item} />,
      ...(index < items.length - 1 ? [<MIMenuDivider key={`divider-${index}`} />] : []),
    ])}
  </StyledMenu>
);

export default MIMenu;

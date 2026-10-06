import { MenuProps } from '@mui/material';
import { FC, MouseEventHandler } from 'react';
import { MIDivider } from '@components/MIDivider';
import { StyledMenu } from './StyledMenu';
import MIMenuItem, { MIMenuItemProps } from './MIMenuItem/MIMenuItem';

type MIMenuListItem = MIMenuItemProps & { id: string };

export type MIMenuProps = Omit<MenuProps, 'children'> & {
  items: Array<MIMenuListItem>;
  onClick?: MouseEventHandler<HTMLElement>;
};

const MIMenu: FC<MIMenuProps> = ({ items, ...props }) => (
  <StyledMenu {...props}>
    {items.flatMap((item, index) => [
      <MIMenuItem key={item.id} {...item} />,
      ...(index < items.length - 1 ? [<MIDivider key={`divider-${item.id}`} />] : []),
    ])}
  </StyledMenu>
);

export default MIMenu;

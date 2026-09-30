import { MenuProps } from '@mui/material';
import { FC } from 'react';
import { StyledMenu } from './StyledMenu';

export type MIMenuProps = MenuProps;

const MIMenu: FC<MIMenuProps> = ({ children, ...props }) => (
  <StyledMenu anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} {...props}>
    {children}
  </StyledMenu>
);

export default MIMenu;

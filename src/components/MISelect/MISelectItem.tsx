'use client';

import { MenuItem as MuiMenuItem, type MenuItemProps } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { forwardRef, type ReactNode } from 'react';

export type MISelectItemProps = Omit<MenuItemProps, 'children'> & {
  children: ReactNode;
  startIcon?: ReactNode;
};

const StyledMenuItem = styled(MuiMenuItem)(({ theme }) => ({
  
  alignItems: 'center',
  columnGap: theme.spacing(1),
  minHeight: 'auto',
  padding: theme.spacing(1.2, 2),
  color: theme.colors.neutral.black,
  fontSize: theme.typography.pxToRem(16),
  fontWeight: theme.typography.fontWeightMedium,
  lineHeight: 1.375,
  whiteSpace: 'normal',
  '& + &': {
    borderTop: `1px solid ${theme.colors.neutral.grey[100]}`,
  },
  '&:hover': {
    backgroundColor: theme.colors.neutral.grey[50],
  },
  '&.Mui-selected': {
    backgroundColor: alpha(theme.colors.blue[500], 0.08),
    '&:hover': {
      backgroundColor: alpha(theme.colors.blue[500], 0.08),
    },
  },
}));

const StartIcon = styled('span')(({ theme }) => ({
  display: 'inline-flex',
  flex: `0 0 ${theme.typography.pxToRem(22)}`,
  alignItems: 'center',
  justifyContent: 'center',
  height: theme.typography.pxToRem(22),
  color: theme.colors.neutral.grey[300],
  '& > svg': {
    width: theme.typography.pxToRem(16),
    height: theme.typography.pxToRem(16),
  },
}));

const MISelectItem = forwardRef<HTMLLIElement, MISelectItemProps>(
  ({ children, startIcon, ...props }, ref) => (
    <StyledMenuItem ref={ref} {...props}>
      {startIcon != null && <StartIcon aria-hidden="true">{startIcon}</StartIcon>}
      {children}
    </StyledMenuItem>
  )
);

MISelectItem.displayName = 'MISelectItem';

export default MISelectItem;
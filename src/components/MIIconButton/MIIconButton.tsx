import { IconButton, IconButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FC } from 'react';
import { focusWidth } from 'theme/theme';
import { pxToRem } from 'theme/utility';

export type MIIconButtonProps = Pick<
  IconButtonProps,
  'onClick' | 'size' | 'edge' | 'aria-label' | 'children' | 'disabled' | 'sx'
>;

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.colors.blue[500],
  '&:active, &:hover': {
    backgroundColor: theme.colors.blue[50],
  },
  '&.Mui-focusVisible': {
    outline: `solid ${focusWidth} ${theme.colors.blue[400]}`,
    outlineOffset: '2px',
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  minHeight: pxToRem(24),
  minWidth: pxToRem(24),
}));

const MIIconButton: FC<MIIconButtonProps> = (props) => <StyledIconButton {...props} />;

export default MIIconButton;

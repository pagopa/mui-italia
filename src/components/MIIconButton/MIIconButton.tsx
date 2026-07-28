import { IconButton, IconButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MarginSxProps } from '@lib-types/components';
import { FC } from 'react';
import { focusWidth } from 'theme/theme';
import { pxToRem } from 'theme/utility';

export interface MIIconButtonProps
  extends Pick<IconButtonProps, 'onClick' | 'size' | 'edge' | 'aria-label' | 'children'> {
  sx?: MarginSxProps;
}

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

import { IconButton, IconButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FC } from 'react';
import { blue } from 'theme/colors';
import { focusButtonOffset, focusWidth } from 'theme/theme';
import { pxToRem } from 'theme/utility';

type MIIconButtonProps = Omit<IconButtonProps, 'color' | 'disableFocusRipple' | 'disableRipple'>;

const StyledIconButton = styled(IconButton)({
  color: blue[500],
  '&:active, &:hover': {
    backgroundColor: blue[50],
  },
  '&.Mui-focusVisible': {
    outline: `solid ${focusWidth} ${blue[400]}`,
    outlineOffset: `${focusButtonOffset}`,
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  minHeight: pxToRem(24),
  minWidth: pxToRem(24),
});

const MIIconButton: FC<MIIconButtonProps> = (props) => <StyledIconButton {...props} />;

export default MIIconButton;

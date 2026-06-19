import { IconButton, IconButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MarginSxProps } from '@types';
import { FC } from 'react';
import { blue } from 'theme/colors';
import { colors } from 'theme/foundations/colors';
import { focusWidth } from 'theme/theme';
import { pxToRem } from 'theme/utility';

interface MIIconButtonProps
  extends Pick<IconButtonProps, 'onClick' | 'size' | 'edge'>,
    Omit<React.HTMLAttributes<HTMLButtonElement>, 'color'> {
  sx?: MarginSxProps;
}

const StyledIconButton = styled(IconButton)({
  color: blue[500],
  '&:active, &:hover': {
    backgroundColor: blue[50],
  },
  '&.Mui-focusVisible': {
    outline: `solid ${focusWidth} ${colors.blue[400]}`,
    outlineOffset: '2px',
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  minHeight: pxToRem(24),
  minWidth: pxToRem(24),
});

const MIIconButton: FC<MIIconButtonProps> = (props) => <StyledIconButton {...props} />;

export default MIIconButton;

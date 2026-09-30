import MuiSwitch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { forwardRef } from 'react';

type MISwitchProps = Omit<
  SwitchProps,
  'color' | 'size' | 'classes' | 'className' | 'style' | 'focusVisibleClassName'
>;

const StyledSwitch = styled(MuiSwitch)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    '& + .MuiSwitch-track': {
      backgroundColor: theme.colors.neutral.grey[700],
    },
    '&.Mui-focusVisible': {
      '& .MuiSwitch-thumb': {
        color: theme.colors.neutral.grey[700],
      },
    },
    '&.Mui-checked': {
      '&.Mui-focusVisible': {
        '& .MuiSwitch-thumb': {
          color: theme.colors.blue[500],
        },
      },
      '& + .MuiSwitch-track': {
        backgroundColor: theme.colors.blue[500],
      },
    },
  },
}));

export const MISwitch = forwardRef<HTMLButtonElement, MISwitchProps>((props, ref) => (
  <StyledSwitch ref={ref} {...props} />
));

MISwitch.displayName = 'MISwitch';

export default MISwitch;

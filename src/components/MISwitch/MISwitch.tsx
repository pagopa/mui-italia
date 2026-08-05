import MuiSwitch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

interface MISwitchProps extends SwitchProps {}

const StyledSwitch = styled(MuiSwitch)(({ theme }) => ({
  '& .MuiSwitch-colorPrimary': {
    '&.MuiSwitch-switchBase': {
      '& + .MuiSwitch-track': {
        backgroundColor: theme.colors.neutral.grey[700], // '#555C70',
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
          backgroundColor: theme.colors.blue[500], // '#555C70',
        },
      },
    },
  },
}));

export const MISwitch: React.FC<MISwitchProps> = (props) => {
  return <StyledSwitch {...props} />;
};

export default MISwitch;

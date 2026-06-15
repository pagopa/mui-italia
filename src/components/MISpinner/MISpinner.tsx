import MuiCircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import { MarginSxProps } from '@types';
import { colors } from 'theme/foundations/colors';

export type AllowedMISpinnerColor = 'primary' | 'secondary';

export interface MISpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: AllowedMISpinnerColor;
  sx?: MarginSxProps;
}

const StyledSpinner = styled(MuiCircularProgress)(({ color = 'primary' }) => ({
  borderRadius: '50%',
  color: color === 'secondary' ? colors.neutral.white : colors.blue[500],
  '&.MuiCircularProgress-indeterminate': {
    '@supports (mask-image: radial-gradient(farthest-side, transparent 0, black 100%))': {
      '& svg': {
        display: 'none',
      },
      maskImage:
        'radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))',
      WebkitMaskImage:
        'radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))',
      background: `
        radial-gradient(circle closest-side, currentColor calc(100% - 0.5px), transparent 100%) 50% 0 / 2px 2px no-repeat,
        conic-gradient(from 0deg, transparent 0%, currentColor 30%, currentColor 100%)
      `,
    },
  },
}));

export const MISpinner: React.FC<MISpinnerProps> = ({ color = 'primary', ...rest }) => (
  <StyledSpinner color={color} size={24} {...rest} />
);

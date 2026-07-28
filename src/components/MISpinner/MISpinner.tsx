import { Theme } from '@mui/material';
import MuiCircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import { MarginSxProps } from '@lib-types/components';

export type AllowedMISpinnerColor = 'primary' | 'secondary' | 'error';

export interface MISpinnerProps
  extends Pick<CircularProgressProps, 'size'>,
    React.HTMLAttributes<HTMLSpanElement> {
  color?: AllowedMISpinnerColor;
  sx?: MarginSxProps;
}

const SPINNER_COLOR: (theme: Theme) => Record<AllowedMISpinnerColor, string> = (theme) => ({
  primary: theme.colors.blue[500],
  secondary: theme.colors.neutral.white,
  error: theme.colors.error[600],
});

const StyledSpinner = styled(MuiCircularProgress)(({ theme, color = 'primary' }) => ({
  borderRadius: '50%',
  color: SPINNER_COLOR(theme)[color as AllowedMISpinnerColor],
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

const MISpinner: React.FC<MISpinnerProps> = ({ color = 'primary', ...rest }) => (
  <StyledSpinner color={color} size={24} {...rest} />
);

export default MISpinner;

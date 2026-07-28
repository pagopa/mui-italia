import { FC } from 'react';
import MuiPaper, { PaperProps as MuiPaperProps } from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { RadiusVariant } from '@lib-types/components';

type Padding = 16 | 24;
type AllowedMIPaperVariants = 'flat' | 'outlined';

type StyledPaperProps = {
  ownerState: {
    borderRadius: RadiusVariant;
    padding: Padding;
    variant: AllowedMIPaperVariants;
  };
};

export type MIPaperProps = Omit<MuiPaperProps, 'elevation' | 'square' | 'variant'> & {
  borderRadius?: RadiusVariant;
  padding?: Padding;
  variant?: AllowedMIPaperVariants;
};

const StyledPaper = styled(MuiPaper, {
  shouldForwardProp: (prop) => prop !== 'ownerState',
})<StyledPaperProps>(({ theme, ownerState }) => {
  const { padding, borderRadius, variant } = ownerState;

  return {
    boxShadow: 'none',
    padding: `${padding}px`,
    borderRadius: theme.shape.radius[borderRadius],
    ...(variant === 'outlined' && {
      border: `1px solid ${theme.colors.neutral.grey[100]}`,
    }),
    ...(variant === 'flat' && {
      border: 'none',
    }),
  };
});

const MIPaper: FC<MIPaperProps> = (props) => {
  const { borderRadius = 8, padding = 16, variant = 'flat', sx, ...other } = props;

  return (
    <StyledPaper
      elevation={0}
      ownerState={{
        borderRadius,
        padding,
        variant,
      }}
      sx={sx}
      {...other}
    />
  );
};

export default MIPaper;

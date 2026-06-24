import { FC } from 'react';
import MuiPaper, { PaperProps as MuiPaperProps } from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { RadiusVariant } from '@types';

type Padding = 16 | 24;
type AllowedMIPaperVariants = 'flat' | 'outlined';

export type BaseMIPaperProps = Omit<MuiPaperProps, 'elevation' | 'square' | 'variant'> & {
  borderRadius?: RadiusVariant;
  padding?: Padding;
  variant?: AllowedMIPaperVariants;
};

const StyledPaper = styled(MuiPaper, {
  shouldForwardProp: (prop) =>
    prop !== 'customBorderRadius' && prop !== 'customPadding' && prop !== 'customVariant',
})<{
  customBorderRadius: RadiusVariant;
  customPadding: Padding;
  customVariant: AllowedMIPaperVariants;
}>(({ theme, customBorderRadius, customPadding, customVariant }) => ({
  boxShadow: 'none',
  padding: `${customPadding}px`,
  borderRadius: theme.shape.radius[customBorderRadius],
  ...(customVariant === 'outlined' && {
    border: `1px solid ${theme.colors.neutral.grey[100]}`,
  }),
  ...(customVariant === 'flat' && {
    border: 'none',
  }),
}));

const MIPaper: FC<BaseMIPaperProps> = (props) => {
  const { borderRadius = 8, padding = 16, variant = 'flat', sx, ...other } = props;
  return (
    <StyledPaper
      elevation={0}
      variant={variant === 'outlined' ? 'outlined' : 'elevation'}
      customBorderRadius={borderRadius}
      customPadding={padding}
      customVariant={variant}
      sx={sx}
      {...other}
    />
  );
};

export default MIPaper;

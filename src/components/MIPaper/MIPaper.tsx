import React, { FC } from 'react';
import MuiPaper, { PaperProps as MuiPaperProps } from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { theme } from '@theme';

/**
 * Prop design system per il componente MIPaper
 * BORDER RADIUS: 8, 16, 24 -> corners
 * PADDING: 16, 24
 * ELEVATION: O ESCLUSIVAMENTE
 * STROKE GRIGIO DI 1 SOLO TIPO -> variant
 */

type BorderRadius = 8 | 16 | 24;
type Padding = 16 | 24;
type AllowedMIPaperVariants = 'flat' | 'outlined';

export type BaseMIPaperProps = Omit<MuiPaperProps, 'elevation' | 'square' | 'variant'> & {
  borderRadius?: BorderRadius;
  padding?: Padding;
  variant?: AllowedMIPaperVariants;
};
// ereditiamo le prop children, classes, component, sx, variant (con o senza stroke)

const StyledPaper = styled(MuiPaper, {
  shouldForwardProp: (prop) =>
    prop !== 'customBorderRadius' && prop !== 'customPadding' && prop !== 'customVariant',
})<{
  customBorderRadius: BorderRadius;
  customPadding: Padding;
  customVariant: AllowedMIPaperVariants;
}>(({ theme, customBorderRadius, customPadding, customVariant }) => ({
  boxShadow: 'none',
  backgroundImage: 'none', // for dark mode, to avoid gradient background
  padding: `${customPadding}px`,
  borderRadius: `${customBorderRadius}px`,
  ...(customVariant === 'outlined' && {
    border: `1px solid ${theme.palette.grey[300]}`,
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

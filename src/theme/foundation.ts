import { alpha, createTheme, Theme } from '@mui/material/styles';
import { shadowColor, colorTextPrimary, customPalette } from './foundations/colors';
import { mainTypeface } from './foundations/fonts';

const shadowValues = {
  /* Elevation 4 */
  4: `0px 2px 4px -1px ${alpha(shadowColor, 0.1)},
        0px 4px 5px ${alpha(shadowColor, 0.05)},
        0px 1px 10px ${alpha(shadowColor, 0.1)}`,
  /* Elevation 8 = Elevation 16 */
  8: `0px 8px 10px -5px ${alpha(shadowColor, 0.1)},
        0px 16px 24px 2px ${alpha(shadowColor, 0.05)},
        0px 6px 30px 5px ${alpha(shadowColor, 0.1)}`,
  /* Elevation 16 */
  16: `0px 8px 10px -5px ${alpha(shadowColor, 0.1)},
        0px 16px 24px 2px ${alpha(shadowColor, 0.05)},
        0px 6px 30px 5px ${alpha(shadowColor, 0.1)}`,
};

const shadowsArray = Array(25).fill('none') as any;

const foundation: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: 'light',
    ...customPalette,
  },
  typography: {
    /* Using a constant because type variants
    don't inherit the typeface general color */
    allVariants: {
      color: colorTextPrimary,
    },
    /* Using a constant because type variants
    don't inherit the typeface font family */
    fontFamily: mainTypeface,
    fontWeightRegular: 400,
    fontWeightMedium: 600 /* Semibold */,
    fontWeightBold: 700,
    fontSize: 16,
    htmlFontSize: 16,
  },
  shadows: { ...shadowsArray, ...shadowValues },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
});

export default foundation;

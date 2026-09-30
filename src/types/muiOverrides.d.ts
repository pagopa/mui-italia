import '@mui/material/styles';
import '@mui/system';

import { colors } from '../theme/colors';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true;
  }

  interface ThemeOptions {
    colors?: typeof colors;
  }

  interface Theme {
    colors: typeof colors;
  }

    interface Palette {
    pagoPA: Palette['primary'];
    europeanUnion: Palette['primary'];
    checkIban: Palette['primary'];
    extraLight: Palette['warning'];
    primaryAction: Palette['action'];
    primaryContained: PrimaryContainedPalette;
    shadow: ShadowPalette;
    backdrop: BackgroundPalette;
    menuItem: BackgroundPalette;
    decorativeIcon?: string;
    negative: SimplePaletteColorOptions;
    indigo: Palette['primary'];
  }

  type PrimaryContainedPalette = {
    hover: string;
  };

  type ShadowPalette = {
    main: string;
  };

  type BackgroundPalette = {
    background: string;
  };

  interface PaletteOptions {
    pagoPA?: PaletteOptions['primary'];
    europeanUnion?: PaletteOptions['primary'];
    checkIban?: PaletteOptions['primary'];
    extraLight?: PaletteOptions['warning'];
    primaryAction?: PaletteOptions['action'];
    negative?: SimplePaletteColorOptions;
    indigo?: SimplePaletteColorOptions;
  }

  interface PaletteColor {
    extraLight?: string;
    100: string;
    850: string;
  }

  interface SimplePaletteColorOptions {
    dark?: string;
    light?: string;
    contrastText?: string;
    extraLight?: string;
  }
}

declare module '@mui/system' {
  interface ShapeOptions {
    radius?: {
      4: string;
      8: string;
      16: string;
      24: string;
    };
  }

  interface Shape {
    radius: {
      4: string;
      8: string;
      16: string;
      24: string;
    };
  }
}

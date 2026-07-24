import '@mui/material/styles';
import '@mui/system';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true;
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

declare module '@mui/material/styles' {
  interface ThemeOptions {
    colors?: typeof colors;
  }

  interface Theme {
    colors: typeof colors;
  }
}

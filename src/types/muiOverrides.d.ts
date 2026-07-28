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

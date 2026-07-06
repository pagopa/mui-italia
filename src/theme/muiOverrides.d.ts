import '@mui/system';

declare module '@mui/system' {
  interface ShapeOptions {
    radius?: {
      8: string;
      16: string;
      24: string;
    };
  }

  interface Shape {
    radius: {
      8: string;
      16: string;
      24: string;
    };
  }

}

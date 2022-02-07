import { createTheme, Theme } from "@mui/material/styles";
import { createBreakpoints } from '@mui/system';

/* Design Tokens */
import italia from "./colors/italia";

/* Typefaces */
import "@fontsource/titillium-web/300.css";
import "@fontsource/titillium-web/400.css";
import "@fontsource/titillium-web/600.css";
import "@fontsource/titillium-web/700.css";

const breakpoints = createBreakpoints({});

function pxToRem(value: number): string {
  return `${value / 16}rem`;
}

/* Basic Configuration */
const mainTypeface = ['"Titillium Web"', "sans-serif"].join(", ");
const colorText = "#17324D";
const responsiveBreakpoint = "md";

/* Custom Typography */
declare module "@mui/material/styles" {
  interface TypographyVariants {
    headline: React.CSSProperties;
    sidenav: React.CSSProperties;
    "caption-semibold": React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    headline?: React.CSSProperties;
    sidenav?: React.CSSProperties;
    "caption-semibold"?: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    headline: true;
    sidenav: true;
    "caption-semibold": true;
  }
}

/* Custom Palette */
declare module '@mui/material/styles' {
  interface Palette {
    blueItaly: Palette['primary'];
  }
 interface PaletteOptions {
    blueItaly?: PaletteOptions['primary'];
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    blueItaly: true;
  }
}

const theme: Theme = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "#FFFFFF",
      default: "#F2F6FA",
    },
    primary: {
      main: '#0073E6',
      light: '#2185E9',
      dark: '#0062C3',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: "#00C5CA",
      light: "#21CDD1",
      dark: "#00A7AC",
      contrastText: "#FFFFFF",
    },
    blueItaly: {
      main: '#0066CC',
      contrastText: '#fff',
    },
    text: {
      primary: "#17324D",
      secondary: "#5C6F82",
      disabled: "#A2ADB8",
    },
    action: {
      active: "rgba(23, 50, 77, 0.54)", /* Text/Primary 54% */
      hover: "rgba(23, 50, 77, 0.04)", /* Text/Primary 4% */
      selected: "rgba(23, 50, 77, 0.08)", /* Text/Primary 8% */
      disabled: "rgba(23, 50, 77, 0.26)", /* Text/Primary 26% */
      disabledBackground: "rgba(23, 50, 77, 0.12)", /* Text/Primary 12% */
      focus: "rgba(23, 50, 77, 0.12)", /* Text/Primary 12% */
    },
    /* Other */
    divider: '#E3E7EB',
    /* Indicator/Validation */
    error: {
      main: "#F83E5A",
      dark: "#D3354D",
      light: "#F9576F",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#02C3ED",
      dark: "#02A6C9",
      light: "#23CBEF",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#00CF86",
      dark: "#00B072",
      light: "#21D596",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#FF9700",
      dark: "#D98000",
      light: "#FFA421",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    /* Using a constant because type variants
    don't inherit the typeface general color */
    allVariants: {
      color: colorText,
    },
    /* Using a constant because type variants
    don't inherit the typeface font family */
    fontFamily: mainTypeface,
    fontSize: 16,
    htmlFontSize: 16,
    headline: { /* H1 Large */
      fontSize: pxToRem(56),
      fontFamily: mainTypeface,
      color: colorText,
      lineHeight: 1.1, /* ~60px */
      fontWeight: 700,
      letterSpacing: -0.5,
    },
    h1: {
      fontSize: pxToRem(40),
      lineHeight: 1.2, /* 48px */
      fontWeight: 700,
      letterSpacing: -0.5,
      [breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(56),
        lineHeight: 1.15, /* 64px */
      },
    },
    h2: {
      fontSize: pxToRem(32),
      lineHeight: 1.25, /* 40px */
      fontWeight: 700,
      letterSpacing: -0.2,
      [breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(48),
        lineHeight: 1.25, /* 60px */
      },
    },
    h3: {
      fontSize: pxToRem(28),
      lineHeight: 1.15, /* ~32px */
      fontWeight: 700,
      letterSpacing: -0.17,
      [breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(40),
        lineHeight: 1.2, /* 48px */
      },
    },
    h4: {
      fontSize: pxToRem(24),
      lineHeight: 1.15, /* ~28px */
      fontWeight: 700,
      letterSpacing: 0,
      [breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(32),
        lineHeight: 1.25, /* 40px */
      },
    },
    h5: {
      fontSize: pxToRem(20),
      lineHeight: 1.2, /* 24px */
      fontWeight: 400,
      letterSpacing: 0,
      [breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(28),
        lineHeight: 1.4, /* ~40px */
      },
    },
    h6: {
      fontSize: pxToRem(16),
      lineHeight: 1.5, /* 24px */
      fontWeight: 600,
      letterSpacing: 0,
      [breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(28),
        lineHeight: 1.4, /* ~40px */
      },
    },
    sidenav: {
      fontFamily: mainTypeface,
      fontSize: pxToRem(18),
      lineHeight: 1.5, /* ~28px */
      color: colorText,
      fontWeight: 600,
    },
    body1: {
      fontSize: pxToRem(16),
      lineHeight: 1.5, /* 24px */
      fontWeight: 400,
      letterSpacing: 0,
      [breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(18),
        lineHeight: 1.5, /* ~28px */
      },
      a: {
        color: italia[500],
        textDecoration: "underline",
      },
    },
    button: {
      fontWeight: 700,
      lineHeight: 1.2,
      textTransform: "none",
      letterSpacing: 0,
    },
    caption: {
      fontSize: pxToRem(14),
      lineHeight: 1.4, /* ~20px */
      fontWeight: 400,
    },
    "caption-semibold": {
      fontFamily: mainTypeface,
      fontSize: pxToRem(14),
      lineHeight: 1.4, /* ~20px */
      color: colorText,
      fontWeight: 600,
    },
    overline: {
      fontSize: pxToRem(14),
      lineHeight: 1.15, /* ~16px */
      fontWeight: 700,
      letterSpacing: 1,
    },

    /* Start: To be revised */
    subtitle1: {
      a: {
        color: italia[500],
        textDecoration: "underline",
      },
      fontWeight: 600
    },
    subtitle2: {
      fontWeight: 600,
    },
    body2: {
      a: {
        color: italia[500],
        textDecoration: "underline",
      },
      fontSize: 16,
      lineHeight: 1.5,
      fontWeight: 400,
    },
    /* End: To be revised */
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          "&:hover": {
            boxShadow: "inherit",
          },
          boxShadow:
            "inset 0 1px 0 rgb(255 255 255 / 15%), 0 1px 1px rgb(0 0 0 / 8%)",
          padding: "12px 24px",
        },
        sizeSmall: {
          fontsize: pxToRem(14),
          lineHeight: 1.25, /* ~18px */
        },
        sizeMedium: {
          fontsize: pxToRem(16),
          lineHeight: 1.25, /* 20px */
        },
        sizeLarge: {
          fontsize: pxToRem(18),
          lineHeight: 1.2, /* ~22px */
        },        
      },
      variants: [
        {
          props: { color: "secondary" },
          style: {
            "&:hover": {
              backgroundColor: "#4c5c6c",
            },
            backgroundColor: "#5c6f82",
            color: "#fff",
          },
        },
        {
          props: { variant: "text" },
          style: {
            boxShadow: "none",
          },
        },
      ],
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          fontSize: 14,
        },
      },

    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontWeight: 700,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
      tooltip: {
        fontWeight: 600
        }
      }
    }
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
});



export default theme;

import { createTheme, Theme } from "@mui/material/styles";
import italia from "./colors/italia";
import "@fontsource/titillium-web/300.css";
import "@fontsource/titillium-web/400.css";
import "@fontsource/titillium-web/600.css";
import "@fontsource/titillium-web/700.css";

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
    /* Start: @TODO: Update color values */
    error: {
      dark: "#b32d41",
      light: "#eba4af",
      main: "#f73e5a",
    },
    info: {
      main: "#979899",
    },
    success: {
      main: "#008758",
    },
    warning: {
      dark: "#cc7a00",
      main: "#ff9900",
    },
    
    /* End: Update color values */
  },
  components: {
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
        sizeLarge: {
          fontsize: 14,
          lineHeight: 1.72,
          letterSpacing: 0
        },
        sizeMedium: {
          fontWeight: 600
        },
        sizeSmall: {
          fontsize: 14,
          letterSpacing: 0,
          lineHeight: 1.72
        }
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
  typography: {
    allVariants: {
      color: "#17324D",
    },
    body1: {
      a: {
        color: italia[500],
        textDecoration: "underline",
      },
      fontSize: 18,
      fontWeight: 300,
      lineHeight: 1.56,
      letterSpacing: 0
    },
    body2: {
      a: {
        color: italia[500],
        textDecoration: "underline",
      },
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5
    },
    button: {
      fontWeight: 600,
      lineHeight: 1.2,
      textTransform: "none",
    },
    fontFamily: ['"Titillium Web"', "sans-serif"].join(", "),
    fontSize: 16,
    h1: {
      fontSize: 56,
      fontWeight: 700,
      lineHeight: 1.14,
      letterSpacing: -2,
    },
    h2: {
      fontSize: 48,
      fontWeight: 700,
      letterSpacing: -1.3
    },
    h3: {
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: -1,
    },
    h4: {
      fontSize: 32,
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: 1.25
    },
    h5: {
      fontSize: 28,
      fontWeight: 600,
      lineHeight: 1.43
    },
    h6: {
      fontSize: 24,
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: 0
    },
    htmlFontSize: 16,
    overline: {
      fontSize: 14,
      fontWeight: 700,
    },
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
  },
});
export default theme;

import { createTheme, Theme } from "@mui/material/styles";
import italia from "./colors/italia";
import "@fontsource/titillium-web/300.css";
import "@fontsource/titillium-web/400.css";
import "@fontsource/titillium-web/600.css";
import "@fontsource/titillium-web/700.css";

const theme: Theme = createTheme({
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
          lineHeight: 24,
          letterSpacing: 0
        },
        sizeMedium: {
          fontWeight: 600
        },
        sizeSmall: {
          fontsize: 14,
          letterSpacing: 0,
          lineHeight: 24
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
  palette: {
    background: {
      default: "#fff",
    },
    error: {
      dark: "#b32d41",
      light: "#eba4af",
      main: "#f73e5a",
    },
    info: {
      main: "#979899",
    },
    primary: {
      dark: italia[700],
      main: italia[500],
    },
    secondary: {
      main: "#5c6f82",
    },
    success: {
      main: "#008758",
    },
    text: {
      disabled: "#475A6D",
      primary: "#17324D",
      secondary: "#5C6F82",
    },
    warning: {
      dark: "#cc7a00",
      main: "#ff9900",
    },
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
      lineHeight: 28,
      letterSpacing: 0
    },
    body2: {
      a: {
        color: italia[500],
        textDecoration: "underline",
      },
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 24
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
      lineHeight: 64,
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
      lineHeight: 40
    },
    h5: {
      fontSize: 28,
      fontWeight: 600,
      lineHeight: 40
    },
    h6: {
      fontSize: 24,
      fontWeight: 400,
      lineHeight: 24,
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

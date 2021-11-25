import { createTheme, Theme } from "@mui/material/styles";
import italia from "./colors/italia";
import "@fontsource/titillium-web/300.css";
import "@fontsource/titillium-web/400.css";
import "@fontsource/titillium-web/600.css";
import "@fontsource/titillium-web/700.css";

const theme: Theme = createTheme({
  components: {
    // Name of the component
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
  },
  palette: {
    background: {
      default: "#fff",
    },
    error: {
      main: "#d9364f",
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
      main: "#a66300",
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
      lineHeight: 1.35,
    },
    body2: {
      a: {
        color: italia[500],
        textDecoration: "underline",
      },
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.2,
    },
    button: {
      fontWeight: 600,
      lineHeight: 1.2,
      textTransform: "none",
    },
    fontFamily: ['"Titillium Web"', "sans-serif"].join(", "),
    fontSize: 16,
    h1: {
      fontSize: 40,
      fontWeight: 700,
    },
    h2: {
      fontSize: 32,
      fontWeight: 700,
    },
    h3: {
      fontSize: 28,
      fontWeight: 700,
    },
    h4: {
      fontSize: 24,
      fontWeight: 600,
    },
    h5: {
      fontSize: 20,
      fontWeight: 400,
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.28,
    },
    htmlFontSize: 16,
    subtitle1: {
      a: {
        color: italia[500],
        textDecoration: "underline",
      },
      fontSize: 20,
      lineHeight: 1.35,
    },
  },
});
export default theme;

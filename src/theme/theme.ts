import { createTheme, Theme, alpha } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";

/* Design Tokens */
import { italia } from "@tokens";

/* Typefaces */
import "@fontsource/titillium-web/300.css";
import "@fontsource/titillium-web/400.css";
import "@fontsource/titillium-web/600.css";
import "@fontsource/titillium-web/700.css";

const breakpoints = createBreakpoints({});

export function pxToRem(value: number): string {
  return `${value / 16}rem`;
}

/* Basic Configuration */
const mainTypeface = ['"Titillium Web"', "sans-serif"].join(", ");
const colorTextPrimary = "#17324D";
const colorPrimaryContainedHover = "#0055AA"; // Not exposed by the theme object
const responsiveBreakpoint = "sm";
const ringWidth = "4px";
const alertBorderWidth = "4px";
const backdropBackground = "#17324D";

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
declare module "@mui/material/styles" {
  interface Palette {
    blueItaly: Palette["primary"];
    extraLight: Palette["warning"];
  }
  interface PaletteOptions {
    blueItaly?: PaletteOptions["primary"];
    extraLight?: Palette["warning"];
  }

  interface PaletteColor {
    extraLight?: string;
  }

  /* Add new extraLight key to the colours */
  interface PaletteColorOptions {
    main?: string;
    dark?: string;
    light?: string;
    contrastText?: string;
    extraLight?: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    blueItaly: true;
  }

  interface ButtonPropsVariantOverrides {
    secondary: false;
    naked: true;
  }
}

const foundation: Theme = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "#FFFFFF",
      default: "#F2F6FA",
    },
    primary: {
      main: "#0073E6",
      light: "#2185E9",
      dark: "#0062C3",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#00C5CA",
      light: "#21CDD1",
      dark: "#00A7AC",
      contrastText: "#FFFFFF",
    },
    blueItaly: {
      main: "#0066CC",
      contrastText: "#fff",
    },
    text: {
      primary: "#17324D",
      secondary: "#5C6F82",
      disabled: "#A2ADB8",
    },
    action: {
      active: "rgba(23, 50, 77, 0.54)" /* Text/Primary 54% */,
      hover: "rgba(23, 50, 77, 0.08)" /* Text/Primary 4% */,
      hoverOpacity: 0.08,
      selected: "rgba(23, 50, 77, 0.12)" /* Text/Primary 8% */,
      disabled: "rgba(23, 50, 77, 0.26)" /* Text/Primary 26% */,
      disabledBackground: "rgba(23, 50, 77, 0.12)" /* Text/Primary 12% */,
      focus: "rgba(23, 50, 77, 0.12)" /* Text/Primary 12% */,
    },
    /* Other */
    divider: "#E3E7EB",
    /* Indicator/Validation */
    error: {
      main: "#FE6666",
      dark: "#D85757",
      light: "#FE7A7A",
      extraLight: "#FB9EAC",
      contrastText: colorTextPrimary,
    },
    info: {
      main: "#6BCFFB",
      dark: "#5BB0D5",
      light: "#7ED5FC",
      extraLight: "#86E1FD",
      contrastText: colorTextPrimary,
    },
    success: {
      main: "#6CC66A",
      dark: "#5CA85A",
      light: "#7FCD7D",
      extraLight: "#B5E2B4",
      contrastText: colorTextPrimary,
    },
    warning: {
      main: "#FFCB46",
      dark: "#D9AD3C",
      light: "#FFD25E",
      extraLight: "#FFE5A3",
      contrastText: colorTextPrimary,
    },
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
    fontSize: 16,
    htmlFontSize: 16,
    /* H1 Large */
    headline: {
      fontSize: pxToRem(56),
      fontFamily: mainTypeface,
      color: colorTextPrimary,
      lineHeight: 1.1 /* ~60px */,
      fontWeight: 700,
      letterSpacing: -0.5,
    },
    h1: {
      fontSize: pxToRem(40),
      lineHeight: 1.2 /* 48px */,
      fontWeight: 700,
      letterSpacing: -0.5,
      [breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(56),
        lineHeight: 1.15 /* 64px */,
      },
    },
    h2: {
      fontSize: pxToRem(32),
      lineHeight: 1.25 /* 40px */,
      fontWeight: 700,
      letterSpacing: -0.2,
      [breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(48),
        lineHeight: 1.25 /* 60px */,
      },
    },
    h3: {
      fontSize: pxToRem(28),
      lineHeight: 1.15 /* ~32px */,
      fontWeight: 700,
      letterSpacing: -0.17,
      [breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(40),
        lineHeight: 1.2 /* 48px */,
      },
    },
    h4: {
      fontSize: pxToRem(24),
      lineHeight: 1.15 /* ~28px */,
      fontWeight: 700,
      letterSpacing: 0,
      [breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(32),
        lineHeight: 1.25 /* 40px */,
      },
    },
    h5: {
      fontSize: pxToRem(20),
      lineHeight: 1.2 /* 24px */,
      fontWeight: 400,
      letterSpacing: 0,
      [breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(28),
        lineHeight: 1.4 /* ~40px */,
      },
    },
    h6: {
      fontSize: pxToRem(16),
      lineHeight: 1.5 /* 24px */,
      fontWeight: 600,
      letterSpacing: 0,
      [breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(28),
        lineHeight: 1.4 /* ~40px */,
      },
    },
    sidenav: {
      fontFamily: mainTypeface,
      fontSize: pxToRem(18),
      lineHeight: 1.5 /* ~28px */,
      color: colorTextPrimary,
      fontWeight: 600,
    },
    body1: {
      fontSize: pxToRem(16),
      lineHeight: 1.5 /* 24px */,
      fontWeight: 400,
      letterSpacing: 0,
      [breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(18),
        lineHeight: 1.5 /* ~28px */,
      },
      /* a: {
        color: italia[500],
        textDecoration: "underline",
      }, */
    },
    body2: {
      fontSize: pxToRem(14),
      lineHeight: 1.4 /* ~20px */,
      fontWeight: 400,
      letterSpacing: 0.15,
      [breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(16),
        lineHeight: 1.4 /* ~22px */,
      },
      /* a: {
        color: italia[500],
        textDecoration: "underline",
      }, */
    },
    button: {
      fontWeight: 700,
      lineHeight: 1.2,
      textTransform: "none",
      letterSpacing: 0,
    },
    caption: {
      fontSize: pxToRem(14),
      lineHeight: 1.4 /* ~20px */,
      fontWeight: 400,
    },
    "caption-semibold": {
      fontFamily: mainTypeface,
      fontSize: pxToRem(14),
      lineHeight: 1.4 /* ~20px */,
      color: colorTextPrimary,
      fontWeight: 600,
    },
    overline: {
      fontSize: pxToRem(14),
      lineHeight: 1.15 /* ~16px */,
      fontWeight: 700,
      letterSpacing: 1,
    },

    /* Start: To be revised */
    subtitle1: {
      a: {
        color: italia[500],
        textDecoration: "underline",
      },
      fontWeight: 600,
    },
    subtitle2: {
      fontWeight: 600,
    },
    /* End: To be revised */
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
});

export const theme = createTheme(foundation, {
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
      },
      styleOverrides: {
        root: {
          padding: "0 20px",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 ${ringWidth} ${alpha(
              foundation.palette.primary.main,
              0.4
            )}`,
          },
        },

        sizeSmall: {
          height: "40px",
          padding: "0 20px",
          fontSize: pxToRem(14),
          lineHeight: 1.25 /* ~18px */,
        },
        sizeMedium: {
          height: "48px",
          padding: "0 24px",
          fontSize: pxToRem(16),
          lineHeight: 1.25 /* 20px */,
        },
        sizeLarge: {
          height: "56px",
          padding: "0 24px",
          fontSize: pxToRem(18),
          lineHeight: 1.2 /* ~22px */,
        },
        outlined: {
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
          },
        },
        outlinedPrimary: {
          borderColor: foundation.palette.primary.main,
          "&:hover": {
            color: foundation.palette.primary.dark,
            borderColor: "currentColor",
          },
        },
        outlinedError: {
          borderColor: foundation.palette.error.main,
          "&:hover": {
            color: foundation.palette.error.dark,
            borderColor: "currentColor",
          },
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 ${ringWidth} ${alpha(
              foundation.palette.error.main,
              0.4
            )}`,
          },
        },
      },
      variants: [
        {
          props: { variant: "naked" },
          style: {
            padding: 0,
            height: "auto",
            minWidth: "auto",
            color: foundation.palette.text.primary,
            "&:hover": {
              backgroundColor: "transparent",
            },
            "&.Mui-focusVisible": {
              boxShadow: `0 0 0 3px ${alpha(
                foundation.palette.text.primary,
                0.2
              )}`,
            },
          },
        },
        {
          props: { variant: "naked", color: "primary" },
          style: {
            color: foundation.palette.primary.main,
            "&:hover": {
              color: colorPrimaryContainedHover,
            },
            "&.Mui-focusVisible": {
              boxShadow: `0 0 0 3px ${alpha(
                foundation.palette.primary.main,
                0.35
              )}`,
            },
          },
        },
      ],
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: pxToRem(14),
          backgroundColor: "#455B71",
          fontWeight: 600,
          textAlign: "center",
          boxShadow: foundation.shadows[16],
        },
        arrow: {
          color: "#455B71",
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          fontSize: pxToRem(16),
          color: foundation.palette.text.primary,
        },
        separator: {
          color: foundation.palette.text.secondary,
        },
      },
    },
    /* START Alert */
    MuiAlert: {
      styleOverrides: {
        root: {
          borderLeft: `${alertBorderWidth} solid`,
          padding: foundation.spacing(1),
          color: colorTextPrimary,
          alignItems: "center",
          [breakpoints.up(responsiveBreakpoint)]: {
            padding: foundation.spacing(2),
          },
        },
        icon: {
          opacity: 1,
          alignItems: "center",
          marginRight: foundation.spacing(1),
          [breakpoints.up(responsiveBreakpoint)]: {
            marginRight: foundation.spacing(2),
          },
        },
        message: {
          padding: 0,
        },
        action: {
          marginRight: 0,
          paddingTop: 0,
        },
        standard: {
          "& .MuiAlert-icon": {
            color: colorTextPrimary,
          },
        },
        standardSuccess: {
          borderColor: foundation.palette.success.main,
        },
        outlinedSuccess: {
          borderColor: foundation.palette.success.main,
          "& .MuiAlert-icon": {
            color: foundation.palette.success.main,
          },
        },
        standardError: {
          borderColor: foundation.palette.error.main,
        },
        outlinedError: {
          borderColor: foundation.palette.error.main,
          "& .MuiAlert-icon": {
            color: foundation.palette.error.main,
          },
        },
        standardInfo: {
          borderColor: foundation.palette.info.main,
        },
        outlinedInfo: {
          borderColor: foundation.palette.info.main,
          "& .MuiAlert-icon": {
            color: foundation.palette.info.main,
          },
        },
        standardWarning: {
          borderColor: foundation.palette.warning.main,
        },
        outlinedWarning: {
          borderColor: foundation.palette.warning.main,
          "& .MuiAlert-icon": {
            color: foundation.palette.warning.main,
          },
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontSize: pxToRem(16),
          fontWeight: 600,
          letterSpacing: 0.15,
          margin: 0,
          /* It inherits from `body1`, so I have to reset -_- */
          [breakpoints.up(responsiveBreakpoint)]: {
            fontSize: pxToRem(16),
          },
        },
      },
    },
    /* END Alert */
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontSize: pxToRem(14),
          fontWeight: 600,
          letterSpacing: 0.15,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: pxToRem(14),
          lineHeight: 1.15 /* ~16px */,
          fontWeight: 600,
          letterSpacing: 0.5,
        },
        deleteIcon: {
          color: "currentColor",
          opacity: "0.7",
          "&:hover": {
            color: "currentColor",
            opacity: 1,
          },
        },
        avatar: {
          fontWeight: 400,
        },
        colorSecondary: {
          "&.MuiChip-filled": {
            backgroundColor: alpha(foundation.palette.secondary.main, 0.5),
            color: foundation.palette.text.primary,
          },
        },
        colorInfo: {
          "&.MuiChip-filled": {
            backgroundColor: foundation.palette.info.light,
            /* color: foundation.palette.text.primary, */
          },
          /* "& .MuiChip-avatar": {
            backgroundColor: foundation.palette.info.dark,
            color: foundation.palette.info.contrastText,
          }, */
        },
        colorError: {
          "&.MuiChip-filled": {
            backgroundColor: foundation.palette.error.light,
            /*  color: foundation.palette.text.primary, */
            /* color: foundation.palette.getContrastText(
              foundation.palette.error.extraLight as string
            ), */
          },
          /* "& .MuiChip-avatar": {
            backgroundColor: foundation.palette.error.dark,
            color: foundation.palette.error.contrastText,
          }, */
        },
        colorSuccess: {
          "&.MuiChip-filled": {
            backgroundColor: foundation.palette.success.light,
            /* color: foundation.palette.text.primary, */
            /* color: foundation.palette.getContrastText(
              foundation.palette.success.extraLight as string
            ), */
          },
          /* "& .MuiChip-avatar": {
            backgroundColor: foundation.palette.success.dark,
            color: foundation.palette.success.contrastText,
          }, */
        },
        colorWarning: {
          "&.MuiChip-filled": {
            backgroundColor: foundation.palette.warning.light,
            /* color: foundation.palette.text.primary, */
            /* color: foundation.palette.getContrastText(
              foundation.palette.warning.extraLight as string
            ), */
          },
          /* "& .MuiChip-avatar": {
            backgroundColor: foundation.palette.warning.dark,
            color: foundation.palette.warning.contrastText,
          }, */
        },
      },
    },
    /** Start TEXT FIELD */
    MuiInput: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          "& .MuiOutlinedInput-notchedOutline": {},
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: foundation.palette.error.dark,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: foundation.palette.text.secondary,
          fontWeight: 600,
          "&.Mui-error": {
            color: foundation.palette.error.dark,
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          "& .MuiSvgIcon-colorError": {
            color: `${foundation.palette.error.dark}`,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: pxToRem(12),
          lineHeight: 1.25 /* 15px */,
          color: foundation.palette.text.secondary,
          fontWeight: 600,
          letterSpacing: 0.5,
          "&.Mui-error": {
            color: foundation.palette.error.dark,
          },
        },
      },
    },
    /** End TEXT FIELD */
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(backdropBackground, 0.7),
        },
      },
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    /** Start LIST ITEM (used in Sidenav) */
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRight: "2px solid transparent",
          transitionProperty: "background-color, border-color",
          transitionDuration: foundation.transitions.duration.standard,
          paddingTop: foundation.spacing(2),
          paddingBottom: foundation.spacing(2),
          /* Selected State */
          "&.Mui-selected": {
            borderColor: foundation.palette.primary.main,
          },
          "&.Mui-selected .MuiListItemText-root": {
            color: foundation.palette.primary.main,
          },
          "&.Mui-selected .MuiListItemIcon-root": {
            color: foundation.palette.primary.main,
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          transition: `${foundation.transitions.duration.standard}ms ${foundation.transitions.easing.easeInOut}`,
          transitionProperty: "color",
          color: foundation.palette.text.primary,
          margin: 0,
        },
        primary: {
          fontWeight: 600,
          color: "currentColor",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          /* Default Icon Size = 24px */
          fontSize: pxToRem(24),
          transition: `${foundation.transitions.duration.standard}ms ${foundation.transitions.easing.easeInOut}`,
          transitionProperty: "color",
          minWidth: "auto",
          color: foundation.palette.text.primary,
          "& + .MuiListItemText-root": {
            marginLeft: foundation.spacing(2),
          },
        },
      },
    },
    /** End LIST ITEM */
    MuiTableHead: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
});

import { createTheme, Theme, alpha } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";

/* Design Tokens */
import { italia } from "@tokens";

/* Typefaces */
/* -- Titilium */
import "@fontsource/titillium-web/300.css";
import "@fontsource/titillium-web/400.css";
import "@fontsource/titillium-web/600.css";
import "@fontsource/titillium-web/700.css";
/* -- DM Mono */
import "@fontsource/dm-mono/400.css";

export function pxToRem(value: number): string {
  return `${value / 16}rem`;
}

/* Basic Configuration */
const mainTypeface = ['"Titillium Web"', "sans-serif"].join(", ");
const monospacedTypeface = ['"DM Mono"', "monospace"].join(", ");
const colorTextPrimary = "#17324D";
const colorPrimaryContainedHover = "#0055AA"; // Not exposed by the theme object
const responsiveBreakpoint = "sm";
export const ringWidth = "4px";
const marginLinkSize = "4px";
export const focusWidth = "2px";
export const focusBorderRadius = "8px";
export const focusOffset = "4px";
const focusButtonOffset = "2px";
const alertBorderWidth = "4px";
const backdropBackground = "#17324D";
const menuItemBackground = "#17324D";
const shadowColor = "#002B55";

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

const shadowsArray = Array(25).fill("none") as any;

/* Custom Typography */
declare module "@mui/material/styles" {
  interface TypographyVariants {
    headline: React.CSSProperties;
    sidenav: React.CSSProperties;
    monospaced: React.CSSProperties;
    "caption-semibold": React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    headline?: React.CSSProperties;
    sidenav?: React.CSSProperties;
    monospaced?: React.CSSProperties;
    "caption-semibold"?: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    headline: true;
    sidenav: true;
    monospaced: true;
    "caption-semibold": true;
  }
}

declare module "@mui/material/Badge" {
  interface BadgePropsVariantOverrides {
    sidenav: true;
  }
}

/* Custom Palette */
declare module "@mui/material/styles" {
  interface Palette {
    pagoPA: Palette["primary"];
    europeanUnion: Palette["primary"];
    checkIban: Palette["primary"];
    extraLight: Palette["warning"];
    primaryAction: Palette["action"];
    negative: PaletteColorOptions;
    indigo: Palette["primary"];
  }
  interface PaletteOptions {
    pagoPA?: PaletteOptions["primary"];
    europeanUnion: PaletteOptions["primary"];
    checkIban?: PaletteOptions["primary"];
    extraLight?: PaletteOptions["warning"];
    primaryAction: PaletteOptions["action"];
    negative: PaletteColorOptions;
    indigo: PaletteColorOptions;
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
    text: true;
    primary: true;
    negative: true;
    secondary: false;
    warning: false;
    info: false;
    success: false;
  }

  interface ButtonPropsVariantOverrides {
    secondary: false;
    naked: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    secondary: false;
    info: false;
    success: false;
    warning: false;
    error: false;
  }
}

declare module "@mui/material/Checkbox" {
  interface CheckboxPropsColorOverrides {
    secondary: false;
    info: false;
    warning: false;
  }
}

declare module "@mui/material/Radio" {
  interface RadioPropsColorOverrides {
    secondary: false;
    info: false;
    warning: false;
  }
}

declare module "@mui/material/Pagination" {
  interface ButtonPropsColorOverrides {
    blueItaly: true;
    text: true;
    secondary: false;
    warning: false;
    info: false;
    success: false;
  }

  interface PaginationPropsVariantOverrides {
    outlined: false;
  }
}

declare module "@mui/material/Chip" {
  export interface ChipPropsColorOverrides {
    indigo: true;
  }
}

/*
Used to generate different snapshots per component
More info:  https://www.chromatic.com/docs/viewports
*/
export const breakpointsChromaticValues = [375, 640, 900, 1200, 1600];

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
    mode: "light",
    background: {
      paper: "#FFFFFF",
      default: "#F2F2F2",
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
    pagoPA: {
      main: "#0066CC",
      contrastText: "#fff",
    },
    checkIban: {
      main: "#008CA8",
      contrastText: "#fff",
    },
    europeanUnion: {
      main: "#264CA4",
      contrastText: "#fff",
    },
    indigo: {
      main: indigo[500],
      contrastText: "#fff",
    },
    negative: {
      main: "#FFFFFF",
      contrastText: "#0066CC",
    },
    text: {
      primary: colorTextPrimary,
      secondary: "#5C6F82",
      disabled: "#A2ADB8",
    },
    action: {
      active: "#5C6F82" /* Text/Secondary */,
      hover: "rgba(23, 50, 77, 0.08)" /* Text/Primary 8% */,
      hoverOpacity: 0.08,
      selected: "rgba(23, 50, 77, 0.12)" /* Text/Primary 12% */,
      disabled: "rgba(23, 50, 77, 0.26)" /* Text/Primary 26% */,
      disabledBackground: "rgba(23, 50, 77, 0.12)" /* Text/Primary 12% */,
      focus: "rgba(23, 50, 77, 0.12)" /* Text/Primary 12% */,
    },
    primaryAction: {
      hover: "rgba(0, 115, 230, 0.12)" /* Primary 12% */,
      selected: "rgba(0, 115, 230, 0.08)" /* Primary 8% */,
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

export const theme: Theme = createTheme(foundation, {
  typography: {
    /* H1 Large */
    headline: {
      fontSize: pxToRem(58),
      fontFamily: mainTypeface,
      color: colorTextPrimary,
      lineHeight: 1.1 /* ~64px */,
      fontWeight: foundation.typography.fontWeightBold,
    },
    h1: {
      fontSize: pxToRem(42),
      lineHeight: 1.1 /* 46px */,
      fontWeight: foundation.typography.fontWeightBold,
      [foundation.breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(50),
        lineHeight: 1.08 /* 54px */,
      },
    },
    h2: {
      fontSize: pxToRem(36),
      lineHeight: 1.1 /* ~40px */,
      fontWeight: foundation.typography.fontWeightBold,
      [foundation.breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(44),
        lineHeight: 1.09 /* ~48px */,
      },
    },
    h3: {
      fontSize: pxToRem(32),
      lineHeight: 1.125 /* 36px */,
      fontWeight: foundation.typography.fontWeightBold,
      [foundation.breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(38),
        lineHeight: 1.1 /* ~42px */,
      },
    },
    h4: {
      fontSize: pxToRem(28),
      lineHeight: 1.15 /* ~32px */,
      fontWeight: foundation.typography.fontWeightBold,
      [foundation.breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(32),
        lineHeight: 1.125 /* 36px */,
      },
    },
    h5: {
      fontSize: pxToRem(24),
      lineHeight: 1.15 /* ~28px */,
      fontWeight: foundation.typography.fontWeightMedium,
      [foundation.breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(28),
        lineHeight: 1.5 /* 42px */,
      },
    },
    h6: {
      fontSize: pxToRem(22),
      lineHeight: 1.18 /* ~26px */,
      fontWeight: foundation.typography.fontWeightMedium,
      [foundation.breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(24),
        lineHeight: 1.15 /* ~28px */,
      },
    },
    sidenav: {
      fontFamily: mainTypeface,
      fontSize: pxToRem(18),
      lineHeight: 1.35 /* ~24px */,
      color: colorTextPrimary,
      fontWeight: foundation.typography.fontWeightMedium,
    },
    body1: {
      fontSize: pxToRem(18),
      lineHeight: 1.5 /* ~28px */,
      fontWeight: foundation.typography.fontWeightRegular,
      letterSpacing: 0,
      /* a: {
    color: italia[500],
    textDecoration: "underline",
  }, */
    },
    body2: {
      fontSize: pxToRem(16),
      lineHeight: 1.4 /* ~20px */,
      fontWeight: foundation.typography.fontWeightRegular,
      letterSpacing: 0.15,
      /* a: {
    color: italia[500],
    textDecoration: "underline",
  }, */
    },
    button: {
      lineHeight: 1.2,
      textTransform: "none",
      letterSpacing: 0,
    },
    caption: {
      fontSize: pxToRem(14),
      lineHeight: 1.4 /* ~20px */,
      fontWeight: foundation.typography.fontWeightRegular,
    },
    "caption-semibold": {
      fontFamily: mainTypeface,
      fontSize: pxToRem(14),
      lineHeight: 1.4 /* ~20px */,
      color: colorTextPrimary,
      fontWeight: foundation.typography.fontWeightMedium,
    },
    monospaced: {
      fontFamily: monospacedTypeface,
      fontSize: pxToRem(16),
      lineHeight: 1.4 /* ~22px */,
      color: colorTextPrimary,
      letterSpacing: "0.15px",
      fontWeight: foundation.typography.fontWeightRegular,
    },
    overline: {
      fontSize: pxToRem(14),
      lineHeight: 1.15 /* ~16px */,
      fontWeight: foundation.typography.fontWeightBold,
      letterSpacing: 1,
    },

    /* Start: To be revised */
    subtitle1: {
      a: {
        color: italia[500],
        textDecoration: "underline",
      },
      fontWeight: foundation.typography.fontWeightMedium,
    },
    subtitle2: {
      fontSize: pxToRem(14),
      fontWeight: foundation.typography.fontWeightMedium,
    },
    /* End: To be revised */
  },
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
            borderRadius: `${focusBorderRadius}`,
            outline: `solid ${focusWidth} ${foundation.palette.primary.main}`,
            outlineOffset: `${focusButtonOffset}`,
            boxShadow: "none",
          },
          minHeight: pxToRem(24),
          minWidth: pxToRem(24),
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
          "&:disabled": {
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
            borderRadius: `${focusBorderRadius}`,
            outline: `solid ${focusWidth} ${foundation.palette.error.main}`,
            outlineOffset: `${focusOffset}`,
            boxShadow: "none",
          },
        },
      },
      variants: [
        {
          props: { variant: "naked" },
          style: {
            color: foundation.palette.text.primary,
            padding: 0,
            height: "auto",
            minWidth: "auto",
            "&:hover": {
              color: alpha(foundation.palette.text.primary, 0.8),
              backgroundColor: "transparent",
            },
            "&.Mui-focusVisible": {
              borderRadius: `${focusBorderRadius}`,
              outline: `solid ${focusWidth} ${foundation.palette.text.primary}`,
              outlineOffset: `${focusOffset}`,
              boxShadow: "none",
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
              borderRadius: `${focusBorderRadius}`,
              outline: `solid ${focusWidth} ${foundation.palette.primary.main}`,
              outlineOffset: `${focusButtonOffset}`,
              boxShadow: "none",
            },
          },
        },
        {
          props: { variant: "naked", color: "error" },
          style: {
            color: foundation.palette.error.main,
            "&:hover": {
              color: foundation.palette.error.light,
            },
            "&.Mui-focusVisible": {
              borderRadius: `${focusBorderRadius}`,
              outline: `solid ${focusWidth} ${foundation.palette.error.main}`,
              outlineOffset: `${focusButtonOffset}`,
              boxShadow: "none",
            },
          },
        },
      ],
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: alpha(foundation.palette.primary.main, 0.08),
          },
          "&:active": {
            backgroundColor: alpha(foundation.palette.primary.main, 0.2),
          },
          "&.Mui-focusVisible": {
            backgroundColor: alpha(foundation.palette.primary.main, 0.2),
            outline: `solid ${focusWidth} ${foundation.palette.primary.main}`,
            outlineOffset: `${focusButtonOffset}`,
            boxShadow: "none",
          },
        },
        colorPrimary: {
          color: foundation.palette.primary.main,
        },
        minHeight: pxToRem(24),
        minWidth: pxToRem(24),
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: pxToRem(14),
          backgroundColor: "#455B71",
          fontWeight: foundation.typography.fontWeightMedium,
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
        li: {
          "a:hover": {
            textDecoration: "none",
          },
          p: {
            fontSize: `${pxToRem(16)} !important`,
          },
          svg: {
            fontSize: pxToRem(20),
            marginRight: foundation.spacing(1.5),
          },
        },
        separator: {
          color: foundation.palette.text.secondary,
        },
      },
    },
    /* START Stepper */
    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontSize: pxToRem(14),
          [foundation.breakpoints.up(responsiveBreakpoint)]: {
            fontSize: pxToRem(14),
          },
          "&.Mui-completed": {
            fontWeight: foundation.typography.fontWeightMedium,
          },
          "&.Mui-active": {
            fontWeight: foundation.typography.fontWeightMedium,
          },
        },
      },
    },
    /* END Stepper */
    /* START Alert */
    MuiAlert: {
      styleOverrides: {
        root: {
          borderLeft: `${alertBorderWidth} solid`,
          padding: foundation.spacing(1),
          color: colorTextPrimary,
          alignItems: "center",
          [foundation.breakpoints.up(responsiveBreakpoint)]: {
            padding: foundation.spacing(2),
          },
        },
        icon: {
          opacity: 1,
          padding: 0,
          alignItems: "center",
          marginRight: foundation.spacing(1),
          [foundation.breakpoints.up(responsiveBreakpoint)]: {
            marginRight: foundation.spacing(2),
          },
        },
        message: {
          padding: 0,
          overflow: "inherit", // Fix overflow: auto bug introduced by MUI
        },
        action: {
          marginRight: 0,
          paddingTop: 0,
        },
        outlined: {
          backgroundColor: foundation.palette.common.white,
          boxShadow: foundation.shadows[4],
          borderWidth: `0 0 0 ${alertBorderWidth}`,
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
          fontWeight: foundation.typography.fontWeightMedium,
          letterSpacing: 0.15,
          margin: 0,
          /* It inherits from `body1`, so I have to reset -_- */
          [foundation.breakpoints.up(responsiveBreakpoint)]: {
            fontSize: pxToRem(16),
          },
        },
      },
    },
    /* END Alert */
    /* START Card */
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: foundation.spacing(1),
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: foundation.spacing(3),
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: foundation.spacing(3),
          paddingTop: 0,
        },
      },
    },
    /* END Card */
    /* START Snackbar */
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          padding: foundation.spacing(2),
          color: foundation.palette.text.primary,
          backgroundColor: foundation.palette.common.white,
          boxShadow: foundation.shadows[4],
        },
        action: {
          marginRight: 0,
        },
        message: {
          padding: 0,
          fontSize: pxToRem(16),
        },
      },
    },
    /* END Snackbar */
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontSize: pxToRem(14),
          fontWeight: foundation.typography.fontWeightMedium,
          letterSpacing: 0.15,
          "&.MuiBadge-sidenav": {
            fontSize: pxToRem(12),
            position: "relative",
            transform: "translate(0,0)",
            boxShadow: `0 0 0 2px ${alpha(
              foundation.palette.common.white,
              0.5
            )}`,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: "auto",
          borderRadius: foundation.spacing(5),
        },
        label: {
          fontSize: pxToRem(14),
          fontWeight: foundation.typography.fontWeightMedium,
          lineHeight: 1.3 /* ~18px */,
          letterSpacing: 0.5,
          textAlign: "center",
          overflowWrap: "break-word",
          whiteSpace: "normal",
          textOverflow: "clip",
          padding: `${foundation.spacing(1)} ${foundation.spacing(
            1.5
          )}` /* 8px 12px */,
        },
        labelSmall: {
          padding: `${foundation.spacing(0.5)} ${foundation.spacing(
            1
          )}` /* 4px 8px */,
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
          fontWeight: foundation.typography.fontWeightRegular,
        },
        outlined: {
          borderRadius: foundation.spacing(5),
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
          fontWeight: foundation.typography.fontWeightMedium,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontWeight: foundation.typography.fontWeightMedium,
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
          fontWeight: foundation.typography.fontWeightMedium,
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
          fontWeight: foundation.typography.fontWeightMedium,
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
        invisible: {
          backgroundColor: "transparent",
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
    /** Start SWITCH */
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          padding: 0,
          top: pxToRem(9),
          left: pxToRem(9),
          "&.Mui-focusVisible": {
            borderRadius: "100% ",
            outline: `solid ${focusWidth} ${foundation.palette.primary.main}`,
            outlineOffset: `${focusButtonOffset}`,
            boxShadow: "none",
          },
        },
      },
    },
    /** End SWITCH */
    /** Start LIST ITEM (used in Sidenav) */
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          transitionProperty: "background-color, border-color",
          transitionDuration: foundation.transitions.duration.standard,
          paddingTop: foundation.spacing(2),
          paddingBottom: foundation.spacing(2),
          /* Selected State */
          "&.Mui-selected": {
            borderRight: `2px solid ${foundation.palette.primary.dark}`,
          },
          "&.Mui-selected .MuiListItemText-root": {
            color: foundation.palette.primary.dark,
          },
          "&.Mui-selected .MuiListItemIcon-root": {
            color: foundation.palette.primary.dark,
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
          fontWeight: foundation.typography.fontWeightMedium,
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
    /** Start POPOVER */
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: foundation.shadows[16],
        },
      },
    },
    /** End POPOVER */
    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiListItemIcon-root + .MuiListItemText-root": {
            marginLeft: foundation.spacing(1),
          },
        },
        select: {
          display: "flex",
          alignItems: "center",
          "& .MuiListItemText-root": {
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          },
        },
      },
    },
    MuiMenuItem: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontSize: pxToRem(16),
          fontWeight: foundation.typography.fontWeightMedium,
          whiteSpace: "normal",
          "& .MuiListItemIcon-root": {
            color: foundation.palette.action.active,
            fontSize: pxToRem(20),
            minWidth: "auto",
          },
          "& .MuiListItemIcon-root + .MuiListItemText-root": {
            marginLeft: foundation.spacing(1),
          },
          /* I know that the CSS overwrite under this block don't look very nice ¯\_(ツ)_/¯
          But it seems the only way to style these elements without building
          everything from the ground using Unstyled components */
          "& .MuiListItemText-root .MuiListItemText-primary": {
            fontSize: pxToRem(16),
          },
          "&.Mui-selected": {
            color: foundation.palette.primary.main,
            ".MuiListItemText-root": {
              color: foundation.palette.primary.main,
            },
            ".MuiListItemIcon-root": {
              color: foundation.palette.primary.main,
            },
          },
          "&:hover": {
            backgroundColor: alpha(menuItemBackground, 0.04),
          },
        },
      },
    },
    MuiPaginationItem: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          "&.Mui-focusVisible": {
            outline: `solid ${focusWidth} `,
            outlineOffset: `${focusOffset}`,
            boxShadow: "none",
          },
        },
      },
    },
    /** End SELECT */
    MuiTableHead: {
      styleOverrides: {
        root: {
          fontWeight: foundation.typography.fontWeightMedium,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          "&.MuiTypography-root": {
            marginTop: `${marginLinkSize}`,
            marginBottom: `${marginLinkSize}`,
            padding: 0,
          },
          "&.Mui-focusVisible": {
            borderRadius: `${focusBorderRadius}`,
            outline: `solid ${focusWidth} `,
            outlineOffset: `${focusOffset}`,
            boxShadow: "none",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        formControl: {
          "&  .MuiInputAdornment-positionEnd": {
            paddingRight: pxToRem(14),
          },
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        labelContainer: {
          padding: pxToRem(14),
          paddingLeft: 0,
        },
      },
    },
  },
});

export const darkTheme: Theme = createTheme(theme, {
  palette: {
    mode: "dark",
    primary: {
      main: "#3DA2FF",
      contrastText: "#FFFFFF",
    },
    background: {
      paper: "#252525",
    },
  },
});

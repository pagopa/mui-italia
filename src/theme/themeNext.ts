import { alpha, createTheme, Theme } from '@mui/material/styles';
import foundationNext from './foundations-next/foundationNext';
import muiSwitch from './muiSwitch';
import { pxToRem } from './utility';
import { mainTypeface, monospacedTypeface } from './fonts';
/* Design Tokens */
import { italia } from '@tokens';

/* Basic Configuration */

const responsiveBreakpoint = 'sm';
export const ringWidth = '4px';
const marginLinkSize = '4px';
const paddingLinkSize = '1px';
export const focusWidth = '2px';
export const focusBorderRadius = '8px';
export const focusOffset = '4px';
const focusButtonOffset = '2px';
const alertBorderWidth = '4px';

export const themeNext: Theme = createTheme(foundationNext, {
  typography: {
    /* H1 Large */
    headline: {
      fontSize: pxToRem(58),
      fontFamily: mainTypeface,
      color: foundationNext.palette.text.primary,
      lineHeight: 1.1 /* ~64px */,
      fontWeight: foundationNext.typography.fontWeightBold,
    },
    h1: {
      fontSize: pxToRem(42),
      lineHeight: 1.1 /* 46px */,
      fontWeight: foundationNext.typography.fontWeightBold,
      [foundationNext.breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(50),
        lineHeight: 1.08 /* 54px */,
      },
    },
    h2: {
      fontSize: pxToRem(36),
      lineHeight: 1.1 /* ~40px */,
      fontWeight: foundationNext.typography.fontWeightBold,
      [foundationNext.breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(44),
        lineHeight: 1.09 /* ~48px */,
      },
    },
    h3: {
      fontSize: pxToRem(32),
      lineHeight: 1.125 /* 36px */,
      fontWeight: foundationNext.typography.fontWeightBold,
      [foundationNext.breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(38),
        lineHeight: 1.1 /* ~42px */,
      },
    },
    h4: {
      fontSize: pxToRem(28),
      lineHeight: 1.15 /* ~32px */,
      fontWeight: foundationNext.typography.fontWeightBold,
      [foundationNext.breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(32),
        lineHeight: 1.125 /* 36px */,
      },
    },
    h5: {
      fontSize: pxToRem(24),
      lineHeight: 1.15 /* ~28px */,
      fontWeight: foundationNext.typography.fontWeightMedium,
      [foundationNext.breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(28),
        lineHeight: 1.5 /* 42px */,
      },
    },
    h6: {
      fontSize: pxToRem(22),
      lineHeight: 1.18 /* ~26px */,
      fontWeight: foundationNext.typography.fontWeightMedium,
      [foundationNext.breakpoints.up(responsiveBreakpoint)]: {
        fontSize: pxToRem(24),
        lineHeight: 1.15 /* ~28px */,
      },
    },
    sidenav: {
      fontFamily: mainTypeface,
      fontSize: pxToRem(18),
      lineHeight: 1.35 /* ~24px */,
      color: foundationNext.palette.text.primary,
      fontWeight: foundationNext.typography.fontWeightMedium,
    },
    body1: {
      fontSize: pxToRem(18),
      lineHeight: 1.5 /* ~28px */,
      fontWeight: foundationNext.typography.fontWeightRegular,
      letterSpacing: 0,
      /* a: {
    color: italia[500],
    textDecoration: "underline",
  }, */
    },
    body2: {
      fontSize: pxToRem(16),
      lineHeight: 1.4 /* ~20px */,
      fontWeight: foundationNext.typography.fontWeightRegular,
      letterSpacing: 0.15,
      /* a: {
    color: italia[500],
    textDecoration: "underline",
  }, */
    },
    button: {
      lineHeight: 1.2,
      textTransform: 'none',
      letterSpacing: 0,
    },
    caption: {
      fontSize: pxToRem(14),
      lineHeight: 1.4 /* ~20px */,
      fontWeight: foundationNext.typography.fontWeightRegular,
    },
    'caption-semibold': {
      fontFamily: mainTypeface,
      fontSize: pxToRem(14),
      lineHeight: 1.4 /* ~20px */,
      color: foundationNext.palette.text.primary,
      fontWeight: foundationNext.typography.fontWeightMedium,
    },
    monospaced: {
      fontFamily: monospacedTypeface,
      fontSize: pxToRem(16),
      lineHeight: 1.4 /* ~22px */,
      color: foundationNext.palette.text.primary,
      letterSpacing: '0.15px',
      fontWeight: foundationNext.typography.fontWeightRegular,
    },
    overline: {
      fontSize: pxToRem(14),
      lineHeight: 1.15 /* ~16px */,
      fontWeight: foundationNext.typography.fontWeightBold,
      letterSpacing: 1,
    },

    /* Start: To be revised */
    subtitle1: {
      a: {
        color: italia[500],
        textDecoration: 'underline',
      },
      fontWeight: foundationNext.typography.fontWeightMedium,
    },
    subtitle2: {
      fontSize: pxToRem(14),
      fontWeight: foundationNext.typography.fontWeightMedium,
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
          padding: '0 20px',
          '&.Mui-focusVisible': {
            borderRadius: `${focusBorderRadius}`,
            outline: `solid ${focusWidth} ${foundationNext.palette.primary.main}`,
            outlineOffset: `${focusButtonOffset}`,
            boxShadow: 'none',
          },
          minHeight: pxToRem(24),
          minWidth: pxToRem(24),
          '&.MuiButton-text': {
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#0055AA',
            },
          },
          '&.MuiButton-contained': {
            '&:hover': {
              backgroundColor: '#0055AA',
            },
          },
        },
        sizeSmall: {
          height: '40px',
          padding: '0 20px',
          fontSize: pxToRem(14),
          lineHeight: 1.25 /* ~18px */,
        },
        sizeMedium: {
          height: '48px',
          padding: '0 24px',
          fontSize: pxToRem(16),
          lineHeight: 1.25 /* 20px */,
        },
        sizeLarge: {
          height: '56px',
          padding: '0 24px',
          fontSize: pxToRem(18),
          lineHeight: 1.2 /* ~22px */,
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
          '&:disabled': {
            borderWidth: '2px',
          },
        },
        outlinedPrimary: {
          borderColor: foundationNext.palette.primary.main,
          '&:hover': {
            color: foundationNext.palette.primary.dark,
            borderColor: 'currentColor',
          },
        },
        outlinedError: {
          borderColor: foundationNext.palette.error.main,
          '&:hover': {
            color: foundationNext.palette.error.dark,
            borderColor: 'currentColor',
          },
          '&.Mui-focusVisible': {
            borderRadius: `${focusBorderRadius}`,
            outline: `solid ${focusWidth} ${foundationNext.palette.error.main}`,
            outlineOffset: `${focusOffset}`,
            boxShadow: 'none',
          },
        },
      },
      variants: [
        {
          props: { variant: 'naked' },
          style: {
            color: foundationNext.palette.text.primary,
            padding: 0,
            height: 'auto',
            minWidth: 'auto',
            '&:hover': {
              color: alpha(foundationNext.palette.text.primary, 0.8),
              backgroundColor: 'transparent',
            },
            '&.Mui-focusVisible': {
              borderRadius: `${focusBorderRadius}`,
              outline: `solid ${focusWidth} ${foundationNext.palette.text.primary}`,
              outlineOffset: `${focusOffset}`,
              boxShadow: 'none',
            },
          },
        },
        {
          props: { variant: 'naked', color: 'primary' },
          style: {
            color: foundationNext.palette.primary.main,
            '&:hover': {
              color: foundationNext.palette.primaryContained.hover,
            },
            '&.Mui-focusVisible': {
              borderRadius: `${focusBorderRadius}`,
              outline: `solid ${focusWidth} ${foundationNext.palette.primary.main}`,
              outlineOffset: `${focusButtonOffset}`,
              boxShadow: 'none',
            },
          },
        },
        {
          props: { variant: 'naked', color: 'error' },
          style: {
            color: foundationNext.palette.error.main,
            '&:hover': {
              color: foundationNext.palette.error.light,
            },
            '&.Mui-focusVisible': {
              borderRadius: `${focusBorderRadius}`,
              outline: `solid ${focusWidth} ${foundationNext.palette.error.main}`,
              outlineOffset: `${focusButtonOffset}`,
              boxShadow: 'none',
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
          color: foundationNext.palette.primary.main,
          '&:hover': {
            backgroundColor: alpha(foundationNext.palette.primary.main, 0.08),
          },
          '&:active': {
            backgroundColor: alpha(foundationNext.palette.primary.main, 0.2),
          },
          '&.Mui-focusVisible': {
            backgroundColor: alpha(foundationNext.palette.primary.main, 0.2),
            outline: `solid ${focusWidth} ${foundationNext.palette.primary.main}`,
            outlineOffset: `${focusButtonOffset}`,
            boxShadow: 'none',
          },
        },
        colorPrimary: {
          color: foundationNext.palette.primary.contrastText,
          backgroundColor: foundationNext.palette.primary.main,
          '&:hover': {
            backgroundColor: alpha(foundationNext.palette.primary.main, 0.08),
            color: foundationNext.palette.primary.main,
          },
        },
        minHeight: pxToRem(24),
        minWidth: pxToRem(24),
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: pxToRem(14),
          backgroundColor: '#455B71',
          fontWeight: foundationNext.typography.fontWeightMedium,
          textAlign: 'center',
          boxShadow: foundationNext.shadows[16],
        },
        arrow: {
          color: '#455B71',
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          fontSize: pxToRem(16),
          color: foundationNext.palette.text.primary,
        },
        li: {
          'a:hover': {
            textDecoration: 'none',
          },
          p: {
            fontSize: `${pxToRem(16)} !important`,
          },
          svg: {
            fontSize: pxToRem(20),
            marginRight: foundationNext.spacing(1.5),
          },
        },
        separator: {
          color: foundationNext.palette.text.secondary,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderLeft: `${alertBorderWidth} solid`,
          padding: foundationNext.spacing(1),
          color: foundationNext.palette.text.primary,
          alignItems: 'center',
          [foundationNext.breakpoints.up(responsiveBreakpoint)]: {
            padding: foundationNext.spacing(2),
          },
        },
        icon: {
          opacity: 1,
          padding: 0,
          alignItems: 'center',
          marginRight: foundationNext.spacing(1),
          [foundationNext.breakpoints.up(responsiveBreakpoint)]: {
            marginRight: foundationNext.spacing(2),
          },
        },
        message: {
          padding: 0,
          overflow: 'inherit', // Fix overflow: auto bug introduced by MUI
        },
        action: {
          marginRight: 0,
          paddingTop: 0,
        },
        outlined: {
          backgroundColor: foundationNext.palette.common.white,
          boxShadow: foundationNext.shadows[4],
          borderWidth: `0 0 0 ${alertBorderWidth}`,
        },
        standard: {
          '& .MuiAlert-icon': {
            color: foundationNext.palette.text.primary,
          },
        },
        standardSuccess: {
          borderColor: foundationNext.palette.success.main,
        },
        outlinedSuccess: {
          borderColor: foundationNext.palette.success.main,
          '& .MuiAlert-icon': {
            color: foundationNext.palette.success.main,
          },
        },
        standardError: {
          borderColor: foundationNext.palette.error.main,
        },
        outlinedError: {
          borderColor: foundationNext.palette.error.main,
          '& .MuiAlert-icon': {
            color: foundationNext.palette.error.main,
          },
        },
        standardInfo: {
          borderColor: foundationNext.palette.info.main,
        },
        outlinedInfo: {
          borderColor: foundationNext.palette.info.main,
          '& .MuiAlert-icon': {
            color: foundationNext.palette.info.main,
          },
        },
        standardWarning: {
          borderColor: foundationNext.palette.warning.main,
        },
        outlinedWarning: {
          borderColor: foundationNext.palette.warning.main,
          '& .MuiAlert-icon': {
            color: foundationNext.palette.warning.main,
          },
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontSize: pxToRem(16),
          fontWeight: foundationNext.typography.fontWeightMedium,
          letterSpacing: 0.15,
          margin: 0,
          /* It inherits from `body1`, so I have to reset -_- */
          [foundationNext.breakpoints.up(responsiveBreakpoint)]: {
            fontSize: pxToRem(16),
          },
        },
      },
    },
    /* START Card */
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: foundationNext.spacing(1),
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: foundationNext.spacing(3),
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: foundationNext.spacing(3),
          paddingTop: 0,
        },
      },
    },
    /* END Card */
    /* START Snackbar */
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          padding: foundationNext.spacing(2),
          color: foundationNext.palette.text.primary,
          backgroundColor: foundationNext.palette.common.white,
          boxShadow: foundationNext.shadows[4],
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
          fontWeight: foundationNext.typography.fontWeightMedium,
          letterSpacing: 0.15,
          '&.MuiBadge-sidenav': {
            fontSize: pxToRem(12),
            position: 'relative',
            transform: 'translate(0,0)',
            boxShadow: `0 0 0 2px ${alpha(foundationNext.palette.common.white, 0.5)}`,
          },
        },
      },
    },
    /** Start TEXT FIELD */
    MuiInput: {
      styleOverrides: {
        root: {
          fontWeight: foundationNext.typography.fontWeightMedium,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontWeight: foundationNext.typography.fontWeightMedium,
          '& .MuiOutlinedInput-notchedOutline': {},
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: foundationNext.palette.error.dark,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: foundationNext.palette.text.secondary,
          fontWeight: foundationNext.typography.fontWeightMedium,
          '&.Mui-error': {
            color: foundationNext.palette.error.dark,
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-colorError': {
            color: `${foundationNext.palette.error.dark}`,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: pxToRem(12),
          lineHeight: 1.25 /* 15px */,
          color: foundationNext.palette.text.secondary,
          fontWeight: foundationNext.typography.fontWeightMedium,
          letterSpacing: 0.5,
          '&.Mui-error': {
            color: foundationNext.palette.error.dark,
          },
        },
      },
    },
    /** End TEXT FIELD */
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(foundationNext.palette.backdrop.background, 0.7),
        },
        invisible: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiSwitch: muiSwitch,

    /** Start LIST ITEM (used in Sidenav) */
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          transitionProperty: 'background-color, border-color',
          transitionDuration: foundationNext.transitions.duration.standard,
          paddingTop: foundationNext.spacing(2),
          paddingBottom: foundationNext.spacing(2),
          /* Selected State */
          '&.Mui-selected': {
            borderRight: `2px solid ${foundationNext.palette.primary.dark}`,
          },
          '&.Mui-selected .MuiListItemText-root': {
            color: foundationNext.palette.primary.dark,
          },
          '&.Mui-selected .MuiListItemIcon-root': {
            color: foundationNext.palette.primary.dark,
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          transition: `${foundationNext.transitions.duration.standard}ms ${foundationNext.transitions.easing.easeInOut}`,
          transitionProperty: 'color',
          color: foundationNext.palette.text.primary,
          margin: 0,
        },
        primary: {
          fontWeight: foundationNext.typography.fontWeightMedium,
          color: 'currentColor',
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          /* Default Icon Size = 24px */
          fontSize: pxToRem(24),
          transition: `${foundationNext.transitions.duration.standard}ms ${foundationNext.transitions.easing.easeInOut}`,
          transitionProperty: 'color',
          minWidth: 'auto',
          color: foundationNext.palette.text.primary,
          '& + .MuiListItemText-root': {
            marginLeft: foundationNext.spacing(2),
          },
        },
      },
    },
    /** End LIST ITEM */
    /** Start POPOVER */
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: foundationNext.shadows[16],
        },
      },
    },
    /** End POPOVER */
    MuiSelect: {
      styleOverrides: {
        root: {
          '& .MuiListItemIcon-root + .MuiListItemText-root': {
            marginLeft: foundationNext.spacing(1),
          },
        },
        select: {
          display: 'flex',
          alignItems: 'center',
          '& .MuiListItemText-root': {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
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
          fontWeight: foundationNext.typography.fontWeightMedium,
          whiteSpace: 'normal',
          '& .MuiListItemIcon-root': {
            color: foundationNext.palette.action.active,
            fontSize: pxToRem(20),
            minWidth: 'auto',
          },
          '& .MuiListItemIcon-root + .MuiListItemText-root': {
            marginLeft: foundationNext.spacing(1),
          },
          /* I know that the CSS overwrite under this block don't look very nice ¯\_(ツ)_/¯
          But it seems the only way to style these elements without building
          everything from the ground using Unstyled components */
          '& .MuiListItemText-root .MuiListItemText-primary': {
            fontSize: pxToRem(16),
          },
          '&.Mui-selected': {
            color: foundationNext.palette.primary.main,
            '.MuiListItemText-root': {
              color: foundationNext.palette.primary.main,
            },
            '.MuiListItemIcon-root': {
              color: foundationNext.palette.primary.main,
            },
          },
          '&:hover': {
            backgroundColor: alpha(foundationNext.palette.menuItem.background, 0.04),
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
          '&.Mui-focusVisible': {
            outline: `solid ${focusWidth} `,
            outlineOffset: `${focusOffset}`,
            boxShadow: 'none',
          },
        },
      },
    },
    /** End SELECT */
    MuiTableHead: {
      styleOverrides: {
        root: {
          fontWeight: foundationNext.typography.fontWeightMedium,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          '&.MuiTypography-root': {
            marginTop: `${marginLinkSize}`,
            marginBottom: `${marginLinkSize}`,
            paddingTop: `${paddingLinkSize}`,
            paddingBottom: `${paddingLinkSize}`,
          },
          '&.Mui-focusVisible': {
            borderRadius: `${focusBorderRadius}`,
            outline: `solid ${focusWidth} `,
            outlineOffset: `${focusOffset}`,
            boxShadow: 'none',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        formControl: {
          '&  .MuiInputAdornment-positionEnd': {
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

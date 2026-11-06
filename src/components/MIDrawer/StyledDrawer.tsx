import { Drawer as MuiDrawer, alpha, styled } from '@mui/material';

import { pxToRem } from '@theme';

// Figma: 417px from sm; below sm the drawer is a full width bottom sheet
const PANEL_WIDTH = 417;
// Figma rule "Adattamento verticale Mobile": fixed empty space above a bottom sheet taller than the screen
const BOTTOM_SHEET_TOP_GAP = '24px';
// Height of the gradient above the footer buttons while there is more content below
const FOOTER_GRADIENT_HEIGHT = '56px';
// Below this viewport height (e.g. zoom at 400%) header and footer scroll with the content, otherwise they would leave almost no room for it (WCAG 1.4.10)
const STICKY_MIN_VIEWPORT_HEIGHT = 400;

export const StyledDrawer = styled(MuiDrawer)(({ theme }) => {
  const paper = theme.palette.background.paper;

  return {
    // Slide and Fade set their durations inline: !important is needed to override them
    '@media (prefers-reduced-motion: reduce)': {
      '& .MuiDrawer-paper, & .MuiBackdrop-root': {
        transitionDuration: '0ms !important',
      },
    },

    '& .MuiDrawer-paper': {
      // Horizontal padding and bottom padding, including the safe areas of the screen edges
      '--MIDrawer-padding-left': theme.spacing(3),
      '--MIDrawer-padding-right': theme.spacing(3),
      '--MIDrawer-padding-bottom': `max(${theme.spacing(3)}, env(safe-area-inset-bottom))`,
      // Keeps the focused element out of the sticky header and footer (WCAG 2.4.11); heights are set by MIDrawer
      scrollPaddingTop: 'var(--MIDrawer-header-height, 0px)',
      scrollPaddingBottom: `calc(var(--MIDrawer-footer-height, 0px) + ${FOOTER_GRADIENT_HEIGHT})`,
      backgroundColor: paper,
      // The panel is portaled to the body: content that inherits the font (e.g. Link) gets the theme one
      fontFamily: theme.typography.fontFamily,
    },

    '& .MuiDrawer-paperAnchorRight, & .MuiDrawer-paperAnchorLeft': {
      width: PANEL_WIDTH,
      maxWidth: '100%',
    },
    '& .MuiDrawer-paperAnchorRight': {
      '--MIDrawer-padding-right': `max(${theme.spacing(3)}, env(safe-area-inset-right))`,
    },
    '& .MuiDrawer-paperAnchorLeft': {
      '--MIDrawer-padding-left': `max(${theme.spacing(3)}, env(safe-area-inset-left))`,
    },
    // Bottom sheet: as tall as its content, then it scrolls. 100% is the viewport (fixed position): no dvh, unsupported by the browsers targeted in .babelrc.mjs
    '& .MuiDrawer-paperAnchorBottom': {
      maxHeight: `calc(100% - ${BOTTOM_SHEET_TOP_GAP})`,
      borderTopLeftRadius: theme.shape.radius[16],
      borderTopRightRadius: theme.shape.radius[16],
    },

    '& .MIDrawer-header': {
      position: 'sticky',
      top: 0,
      zIndex: 1,
      display: 'flex',
      alignItems: 'flex-start',
      gap: theme.spacing(2),
      padding: `${theme.spacing(3)} var(--MIDrawer-padding-right) ${theme.spacing(1)} var(--MIDrawer-padding-left)`,
      backgroundColor: paper,
    },
    // Divider without changing the header height
    '&.MIDrawer-scrolled .MIDrawer-header': {
      boxShadow: `inset 0 -1px 0 ${theme.palette.divider}`,
    },

    '& .MIDrawer-pictogram': {
      display: 'flex',
      flexShrink: 0,
      alignSelf: 'center',
      width: 40,
      height: 40,
      '& > svg': {
        width: '100%',
        height: '100%',
      },
    },

    // TODO Titillio: the design uses Titillio Bold, not yet in the theme
    '& .MIDrawer-title': {
      flex: 1,
      minWidth: 0,
      margin: 0,
      color: theme.palette.text.primary,
      fontFamily: theme.typography.fontFamily,
      fontSize: pxToRem(18),
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: pxToRem(28),
      overflowWrap: 'anywhere',
      // Focused by the component when the drawer opens: it is not interactive, so no focus ring
      '&:focus': {
        outline: 'none',
      },
      // Figma rule "Breakpoint SM": tablet portrait keeps the mobile typography
      [theme.breakpoints.up('md')]: {
        fontSize: pxToRem(24),
        lineHeight: pxToRem(32),
      },
    },

    // As tall as one line of the title: the 40px button overflows it, so the space below the header follows the title
    '& .MIDrawer-close': {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
      height: pxToRem(28),
      [theme.breakpoints.up('md')]: {
        height: pxToRem(32),
      },
    },

    '& .MIDrawer-content': {
      flex: '1 0 auto',
      padding: `0 var(--MIDrawer-padding-right) ${theme.spacing(2)} var(--MIDrawer-padding-left)`,
      '&:last-child': {
        paddingBottom: 'var(--MIDrawer-padding-bottom)',
      },
    },

    // Header bottom padding (8px) + description; 24px before the rest of the content
    '& .MIDrawer-description': {
      margin: `0 0 ${theme.spacing(3)}`,
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily,
      fontSize: pxToRem(16),
      fontWeight: theme.typography.fontWeightRegular,
      lineHeight: 22 / 16,
    },
    // Without description: 8px of header padding + 16px = 24px from the title
    '& .MIDrawer-body': {
      marginTop: theme.spacing(2),
    },
    '& .MIDrawer-description + .MIDrawer-body': {
      marginTop: 0,
    },

    '& .MIDrawer-footer': {
      position: 'sticky',
      bottom: 0,
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: theme.spacing(3),
      padding: `${theme.spacing(1)} var(--MIDrawer-padding-right) var(--MIDrawer-padding-bottom) var(--MIDrawer-padding-left)`,
      backgroundColor: paper,

      // Fades the content scrolling below the buttons; clicks go through it
      '&::before': {
        content: '""',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: '100%',
        height: FOOTER_GRADIENT_HEIGHT,
        background: `linear-gradient(${alpha(paper, 0)}, ${paper})`,
        pointerEvents: 'none',
        opacity: 0,
      },

      // DOM order is primary, secondary: on one row the primary is shown on the right
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
    },
    '&.MIDrawer-hasMore .MIDrawer-footer::before': {
      opacity: 1,
    },

    [`@media (max-height: ${STICKY_MIN_VIEWPORT_HEIGHT}px)`]: {
      '& .MuiDrawer-paper': {
        scrollPaddingTop: 0,
        scrollPaddingBottom: 0,
      },
      '& .MIDrawer-header, & .MIDrawer-footer': {
        position: 'static',
      },
      '&.MIDrawer-hasMore .MIDrawer-footer::before': {
        opacity: 0,
      },
    },
  };
});

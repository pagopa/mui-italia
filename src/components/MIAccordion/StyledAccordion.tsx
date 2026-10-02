import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  styled,
} from '@mui/material';

import { pxToRem } from '@theme';

// Same values as focusWidth / focusOffset in themeNext.ts (not exported by the theme)
const FOCUS_WIDTH = '2px';
const FOCUS_OFFSET = '4px';

export const StyledAccordion = styled(MuiAccordion)(({ theme }) => ({
  border: `1px solid ${theme.colors.neutral.grey[100]}`,
  borderRadius: theme.shape.radius[8],
  backgroundColor: theme.colors.neutral.white,
  boxShadow: 'none',
  fontFamily: theme.typography.fontFamily,
  paddingBottom: theme.spacing(3),

  '&::before': {
    display: 'none',
  },

  '&.Mui-disabled': {
    backgroundColor: theme.colors.neutral.grey[100],
  },

  // Collapse sets its duration inline: !important is needed to override it. Done in CSS instead of TransitionProps (deprecated) or slotProps.transition (missing in MUI 5.14.x)
  '@media (prefers-reduced-motion: reduce)': {
    '& .MuiCollapse-root': {
      transitionDuration: '0ms !important',
    },
  },

  '&:has(.MuiAccordionSummary-root.Mui-focusVisible)': {
    outline: `solid ${FOCUS_WIDTH} ${theme.palette.primary.main}`,
    outlineOffset: FOCUS_OFFSET,
  },
}));

export const StyledHeading = styled('h3')({
  margin: 0,
  font: 'inherit',
});

export const StyledAccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  alignItems: 'flex-start',
  gap: theme.spacing(1.5),
  minHeight: 0,
  padding: theme.spacing(3, 3, 0),

  '&.Mui-focusVisible': {
    backgroundColor: 'transparent',
  },

  '& .MuiAccordionSummary-content': {
    alignItems: 'flex-start',
    gap: theme.spacing(1),
    margin: 0,
    minWidth: 0,
  },

  '& .MuiAccordionSummary-expandIconWrapper': {
    color: theme.colors.blue[500],

    '& .MuiSvgIcon-root': {
      fontSize: pxToRem(24),
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  },

  '&.Mui-disabled': {
    opacity: 1,

    '& .MuiAccordionSummary-content': {
      opacity: 0.5,
    },

    '& .MuiAccordionSummary-expandIconWrapper': {
      color: theme.colors.neutral.grey[300],
    },
  },

  '& .MIAccordion-icon': {
    display: 'flex',
    flexShrink: 0,
  },

  '& .MIAccordion-text': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(0.5),
    minWidth: 0,
  },

  // TODO Titillio: the design uses weight 500, not available in Titillium Web
  '& .MIAccordion-title': {
    color: theme.colors.neutral.black,
    fontSize: pxToRem(16),
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: 22 / 16,
    overflowWrap: 'anywhere',
  },
}));

export const StyledAccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0, 3),

  '& .MIAccordion-description': {
    color: theme.colors.neutral.grey[700],
    fontSize: pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: 22 / 16,
    marginTop: theme.spacing(1),
  },

  '& .MIAccordion-content': {
    marginTop: theme.spacing(4),
  },
}));

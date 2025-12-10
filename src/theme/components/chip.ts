import foundation from 'theme/foundation';
import { colors, none } from 'theme/foundations/colors';
import { pxToRem } from 'theme/utility';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import React from 'react';
declare module '@mui/material/Chip' {
  export interface ChipPropsColorOverrides {
    highlighted: true;
    neutral: true;
    primary: false;
  }
}

export const chip = {
  defaultProps: {
    deleteIcon: React.createElement(CloseRoundedIcon, {
      fontSize: 'small',
      sx: {
        stroke: 'currentColor',
        strokeWidth: 2,
      },
    }),
  },
  styleOverrides: {
    root: {
      height: 'auto',
      borderRadius: foundation.spacing(5),
    },
    label: {
      fontSize: pxToRem(14),
      fontWeight: foundation.typography.fontWeightMedium,
      lineHeight: 1.3 /* ~18px */,
      letterSpacing: 0.5,
      textAlign: 'center',
      overflowWrap: 'break-word',
      whiteSpace: 'normal',
      textOverflow: 'clip',
      padding: `${foundation.spacing(1)} ${foundation.spacing(1.5)}` /* 8px 12px */,
    },
    labelSmall: {
      padding: `${foundation.spacing(0.5)} ${foundation.spacing(1)}` /* 4px 8px */,
    },
    deleteIcon: {
      color: colors.blue[500],
    },
    outlined: {
      borderRadius: foundation.spacing(5),
    },
  },
  variants: [
    {
      props: { variant: 'filled', color: 'default' },
      style: {
        border: 'none',
        color: colors.blue[850],
        backgroundColor: colors.blue[50],
      },
    },
    {
      props: { variant: 'outlined', color: 'default' },
      style: {
        border: `1px solid ${colors.blue[600]}`,
        backgroundColor: none,
        color: colors.blue[600],
      },
    },
    {
      props: { variant: 'filled', color: 'warning' },
      style: {
        border: 'none',
        color: colors.warning[850],
        backgroundColor: colors.warning[100],
      },
    },
    {
      props: { variant: 'outlined', color: 'warning' },
      style: {
        border: `1px solid ${colors.warning[850]}`,
        backgroundColor: none,
        color: colors.warning[850],
      },
    },
    {
      props: { variant: 'filled', color: 'success' },
      style: {
        border: 'none',
        color: colors.success[850],
        backgroundColor: colors.success[100],
      },
    },
    {
      props: { variant: 'outlined', color: 'success' },
      style: {
        border: `1px solid ${colors.success[850]}`,
        backgroundColor: 'transparent',
        color: colors.success[850],
      },
    },
    {
      props: { variant: 'filled', color: 'highlighted' },
      style: {
        border: 'none',
        color: colors.turquoise[850],
        backgroundColor: colors.turquoise[50],
      },
    },
    {
      props: { variant: 'outlined', color: 'highlighted' },
      style: {
        border: `1px solid ${colors.turquoise[850]}`,
        backgroundColor: none,
        color: colors.turquoise[850],
      },
    },
    {
      props: { variant: 'filled', color: 'error' },
      style: {
        border: 'none',
        color: colors.error[850],
        backgroundColor: colors.error[100],
      },
    },
    {
      props: { variant: 'outlined', color: 'error' },
      style: {
        border: `1px solid ${colors.error[600]}`,
        backgroundColor: none,
        color: colors.error[600],
      },
    },
    {
      props: { variant: 'filled', color: 'neutral' },
      style: {
        border: 'none',
        color: colors.neutral.black,
        backgroundColor: colors.neutral.grey[100],
      },
      deleteIcon: {
        color: colors.blue[500],
        backgroundColor: none,
      },
    },
    {
      props: { variant: 'outlined', color: 'neutral' },
      style: {
        border: `1px solid ${colors.neutral.black}`,
        backgroundColor: none,
        color: colors.neutral.black,
      },
    },
  ],
};

// to do
/**
 * disable primary color chip
 */

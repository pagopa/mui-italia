import foundation from 'theme/foundation';
import { palette } from 'theme/foundations/colors';
import { pxToRem } from 'theme/utility';

// const colors = {
//   default: {
//     filled: { background: palette.blue[50], text: palette.blue[850] },
//     outlined: { background: 'transparent', text: palette.blue[600], border: palette.blue[600] },
//   },
//   warning: {
//     filled: { background: palette.warning[100], text: palette.warning[850] },
//     outlined: {
//       background: 'transparent',
//       text: palette.warning[850],
//       border: palette.warning[850],
//     },
//   },
//   success: {
//     filled: { background: palette.success[100], text: palette.success[850] },
//     outlined: {
//       background: 'transparent',
//       text: palette.success[850],
//       border: palette.success[850],
//     },
//   },
//   error: {
//     filled: { background: palette.error[100], text: palette.error[850] },
//     outlined: { background: 'transparent', text: palette.error[600] },
//   },
//   highlighted: {
//     filled: { background: palette.turquoise[50], text: palette.turquoise[850] },
//     outlined: { background: 'transparent', text: palette.turquoise[850] },
//   },
//   neutral: {
//     filled: { background: palette.neutral.grey[100], text: palette.neutral.black },
//     outlined: {
//       background: 'transparent',
//       text: palette.neutral.black,
//       border: palette.neutral.black,
//     },
//   },
// };

export const chip = {
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
      color: 'currentColor',
      opacity: '0.7',
      '&:hover': {
        color: 'currentColor',
        opacity: 1,
      },
    },
    avatar: {
      fontWeight: foundation.typography.fontWeightRegular,
    },
    outlined: {
      borderRadius: foundation.spacing(5),
      '&.MuiChip-outlinedDefault': {
        '& .MuiChip-avatar': {
          backgroundColor: foundation.palette.grey[400],
          color: '#17324D',
        },
      },
    },
    colorDefault: {
      '& .MuiChip-avatar': {
        backgroundColor: foundation.palette.grey[400],
        color: foundation.palette.grey[700],
      },
      '& .MuiChip-deleteIcon': {
        color: alpha(foundation.palette.text.primary, 0.23),
      },
    },
    colorPrimary: {
      '& .MuiChip-avatar': {
        backgroundColor: foundation.palette.primary.light,
        color: foundation.palette.primary.contrastText,
      },
      '& .MuiChip-deleteIcon': {
        color: colorTextPrimary,
      },
    },
    colorSecondary: {
      '& .MuiChip-deleteIcon': {
        color: colorTextPrimary,
      },
    },
    colorInfo: {
      '& .MuiChip-avatar': {
        backgroundColor: foundation.palette.info.light,
        color: foundation.palette.info[850],
      },
      '& .MuiChip-deleteIcon': {
        color: foundation.palette.info[850],
      },
    },
    colorError: {
      '& .MuiChip-deleteIcon': {
        color: foundation.palette.error[850],
      },
    },
    colorSuccess: {
      '& .MuiChip-avatar': {
        backgroundColor: foundation.palette.success.light,
        color: foundation.palette.success[850],
      },
      '& .MuiChip-deleteIcon': {
        color: foundation.palette.success[850],
      },
    },
    colorWarning: {
      '& .MuiChip-avatar': {
        backgroundColor: foundation.palette.warning.light,
        color: foundation.palette.warning[850],
      },
      '& .MuiChip-deleteIcon': {
        color: foundation.palette.warning[850],
      },
    },
  },
  variants: [
    {
      props: { variant: 'filled', color: 'default' },
      style: {
        border: 'none',
        color: palette.blue[850],
        backgroundColor: palette.blue[50],
      },
    },
    {
      props: { variant: 'outlined', color: 'default' },
      style: {
        border: `1px solid ${palette.blue[600]}`,
        backgroundColor: 'transparent',
        color: palette.blue[600],
      },
    },
    {
      props: { variant: 'filled', color: 'warning' },
      style: {
        border: 'none',
        color: palette.warning[850],
        backgroundColor: palette.warning[100],
      },
    },
    {
      props: { variant: 'outlined', color: 'warning' },
      style: {
        border: `1px solid ${palette.warning[850]}`,
        backgroundColor: 'transparent',
        color: palette.warning[850],
      },
    },
    {
      props: { variant: 'filled', color: 'success' },
      style: {
        border: 'none',
        color: palette.success[850],
        backgroundColor: palette.success[100],
      },
    },
    {
      props: { variant: 'outlined', color: 'success' },
      style: {
        border: `1px solid ${palette.success[850]}`,
        backgroundColor: 'transparent',
        color: palette.success[850],
      },
    },
    {
      props: { variant: 'filled', color: 'highlighted' },
      style: {
        border: 'none',
        color: palette.turquoise[850],
        backgroundColor: palette.turquoise[50],
      },
    },
    {
      props: { variant: 'outlined', color: 'highlighted' },
      style: {
        border: `1px solid ${palette.turquoise[850]}`,
        backgroundColor: 'transparent',
        color: palette.turquoise[850],
      },
    },
    {
      props: { variant: 'filled', color: 'error' },
      style: {
        border: 'none',
        color: palette.error[850],
        backgroundColor: palette.error[100],
      },
    },
    {
      props: { variant: 'outlined', color: 'error' },
      style: {
        border: `1px solid ${palette.error[600]}`,
        backgroundColor: 'transparent',
        color: palette.error[600],
      },
    },
    {
      props: { variant: 'filled', color: 'neutral' },
      style: {
        border: 'none',
        color: palette.neutral.black,
        backgroundColor: palette.neutral.grey[100],
      },
    },
    {
      props: { variant: 'outlined', color: 'neutral' },
      style: {
        border: `1px solid ${palette.neutral.black}`,
        backgroundColor: 'transparent',
        color: palette.neutral.black,
      },
    },
  ],
};

export const MuiChip = {};

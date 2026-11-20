'use client';

import { Checkbox, MenuItem as MuiMenuItem } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

export const Root = styled(MuiMenuItem, {
  shouldForwardProp: () => true,
})(({ theme }) => {
  const selectedBackground = alpha(theme.palette.primary.main, 0.08);

  return {
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    minHeight: 'auto',
    color: theme.palette.text.primary,
    columnGap: theme.spacing(1),
    display: 'flex',
    whiteSpace: 'normal',
    padding: theme.spacing(1.5, 2),
    gap: theme.spacing(1),
    '& + &': {
      borderTop: `1px solid ${theme.palette.divider}`,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:focus-visible': {
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: '-2px',
    },
    '&.Mui-selected': {
      backgroundColor: selectedBackground,
      '&:hover': {
        backgroundColor: selectedBackground,
      },
    },
  };
});

export const LeftSlot = styled('span')({
  alignItems: 'center',
  display: 'inline-flex',
  flex: '0 0 auto',
  justifyContent: 'center',
});

export const CentralSlot = styled('span')(({ theme }) => ({
  color: theme.palette.text.primary,
  display: 'flex',
  flex: '1 1 auto',
  marginLeft: theme.spacing(1),
  flexDirection: 'column',
  fontSize: theme.typography.pxToRem(16),
  fontWeight: theme.typography.fontWeightMedium,
  gap: theme.spacing(0.25),
  lineHeight: 1.375,
  minWidth: 0,
  overflowWrap: 'anywhere',
}));

export const RightSlot = styled('span')({
  display: 'inline-flex',
  flex: '0 0 auto',
});

export const SelectionIndicator = styled('span')({
  display: 'inline-flex',
  flex: '0 0 auto',
});

export const SelectionCheckbox = styled(Checkbox)(({ theme }) => ({
  padding: 0,
  pointerEvents: 'none',
  color: theme.palette.text.primary,
  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
}));

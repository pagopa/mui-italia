'use client';

import { Checkbox, MenuItem as MuiMenuItem } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material/styles';
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';

export type MISingleDropdownItemProps = Omit<HTMLAttributes<HTMLLIElement>, 'children'> & {
  centralSlot: ReactNode;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  disabled?: boolean;
  selected?: boolean;
  sx?: SxProps<Theme>;
};

const Root = styled(MuiMenuItem, {
  shouldForwardProp: () => true,
})(({ theme }) => {
  const selectedBackground = alpha(theme.colors.blue[500], 0.08);

  return {
    alignItems: 'center',
    backgroundColor: theme.colors.neutral.white,
    minHeight: 'auto',
    color: theme.colors.neutral.black,
    columnGap: theme.spacing(1),
    display: 'flex',
    width: theme.spacing(34),
    whiteSpace: 'normal',
    padding: theme.spacing(1.5, 2),
    gap :theme.spacing(1),
    '& + &': {
      borderTop: `1px solid ${theme.colors.neutral.grey[100]}`,
    },
    '&:hover': {
      backgroundColor: theme.colors.neutral.grey[50],
    },
    '&:focus-visible': {
      outline: `2px solid ${theme.colors.blue[500]}`,
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

const LeftSlot = styled('span')({
  alignItems: 'center',
  display: 'inline-flex',
  flex: '0 0 auto',
  justifyContent: 'center',
});

const CentralSlot = styled('span')(({ theme }) => ({
  color: theme.colors.neutral.black,
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

const RightSlot = styled('span')({
  display: 'inline-flex',
  flex: '0 0 auto',
});

const SelectionIndicator = styled('span')({
  display: 'inline-flex',
  flex: '0 0 auto',
});

const SelectionCheckbox = styled(Checkbox)(({ theme }) => ({
  padding: 0,
  pointerEvents: 'none',
  color: theme.colors.neutral.black,
  '&.Mui-checked': {
    color: theme.colors.blue[500],
  },
}));

const MISingleDropdownItem = forwardRef<HTMLLIElement, MISingleDropdownItemProps>(
  (
    {
      centralSlot,
      className,
      disabled,
      leftSlot,
      rightSlot,
      selected,
      style,
      sx,

      ...rootProps
    },
    ref
  ) => {
    const rightContent = rightSlot != null && <RightSlot>{rightSlot}</RightSlot>;

    return (
      <Root
        {...rootProps}
        ref={ref}
        disabled={disabled}
        selected={selected}
        className={className}
        style={style}
        sx={sx}
      >
        {leftSlot != null && <LeftSlot aria-hidden="true">{leftSlot}</LeftSlot>}
        <>
          <CentralSlot>{centralSlot}</CentralSlot>
          {rightContent}
        </>
        {selected && (
          <SelectionIndicator aria-hidden="true">
            <SelectionCheckbox
              checked={selected}
              disableRipple
              inputProps={{ 'aria-hidden': true }}
              size="medium"
              tabIndex={-1}
            />
          </SelectionIndicator>
        )}
      </Root>
    );
  }
);

MISingleDropdownItem.displayName = 'MISingleDropdownItem';

export default MISingleDropdownItem;

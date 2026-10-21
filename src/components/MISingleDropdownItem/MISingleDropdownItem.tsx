'use client';

import { Checkbox, MenuItem as MuiMenuItem, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material/styles';
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';

export type MISingleDropdownItemProps = Omit<HTMLAttributes<HTMLLIElement>, 'children'> & {
  value: string | number;
  label: ReactNode;
  description?: ReactNode;
  avatar?: ReactNode;
  chip?: ReactNode;
  disabled?: boolean;
  multiple?: boolean;
  selected?: boolean;
  checked?: boolean;
  sx?: SxProps<Theme>;
};

const Root = styled(MuiMenuItem, {
  shouldForwardProp: (prop) => prop !== 'multiple',
})<{ multiple: boolean }>(({ theme, multiple }) => {
  const selectedBackground = alpha(theme.colors.blue[500], 0.08);

  return {
    alignItems: multiple ? 'flex-start' : 'center',
    backgroundColor: theme.palette.background.paper,
    minHeight: 'auto',
    color: theme.colors.neutral.black,
    columnGap: theme.spacing(1),
    display: 'flex',
    minWidth: 0,
    whiteSpace: 'normal',
    padding: theme.spacing(1.5, 2),
    width: '100%',
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

const AvatarSlot = styled('span')({
  alignItems: 'center',
  display: 'inline-flex',
  flex: '0 0 auto',
  justifyContent: 'center',
});

const TextContent = styled('span')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  gap: theme.spacing(0.25),
  minWidth: 0,
}));

const ChipSlot = styled('span')({
  display: 'inline-flex',
  flex: '0 0 auto',
});

const MultipleContent = styled('span')(({ theme }) => ({
  alignItems: 'flex-start',
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  minWidth: 0,
  '& > span:first-of-type': {
    flex: 'none',
    width: '100%',
  },
}));

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
      avatar,
      checked = false,
      chip,
      className,
      disabled,
      description,
      label,
      multiple = false,
      selected,
      style,
      sx,
      value,
      ...rootProps
    },
    ref
  ) => {
    const isSelected = selected ?? checked;
    const textContent = (
      <TextContent>
        <Typography
          component="span"
          sx={(theme) => ({
            color: theme.colors.neutral.black,
            fontSize: theme.typography.pxToRem(16),
            fontWeight: theme.typography.fontWeightMedium,
            lineHeight: 1.375,
            overflowWrap: 'anywhere',
          })}
        >
          {label}
        </Typography>
        {description != null && (
          <Typography
            component="span"
            sx={(theme) => ({
              color: theme.palette.text.secondary,
              fontSize: theme.typography.pxToRem(14),
              lineHeight: 1.43,
              overflowWrap: 'anywhere',
            })}
          >
            {description}
          </Typography>
        )}
      </TextContent>
    );

    return (
      <Root
        {...rootProps}
        ref={ref}
        value={value}
        multiple={multiple}
        disabled={disabled}
        selected={isSelected}
        className={className}
        style={style}
        sx={sx}
      >
        {avatar != null && <AvatarSlot aria-hidden="true">{avatar}</AvatarSlot>}
        {multiple ? (
          <MultipleContent>
            {textContent}
            {chip != null && <ChipSlot>{chip}</ChipSlot>}
          </MultipleContent>
        ) : (
          <>
            {textContent}
            {chip != null && <ChipSlot>{chip}</ChipSlot>}
          </>
        )}
        {multiple && (
          <SelectionIndicator aria-hidden="true">
            <SelectionCheckbox
              checked={isSelected}
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

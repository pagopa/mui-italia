'use client';

import type { SxProps, Theme } from '@mui/material/styles';
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import {
  CentralSlot,
  LeftSlot,
  RightSlot,
  Root,
  SelectionCheckbox,
  SelectionIndicator,
} from './styles';

export type MISingleDropdownItemProps = Omit<HTMLAttributes<HTMLLIElement>, 'children'> & {
  value: string | number;
  centralSlot: ReactNode;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  disabled?: boolean;
  selected?: boolean;
  sx?: SxProps<Theme>;
};

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
      value,

      ...rootProps
    },
    ref
  ) => {
    const rightContent = rightSlot != null && <RightSlot>{rightSlot}</RightSlot>;

    return (
      <Root
        {...rootProps}
        ref={ref}
        value={value}
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

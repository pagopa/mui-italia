import type { ListProps } from '@mui/material';
import type { ComponentProps, ComponentType, ReactNode } from 'react';

import type { ButtonNaked } from '../ButtonNaked';

export interface MITableListSkeletonProps {
  rows?: number;
  cols?: number;
  action?: boolean;
}

export interface MITableListProps extends Pick<ListProps, 'children' | 'sx'> {
  columns?: Array<number>;
  loading?: boolean;
  slots?: {
    skeleton?: ComponentType<MITableListSkeletonProps>;
  };
  slotProps?: {
    skeleton?: MITableListSkeletonProps;
  };
  localeText?: {
    loadingLabel?: string;
  };
}

export interface MITableListItemAction {
  content: ReactNode;
  onClick: () => void;
  ariaLabel?: string;
  icon?: ReactNode | null;
}

type MITableListActionButtonProps = ComponentProps<typeof ButtonNaked>;

type MITableListActionButtonSlotProps = Omit<
  MITableListActionButtonProps,
  'children' | 'onClick' | 'aria-label' | 'endIcon'
>;

export interface MITableListItemProps {
  children: ReactNode;
  columns?: Array<number>;
  action?: MITableListItemAction;
  slots?: {
    actionButton?: ComponentType<MITableListActionButtonProps>;
  };
  slotProps?: {
    actionButton?: MITableListActionButtonSlotProps;
  };
  sx?: ListProps['sx'];
}

export interface MITableListItemFieldProps {
  children: ReactNode;
  label: ReactNode;
  icon?: ReactNode;
  sx?: ListProps['sx'];
}

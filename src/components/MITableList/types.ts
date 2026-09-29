import type { ListProps } from '@mui/material';
import type { ComponentType, ReactElement, ReactNode } from 'react';

import { MIButtonProps } from '@components/MIButton';
import { MIIconButtonProps } from '@components/MIIconButton';

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

type MITableListActionButtonProps = MIButtonProps | MIIconButtonProps;

export interface MITableListItemProps {
  children: ReactNode;
  columns?: Array<number>;
  action?: ReactElement<MITableListActionButtonProps>;
  sx?: ListProps['sx'];
}

export interface MITableListItemFieldProps {
  children: ReactNode;
  label: ReactNode;
  icon?: ReactNode;
  sx?: ListProps['sx'];
}

import { SvgIconProps } from '@mui/material';
import { ComponentType, ReactNode } from 'react';

export type MITimelineProps = {
  children: ReactNode;
};

export type MITimelineItemProps = {
  variant: 'normal' | 'info' | 'success' | 'warning' | 'error';
  icon: ComponentType<SvgIconProps>;
  title: ReactNode;
  children: ReactNode;
};

// Props injected by MITimeline into each item; not part of the public API
export type MITimelineItemInternalProps = MITimelineItemProps & {
  isFirst?: boolean;
  isLast?: boolean;
};

'use client';

import { FC, ReactElement } from 'react';
import { TimelineItem, TimelineItemProps } from '@mui/lab';

export const TimelineNotificationItem: FC<TimelineItemProps> = (props): ReactElement => {
  const { children } = props;

  return (
    <TimelineItem
      sx={{
        /* Remove extra space because there's opposite content, but the relative
          prop is not exposed by the component's API */
        '&:before': {
          display: 'none',
        },
        ...props.sx,
      }}
    >
      {children}
    </TimelineItem>
  );
};

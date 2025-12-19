'use client';

import { Timeline, TimelineProps } from '@mui/lab';
import { theme } from '@theme';
import { FC, ReactElement } from 'react';

export const TimelineNotification: FC<TimelineProps> = (props): ReactElement => {
  const { children } = props;
  return (
    <Timeline
      sx={{
        px: '0',
        py: theme.spacing(2),
        ...props.sx,
      }}
    >
      {children}
    </Timeline>
  );
};

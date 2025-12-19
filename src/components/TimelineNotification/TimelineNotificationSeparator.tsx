'use client';

import { FC, ReactElement } from 'react';
import { TimelineSeparator, TimelineSeparatorProps } from '@mui/lab';

export const TimelineNotificationSeparator: FC<TimelineSeparatorProps> = (props): ReactElement => {
  const { children } = props;

  return (
    <TimelineSeparator
      sx={{
        minWidth: '12px',
        ...props.sx,
      }}
    >
      {children}
    </TimelineSeparator>
  );
};

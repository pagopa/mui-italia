'use client';

import { FC, ReactElement } from 'react';
import { TimelineContent, TimelineContentProps } from '@mui/lab';
import { Stack } from '@mui/material';
import { theme } from '@theme';

export const TimelineNotificationContent: FC<TimelineContentProps> = (props): ReactElement => {
  const { children } = props;
  return (
    <TimelineContent
      sx={{
        py: 0,
        px: theme.spacing(2.5),
        my: theme.spacing(2.5),
        ...props.sx,
      }}
    >
      <Stack spacing={1} alignItems="baseline">
        {children}
      </Stack>
    </TimelineContent>
  );
};

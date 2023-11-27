"use client";

import React from "react";
import { TimelineItem, TimelineItemProps } from "@mui/lab";

export const TimelineNotificationItem: React.FC<TimelineItemProps> = (
  props
): React.ReactElement => {
  const { children } = props;

  return (
    <TimelineItem
      sx={{
        /* Remove extra space because there's opposite content, but the relative
          prop is not exposed by the component's API */
        "&:before": {
          display: "none",
        },
        ...props.sx,
      }}
    >
      {children}
    </TimelineItem>
  );
};

"use client";

import React from "react";
import { TimelineSeparator, TimelineSeparatorProps } from "@mui/lab";

export const TimelineNotificationSeparator: React.FC<TimelineSeparatorProps> = (
  props
): React.ReactElement => {
  const { children } = props;

  return (
    <TimelineSeparator
      sx={{
        minWidth: "12px",
      }}
    >
      {children}
    </TimelineSeparator>
  );
};

import React from "react";
import { Timeline, TimelineProps } from "@mui/lab";
import { theme } from "@theme";

export const TimelineNotification: React.FC<TimelineProps> = (
  props
): React.ReactElement => {
  const { children } = props;
  return (
    <Timeline
      sx={{
        px: "0",
        py: theme.spacing(2),
      }}
    >
      {children}
    </Timeline>
  );
};

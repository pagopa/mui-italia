import React from "react";
import { TimelineDot, TimelineDotProps } from "@mui/lab";
import { theme } from "theme/theme";

export const TimelineNotificationDot: React.FC<TimelineDotProps> = (
  props
): React.ReactElement => {
  const { children } = props;
  return (
    <TimelineDot
      {...props}
      sx={{
        my: theme.spacing(0.5),
      }}
    >
      {children}
    </TimelineDot>
  );
};

import React from "react";
import { TimelineDot, TimelineDotProps } from "@mui/lab";
import { theme } from "@theme";

interface TimelineNotificationDotProps extends Omit<TimelineDotProps, "size"> {
  size?: "small" | "default";
}

export const TimelineNotificationDot: React.FC<TimelineNotificationDotProps> = (
  props
): React.ReactElement => {
  const { children, size } = props;
  return (
    <TimelineDot
      {...props}
      sx={{
        my: theme.spacing(0.5),
        padding: size === "small" ? "1px" : "4px",
        alignSelf: "center",
      }}
    >
      {children}
    </TimelineDot>
  );
};

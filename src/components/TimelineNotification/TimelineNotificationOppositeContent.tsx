import React from "react";
import {
  TimelineOppositeContent,
  TimelineOppositeContentProps,
} from "@mui/lab";
import { Box } from "@mui/material";
import { theme } from "@theme/theme";

export const TimelineNotificationOppositeContent: React.FC<TimelineOppositeContentProps> =
  (props): React.ReactElement => {
    const { children } = props;
    return (
      <TimelineOppositeContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          flex: "15% 0",
          p: "0",
          pr: theme.spacing(2.5),
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          {children}
        </Box>
      </TimelineOppositeContent>
    );
  };

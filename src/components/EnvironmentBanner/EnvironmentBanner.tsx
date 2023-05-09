import React from "react";
import { Alert, Typography } from "@mui/material";

interface EnvironmentBannerProps {
  env: "test" | "prod";
  message: string;
  icon?: React.ReactNode;
}

export function EnvironmentBanner({
  env,
  message,
  icon,
}: EnvironmentBannerProps) {
  const bgcolor = env === "test" ? "warning.extraLight" : "background.default";
  return (
    <Alert
      sx={{
        borderLeft: "none",
        borderRadius: 0,
        alignItems: "center",
        justifyContent: "center",
        bgcolor,
        "&.MuiPaper-root": {
          px: { xs: 1, sm: 3 },
          py: 1,
        },
      }}
      icon={icon ?? false}
    >
      <Typography
        variant="body2"
        sx={{ maxWidth: 480, textAlign: "center", wordBreak: "break-word" }}
      >
        {message}
      </Typography>
    </Alert>
  );
}

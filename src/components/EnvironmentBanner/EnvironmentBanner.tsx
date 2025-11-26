'use client';

import { ReactNode } from 'react';
import { Alert, Typography } from '@mui/material';
export interface EnvironmentBannerProps {
  bgColor: 'warning' | 'info';
  message: string;
  icon?: ReactNode;
}

export const EnvironmentBanner = ({ bgColor, message, icon }: EnvironmentBannerProps) => (
  <Alert
    sx={{
      borderLeft: 'none',
      borderRadius: 0,
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: `${bgColor}.extraLight`,
      '&.MuiPaper-root': {
        px: { xs: 1, sm: 3 },
        py: 1,
      },
    }}
    icon={icon ?? false}
  >
    <Typography
      variant="body2"
      sx={{ maxWidth: 480, textAlign: 'center', wordBreak: 'break-word' }}
    >
      {message}
    </Typography>
  </Alert>
);

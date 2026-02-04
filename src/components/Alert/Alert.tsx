'use client';

import { useId } from 'react';
import { AlertTitle as MUIAlertTitle, useTheme } from '@mui/material';
import MUIAlert, { AlertProps as MUIAlertProps } from '@mui/material/Alert';
import { AlertInfoIcon } from '@icons/InfoAlertIcon';
import { ThreadsIcon } from '@icons/ThreadsIcon';

type AlertProps = Pick<MUIAlertProps, 'severity' | 'title'> & {
  description: string;
};

export const Alert = ({ severity, title, description }: AlertProps) => {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const getIcon = () => {
    if (severity === 'error') {
      return <AlertInfoIcon />;
    }

    return <ThreadsIcon />;
  };

  return (
    <MUIAlert severity={severity} icon={getIcon()}>
      <MUIAlertTitle>{title}</MUIAlertTitle>
      {description}
    </MUIAlert>
  );
};

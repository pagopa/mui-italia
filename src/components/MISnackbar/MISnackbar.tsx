'use client';

import { Snackbar, SnackbarProps } from '@mui/material';
import { MISnackbarAlert, MISnackbarAlertProps } from './MISnackbarAlert';

export type MISnackbarProps = MISnackbarAlertProps & {
  open: boolean;
  anchorOrigin?: SnackbarProps['anchorOrigin'];
};

export const MISnackbar = (props: MISnackbarProps) => {
  const { open, anchorOrigin, ...alertProps } = props;

  //if severity is 'error' and errorCode is provided, the snackbar should not auto-hide, otherwise it should auto-hide after 5 seconds
  const hideDuration = alertProps.severity === 'error' && alertProps.errorCode ? undefined : 5000;

  return (
    <Snackbar
      open={open}
      autoHideDuration={hideDuration}
      onClose={props.onClose}
      anchorOrigin={anchorOrigin}
      aria-live={alertProps.severity === 'error' ? 'assertive' : 'polite'}
      role={alertProps.severity === 'error' ? 'alert' : 'status'}
    >
      <MISnackbarAlert {...props} />
    </Snackbar>
  );
};

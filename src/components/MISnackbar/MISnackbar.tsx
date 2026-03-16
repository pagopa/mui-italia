'use client';

import { Snackbar, SnackbarProps } from '@mui/material';
import { useEffect, useRef } from 'react';
import { MISnackbarAlert, MISnackbarAlertProps } from './MISnackbarAlert';

export type MISnackbarProps = MISnackbarAlertProps & {
  open: boolean;
  anchorOrigin?: SnackbarProps['anchorOrigin'];
};

export const MISnackbar = (props: MISnackbarProps) => {
  const { open, anchorOrigin, ...alertProps } = props;

  const alertRef = useRef<HTMLDivElement>(null);

  const hideDuration = alertProps.severity === 'error' && alertProps.errorCode ? undefined : 5000;

  //Force focus when the snackbar opens
  useEffect(() => {
    if (open && alertRef.current) {
      // We MUST use a tiny timeout to wait for MUI's fade-in animation to start.
      // If we focus instantly, the element might be hidden, and the screen reader ignores it.
      const timeout = setTimeout(() => {
        alertRef.current?.focus();
      }, 100);

      return () => clearTimeout(timeout);
    }
    return;
  }, [open]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={hideDuration}
      onClose={props.onClose}
      anchorOrigin={anchorOrigin}
    >
      <MISnackbarAlert {...alertProps} ref={alertRef} tabIndex={-1} />
    </Snackbar>
  );
};

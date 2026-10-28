'use client';

import { Snackbar, type SnackbarProps } from '@mui/material';
import { useEffect, useRef } from 'react';
import MISnackbarAlert, { type MISnackbarAlertProps } from './MISnackbarAlert';

export type MISnackbarProps = MISnackbarAlertProps & {
  open: boolean;
  anchorOrigin?: SnackbarProps['anchorOrigin'];
};

const MISnackbar = (props: MISnackbarProps) => {
  const { open, anchorOrigin, ...alertProps } = props;

  const alertRef = useRef<HTMLDivElement>(null);
  /* add a ref to store the previously focused element before the snackbar opens, so we can restore focus when it closes
   ** we need to force focus on the snackbar when it opens for accessibility reasons */
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const autoHideDurationValue = 5000; // default auto-hide duration for error warnings; value is provided by system design when no error code is present
  const hideDuration =
    alertProps.severity === 'error' && alertProps.errorCode ? undefined : autoHideDurationValue;

  useEffect(() => {
    if (open) {
      // capture the currently focused element before we move focus
      previousFocusRef.current = document.activeElement as HTMLElement;
      const timeout = setTimeout(() => {
        alertRef.current?.focus();
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      // restore focus to the saved element
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
        previousFocusRef.current = null;
      }
    }
    return;
  }, [open]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={hideDuration}
      onClose={props.onClose}
      anchorOrigin={anchorOrigin}
      sx={(theme) => ({
        width: '100%',
        minWidth: `min(280px, calc(100% - ${theme.spacing(6)}))`,
        maxWidth: `min(560px, calc(100% - ${theme.spacing(6)}))`,
        [theme.breakpoints.down('sm')]: {
          left: theme.spacing(3),
          right: theme.spacing(3),
        },
      })}
    >
      <MISnackbarAlert {...alertProps} ref={alertRef} />
    </Snackbar>
  );
};

export default MISnackbar;

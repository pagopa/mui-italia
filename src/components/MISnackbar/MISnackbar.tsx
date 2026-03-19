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
  //add a ref to store the previously focused element
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const hideDuration = alertProps.severity === 'error' && alertProps.errorCode ? undefined : 5000;

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
      role="alert"
    >
      <MISnackbarAlert {...alertProps} ref={alertRef} />
    </Snackbar>
  );
};

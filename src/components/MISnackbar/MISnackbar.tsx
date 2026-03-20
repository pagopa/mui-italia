import { Snackbar, SnackbarProps } from '@mui/material';
import { MISnackbarAlert, MISnackbarAlertProps } from './MISnackbarAlert';

export type MISnackbarProps = MISnackbarAlertProps & {
  open: boolean;
  anchorOrigin?: SnackbarProps['anchorOrigin'];
};

export const MISnackbar = (props: MISnackbarProps) => {
  const { open, anchorOrigin, ...alertProps } = props;

  const hideDuration = alertProps.severity === 'error' && alertProps.errorCode ? undefined : 5000;

  return (
    <Snackbar
      open={open}
      autoHideDuration={hideDuration}
      onClose={props.onClose}
      anchorOrigin={anchorOrigin}
      role="alert"
    >
      <MISnackbarAlert {...alertProps} />
    </Snackbar>
  );
};

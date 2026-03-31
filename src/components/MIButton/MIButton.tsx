import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';

export type MIButtonProps = Omit<ButtonProps, 'disabled'> & {
  loadingButton?: boolean; // Optional prop to indicate if the button is in a loading stateù
  contrasted?: boolean; // Optional prop to indicate if the button should use a contrasted style
};

const MIButton: React.FC<MIButtonProps> = ({ children, loadingButton, contrasted, ...props }) => {
  return (
    <>
      {loadingButton ? (
        <LoadingButton loading {...props}>
          {children}
        </LoadingButton>
      ) : (
        <Button {...props}>{children}</Button>
      )}
    </>
  );
};

export default MIButton;

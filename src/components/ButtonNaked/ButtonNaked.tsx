import React from "react";
import { Button, ButtonProps } from "@mui/material";

export const ButtonNaked = <C extends React.ElementType>(
  props: ButtonProps<
    C,
    {
      component?: C;
      buttonRef?: React.Ref<HTMLButtonElement>;
    }
  >
): React.ReactElement => {
  const { children, buttonRef, ...rest } = props;
  return (
    <Button
      ref={buttonRef}
      variant="naked"
      disableRipple
      disableTouchRipple
      {...rest}
    >
      {children}
    </Button>
  );
};

import React from "react";
import { Button, ButtonProps } from "@mui/material";

export const ButtonNaked = <C extends React.ElementType>(
  props: ButtonProps<
    C,
    {
      component?: C;
      buttonRef?: React.Ref<HTMLButtonElement>;
      weight?: "default" | "light";
    }
  >
): React.ReactElement => {
  const { children, buttonRef, weight = "default", ...rest } = props;
  return (
    <Button
      sx={{
        fontWeight: weight === "default" ? "600" : "400",
        letterSpacing: 0.3,
      }}
      variant="naked"
      size="small"
      disableRipple
      disableTouchRipple
      ref={buttonRef}
      {...rest}
    >
      {children}
    </Button>
  );
};

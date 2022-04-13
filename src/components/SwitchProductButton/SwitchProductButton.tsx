import React from "react";
import clsx from "clsx";
import { styled } from "@mui/system";
import { alpha } from "@mui/material/styles";

import { ButtonUnstyledProps, useButton } from "@mui/base/ButtonUnstyled";

import { ringWidth, theme } from "@theme";

const StyledSwitcherButton = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: theme.spacing(1),
  backgroundColor: "transparent",
  padding: 0,
  cursor: "pointer",
  border: "none",
  transitionProperty: ["color", "background-color", "box-shadow"],

  /*
  "&:not(.disabled):hover": {},
  "&.active": {},
  */

  "&.focusVisible": {
    outline: "none",
    boxShadow: `0 0 0 ${ringWidth} ${alpha(theme.palette.primary.main, 0.4)}`,
  },

  "&.disabled": {
    opacity: "0.5",
    cursor: "default",
  },
}));

export const SwitchProductButton = React.forwardRef(
  function SwitchProductButton(
    props: ButtonUnstyledProps,
    ref: React.ForwardedRef<any>
  ) {
    const { children } = props;
    const { /* active */ disabled, focusVisible, getRootProps } = useButton({
      ...props,
      ref,
      component: StyledSwitcherButton,
    });

    const classes = {
      /* active, */
      disabled,
      focusVisible,
    };

    return (
      <>
        {/* Moved here because there were strange TS errors
          inside `styled` components */}
        <StyledSwitcherButton
          sx={{
            transition: `${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
          }}
          {...getRootProps()}
          className={clsx(classes)}
        >
          {children}
        </StyledSwitcherButton>
      </>
    );
  }
);

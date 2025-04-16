"use client";

import Switch, { SwitchProps } from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";

export const CustomSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    transform: "translate(-9px, -9px)",
    ":hover": {
      boxShadow: `0 0 0 8px ${theme.palette.action.hover}`,
    },
    "&.Mui-checked": {
      transform: "translate(7px, -9px)",
      color: "#fff",
      ":hover": {
        boxShadow: `0 0 0 10px ${theme.palette.primaryAction.hover}`,
      },
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.primary,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.MuiSwitch-colorError + .MuiSwitch-track": {
      backgroundColor: theme.palette.error.dark,
    },
    "&.MuiSwitch-colorError:hover": {
      boxShadow: `0 0 0 10px ${alpha(theme.palette.error.dark, 0.08)}`,
    },

    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: theme.palette.error,
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.2,
    },
  },

  "& .MuiSwitch-colorError.Mui-checked  + .MuiSwitch-track": {
    backgroundColor: theme.palette.error.dark,
  },

  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },

  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[700]
        : theme.palette.primary,
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

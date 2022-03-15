import * as React from "react";
import { fontWeight, styled } from "@mui/system";

import { theme, pxToRem } from "@theme";

// Components
import { BadgeProps } from "@mui/material";
import BadgeUnstyled from "@mui/base/BadgeUnstyled";

const StyledBadge = styled(BadgeUnstyled)({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  fontSize: pxToRem(12),
  lineHeight: 1,
  display: "inline-flex",

  "& .MuiBadge-badge": {
    zIndex: "auto",
    fontWeight: 600,
    whiteSpace: "nowrap",
    textAlign: "center",
  },
});

export const ListItemBadge = <C extends React.ElementType>(
  props: BadgeProps<
    C,
    {
      component?: C;
      badgeRef?: React.Ref<HTMLButtonElement>;
    }
  >
): React.ReactElement => {
  const { children, badgeRef, ...rest } = props;
  return (
    <StyledBadge
      sx={{
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.common.white,
        "& .MuiBadge-badge": {
          borderRadius: theme.spacing(3),
          py: theme.spacing(0.5),
          px: theme.spacing(1),
          backgroundColor: theme.palette.primary.main,
        },
      }}
      ref={badgeRef}
      {...rest}
    >
      {children}
    </StyledBadge>
  );
};

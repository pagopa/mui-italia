import React from "react";

// Components
import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from "@mui/material";

const IllustrationSVG = styled(MuiSvgIcon)<SvgIconProps>(({ theme }) => ({
  fill: theme.palette.secondary.main,
}));

IllustrationSVG.defaultProps = {
  viewBox: "0 0 120 120",
  focusable: "false",
  "aria-hidden": "true",
};

export const Illustration = <C extends React.ElementType>(
  props: SvgIconProps<
    C,
    {
      component?: C;
      name?: string;
    }
  >
): React.ReactElement => {
  const { children, name, ...rest } = props;
  return (
    <IllustrationSVG
      titleAccess={name}
      sx={{ width: 120, height: 120 }}
      {...rest}
    >
      {children}
    </IllustrationSVG>
  );
};

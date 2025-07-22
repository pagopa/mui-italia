"use client";

import { SxProps, styled } from "@mui/system";
import { alpha } from "@mui/material/styles";

import { pxToRem, theme } from "@theme";

export type Variants = "default" | "light";
export type Colors =
  | "default"
  | "primary"
  | "warning"
  | "error"
  | "info"
  | "success";

export interface TagProps {
  /** Content of the component */
  value: string;
  /** Variant of the colour. You can set `Light` variant if
   * you want a washed out variant of the color. */
  variant?: Variants;
  /** Color of the component. It supports default neutral color,
   * primary color and status colours (warning, info, etc…). */
  color?: Colors;
  /* Style to override tag style */
  sx?: SxProps;
}

/* Transform HTML component into MUI Styled Component
in order to accept `sx` prop */
const StyledTag = styled("span")({
  display: "inline-block",
  fontSize: pxToRem(14),
  fontWeight: 600,
  letterSpacing: 0.5,
  whiteSpace: "nowrap",
});

export const Tag = ({
  value,
  color = "default",
  variant = "default",
  sx = {},
  ...rest
}: TagProps): JSX.Element => {
  const tagNeutralBg = theme.palette.grey[100];
  const tagBgColor =
    color !== "default"
      ? variant === "light"
        ? alpha(theme.palette[color][100], 0.1)
        : theme.palette[color][100]
      : tagNeutralBg;

  const tagTextColor =
    color === "default" || color === "primary"
      ? theme.palette.text.primary
      : theme.palette[color][850];

  const style = {
    userSelect: "none",
    py: 0.5,
    px: 0.75,
    backgroundColor: tagBgColor,
    color: tagTextColor,
    fontFamily: theme.typography.fontFamily,
    borderRadius: theme.spacing(0.5),
    ...sx,
  } as SxProps;
  return (
    <StyledTag sx={style} {...rest}>
      {value}
    </StyledTag>
  );
};

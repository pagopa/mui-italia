"use client";

import { styled } from "@mui/system";
import { alpha } from "@mui/material/styles";

import { theme, pxToRem } from "@theme";

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
  ...rest
}: TagProps): JSX.Element => {
  const tagNeutralBg =
    variant === "light" ? theme.palette.grey[100] : theme.palette.grey[200];
  const tagBgColor =
    color !== "default"
      ? variant === "light"
        ? alpha(theme.palette[color].main, 0.1)
        : theme.palette[color].main
      : tagNeutralBg;

  const tagTextColor =
    variant === "default" && color === "primary"
      ? theme.palette.primary.contrastText
      : theme.palette.text.primary;

  return (
    <StyledTag
      sx={{
        py: 0.5,
        px: 0.75,
        backgroundColor: tagBgColor,
        color: tagTextColor,
        fontFamily: theme.typography.fontFamily,
        borderRadius: theme.spacing(0.5),
      }}
      {...rest}
    >
      {value}
    </StyledTag>
  );
};

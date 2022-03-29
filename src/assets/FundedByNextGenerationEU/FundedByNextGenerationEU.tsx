// Components
import { styled } from "@mui/material";

import { theme } from "@theme";

// Partials
import {
  SvgFilled,
  SvgOutline,
  SvgColorDark,
  SvgColorLight,
} from "@assets/FundedByNextGenerationEU/partials";

const StyledSvg = styled("svg")({
  display: "inline-block",
  userSelect: "none",
});

export type Variants = "filled" | "outline" | "color";
export type Colors = "light" | "dark" | "pantone";

export interface FundedByNextGenerationEUPropsProps {
  /** Provides a human-readable title for the element that contains it. */
  title: string;
  size: number;
  variant: Variants;
  color: Colors;
}

const colorMap = {
  dark: theme.palette.common.black,
  light: theme.palette.common.white,
  pantone: theme.palette.europeanUnion.main,
};

const elementMap = {
  outline: <SvgOutline />,
  filled: <SvgFilled />,
  color: <SvgColorDark />,
};

export const FundedByNextGenerationEU = ({
  title = "Finanziato dall'Unione Europea · NextGenerationEU",
  size = 200,
  color = "dark",
  variant = "outline",
}: FundedByNextGenerationEUPropsProps): JSX.Element => (
  <StyledSvg
    viewBox="0 0 1174 270"
    focusable="false"
    role="img"
    sx={{
      width: size,
      fill: colorMap[color],
    }}
  >
    {variant === "color" && color === "light" ? (
      <SvgColorLight />
    ) : (
      elementMap[variant]
    )}
    <title>{title}</title>
  </StyledSvg>
);

// Below: SVG Code of all the variants

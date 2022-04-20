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

export type NextGeneratioNEUVariants = "filled" | "outline" | "color";
export type NextGenerationEUColors = "light" | "dark" | "pantone";

export interface FundedByNextGenerationEUPropsProps {
  /** Provides a human-readable title for the element that contains it. */
  title?: string;
  /** Width of the component. Height is set automatically. */
  size?: number;
  /** The variant to use. If the color variant is set,
   * the color property is ignored. */
  variant?: NextGeneratioNEUVariants;
  /** The color of the component. */
  color?: NextGenerationEUColors;
}

const colorMap = {
  dark: theme.palette.text.primary,
  light: theme.palette.common.white,
  pantone: theme.palette.europeanUnion.main,
};

const variantMap = {
  outline: <SvgOutline />,
  filled: <SvgFilled />,
};

const variantColorMap = {
  dark: <SvgColorDark />,
  light: <SvgColorLight />,
  pantone: <SvgColorDark />,
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
    aria-labelledby="logo-next-genEU-titleID"
    sx={{
      width: size,
      /* If the color variant is set,
      the following property is ignored */
      fill: colorMap[color],
      maxWidth: "100%",
    }}
  >
    {variant === "color" ? variantColorMap[color] : variantMap[variant]}
    <title id="logo-next-genEU-titleID">{title}</title>
  </StyledSvg>
);

// Components
import { styled } from "@mui/material";

import { theme } from "@theme";

const StyledSvg = styled("svg")({
  display: "inline-block",
  userSelect: "none",
});

export type LogoPagoPAProductColors = "default" | "light" | "dark";

export interface LogoPagoPAProductProps {
  /** Provides a human-readable title for the element that contains it. */
  title: string;
  /** Width of the component. Height is set automatically. */
  size: number;
  /** The color of the component. */
  color: LogoPagoPAProductColors;
}

const colorMap = {
  default: theme.palette.pagoPA.main,
  dark: theme.palette.common.black,
  light: theme.palette.common.white,
};

export const LogoPagoPAProduct = ({
  title = "pagoPA",
  size = 56,
  color = "default",
}: LogoPagoPAProductProps): JSX.Element => (
  <StyledSvg
    viewBox="0 0 40 27"
    focusable="false"
    role="img"
    sx={{
      width: size,
      fill: colorMap[color],
    }}
  >
    <path d="m28.19 7.947-.012 3.345h-2.446V0h4.522c1.453 0 2.191.392 2.203 1.176V6.69c0 .784-.704 1.165-2.123 1.165h-2.133v.092h-.012ZM30 1.303h-1.834V6.54H30V1.303ZM2.065 11.303l-.012 3.345H0V3.356h3.783c1.223 0 1.834.393 1.846 1.177v5.513c0 .785-.589 1.165-1.777 1.165H2.065v.092Zm1.522-6.632H2.053v5.237h1.534V4.67ZM11.95 11.211h-3.9c-1.141 0-1.718-.392-1.718-1.176l.012-2.296c0-.772.588-1.165 1.776-1.176h1.788V4.67H8.374L8.362 5.71H6.355V4.533c0-.773.6-1.153 1.8-1.153l2.007-.024c1.188 0 1.787.393 1.787 1.165v6.69ZM8.384 9.896h1.546l-.012-2.018H8.385v2.018ZM16.436 11.211h-1.8c-1.187 0-1.775-.392-1.775-1.165V4.533c.011-.784.622-1.177 1.845-1.177h3.783v10.127c0 .785-.6 1.177-1.788 1.177H14.66c-1.188 0-1.788-.392-1.788-1.177v-1.165h2.042v1.039h1.534v-2.054l-.012-.092Zm-1.534-1.315h1.534V4.671h-1.534v5.225ZM24.81 10.035c-.012.784-.623 1.165-1.846 1.165H20.98c-1.2 0-1.799-.393-1.799-1.165V4.52c0-.784.6-1.165 1.8-1.165h2.04c1.189 0 1.777.393 1.777 1.165v5.514h.012ZM22.78 4.67h-1.546v5.237h1.534l.012-5.237Z" />
    <path d="M39.989 1.234c0-.784-.704-1.165-2.123-1.165h-2.445c-1.43 0-2.145.392-2.145 1.165v10.081h2.445V7.866h1.845v2.884a13.33 13.33 0 0 1-13.345 13.345c-4.279 0-8.096-2.019-10.542-5.144l1.223-.935-4.914-3.31.22 6.978 1.568-1.246a15.768 15.768 0 0 0 12.445 6.067c8.72 0 15.779-7.07 15.779-15.778l-.011-9.493Zm-2.434 5.317h-1.846v-5.19h1.846v5.19Z" />
    <title>{title}</title>
  </StyledSvg>
);

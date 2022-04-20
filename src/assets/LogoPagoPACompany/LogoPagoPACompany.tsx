// Components
import { styled } from "@mui/material";

import { theme } from "@theme";

const StyledSvg = styled("svg")({
  display: "inline-block",
  userSelect: "none",
});

export type LogoPACompanyColors = "default" | "light" | "dark";

export interface LogoPagoPACompanyProps {
  /** Provides a human-readable title for the element that contains it. */
  title?: string;
  /** Width of the component. Height is set automatically. */
  size?: number;
  /** The color of the component. */
  color?: LogoPACompanyColors;
}

const colorMap = {
  default: theme.palette.secondary.main,
  dark: theme.palette.common.black,
  light: theme.palette.common.white,
};

export const LogoPagoPACompany = ({
  title = "PagoPA",
  size = 120,
  color = "default",
}: LogoPagoPACompanyProps): JSX.Element => (
  <StyledSvg
    viewBox="0 0 119 33"
    focusable="false"
    aria-labelledby="logo-pagoPA-company-titleID"
    role="img"
    sx={{
      width: size,
      fill: colorMap[color],
    }}
  >
    <path
      opacity=".4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M114.338 25.099h3.718V2.324h-3.718v2.97a11.347 11.347 0 0 0-7.669-2.97 11.375 11.375 0 0 0-9.528 5.15 11.334 11.334 0 0 1 1.86 6.237 11.33 11.33 0 0 1-1.86 6.238 11.377 11.377 0 0 0 9.528 5.15c2.954 0 5.645-1.125 7.669-2.97v2.97ZM99 13.71a7.67 7.67 0 1 1 15.338 0 7.67 7.67 0 0 1-15.338 0ZM3.718 5.294v-2.97H0v29.282h3.718v-9.477a11.345 11.345 0 0 0 7.67 2.97c3.985 0 7.493-2.049 9.527-5.15a11.334 11.334 0 0 1-1.859-6.238c0-2.303.684-4.446 1.86-6.237a11.377 11.377 0 0 0-9.529-5.15 11.346 11.346 0 0 0-7.669 2.97Zm0 8.417a7.669 7.669 0 1 1 15.338 0 7.669 7.669 0 0 1-15.338 0Z"
    />
    <path
      opacity=".7"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M41.83 5.304v-2.98h-3.718v2.97a11.346 11.346 0 0 0-7.669-2.97c-6.288 0-11.387 5.098-11.387 11.387 0 6.29 5.099 11.388 11.387 11.388 2.954 0 5.646-1.125 7.67-2.97v2.97h3.718v-2.925a11.39 11.39 0 0 1-3.719-8.435c0-3.342 1.434-6.348 3.719-8.435Zm-19.055 8.407a7.669 7.669 0 1 1 15.338 0 7.669 7.669 0 0 1-15.338 0ZM79.944 5.293V2.324h-3.719v2.97a11.358 11.358 0 0 1 3.719 8.417c0 3.335-1.434 6.335-3.719 8.418v9.477h3.719v-9.477a11.346 11.346 0 0 0 7.669 2.97C93.902 25.099 99 20 99 13.71S93.902 2.324 87.613 2.324a11.346 11.346 0 0 0-7.669 2.97Zm0 8.418a7.669 7.669 0 1 1 15.338 0 7.669 7.669 0 0 1-15.338 0Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M60.887 0v5.293l.157-.14a11.344 11.344 0 0 1 7.513-2.83c6.288 0 11.387 5.1 11.387 11.388 0 6.29-5.099 11.388-11.388 11.388a11.345 11.345 0 0 1-7.668-2.97v3.02c0 2.9-1.16 5.627-3.196 7.7l-.15.151-2.604-2.66c1.383-1.36 2.179-3.123 2.229-5.002l.002-.189v-2.975A11.333 11.333 0 0 1 49.5 25.15c-6.289 0-11.387-5.11-11.387-11.41 0-6.303 5.098-11.411 11.387-11.411 2.954 0 5.645 1.127 7.67 2.975V0h3.717ZM49.5 6.055c-4.235 0-7.669 3.44-7.669 7.684s3.434 7.685 7.67 7.685c4.235 0 7.668-3.44 7.668-7.685 0-4.244-3.433-7.684-7.669-7.684Zm11.388 7.656a7.669 7.669 0 1 1 15.338 0 7.669 7.669 0 0 1-15.338 0Z"
    />
    <title id="logo-pagoPA-company-titleID">{title}</title>
  </StyledSvg>
);

// Components
import { styled } from "@mui/material";

import { theme } from "@theme";

const StyledSvg = styled("svg")({
  display: "inline-block",
  userSelect: "none",
});

export type LogoIOAppColors = "default" | "light" | "dark";

export interface LogoIOAppProps {
  /** Provides a human-readable title for the element that contains it. */
  title: string;
  /** Width of the component. Height is set automatically. */
  size: number;
  /** The color of the component. */
  color: LogoIOAppColors;
}

const colorMap = {
  default: theme.palette.primary.main,
  dark: theme.palette.common.black,
  light: theme.palette.common.white,
};

export const LogoIOApp = ({
  title = "App IO",
  size = 48,
  color = "default",
}: LogoIOAppProps): JSX.Element => (
  <StyledSvg
    viewBox="0 0 106 90"
    focusable="false"
    role="img"
    sx={{
      width: size,
      fill: colorMap[color],
    }}
  >
    <path d="M11.25 0C17.463 0 22.5 5.037 22.5 11.25S17.463 22.5 11.25 22.5 0 17.463 0 11.25 5.037 0 11.25 0Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M105.75 54c0 19.882-16.118 36-34.286 36C49.868 90 33.75 73.882 33.75 54s16.118-36 37.714-36c18.168 0 34.286 16.118 34.286 36Zm-27.155-3.779h4.793v-4.716h-4.759v-5.703h-5.206v18.974c0 2.998.413 5.045 1.275 6.142.828 1.133 2.414 1.681 4.759 1.681.896 0 2.24-.219 3.965-.621l-.241-4.387-2.966.073c-.517 0-.896-.11-1.138-.365a1.477 1.477 0 0 1-.413-.878 18.564 18.564 0 0 1-.07-1.755v-8.445Zm-15.69-4.679v20.582h5.207V45.542h-5.206Zm-7.814-.512c.91 0 1.68.307 2.275.92s.875 1.362.875 2.281c0 .92-.28 1.635-.875 2.248-.56.545-1.295.851-2.24.851-.91 0-1.68-.306-2.275-.92a3.12 3.12 0 0 1-.91-2.247c0-.885.315-1.634.875-2.247.595-.613 1.365-.886 2.275-.886Z"
    />
    <path d="M20.25 42.75a9 9 0 1 0-18 0V81a9 9 0 1 0 18 0V42.75Z" />
    <title>{title}</title>
  </StyledSvg>
);

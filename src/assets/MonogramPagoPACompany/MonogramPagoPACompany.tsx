// Components
import { styled } from "@mui/material";

import { theme } from "@theme";

const StyledSvg = styled("svg")({
  display: "inline-block",
  userSelect: "none",
});

export type MonogramPagoPACompanyShapes = "none" | "circle";
export type MonogramPagoPAMonogramColors =
  | "primary"
  | "dark"
  | "light"
  | "light-primary";

export interface MonogramPagoPACompanyProps {
  /** Provides a human-readable title for the element that contains it. */
  title?: string;
  /** Width of the component. Height is set automatically. */
  size?: number;
  /** The color of the component. */
  color: MonogramPagoPAMonogramColors;
  /** The shape of the component. */
  shape: MonogramPagoPACompanyShapes;
}

interface MonogramRoundedProps {
  color: MonogramPagoPAMonogramColors;
}

const colorMap = {
  primary: theme.palette.secondary.main,
  dark: theme.palette.common.black,
  light: theme.palette.common.white,
  "light-primary": theme.palette.common.white,
};

const colorRoundedMap = {
  primary: {
    circle: theme.palette.common.white,
    monogram: theme.palette.secondary.main,
  },
  dark: {
    circle: theme.palette.common.black,
    monogram: theme.palette.common.white,
  },
  light: {
    circle: theme.palette.common.white,
    monogram: theme.palette.common.black,
  },
  "light-primary": {
    circle: theme.palette.secondary.main,
    monogram: theme.palette.common.white,
  },
};

const viewBoxMap = {
  none: "0 0 90 71",
  circle: "0 0 158 158",
};

export const MonogramPagoPACompany = ({
  title = "PagoPA (Monogram)",
  size = 90,
  color = "primary",
  shape = "none",
}: MonogramPagoPACompanyProps): JSX.Element => (
  <StyledSvg
    viewBox={viewBoxMap[shape] || viewBoxMap.none}
    focusable="false"
    aria-labelledby="monogram-pagoPA-company-titleID"
    role="img"
    sx={{
      width: size,
      fill: colorMap[color],
    }}
  >
    {shape === "none" ? <MonogramDefault /> : <MonogramRounded color={color} />}

    <title id="monogram-pagoPA-company-titleID">{title}</title>
  </StyledSvg>
);

const MonogramDefault = () => (
  <path d="M49 0v11.388l.337-.3A24.406 24.406 0 0 1 65.5 5C79.031 5 90 15.969 90 29.5S79.031 54 65.5 54A24.411 24.411 0 0 1 49 47.611v6.498c0 6.24-2.496 12.105-6.876 16.567L41.8 71l-5.6-5.724c2.976-2.924 4.687-6.718 4.795-10.761l.005-.406v-6.401a24.384 24.384 0 0 1-16.5 6.401C10.969 54.11 0 43.12 0 29.56 0 16.002 10.969 5.01 24.5 5.01A24.384 24.384 0 0 1 41 11.412V0h8ZM24.5 13.026C15.387 13.026 8 20.43 8 29.56s7.387 16.533 16.5 16.533S41 38.691 41 29.56s-7.387-16.534-16.5-16.534Zm41-.026C56.387 13 49 20.387 49 29.5S56.387 46 65.5 46 82 38.613 82 29.5 74.613 13 65.5 13Z" />
);

const MonogramRounded = ({ color = "primary" }: MonogramRoundedProps) => (
  <>
    <path
      d="M79 158c43.63 0 79-35.37 79-79S122.63 0 79 0 0 35.37 0 79s35.37 79 79 79Z"
      fill={colorRoundedMap[color]?.circle}
    />
    <path
      d="M83 49v11.388l.337-.3A24.406 24.406 0 0 1 99.5 54c13.531 0 24.5 10.969 24.5 24.5S113.031 103 99.5 103A24.41 24.41 0 0 1 83 96.611v6.499c0 6.239-2.496 12.104-6.876 16.566L75.8 120l-5.6-5.724c2.976-2.924 4.687-6.718 4.795-10.761l.005-.405v-6.403a24.382 24.382 0 0 1-16.5 6.403c-13.531 0-24.5-10.992-24.5-24.55C34 65 44.969 54.01 58.5 54.01A24.384 24.384 0 0 1 75 60.412V49h8ZM58.5 62.026c-9.113 0-16.5 7.403-16.5 16.534s7.387 16.533 16.5 16.533S75 87.691 75 78.56s-7.387-16.534-16.5-16.534Zm41-.026C90.387 62 83 69.387 83 78.5S90.387 95 99.5 95 116 87.613 116 78.5 108.613 62 99.5 62Z"
      fill={colorRoundedMap[color]?.monogram}
    />
  </>
);

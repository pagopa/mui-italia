"use client";

import { Box } from "@mui/material";
import { alpha } from "@mui/material/styles";

import { theme } from "@theme";

export interface ProductAvatarProps {
  /** The id attribute added to the element */
  id?: string;
  /** Component dimension set in pixels */
  size?: "small" | "default" | "large";
  /** The url logo */
  logoUrl: string;
  /** The logo background color */
  logoBgColor?: string;
  /** Alternate text for logo */
  logoAltText: string;
}

const sizesMap = {
  small: {
    dimension: 32,
    padding: 1 /* 8px */,
  },
  default: {
    dimension: 64,
    padding: 2 /* 16px */,
  },
  large: {
    dimension: 88,
    padding: 3 /* 24px */,
  },
};

export const ProductAvatar = ({
  size = "default",
  id,
  logoUrl,
  logoBgColor,
  logoAltText,
}: ProductAvatarProps): JSX.Element => (
  <Box
    id={id}
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      width: sizesMap[size]?.dimension,
      height: sizesMap[size]?.dimension,
      backgroundColor: logoBgColor
        ? logoBgColor
        : theme.palette.background.paper,
      boxSizing: "border-box",
      padding: theme.spacing(sizesMap[size]?.padding),
      borderRadius: theme.spacing(1) /* 8px */,
      /* Inner shadow */
      "&:after": {
        content: "''",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        /* 10% Black inner border if background is set,
        otherwise a light grey inner border */
        boxShadow: logoBgColor
          ? `inset 0 0 0 1px ${alpha(theme.palette.common.black, 0.1)}`
          : `inset 0 0 0 1px ${theme.palette.divider}`,
        borderRadius: "inherit",
      },
    }}
  >
    <img
      src={logoUrl}
      alt={logoAltText}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        objectPosition: "center",
      }}
    />
  </Box>
);

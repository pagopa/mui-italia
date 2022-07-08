import { Box } from "@mui/material";
import { alpha } from "@mui/material/styles";

/* Product Logos & Icons */
import { LogoIOApp } from "@assets/LogoIOApp";
import { LogoPagoPAProduct } from "@assets/LogoPagoPAProduct";
import { CheckIbanIcon } from "@icons/CheckIbanIcon";
import { PNIcon } from "@icons/PNIcon";
import { InteropIcon } from "@icons/InteropIcon";
import LogoCGN from "@assets/raster/logo-cgn.png";

import { theme } from "@theme";

export type Product =
  | "app-io"
  | "check-iban"
  | "piattaforma-notifiche"
  | "interop-platform"
  | "carta-giovani-nazionale"
  | "pago-pa-payment";

export interface ProductAvatarProps {
  /** The id attribute added to the element */
  id?: string;
  /** Product to be shown */
  product: Product;
  /** Component dimension set in pixels */
  size?: "small" | "default" | "large";
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

const productAttributesMap = {
  "app-io": {
    icon: <LogoIOApp title="App IO Icon" color="light" />,
    background: "transparent",
    backgroundImage: `linear-gradient(180deg, #1D51DF 0%, #1723D5 100%)`,
  },
  "check-iban": {
    icon: (
      <CheckIbanIcon
        sx={{
          width: "100%",
          height: "100%",
          color: theme.palette.common.white,
        }}
      />
    ),
    background: theme.palette.checkIban.main,
  },
  "piattaforma-notifiche": {
    icon: (
      <PNIcon
        sx={{
          width: "100%",
          height: "100%",
          color: theme.palette.common.white,
        }}
      />
    ),
    background: theme.palette.pagoPA.main,
  },
  "interop-platform": {
    icon: (
      <InteropIcon
        sx={{
          width: "100%",
          height: "100%",
          color: theme.palette.primary.main,
        }}
      />
    ),
    background: undefined,
  },
  "carta-giovani-nazionale": {
    icon: <img src={LogoCGN} style={{ width: "100%", height: "auto" }} />,
    background: undefined,
  },
  "pago-pa-payment": {
    icon: <LogoPagoPAProduct title="pagoPA" color="light" />,
    background: theme.palette.pagoPA.main,
  },
};

export const ProductAvatar = ({
  size = "default",
  product,
  id,
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
      backgroundColor: productAttributesMap[product]?.background
        ? productAttributesMap[product]?.background
        : theme.palette.background.paper,
      backgroundImage:
        product === "app-io"
          ? productAttributesMap["app-io"]?.backgroundImage
          : null,
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
        boxShadow: productAttributesMap[product]?.background
          ? `inset 0 0 0 1px ${alpha(theme.palette.common.black, 0.1)}`
          : `inset 0 0 0 1px ${theme.palette.divider}`,
        borderRadius: "inherit",
      },
    }}
  >
    {product && productAttributesMap[product]?.icon}
  </Box>
);

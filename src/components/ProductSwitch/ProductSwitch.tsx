"use client";

import {
  ForwardedRef,
  ReactNode,
  forwardRef,
  useEffect,
  useMemo,
  useState,
} from "react";
import clsx from "clsx";
import { Menu, MenuItem, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { alpha } from "@mui/material/styles";
import { ButtonProps } from "@mui/base/Button";
import { useButton } from "@mui/base/useButton";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

import {
  focusBorderRadius,
  focusOffset,
  focusWidth,
  ringWidth,
  theme,
} from "@theme";
import { LinkType } from "@components/Footer";

export type ProductSwitchItem = {
  id: string;
  title: string;
  productUrl: string;
  linkType: LinkType;
  icon?: ReactNode;
};

export type ProductSwitchProps = {
  currentProductId: string;
  products: Array<ProductSwitchItem>;
  /* token: string; */
  onExit?: (product: ProductSwitchItem) => void;
};

export const ProductSwitch = ({
  products,
  /* token, */
  onExit,
  currentProductId,
}: ProductSwitchProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedId, setSelectedId] = useState(currentProductId);
  const open = Boolean(anchorEl);

  const selectedProduct = useMemo(
    () => products.find((p) => p.id === selectedId),
    [selectedId]
  );

  useEffect(() => {
    setSelectedId(currentProductId);
  }, [currentProductId]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (product?: ProductSwitchItem) => {
    if (product) {
      if (product.linkType === "internal") {
        setSelectedId(product.id);
      }
      if (onExit) {
        onExit(product);
      }
    }
    setAnchorEl(null);
  };

  return (
    <>
      <ProductSwitchButton
        aria-describedby="product-selection"
        aria-controls={open ? "product-selection" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Typography sx={{ fontSize: { xs: 20, sm: 28 }, fontWeight: "bold" }}>
          {selectedProduct?.title}
        </Typography>
        {open ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
      </ProductSwitchButton>
      {/* Product Menu */}
      <Menu
        id="product-selection"
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        MenuListProps={{
          "aria-labelledby": "Seleziona i tuoi prodotti",
        }}
      >
        {products.map((product) => (
          <MenuItem
            key={product.id}
            onClick={() => handleClose(product)}
            selected={product.id === selectedId}
          >
            {product.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

const StyledSwitcherButton = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: theme.spacing(1),
  backgroundColor: "transparent",
  padding: 0,
  cursor: "pointer",
  border: "none",
  transitionProperty: ["color", "background-color", "box-shadow"],

  /*
  "&:not(.disabled):hover": {},
  "&.active": {},
  */

  "&.focusVisible": {
    borderRadius: `${focusBorderRadius}`,
    outline: `solid ${focusWidth} ${theme.palette.primary.main}`,
    outlineOffset: `${focusOffset}`,
    boxShadow: "none",
  },

  "&.disabled": {
    opacity: "0.5",
    cursor: "default",
  },
}));

const ProductSwitchButton = forwardRef(function ProductSwitchButton(
  props: ButtonProps,
  ref: ForwardedRef<any>
) {
  const { children, disabled } = props;
  const { focusVisible, getRootProps } = useButton({
    ...props,
    rootRef: ref,
  });

  const classes = {
    disabled,
    focusVisible,
  };

  return (
    <>
      {/* Moved transition properties here because there
      were strange TS errors inside `styled` components */}
      <StyledSwitcherButton
        sx={{
          transition: `${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
        }}
        className={clsx(classes)}
        {...getRootProps()}
      >
        {children}
      </StyledSwitcherButton>
    </>
  );
});

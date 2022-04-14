import React, { useCallback, useState } from "react";
import clsx from "clsx";
import { Menu, MenuItem, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { alpha } from "@mui/material/styles";

import { ButtonUnstyledProps, useButton } from "@mui/base/ButtonUnstyled";

import { ringWidth, theme } from "@theme";

import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

export type ProductSwitchItem = {
  id: number;
  title: string;
  productUrl: string;
};

export type ProductSwitchProps = {
  products: Array<ProductSwitchItem>;
  /* token: string; */
  onExit?: (id: number) => void;
  currentProductId: number;
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

  /* TODO: Manage the edge case when user click/tap outside without
  setting `selectedId` */
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = useCallback(
    (id: number) => {
      console.log("SelectedId", selectedId);
      setSelectedId(id);
      setAnchorEl(null);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onExit ? onExit : null;
    },
    [selectedId]
  );

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
          {products[selectedId]?.title}
        </Typography>
        {open ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
      </ProductSwitchButton>
      {/* Product Menu */}
      <Menu
        id="product-selection"
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "Seleziona i tuoi prodotti",
        }}
      >
        {products.map(({ id, title }, i) => (
          <MenuItem
            key={i}
            onClick={() => handleClose(id)}
            selected={id === selectedId}
          >
            {title}
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
    outline: "none",
    boxShadow: `0 0 0 ${ringWidth} ${alpha(theme.palette.primary.main, 0.4)}`,
  },

  "&.disabled": {
    opacity: "0.5",
    cursor: "default",
  },
}));

const ProductSwitchButton = React.forwardRef(function ProductSwitchButton(
  props: ButtonUnstyledProps,
  ref: React.ForwardedRef<any>
) {
  const { children } = props;
  const { /* active */ disabled, focusVisible, getRootProps } = useButton({
    ...props,
    ref,
    component: StyledSwitcherButton,
  });

  const classes = {
    /* active, */
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

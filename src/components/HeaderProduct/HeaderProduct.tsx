import React, { useCallback, useState } from "react";
import clsx from "clsx";
import {
  Box,
  Container,
  Stack,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";

import { ButtonUnstyledProps, useButton } from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import { alpha } from "@mui/material/styles";

import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

import { ringWidth } from "@theme";

export type ProductEntity = {
  id: number;
  name: string;
};

export type HeaderProductProps = {
  productName?: string;
  productsList?: Array<ProductEntity>;
  entitySelection?: React.ReactNode;
  onSelectedProduct?: (id: number) => void;
};

const StyledSwitcherButton = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: theme.spacing(1),
  backgroundColor: "transparent",
  padding: 0,
  cursor: "pointer",
  border: "none",
  transition: `${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
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

const SwitchProductButton = React.forwardRef(function SwitchProductButton(
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
    <StyledSwitcherButton {...getRootProps()} className={clsx(classes)}>
      {children}
    </StyledSwitcherButton>
  );
});

export const HeaderProduct = ({
  productName,
  productsList,
  entitySelection,
  onSelectedProduct,
}: HeaderProductProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  /* TODO: Manage the edge case when user click/tap outside without
  setting `selectedIndex` ID */
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = useCallback(
    (id: number) => {
      setSelectedIndex(id);
      setAnchorEl(null);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onSelectedProduct ? onSelectedProduct(id) : null;
    },
    [selectedIndex]
  );

  return (
    <Box
      component="header"
      justifyContent="center"
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        backgroundColor: "background.paper",
        py: 2,
        minHeight: "80px",
        boxSizing: "border-box",
      }}
    >
      <Container>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Left side of the component */}

          {/* TODO: Use object with key/values to avoid index
              assignation with stacked index */}
          {productsList && (
            <>
              {/* Switcher Product */}
              <SwitchProductButton
                aria-describedby="product-selection"
                aria-controls={open ? "product-selection" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Typography
                  sx={{ fontSize: { xs: 20, sm: 28 }, fontWeight: "bold" }}
                >
                  {productsList[selectedIndex]?.name}
                </Typography>
                {open ? (
                  <ArrowDropUpRoundedIcon />
                ) : (
                  <ArrowDropDownRoundedIcon />
                )}
              </SwitchProductButton>

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
                {productsList.map(({ id, name }, i) => (
                  <MenuItem
                    key={i}
                    onClick={() => handleClose(id)}
                    selected={id === selectedIndex}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}

          {productName && (
            <Typography
              sx={{ fontSize: { xs: 20, sm: 28 }, fontWeight: "bold" }}
            >
              {productName}
            </Typography>
          )}

          {/* Right side of the component */}
          {entitySelection}
        </Stack>
      </Container>
    </Box>
  );
};

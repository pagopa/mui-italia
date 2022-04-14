import React, { useCallback, useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";

import { SwitchProductButton } from "@components/SwitchProductButton";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

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
      display="flex"
      alignItems="center"
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        backgroundColor: "background.paper",
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
          sx={{ py: 1 }}
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

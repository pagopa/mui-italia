import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

import { ProductSwitch, ProductSwitchItem } from "@components/ProductSwitch";

export type ProductEntity = ProductSwitchItem;

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
}: HeaderProductProps) => (
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
            <ProductSwitch
              currentProductId={0}
              products={productsList}
              onExit={onSelectedProduct}
            ></ProductSwitch>
          </>
        )}

        {productName && !productsList && (
          <Typography sx={{ fontSize: { xs: 20, sm: 28 }, fontWeight: "bold" }}>
            {productName}
          </Typography>
        )}

        {/* Right side of the component */}
        {entitySelection}
      </Stack>
    </Container>
  </Box>
);

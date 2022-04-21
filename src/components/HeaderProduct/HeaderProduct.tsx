import { useMemo } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

import { ProductSwitch, ProductSwitchItem } from "../ProductSwitch";
import { EntitySwitchItem, EntitySwitch } from "../EntitySwitch";
import { EntityAccountItem } from "../EntityAccountItem";

export type ProductEntity = ProductSwitchItem;
export type PartyEntity = EntitySwitchItem;

export type HeaderProductProps = {
  productId?: string;
  productsList: Array<ProductEntity>;
  entityId?: string;
  entityList?: Array<PartyEntity>;
  onSelectedProduct?: (product: ProductSwitchItem) => void;
  onSelectedEntity?: (entity: EntitySwitchItem) => void;
};

export const HeaderProduct = ({
  productId,
  productsList,
  entityId,
  entityList,
  onSelectedProduct,
  onSelectedEntity,
}: HeaderProductProps) => {
  const selectedProduct = useMemo(
    () =>
      productId
        ? productsList.find((p) => p.id === productId)
        : productsList[0],
    []
  ) as ProductSwitchItem;
  const selectedEntity = useMemo(() => {
    if (!entityList) {
      return;
    }
    return entityId ? entityList.find((e) => e.id === entityId) : entityList[0];
  }, []) as EntitySwitchItem;

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
          {productsList.length > 1 && (
            <>
              {/* Switcher Product */}
              <ProductSwitch
                currentProductId={selectedProduct.id}
                products={productsList}
                onExit={onSelectedProduct}
              ></ProductSwitch>
            </>
          )}

          {selectedProduct && productsList.length === 1 && (
            <Typography
              sx={{ fontSize: { xs: 20, sm: 28 }, fontWeight: "bold" }}
            >
              {selectedProduct?.title}
            </Typography>
          )}

          {/* Right side of the component */}
          {entityList && entityList.length > 1 && (
            <>
              {/* Switcher Entity */}
              <EntitySwitch
                currentEntityId={selectedEntity.id}
                entites={entityList}
                onExit={onSelectedEntity}
              ></EntitySwitch>
            </>
          )}
          {entityList && selectedEntity && entityList.length === 1 && (
            <EntityAccountItem
              entityName={selectedEntity.name}
              entityRole={selectedEntity.productRole}
              image={selectedEntity.logoUrl}
              infoContainerSx={{
                display: { xs: "none", md: "none", lg: "block" },
              }}
            />
          )}
        </Stack>
      </Container>
    </Box>
  );
};

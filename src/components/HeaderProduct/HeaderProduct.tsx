import { useMemo } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

import { ProductSwitch, ProductSwitchItem } from "@components/ProductSwitch";
import { PartySwitchItem, PartySwitch } from "@components/PartySwitch";
import { PartyAccountItem } from "@components/PartyAccountItem";

export type ProductEntity = ProductSwitchItem;
export type PartyEntity = PartySwitchItem;

export type HeaderProductProps = {
  productId?: string;
  productsList: Array<ProductEntity>;
  partyId?: string;
  partyList?: Array<PartyEntity>;
  onSelectedProduct?: (product: ProductSwitchItem) => void;
  onSelectedParty?: (party: PartySwitchItem) => void;
};

export const HeaderProduct = ({
  productId,
  productsList,
  partyId,
  partyList,
  onSelectedProduct,
  onSelectedParty,
}: HeaderProductProps) => {
  const selectedProduct = useMemo(
    () =>
      productId
        ? productsList.find((p) => p.id === productId)
        : productsList[0],
    []
  ) as ProductSwitchItem;
  const selectedParty = useMemo(() => {
    if (!partyList) {
      return;
    }
    return partyId ? partyList.find((e) => e.id === partyId) : partyList[0];
  }, []) as PartySwitchItem;

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
          {partyList && partyList.length > 1 && (
            <>
              {/* Switcher Party */}
              <PartySwitch
                currentPartyId={selectedParty.id}
                parties={partyList}
                onExit={onSelectedParty}
              ></PartySwitch>
            </>
          )}
          {partyList && selectedParty && partyList.length === 1 && (
            <PartyAccountItem
              partyName={selectedParty.name}
              partyRole={selectedParty.productRole}
              image={selectedParty.logoUrl}
              infoContainerSx={{
                display: { xs: "none", md: "block" },
              }}
            />
          )}
        </Stack>
      </Container>
    </Box>
  );
};

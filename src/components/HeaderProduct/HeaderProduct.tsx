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
  /* The number of characters beyond which the multiLine is applied in component PartyAccountItemButton */
  maxCharactersNumberMultiLineButton?: number;
  /* The number of characters beyond which the multiLine is applied in component PartyAccountItem */
  maxCharactersNumberMultiLineItem?: number;
};

export const HeaderProduct = ({
  productId,
  productsList,
  partyId,
  partyList,
  onSelectedProduct,
  onSelectedParty,
  maxCharactersNumberMultiLineButton,
  maxCharactersNumberMultiLineItem,
}: HeaderProductProps) => {
  const selectedProduct = useMemo(
    () =>
      productId
        ? productsList.find((p) => p.id === productId)
        : productsList[0],
    [productId, productsList]
  ) as ProductSwitchItem;
  const selectedParty = useMemo(() => {
    if (!partyList) {
      return;
    }
    return partyId ? partyList.find((e) => e.id === partyId) : partyList[0];
  }, [partyList, partyId]) as PartySwitchItem;

  return (
    <Box
      component="div"
      display="flex"
      alignItems="center"
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        backgroundColor: "background.paper",
        minHeight: { xs: "auto", md: "80px" },
        boxSizing: "border-box",
      }}
    >
      <Container maxWidth={false}>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ py: 2 }}
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

          {/* insert maxWidth to limit component width when the const multiLine is used in PartySwitch and PartyAccountItem */}
          <Box maxWidth="25rem">
            {/* Right side of the component */}
            {partyList && partyList.length > 1 && (
              <>
                {/* Switcher Party */}
                <PartySwitch
                  currentPartyId={selectedParty.id}
                  parties={partyList}
                  onExit={onSelectedParty}
                  maxCharactersNumberMultiLineItem={
                    maxCharactersNumberMultiLineItem
                  }
                  maxCharactersNumberMultiLineButton={
                    maxCharactersNumberMultiLineButton
                  }
                ></PartySwitch>
              </>
            )}
            {partyList && selectedParty && partyList.length === 1 && (
              <PartyAccountItem
                maxCharactersNumberMultiLine={maxCharactersNumberMultiLineItem}
                partyName={selectedParty.name}
                partyRole={selectedParty.productRole}
                image={selectedParty.logoUrl}
                infoContainerSx={{
                  display: { xs: "none", md: "block" },
                }}
              />
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

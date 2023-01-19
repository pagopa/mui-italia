import { useMemo } from "react";
import { Box, Chip, Container, Stack, Typography } from "@mui/material";

import { ProductSwitch, ProductSwitchItem } from "@components/ProductSwitch";
import { PartySwitchItem, PartySwitch } from "@components/PartySwitch";
import { PartyAccountItem } from "@components/PartyAccountItem";

export type ProductEntity = ProductSwitchItem;
export type PartyEntity = PartySwitchItem;

export type HeaderProductProps = {
  borderBottom?: number;
  borderColor?: string;
  chipColor?:
    | "default"
    | "indigo"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  chipLabel?: string;
  chipSize?: "small" | "medium";
  /* The number of characters beyond which the multiLine is applied in component PartyAccountItemButton */
  maxCharactersNumberMultiLineButton?: number;
  /* The number of characters beyond which the multiLine is applied in component PartyAccountItem */
  maxCharactersNumberMultiLineItem?: number;
  onSelectedParty?: (party: PartySwitchItem) => void;
  onSelectedProduct?: (product: ProductSwitchItem) => void;
  partyId?: string;
  partyList?: Array<PartyEntity>;
  productId?: string;
  productsList: Array<ProductEntity>;
};

export const HeaderProduct = ({
  borderBottom,
  borderColor,
  chipColor = "primary",
  chipLabel,
  chipSize = "small",
  maxCharactersNumberMultiLineButton,
  maxCharactersNumberMultiLineItem,
  onSelectedParty,
  onSelectedProduct,
  partyId,
  partyList,
  productId,
  productsList,
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

  const ChipComponent = (
    <Chip
      sx={{
        py: 0,
        "& .MuiChip-labelSmall": {
          py: "2px",
        },
      }}
      color={chipColor}
      label={chipLabel}
      size={chipSize}
    ></Chip>
  );

  return (
    <Box
      component="div"
      display="flex"
      alignItems="center"
      sx={{
        backgroundColor: "background.paper",
        borderBottom: borderBottom ?? 1,
        borderColor: borderColor ?? "divider",
        boxSizing: "border-box",
        minHeight: { xs: "auto", md: "80px" },
      }}
    >
      <Container maxWidth={false}>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{ py: 2 }}
        >
          {/* Left side of the component */}
          {productsList.length > 1 && (
            <Stack spacing={2} direction="row" alignItems="center">
              {/* Switcher Product */}
              <ProductSwitch
                currentProductId={selectedProduct.id}
                products={productsList}
                onExit={onSelectedProduct}
              ></ProductSwitch>
              {chipLabel && chipLabel !== "" && ChipComponent}
            </Stack>
          )}

          {selectedProduct && productsList.length === 1 && (
            <Stack spacing={2} direction="row" alignItems="center">
              <Typography
                sx={{ fontSize: { xs: 20, sm: 28 }, fontWeight: "bold" }}
              >
                {selectedProduct?.title}
              </Typography>
              {chipLabel && chipLabel !== "" && ChipComponent}
            </Stack>
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

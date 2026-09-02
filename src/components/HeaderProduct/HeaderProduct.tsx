'use client';

import { Box, Chip, Container, IconButton, Stack, Typography } from '@mui/material';
import { ReactNode, useMemo, useState } from 'react';

import { PartyAccountItem } from '@components/PartyAccountItem';
import { PartySwitch, PartySwitchItem } from '@components/PartySwitch';
import { ProductSwitch, ProductSwitchItem } from '@components/ProductSwitch';

export type ProductEntity = ProductSwitchItem;
export type PartyEntity = PartySwitchItem;
export type ChipColors =
  | 'default'
  | 'indigo'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';

export type HeaderProductProps = {
  borderBottom?: number;
  borderColor?: string;
  chipColor?: ChipColors;
  chipLabel?: string;
  chipSize?: 'small' | 'medium';
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

const HeaderChip: React.FC<Pick<HeaderProductProps, 'chipColor' | 'chipSize' | 'chipLabel'>> = ({
  chipColor,
  chipLabel,
  chipSize,
}) => (
  <Chip
    sx={{
      py: 0,
      '& .MuiChip-labelSmall': {
        py: '2px',
      },
    }}
    color={chipColor}
    label={chipLabel}
    size={chipSize}
  />
);

export const HeaderProduct = ({
  borderBottom,
  borderColor,
  chipColor = 'primary',
  chipLabel,
  chipSize = 'small',
  maxCharactersNumberMultiLineButton,
  maxCharactersNumberMultiLineItem,
  onSelectedParty,
  onSelectedProduct = () => {},
  partyId,
  partyList,
  productId,
  productsList,
}: HeaderProductProps) => {
  const selectedProduct = useMemo(() => {
    if (productsList.length === 0) {
      return;
    }
    return productId ? productsList.find((p) => p.id === productId) : productsList[0];
  }, [productId, productsList]);

  const [iconSelected, setIconSelected] = useState<ReactNode | null | undefined>(
    selectedProduct?.icon || null
  );
  const selectedParty = useMemo(() => {
    if (!partyList || partyList.length === 0) {
      return;
    }
    return partyId ? partyList.find((e) => e.id === partyId) : partyList[0];
  }, [partyList, partyId]);

  const onSelectedProductChangeIcon = (e: ProductEntity) => {
    setIconSelected(e.icon);
    onSelectedProduct(e);
  };

  return (
    <Box
      component="div"
      sx={{
        backgroundColor: 'background.paper',
        borderBottom: borderBottom ?? 1,
        borderColor: borderColor ?? 'divider',
        boxSizing: 'border-box',
        minHeight: { xs: 'auto', md: '80px' },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth={false}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ py: 2, alignItems: 'center', justifyContent: 'space-between' }}
        >
          {/* Left side of the component */}
          <Stack direction="row" sx={{ alignItems: 'center' }}>
            {!!iconSelected && <IconButton>{iconSelected}</IconButton>}
            {selectedProduct && productsList.length > 1 && (
              <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
                {/* Switcher Product */}
                <ProductSwitch
                  currentProductId={selectedProduct.id}
                  products={productsList}
                  onExit={onSelectedProductChangeIcon}
                />
                {chipLabel && (
                  <HeaderChip chipColor={chipColor} chipLabel={chipLabel} chipSize={chipSize} />
                )}
              </Stack>
            )}
            {selectedProduct && productsList.length === 1 && (
              <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
                <Typography sx={{ fontSize: { xs: 20, sm: 28 }, fontWeight: 'bold' }}>
                  {selectedProduct.title}
                </Typography>
                {chipLabel && (
                  <HeaderChip chipColor={chipColor} chipLabel={chipLabel} chipSize={chipSize} />
                )}
              </Stack>
            )}
          </Stack>
          {/* insert maxWidth to limit component width when the const multiLine is used in PartySwitch and PartyAccountItem */}
          <Box sx={{ maxWidth: '25rem' }}>
            {/* Right side of the component */}
            {partyList && selectedParty && partyList.length > 1 && (
              <>
                {/* Switcher Party */}
                <PartySwitch
                  currentPartyId={selectedParty.id}
                  parties={partyList}
                  onExit={onSelectedParty}
                  maxCharactersNumberMultiLineItem={maxCharactersNumberMultiLineItem}
                  maxCharactersNumberMultiLineButton={maxCharactersNumberMultiLineButton}
                />
              </>
            )}
            {partyList && selectedParty && partyList.length === 1 && (
              <PartyAccountItem
                maxCharactersNumberMultiLine={maxCharactersNumberMultiLineItem}
                partyName={selectedParty.name}
                partyRole={selectedParty.productRole}
                image={selectedParty.logoUrl}
                infoContainerSx={{
                  display: { xs: 'none', md: 'block' },
                }}
                parentPartyName={selectedParty.parentName}
              />
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

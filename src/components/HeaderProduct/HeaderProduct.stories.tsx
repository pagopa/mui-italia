import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@mui/material";

import {
  EntityAccountItem,
  EntityAccountItemProps,
} from "@components/EntityAccountItem";
import { EntityAvatar, EntityAvatarProps } from "@components/EntityAvatar";
import { HeaderProduct, ProductEntity } from "./HeaderProduct";

export default {
  title: "Components/HeaderProduct (WIP)",
  component: HeaderProduct,
  decorators: [
    (Story) => (
      <div style={{ padding: 0, backgroundColor: "#F5F5F5" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as ComponentMeta<typeof HeaderProduct>;

/*
Entity Info
*/
const entityMock: EntityAccountItemProps = {
  image: "https://assets.cdn.io.italia.it/logos/organizations/1199250158.png",
  entityName: "Comune di Milano",
  entityRole: "Referente amministrativo",
  noWrap: true,
};

const entityMobileMock: EntityAvatarProps = {
  customSrc:
    "https://assets.cdn.io.italia.it/logos/organizations/1199250158.png",
  customAlt: "Comune di Milano",
};

const productsList: Array<ProductEntity> = [
  {
    id: 0,
    name: `Area Riservata`,
  },
  {
    id: 1,
    name: `Piattaforma Notifiche`,
  },
  {
    id: 2,
    name: `App IO`,
  },
  {
    id: 3,
    name: `Interoperabilità`,
  },
];

export const Default: ComponentStory<typeof HeaderProduct> = () => (
  <HeaderProduct productName="Area Riservata" />
);

export const WithProductSelection: ComponentStory<
  typeof HeaderProduct
> = () => (
  <HeaderProduct
    productsList={productsList}
    onSelectedProduct={(id) =>
      console.log("Selected Item:", productsList[id]?.name)
    }
    entitySelection={
      <>
        {/* TODO: Find a better way to include responsive components */}
        <Box sx={{ display: ["flex", "none"] }}>
          <EntityAvatar {...entityMobileMock} />
        </Box>
        <Box sx={{ display: ["none", "flex"] }}>
          <EntityAccountItem {...entityMock} />
        </Box>
      </>
    }
  />
);

export const WithoutProductSelection: ComponentStory<
  typeof HeaderProduct
> = () => (
  <HeaderProduct
    productName="Area Riservata"
    entitySelection={
      <>
        {/* TODO: Find a better way to include responsive components */}
        <Box sx={{ display: ["flex", "none"] }}>
          <EntityAvatar {...entityMobileMock} />
        </Box>
        <Box sx={{ display: ["none", "flex"] }}>
          <EntityAccountItem {...entityMock} />
        </Box>
      </>
    }
  />
);

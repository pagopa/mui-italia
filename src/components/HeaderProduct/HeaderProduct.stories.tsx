/* import { useState } from "react"; */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@mui/system";

import {
  EntityAccountItem,
  EntityAccountItemProps,
} from "@components/EntityAccountItem";
import { EntityAvatar, EntityAvatarProps } from "@components/EntityAvatar";
import { HeaderProduct } from "./HeaderProduct";

export default {
  title: "Components/HeaderProduct",
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

export const Default: ComponentStory<typeof HeaderProduct> = () => (
  <HeaderProduct
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

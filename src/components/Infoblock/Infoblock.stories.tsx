import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { breakpointsChromaticValues } from "@theme";

import { Infoblock } from "@components/Infoblock";

const primaryCTA = {
  label: "CallToAction 1",
  title: "CTA1",
  onClick: (_: React.SyntheticEvent) => {},
};

const secondaryCTA = {
  label: "CallToAction 2",
  title: "CTA2",
  onClick: (_: React.SyntheticEvent) => {},
};

export default {
  title: "Components/Infoblock",
  component: Infoblock,
  parameters: {
    chromatic: {
      viewports: breakpointsChromaticValues,
    },
  },
  args: {
    overline: "Overline",
    title: "Title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacus consequat, accumsan metus sed, pharetra dui. Praesent at accumsan odio. Praesent augue ipsum, pharetra eget metus vel, bibendum dapibus augue. Nunc maximus id eros finibus laoreet. Integer iaculis, neque at feugiat accumsan, nisi magna iaculis nisl, ultricies euismod nulla orci sit amet justo.",
    inverse: false,
    ctaPrimary: primaryCTA,
    ctaSecondary: secondaryCTA,
    image: require("./infoblockImage.png"),
    imageShadow: true,
    imageType: "circle",
  },
} as ComponentMeta<typeof Infoblock>;

export const AspectRatio_4_3: ComponentStory<typeof Infoblock> = (args) => (
  <Infoblock {...args} aspectRatio={"4/3"} />
);

export const AspectRatio_9_16: ComponentStory<typeof Infoblock> = (args) => (
  <Infoblock {...args} aspectRatio={"9/16"} />
);

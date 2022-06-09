import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Infoblock } from "@components/Infoblock/Infoblock";

const primaryCTA = {
  label: "CallToAction 1",
  title: "CTA1",
  href: "#",
};

const secondaryCTA = {
  label: "CallToAction 2",
  title: "CTA2",
  href: "#",
};

export default {
  title: "Components/Infoblock",
  component: Infoblock,
  decorators: [
    (Story) => (
      <div style={{ padding: 0, backgroundColor: "#FFFFFF" }}>
        <Story />
      </div>
    ),
  ],
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
  },
} as ComponentMeta<typeof Infoblock>;

export const Default: ComponentStory<typeof Infoblock> = (args) => (
  <Infoblock {...args} />
);

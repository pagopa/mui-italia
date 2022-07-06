import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Hero } from "@components/Hero";

import heroBackground from "./assets/hero_background.png";
import heroImage from "./assets/hero_image.png";

const firstCTA = {
  label: "CallToAction 1",
  title: "CTA 1",
  onClick: (_: React.SyntheticEvent) => {},
};

const secondCTA = {
  label: "CallToAction 2",
  title: "CTA 2",
  onClick: (_: React.SyntheticEvent) => {},
};

export default {
  title: "Components/Hero",
  component: Hero,
  decorators: [
    (Story) => (
      <div style={{ padding: 0, backgroundColor: "#F5F5F5" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    title: "Title",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacus consequat, accumsan metus sed, pharetra dui. Praesent at accumsan odio. Praesent augue ipsum, pharetra eget metus vel, bibendum dapibus augue. Nunc maximus id eros finibus laoreet. Integer iaculis, neque at feugiat accumsan, nisi magna iaculis nisl, ultricies euismod nulla orci sit amet justo.",
    inverse: false,
    image: heroImage,
    background: heroBackground,
    showPrimary: true,
    ctaPrimary: firstCTA,
    ctaSecondary: secondCTA,
    altText: "altText",
  },
  argTypes: {
    inverse: {
      options: [true, false],
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
  },
} as ComponentMeta<typeof Hero>;

export const Default: ComponentStory<typeof Hero> = (args) => (
  <Hero {...args} />
);

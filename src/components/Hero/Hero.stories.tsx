import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Hero } from "@components/Hero";

const firstCTA = {
  label: "CallToAction 1",
  title: "CTA 1",
  href: "#",
};

const secondCTA = {
  label: "CallToAction 2",
  title: "CTA 2",
  href: "#",
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
    image: "",
    background: "",
    showPrimary: true,
    ctaPrimary: firstCTA,
    ctaSecondary: secondCTA,
    altText: "altText",
  },
  argTypes: {},
} as ComponentMeta<typeof Hero>;

export const Default: ComponentStory<typeof Hero> = (args) => (
  <Hero {...args} />
);

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Infoblock } from "@components/Infoblock/Infoblock";
import { position } from "@types";

const CTA = {
  label: "CallToAction",
  title: "CTA",
  href: "#",
};

export default {
  title: "Components/Hero",
  component: Infoblock,
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
    textPosition: position.LEFT,
  },
} as ComponentMeta<typeof Infoblock>;

export const Default: ComponentStory<typeof Infoblock> = (args) => (
  <Infoblock {...args} cta={CTA} />
);

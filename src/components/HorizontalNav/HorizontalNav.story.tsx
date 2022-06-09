import { HorizontalNav } from "@components/HorizontalNav/HorizontalNav";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CieIcon } from "@icons/CieIcon";
import { SpidIcon } from "@icons/SpidIcon";

const sections = [
  {
    icon: <CieIcon />,
    title: "First Item",
    subtitle: "First subtitle",
    cta: {
      label: "CTA label",
      title: "CTA 1",
      href: "#",
    },
  },
  {
    icon: <SpidIcon />,
    title: "Second Item",
    subtitle: "Second subtitle",
    cta: {
      label: "CTA 2 label",
      title: "CTA 2",
      href: "#",
    },
  },
];

export default {
  title: "Components/HorizontalNav",
  component: HorizontalNav,
  decorators: [
    (Story) => (
      <div style={{ padding: 0, backgroundColor: "#F5F5F5" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof HorizontalNav>;

export const Default: ComponentStory<typeof HorizontalNav> = () => (
  <HorizontalNav sections={sections} />
);

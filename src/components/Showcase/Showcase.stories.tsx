import { ComponentMeta, ComponentStory } from "@storybook/react";

import { breakpointsChromaticValues } from "@theme";

import { Showcase } from "@components/Showcase";

/* Icons */
import { CieIcon } from "@icons/CieIcon";
import { MediumIcon } from "@icons/MediumIcon";
import { SpidIcon } from "@icons/SpidIcon";

const items = [
  {
    icon: <CieIcon />,
    title: "First Item",
    subtitle: "A very descriptive subtitle",
  },
  {
    icon: <MediumIcon />,
    title: "Second Item",
    subtitle: "Another very descriptive subtitle",
  },
  {
    icon: <SpidIcon />,
    title: "Second Item",
    subtitle: "Short subtitle",
  },
  {
    icon: <SpidIcon />,
    title: "Fourth Item",
    subtitle: "Short subtitle",
  },
];

export default {
  title: "Components/Showcase",
  component: Showcase,
  args: {
    title: "Title",
  },
  parameters: {
    chromatic: {
      viewports: breakpointsChromaticValues,
    },
  },
} as ComponentMeta<typeof Showcase>;

export const Default: ComponentStory<typeof Showcase> = (args) => (
  <Showcase {...args} items={items} />
);

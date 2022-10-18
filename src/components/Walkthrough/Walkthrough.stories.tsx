import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Walkthrough } from "@components/Walkthrough";

import { breakpointsChromaticValues } from "@theme";

/* Icons */
import { CieIcon } from "@icons/CieIcon";
import { MediumIcon } from "@icons/MediumIcon";
import { SpidIcon } from "@icons/SpidIcon";

const items = [
  {
    icon: <CieIcon />,
    title: "First Item",
    subtitle:
      "A very descriptive subtitle, that is the intro to our Walkthrough",
  },
  {
    icon: <MediumIcon />,
    title: "Second Item",
    subtitle: "Another very descriptive subtitle",
  },
  {
    icon: <SpidIcon />,
    title: "Third Item",
    subtitle: "Short subtitle",
  },
  {
    icon: <SpidIcon />,
    title: "Fourth Item",
    subtitle: "End Walkthrough",
    isSequential: false,
  },
];

export default {
  title: "Components/Walkthrough",
  component: Walkthrough,
  args: {
    title: "Title",
  },
  parameters: {
    chromatic: {
      viewports: breakpointsChromaticValues,
    },
  },
} as ComponentMeta<typeof Walkthrough>;

export const Default: ComponentStory<typeof Walkthrough> = (args) => (
  <Walkthrough {...args} items={items} />
);

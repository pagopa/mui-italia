import { Walkthrough } from "@components/Walkthrough/Walkthrough";
import { ComponentMeta, ComponentStory } from "@storybook/react";
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
  title: "Components/Walkthrough",
  component: Walkthrough,
  decorators: [
    (Story) => (
      <div style={{ padding: 0, backgroundColor: "#F5F5F5" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    title: "Title",
  },
} as ComponentMeta<typeof Walkthrough>;

export const Default: ComponentStory<typeof Walkthrough> = (args) => (
  <Walkthrough {...args} items={items} />
);

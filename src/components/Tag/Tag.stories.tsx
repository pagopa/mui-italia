import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tag } from "./Tag";

export default {
  title: "Components/Tag",
  component: Tag,
  args: {
    value: "Tag Content",
    variant: "default",
    color: "default",
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});

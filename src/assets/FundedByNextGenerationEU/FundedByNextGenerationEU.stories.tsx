import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FundedByNextGenerationEU } from "./FundedByNextGenerationEU";

export default {
  title: "Assets/NextGenerationEU",
  component: FundedByNextGenerationEU,
  args: {
    variant: "outline",
    color: "dark",
  },
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof FundedByNextGenerationEU>;

export const Default: ComponentStory<typeof FundedByNextGenerationEU> = (
  args
) => <FundedByNextGenerationEU {...args} />;

/* NextGenerationEU.parameters = {
  controls: { hideNoControlsWarning: true },
}; */

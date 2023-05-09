import { ComponentStory, ComponentMeta } from "@storybook/react";
import { breakpointsChromaticValues } from "@theme";
import { EnvironmentBanner } from "./EnvironmentBanner";

const componentMaxWidth = 900;

export default {
  title: "Components/EnvironmentBanner",
  component: EnvironmentBanner,
  parameters: {
    chromatic: {
      viewports: breakpointsChromaticValues.filter(
        (resolution) => resolution <= componentMaxWidth
      ),
    },
  },
} as ComponentMeta<typeof EnvironmentBanner>;

export const Default: ComponentStory<typeof EnvironmentBanner> = (args) => (
  <EnvironmentBanner {...args} />
);

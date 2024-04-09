import { ComponentStory, ComponentMeta } from "@storybook/react";
import { breakpointsChromaticValues } from "@theme";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
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
  argTypes: {
    bgColor: {
      control: {
        type: "radio",
        options: ["info", "warning"],
      },
    },
    message: {
      control: {
        type: "text",
      },
    },
    icon: {
      control: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof EnvironmentBanner>;

export const Default: ComponentStory<typeof EnvironmentBanner> = (args) => (
  <EnvironmentBanner
    {...args}
    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    icon={<WarningAmberIcon fontSize="small" />}
  />
);
Default.args = {
  bgColor: "info",
};

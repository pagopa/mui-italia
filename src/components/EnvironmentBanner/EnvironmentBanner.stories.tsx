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
    env: {
      control: {
        type: "radio",
        options: ["test", "prod"],
      },
      defaultValue: "test",
    },
    message: {
      control: {
        type: "text",
      },
      defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    icon: {
      control: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof EnvironmentBanner>;

export const Default: ComponentStory<typeof EnvironmentBanner> = (args) => (
  <EnvironmentBanner {...args} icon={<WarningAmberIcon fontSize="small" />} />
);

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Alert, AlertTitle, Button } from "@mui/material";

/* Icons */
import CopyAllRoundedIcon from "@mui/icons-material/CopyAllRounded";

export default {
  title: "MUI Components/Feedback/Alert",
  component: Alert,
  args: {
    severity: "info",
    variant: "standard",
    children: "Alert content",
  },
  argTypes: {
    severity: {
      options: ["error", "warning", "info", "success"],
      control: { type: "radio" },
      table: {
        type: { summary: "string" },
      },
    },
    variant: {
      options: ["outlined", "standard"],
      control: { type: "radio" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "standard" },
      },
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

const title: JSX.Element = <AlertTitle>Alert title</AlertTitle>;

export const Default = Template.bind({});

export const WithTitle = Template.bind({});
WithTitle.args = {
  children: (
    <>
      {title}
      Altro contenuto che serve ad avvisare l&apos;utente di qualche azione
    </>
  ),
};

export const WithAction = Template.bind({});
WithAction.args = {
  children: (
    <>
      {title}
      Altro contenuto che serve ad avvisare l&apos;utente di qualche azione
    </>
  ),
  action: (
    <Button size="small" startIcon={<CopyAllRoundedIcon />}>
      Copia
    </Button>
  ),
};
WithAction.argTypes = {
  children: { table: { disable: true } },
  action: { table: { disable: true } },
};

export const NoWrap = Template.bind({});
NoWrap.args = {
  noWrap: true,
};

/* export const WithEndIcon = Template.bind({});
WithEndIcon.storyName = "Default + End Icon";
WithEndIcon.args = {
  ...Default.args,
  endIcon: <ArrowForwardRoundedIcon />,
};

export const WithStartIcon = Template.bind({});
WithStartIcon.storyName = "Default + Start Icon";
WithStartIcon.args = {
  ...Default.args,
  startIcon: <ArrowBackRoundedIcon />,
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "outlined",
  color: "error",
  size: "medium",
  children: "Delete",
};
Danger.argTypes = {
  variant: { table: { disable: true } },
};

export const DangerWithEndIcon = Template.bind({});
DangerWithEndIcon.storyName = "Danger + End Icon";
DangerWithEndIcon.args = {
  ...Danger.args,
  endIcon: <RemoveCircleOutlineRoundedIcon />,
};
DangerWithEndIcon.argTypes = {
  ...Danger.argTypes,
};

export const DangerWithStartIcon = Template.bind({});
DangerWithStartIcon.storyName = "Danger + Start Icon";
DangerWithStartIcon.args = {
  ...Danger.args,
  startIcon: <RemoveCircleOutlineRoundedIcon />,
};
DangerWithStartIcon.argTypes = {
  ...Danger.argTypes,
};
 */

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
      Contenuto che serve ad avvisare l&apos;utente
    </>
  ),
};

export const WithAction = Template.bind({});
WithAction.args = {
  children: "Contenuto che serve ad avvisare l'utente",
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

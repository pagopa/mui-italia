import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextField, InputAdornment } from "@mui/material";

import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";

export default {
  title: "MUI Components/Inputs/Text Field",
  component: TextField,
  argTypes: {
    /* color: {
      defaultValue: "default",
      options: [
        "default",
        "primary",
        "secondary",
        "warning",
        "info",
        "error",
        "success",
      ],
      control: { type: "radio" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
      onDelete: { action: "Deleted" },
    }, */
    variant: {
      options: ["filled", "outlined"],
      control: { type: "radio" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "outlined" },
      },
    },
    placeholder: {
      table: {
        type: { summary: "string" },
      },
    },
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "medium" },
      },
    },
    error: {
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    fullWidth: {
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    required: {
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Codice Avviso",
  placeholder: "Inserisci il codice",
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  ...Default.args,
  helperText: "Inserisci 18 cifre",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  label: "Nome sulla carta",
  placeholder: "Mario Rossi",
  InputProps: {
    startAdornment: (
      <InputAdornment position="start">
        <PersonOutlineRoundedIcon />
      </InputAdornment>
    ),
  },
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  label: "Ripeti di nuovo",
  error: true,
  placeholder: "Ripeti l'indirizzo",
  helperText: "Gli indirizzi email devono coincidere",
  InputProps: {
    endAdornment: (
      <InputAdornment position="end">
        <ErrorOutlineRoundedIcon color="error" />
      </InputAdornment>
    ),
  },
};

import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  InputLabel,
  Box,
} from "@mui/material";

export default {
  title: "MUI Components/Inputs/Select",
  component: FormControl,
  args: {
    size: "medium",
    fullWidth: false,
    disabled: false,
  },
  argTypes: {
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "medium" },
      },
    },
  },
} as ComponentMeta<typeof FormControl>;

export const Default: ComponentStory<typeof FormControl> = (args) => (
  <Box
    sx={{
      width: 200,
    }}
  >
    <FormControl {...args}>
      <InputLabel id="search-by-label">Cerca per:</InputLabel>
      <Select labelId="search-by-label" id="search-by" label="Cerca per:">
        <MenuItem value={"it-fiscal-code"}>Codice fiscale</MenuItem>
        <MenuItem value={"IUN"}>Codice IUN</MenuItem>
      </Select>
    </FormControl>
  </Box>
);
Default.args = {
  size: "medium",
  fullWidth: true,
  disabled: false,
};
Default.argTypes = {
  fullWidth: {
    table: {
      disable: true,
    },
  },
};

export const Error: ComponentStory<typeof FormControl> = (args) => (
  <Box
    sx={{
      width: 200,
    }}
  >
    <FormControl {...args}>
      <InputLabel id="state-label">Stato:</InputLabel>
      <Select labelId="state-label" id="state" label="Stato:">
        <MenuItem value={"all"}>Tutti gli stati</MenuItem>
        <MenuItem value={"delivered"}>Consegnata</MenuItem>
        <MenuItem value={"deposited"}>Depositata</MenuItem>
        <MenuItem value={"forwarding"}>In inoltro</MenuItem>
      </Select>
      <FormHelperText>Stato selezionato inesistente</FormHelperText>
    </FormControl>
  </Box>
);
Error.args = {
  size: "medium",
  error: true,
  fullWidth: true,
  disabled: false,
};
Error.argTypes = {
  error: {
    table: {
      disable: true,
    },
  },
  fullWidth: {
    table: {
      disable: true,
    },
  },
};

import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextField } from "@mui/material";
import {
  DesktopDatePicker,
  DesktopDatePickerProps,
  LocalizationProvider,
} from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterDateFns";

export default {
  title: "MUI Components/Lab/Desktop Date Picker",
  component: DesktopDatePicker,
  parameters: { controls: { sort: "size" } },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "1em",
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof DesktopDatePicker>;

export const Default: ComponentStory<typeof DesktopDatePicker> = () => {
  const [value, setValue] = useState(new Date());

  /*   const handleChange = (newValue: Date) => {
    setValue(newValue);
  }; */

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <DesktopDatePicker
        label="Data della notifica"
        inputFormat="dd/MM/yyyy"
        value={value}
        onChange={setValue as DesktopDatePickerProps["onChange"]}
        renderInput={(params) => (
          <TextField
            {...params}
            inputProps={{ ...params.inputProps, placeholder: "dd/mm/aaaa" }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};

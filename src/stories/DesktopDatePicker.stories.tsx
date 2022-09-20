import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextField, TextFieldProps } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

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
  const [value, setValue] = useState<Date>(new Date());

  const onChangeHandler = (_date: Date | null) => {
    if (_date) {
      setValue(_date);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Data della notifica"
        inputFormat="dd/MM/yyyy"
        value={value}
        onChange={onChangeHandler}
        renderInput={(params: TextFieldProps) => (
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

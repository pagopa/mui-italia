import { Meta, StoryFn } from '@storybook/react-vite';
import { useState } from 'react';

import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export default {
  title: 'MUI Components/Lab/Desktop Date Picker',
  component: DesktopDatePicker,
  parameters: { controls: { sort: 'size' } },
} as Meta<typeof DesktopDatePicker>;

export const Default: StoryFn<typeof DesktopDatePicker> = () => {
  const [value, setValue] = useState<Date | null>(new Date(2022, 0, 17));

  const onChangeHandler = (_date: Date | null) => {
    setValue(_date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Data della notifica"
        format="dd/MM/yyyy"
        value={value}
        onChange={onChangeHandler}
        slotProps={{
          textField: {
            slotProps: {
              htmlInput: { placeholder: 'dd/mm/aaaa' },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
};

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};

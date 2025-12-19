import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export default {
  title: 'MUI Components/Lab/Desktop Date Picker',
  component: DesktopDatePicker,
  parameters: { controls: { sort: 'size' } },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '1em',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<typeof DesktopDatePicker>;

export const Default: StoryFn<typeof DesktopDatePicker> = () => {
  const [value, setValue] = useState<Date>(new Date(2022, 0, 17));

  const onChangeHandler = (_date: Date | null) => {
    if (_date) {
      setValue(_date);
    }
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
            inputProps: { placeholder: 'dd/mm/aaaa' },
          },
        }}
      />
    </LocalizationProvider>
  );
};

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};

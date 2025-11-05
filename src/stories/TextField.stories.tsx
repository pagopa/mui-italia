import { ChangeEvent, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  TextField,
  InputAdornment,
  MenuItem,
  Box,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export default {
  title: 'MUI Components/Inputs/Text Field',
  component: TextField,
  argTypes: {
    placeholder: {
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    error: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    required: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Codice Avviso',
  placeholder: 'Inserisci il codice',
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  ...Default.args,
  helperText: 'Inserisci 18 cifre',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  label: 'Nome sulla carta',
  placeholder: 'Mario Rossi',
  InputProps: {
    startAdornment: (
      <InputAdornment position="start">
        <PersonOutlineRoundedIcon />
      </InputAdornment>
    ),
  },
};

export const StateError = Template.bind({});
StateError.args = {
  ...Default.args,
  label: 'Ripeti di nuovo',
  error: true,
  placeholder: "Ripeti l'indirizzo",
  helperText: 'Gli indirizzi email devono coincidere',
  InputProps: {
    endAdornment: (
      <InputAdornment position="end">
        <ErrorOutlineRoundedIcon color="error" />
      </InputAdornment>
    ),
  },
};
StateError.argTypes = {
  InputProps: { table: { disable: true } },
};

export const StateSuccess = Template.bind({});
StateSuccess.args = {
  ...Default.args,
  label: 'Indirizzo mail',
  InputProps: {
    endAdornment: (
      <InputAdornment position="end">
        <DoneRoundedIcon color="success" />
      </InputAdornment>
    ),
  },
};
StateSuccess.argTypes = {
  InputProps: { table: { disable: true } },
  error: { table: { disable: true } },
};

export const DefaultSelect: ComponentStory<typeof TextField> = (args) => {
  const [state, setState] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value as string);
  };

  return (
    <Box
      sx={{
        width: 200,
      }}
    >
      <TextField
        {...args}
        onChange={handleChange}
        value={state}
        select
        placeholder="Select an option"
        label="Select an option"
        fullWidth
      />
    </Box>
  );
};
DefaultSelect.args = {
  children: [
    <MenuItem key="option-1" value="option-1">
      Option 1
    </MenuItem>,
    <MenuItem key="option-2" value="option-2">
      Option 2
    </MenuItem>,
    <MenuItem key="option-3" value="option-3">
      Option 3
    </MenuItem>,
  ],
};

export const SelectWtihLongOption = DefaultSelect.bind({});
SelectWtihLongOption.args = {
  ...DefaultSelect.args,
  children: [
    <MenuItem key="option-1" value="option-1">
      Option 1
    </MenuItem>,
    <MenuItem key="option-2" value="option-2">
      <ListItemText>
        Option 2 with a very very very very very very very very very very very very very very very
        very very very very very very very very very very very very very very very very very very
        very very very very very very very very very very very very very very very long text
      </ListItemText>
    </MenuItem>,
    <MenuItem key="option-3" value="option-3">
      Option 3
    </MenuItem>,
  ],
};

export const SelectWtihIcon = DefaultSelect.bind({});
SelectWtihIcon.args = {
  ...DefaultSelect.args,
  children: [
    <MenuItem key="option-1" value="option-1">
      <ListItemIcon>
        <AccountBalanceIcon sx={{ mr: 1 }} />
      </ListItemIcon>
      <ListItemText>Option 1</ListItemText>
    </MenuItem>,
    <MenuItem key="option-2" value="option-2">
      <ListItemIcon>
        <AccountBalanceIcon sx={{ mr: 1 }} />
      </ListItemIcon>
      <ListItemText>Option 2</ListItemText>
    </MenuItem>,
    <MenuItem key="option-3" value="option-3">
      <ListItemIcon>
        <AccountBalanceIcon sx={{ mr: 1 }} />
      </ListItemIcon>
      <ListItemText>Option 3</ListItemText>
    </MenuItem>,
  ],
};

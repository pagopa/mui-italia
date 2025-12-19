import { StoryFn, Meta } from '@storybook/react';

import { Switch, FormGroup, FormControlLabel, FormHelperText } from '@mui/material';

export default {
  title: 'MUI Components/Inputs/Switch',
  component: Switch,
  args: {
    color: 'default',
  },
  argTypes: {
    color: {
      options: ['primary', 'error'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      options: ['medium', 'small'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
  },
} as Meta<typeof Switch>;

const Template: StoryFn<typeof Switch> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithLabel: StoryFn<typeof FormControlLabel> = () => (
  <FormGroup>
    <FormControlLabel control={<Switch sx={{ mx: 1.5 }} defaultChecked />} label="Label" />
  </FormGroup>
);

export const DisabledWithLabel: StoryFn<typeof FormControlLabel> = () => (
  <FormGroup>
    <FormControlLabel disabled control={<Switch sx={{ mx: 1.5 }} />} label="Label" />
  </FormGroup>
);

export const ErrorWithHelperText: StoryFn<typeof FormControlLabel> = () => (
  <FormGroup>
    <FormControlLabel control={<Switch color="error" sx={{ mx: 1.5 }} />} label="Label" />
    <FormHelperText error>Helper Text</FormHelperText>
  </FormGroup>
);

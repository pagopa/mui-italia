import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Box, Button } from '@mui/material';

import MITooltip from './MITooltip';

export default {
  title: 'Components/MITooltip',
  component: MITooltip,
  args: {
    title: 'This is a test',
    children: (
      <Box p="8px" border="1px solid blue" borderRadius="4px" width="300px">
        Hover on this text to see the tooltip appears
      </Box>
    ),
  },
  argTypes: {
    title: { control: 'text' },
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof MITooltip>;

const Template: StoryFn<typeof MITooltip> = (args) => <MITooltip {...args} />;

export const DefaultTooltip = Template.bind({});

export const DisableTooltp: StoryObj<typeof MITooltip> = {
  render: function RenderWithState(args) {
    const [disabled, setDisable] = useState(false);

    return (
      <Box p="8px" border="1px solid blue" borderRadius="4px" width="300px">
        <MITooltip {...args} disabled={disabled}>
          <Box>Hover on this text to see the tooltip appears.</Box>
        </MITooltip>
        <Button
          sx={{ mt: '10px' }}
          variant="contained"
          onClick={() => setDisable((prev) => !prev)}
          size="small"
        >
          {disabled ? 'Enable tooltip' : 'Disable tooltip'}
        </Button>
      </Box>
    );
  },
};

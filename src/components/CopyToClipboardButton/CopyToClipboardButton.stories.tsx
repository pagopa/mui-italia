import { Box } from '@mui/material';
import { StoryFn, Meta } from '@storybook/react';
import { breakpointsChromaticValues } from '@theme';
import { CopyToClipboardButton } from './CopyToClipboardButton';

const componentMaxWidth = 900;

export default {
  title: 'Components/CopyToClipboardButton',
  component: CopyToClipboardButton,
  parameters: {
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
  },
  argTypes: {
    value: { type: 'string', required: true },
    tooltipTitle: { type: 'string' },
  },
} as Meta<typeof CopyToClipboardButton>;

export const Default: StoryFn<typeof CopyToClipboardButton> = (args) => (
  <Box sx={{ m: 8 }}>
    <CopyToClipboardButton {...args} />
  </Box>
);

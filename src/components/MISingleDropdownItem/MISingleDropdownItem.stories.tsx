import { AccountBalance as AccountBalanceIcon } from '@mui/icons-material';
import { Box } from '@mui/material';
import { MIChip } from '@components/MIChip';
import { MISingleDropdownItem } from '@components/MISingleDropdownItem';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/MISingleDropdownItem',
  component: MISingleDropdownItem,
  args: {
    label: 'PagoPA',
    description: 'Organization description',
    selected: false,
    checked: false,
  },
  argTypes: {
    avatar: { control: false },
    chip: { control: false },
    sx: { control: false },
  },
  render: (args) => (
    <Box sx={{ width: 320 }}>
      <MISingleDropdownItem
        {...args}
        avatar={
          <Box
            component="span"
            sx={(theme) => ({
              alignItems: 'center',
              backgroundColor: theme.colors.neutral.grey[50],
              borderRadius: 1,
              color: theme.colors.neutral.grey[300],
              display: 'inline-flex',
              height: 32,
              justifyContent: 'center',
              width: 32,
            })}
          >
            <AccountBalanceIcon fontSize="small" />
          </Box>
        }
        chip={<MIChip label="Warning" color="warning" />}
      />
    </Box>
  ),
} satisfies Meta<typeof MISingleDropdownItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Selected: Story = {
  args: { selected: true },
};
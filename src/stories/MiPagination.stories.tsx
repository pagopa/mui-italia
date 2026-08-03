import { Meta, StoryObj } from '@storybook/react-vite';
import { MIPagination } from '@components/MIPagination';
import { MenuItem, Select, Stack } from '@mui/material';

type MIPaginationStoryArgs = React.ComponentProps<typeof MIPagination>;

const meta: Meta<MIPaginationStoryArgs> = {
  title: 'Components/MIPagination',
  component: MIPagination,
};

export default meta;

type Story = StoryObj<MIPaginationStoryArgs>;

export const Playground: Story = {
  render: () => (
    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} gap={40}>
      <Select value={10}>
        {[10, 24, 36].map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      <MIPagination count={110} color="primary" shape="rounded" />
    </Stack>
  ),
};

export const FirstPage: Story = {
  args: {
    count: 110,
    page: 1,
    color: 'primary',
    shape: 'rounded',
  },
};

export const LastPage: Story = {
  args: {
    count: 110,
    page: 110,
    color: 'primary',
    shape: 'rounded',
  },
};

import { Meta, StoryObj } from '@storybook/react-vite';
import { MIPagination } from '@components/MIPagination';

type MIPaginationStoryArgs = React.ComponentProps<typeof MIPagination>;

const meta: Meta<MIPaginationStoryArgs> = {
  title: 'Components/MIPagination',
  component: MIPagination,
};

export default meta;

type Story = StoryObj<MIPaginationStoryArgs>;

export const Playground: Story = {
  args: {
    count: 110,
    color: 'primary',
    shape: 'rounded',
  },
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

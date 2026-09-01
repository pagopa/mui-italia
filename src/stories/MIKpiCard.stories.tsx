import type { Meta, StoryObj } from '@storybook/react-vite';

import MIKpiCard from '../components/MIKpiCard';

const meta: Meta<typeof MIKpiCard> = {
  title: 'Components/MIKpiCard',
  component: MIKpiCard,
};

export default meta;

type Story = StoryObj<typeof MIKpiCard>;
export const Default: Story = {
  args: {
    title: 'Inviate',
    bars: [
      { numerator: 6000, denominator: 10000 },
    ],
  },
};

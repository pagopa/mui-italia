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
      { numerator: 6000, denominator: 10000, label: 'Label', variant: 'regular' },
    ],
  },
};

export const Small: Story = {
  args: {
    title: 'Inviate',
    bars: [
      { numerator: 6000, denominator: 10000, label: 'Label', variant: 'small' },
    ],
  },
};

export const Full: Story = {
  args: {
    title: 'Inviate',
    bars: [
      { numerator: 10000, denominator: 10000, label: 'Label', },
    ],
  },
};

export const FullWithIconAndTooltip: Story = {
  args: {
    title: 'Inviate',
    tooltipText: 'Descrizione di approfondimento su più righe più righe più righe',
    bars: [
      { numerator: 10000, denominator: 10000, label: 'Label', },
    ],
  },
};
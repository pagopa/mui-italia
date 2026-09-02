import type { Meta, StoryObj } from '@storybook/react-vite';

import MIKpiCard from '../components/MIProgressKpiCard';

const meta: Meta<typeof MIKpiCard> = {
  title: 'Components/MIKpiCard',
  component: MIKpiCard,
};

export default meta;

type Story = StoryObj<typeof MIKpiCard>;

export const Simple: Story = {
  args: {
    title: 'Inviate',
    denominator: 10000,
    bars: [
      { numerator: 6000 },
    ],
  },
};

export const Small: Story = {
  args: {
    title: 'Inviate',
    denominator: 10000,
    bars: [
      { numerator: 6000, label: 'Label', variant: 'small' },
    ],
  },
};

export const Full: Story = {
  args: {
    title: 'Lette',
    denominator: 10000,
    tooltipText: 'Descrizione di approfondimento su più righe più righe più righe',
    bars: [
      { numerator: 10000, label: 'Label', },
    ],
  },
};

export const FullWithIconAndTooltip: Story = {
  args: {
    title: 'Inviate',
    tooltipText: 'Descrizione di approfondimento su più righe più righe più righe',
    denominator: 10000,
    bars: [
      { numerator: 10000, label: 'Label', },
    ],
  },
};

export const MultipleBars: Story = {
  args: {
    title: 'Fallite',
    tooltipText: 'Descrizione di approfondimento su più righe più righe più righe',
    denominator: 100,
    bars: [
      { numerator: 20, label: 'Destinatario errato', },
      { numerator: 10, label: 'Destinatario deceduto', },
    ],
  },
};
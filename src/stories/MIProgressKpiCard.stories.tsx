import type { Meta, StoryObj } from '@storybook/react-vite';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MIProgressKpiCard from '../components/MIProgressKpiCard';
import { theme } from 'index';

const meta: Meta<typeof MIProgressKpiCard> = {
  title: 'Components/MIProgressKpiCard',
  component: MIProgressKpiCard,
};

export default meta;

type Story = StoryObj<typeof MIProgressKpiCard>;

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
      { numerator: 6000, variant: 'small' },
    ],
  },
};

export const Full: Story = {
  args: {
    title: 'Lette',
    denominator: 10000,
    bars: [
      { numerator: 10000 },
    ],
  },
};

console.log(theme)
export const FullWithIconAndTooltip: Story = {
  args: {
    title: 'Inviate',
    icon: <SendOutlinedIcon sx={{ color: theme.colors.neutral.grey[300], width: 24, height: 24 }} />,
    tooltipText: 'Descrizione di approfondimento su più righe più righe più righe',
    denominator: 10000,
    bars: [
      { numerator: 10000 },
    ],
  },
};

export const MultipleBars: Story = {
  args: {
    title: 'Fallite',
    icon: <SendOutlinedIcon sx={{ color: theme.colors.neutral.grey[300], width: 24, height: 24 }} />,
    tooltipText: 'Descrizione di approfondimento su più righe più righe più righe',
    denominator: 100,
    bars: [
      { numerator: 20, label: 'Destinatario errato', },
      { numerator: 10, label: 'Destinatario deceduto', },
    ],
  },
};
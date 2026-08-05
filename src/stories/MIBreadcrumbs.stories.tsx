import { MIBreadcrumbItem, MIBreadcrumbs } from '../components/MIBreadcrumbs';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MIBreadcrumbsProps } from '@components/MIBreadcrumbs/types';
import { Stack } from '@mui/system';

const meta: Meta<MIBreadcrumbsProps> = {
  title: 'Components/MIBreadcrumbs',
  component: MIBreadcrumbs,
  parameters: {
    layout: 'centered'
  },
  render: (args) => (
    <MIBreadcrumbs {...args} />
  )
};
export default meta;

export type Story = StoryObj<MIBreadcrumbsProps>;

export const Default: Story = {};

Default.args = {
  children: [
    <MIBreadcrumbItem key="1" label="Dashboard" href="/"></MIBreadcrumbItem>,
    <MIBreadcrumbItem key="2" label="Elenco Ricevute" href="/list"></MIBreadcrumbItem>,
    <MIBreadcrumbItem key="3" label="Dettaglio Ricevuta" current></MIBreadcrumbItem>
  ],
}

export const CompactOnly: Story = {};
CompactOnly.args = {
  variant: 'compact',
}

export const CustomCompactOnly: Story = {};
CustomCompactOnly.args = {
  variant: 'compact',
  backButtonLabel: 'Elenco Ricevute',
  backButtonAction: () => console.log('Esci')
}

export const Variants: Story = {
  tags: ['!dev'],
  render: () => (
    <Stack direction="column" spacing={4} alignItems="center">
      <MIBreadcrumbs {...Default.args} />
      <MIBreadcrumbs {...CompactOnly.args} />
    </Stack>
  ),
};


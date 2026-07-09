import { MIBreadcrumbs } from '../components/MIBreadcrumbs';
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
  elements: [{ label: 'Dashboard' }, { label: 'Elenco Ricevute' }, { label: 'Dettaglio Ricevuta' }],
}

export const MobileOnly: Story = {};
MobileOnly.args = {
  variant: 'mobileOnly',
}

export const MobileOnlyWithCustomBackButtonLabel: Story = {};
MobileOnlyWithCustomBackButtonLabel.args = {
  variant: 'mobileOnly',
  backButtonLabel: 'About',
}

export const Variants: Story = {
  tags: ['!dev'],
  render: () => (
    <Stack direction="column" spacing={4} alignItems="center">
      <MIBreadcrumbs {...Default.args} />
      <MIBreadcrumbs {...MobileOnly.args} />
    </Stack>
  ),
};


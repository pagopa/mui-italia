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
  breadcrumbs: [{ label: 'Home' }, { label: 'About' }, { label: 'Contact' }],
}

export const Wizard: Story = {};
Wizard.args = {
  variant: 'wizard',
}

export const WizardWithCustomBackButtonLabel: Story = {};
WizardWithCustomBackButtonLabel.args = {
  variant: 'wizard',
  backButtonLabel: 'About',
}

export const Variants: Story = {
  tags: ['!dev'],
  render: () => (
    <Stack direction="column" spacing={4} alignItems="center">
      <MIBreadcrumbs {...Default.args} />
      <MIBreadcrumbs {...Wizard.args} />
    </Stack>
  ),
};


import type { Meta, StoryObj } from '@storybook/react';

import MIWizardStepper from '@components/MIWizard/MIWizardStepper';

const meta = {
  title: 'MUI Components/Navigation/MIWizardStepper',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      disable: true,
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const FirstStep: Story = {
  render: () => (
    <MIWizardStepper
      steps={[{ label: 'Personal data' }, { label: 'Review' }, { label: 'Confirmation' }]}
      activeStep={0}
    />
  ),
};

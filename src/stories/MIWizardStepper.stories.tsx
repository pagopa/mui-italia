import type { Meta, StoryObj } from '@storybook/react';

import MIWizardStepper from '@components/MIWizard/MIWizardStepper';

const meta = {
  title: 'MUI Components/Navigation/MIWizardStepper',
  component: MIWizardStepper,
} satisfies Meta<typeof MIWizardStepper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FirstStep: Story = {
  args: {
    steps: [{ label: 'Personal data' }, { label: 'Review' }, { label: 'Confirmation' }],
    activeStep: 0,
  },
};

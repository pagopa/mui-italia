import type { Meta, StoryObj } from '@storybook/react';
import MIWizardStepper from './MIWizardStepper';

const meta = {
  title: 'Debug/MIWizardStepperDebug',
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <MIWizardStepper
      steps={[{ label: 'Personal data' }, { label: 'Review' }, { label: 'Confirmation' }]}
      activeStep={0}
    />
  ),
};

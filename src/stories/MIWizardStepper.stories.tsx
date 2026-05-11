import { Meta, StoryObj } from '@storybook/react-vite';

import { MIWizardStepper } from '@components/MIWizard';

const meta = {
  title: 'MUI Components/Navigation/MIWizardStepper',
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const steps = [{ label: 'Personal data' }, { label: 'Review' }, { label: 'Confirmation' }];

export const FirstStep: Story = {
  render: () => <MIWizardStepper steps={steps} activeStep={0} />,
};

export const MiddleStep: Story = {
  render: () => <MIWizardStepper steps={steps} activeStep={1} />,
};

export const LastStep: Story = {
  render: () => <MIWizardStepper steps={steps} activeStep={2} />,
};

export const LongLabels: Story = {
  render: () => (
    <MIWizardStepper
      activeStep={1}
      steps={[
        { label: 'Insert personal and contact information' },
        { label: 'Review all entered information before submitting' },
        { label: 'Confirm and complete the wizard flow' },
      ]}
    />
  ),
};

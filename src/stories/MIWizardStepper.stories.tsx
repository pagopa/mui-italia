import { Meta, StoryObj } from '@storybook/react-vite';

import { MIStepper } from '@components/MIStepper';

const meta = {
  title: 'Components/MIStepper',
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const steps = [{ label: 'Personal data' }, { label: 'Review' }, { label: 'Confirmation' }];

export const FirstStep: Story = {
  render: () => <MIStepper steps={steps} activeStep={0} />,
};

export const MiddleStep: Story = {
  render: () => <MIStepper steps={steps} activeStep={1} />,
};

export const LastStep: Story = {
  render: () => <MIStepper steps={steps} activeStep={2} />,
};

export const LongLabels: Story = {
  render: () => (
    <MIStepper
      activeStep={1}
      steps={[
        { label: 'Insert personal and contact information' },
        { label: 'Review all entered information before submitting' },
        { label: 'Confirm and complete the wizard flow' },
      ]}
    />
  ),
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },

  render: () => <MIStepper steps={steps} activeStep={1} />,
};

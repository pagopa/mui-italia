import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Debug/MIWizardStepperDebug',
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => <div>debug</div>,
};

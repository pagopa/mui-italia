import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Box } from '@mui/material';
import CodeInput, { CodeInputProps } from '../components/CodeInput/CodeInput';

const meta: Meta<typeof CodeInput> = {
  title: 'Components/CodeInput',
  component: CodeInput,
  decorators: [
    (Story) => (
      <div style={{ padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CodeInput>;

const StatefulTemplate = (args: CodeInputProps) => {
  const [value, setValue] = useState(args.value ?? '');

  return (
    <Box>
      <CodeInput {...args} value={value} onChange={setValue} />
      <Box mt={2} fontSize="0.75rem" color="text.secondary">
        <div>
          <strong>Value:</strong> {value}
        </div>
      </Box>
    </Box>
  );
};

export const Default: Story = {
  render: StatefulTemplate,
  args: {
    length: 5,
  },
};

export const Prefilled: Story = {
  render: StatefulTemplate,
  args: {
    length: 5,
    value: '12345',
  },
};

export const Encrypted: Story = {
  render: StatefulTemplate,
  args: {
    length: 8,
    encrypted: true,
    value: 'password',
  },
};

export const NumericInputMode: Story = {
  render: StatefulTemplate,
  args: {
    length: 6,
    inputMode: 'numeric',
    helperText: 'Only numbers allowed – mobile keyboard test',
  },
};

export const LongCode: Story = {
  render: StatefulTemplate,
  args: {
    length: 10,
    value: '123456',
  },
};

export const WithError: Story = {
  render: StatefulTemplate,
  args: {
    length: 6,
    error: true,
    helperText: 'Invalid code format',
    value: 'abc',
  },
};

export const WithHelperText: Story = {
  render: StatefulTemplate,
  args: {
    length: 5,
    value: '',
    helperText: 'Enter the verification code sent via SMS',
  },
};

export const Uncontrolled: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <Box>
        <CodeInput ariaLabel="Codice OTP" length={5} onChange={setValue} />
        <Box mt={2} fontSize="0.75rem" color="text.secondary">
          <div>
            <strong>Value:</strong> {value}
          </div>
        </Box>
      </Box>
    );
  },
};

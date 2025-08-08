import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Box } from '@mui/material';
import CodeInput, { CodeInputProps } from '../components/CodeInput/CodeInput';

const meta: Meta<typeof CodeInput> = {
  title: 'Components/CodeInput',
  component: CodeInput,
  tags: ['autodocs'],
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

export const Encrypted: Story = {
  render: StatefulTemplate,
  args: {
    length: 5,
    encrypted: true,
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

export const Prefilled: Story = {
  render: StatefulTemplate,
  args: {
    length: 5,
    value: '12345',
  },
};

export const LongCode: Story = {
  render: StatefulTemplate,
  args: {
    length: 10,
  },
};

export const WithError: Story = {
  render: (args) => {
    const [value, setValue] = useState('ab');
    const [error, setError] = useState(true);

    const handleChange = (val: string) => {
      setValue(val);
      const isNumericOnly = /^\d*$/.test(val);
      setError(!isNumericOnly);
    };

    return (
      <Box>
        <CodeInput
          {...args}
          value={value}
          onChange={handleChange}
          error={error}
          helperText={error ? 'Invalid code format' : 'Insert a numeri value'}
        />
        <Box mt={2} fontSize="0.75rem" color="text.secondary">
          <div>
            <strong>Value:</strong> {value}
          </div>
          <div>
            <strong>Error:</strong> {error ? 'true' : 'false'}
          </div>
        </Box>
      </Box>
    );
  },
  args: {
    length: 6,
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story starts with an invalid value (`"ab"`) to show the error layout. The error dynamically updates based on whether the entered code is numeric.',
      },
    },
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

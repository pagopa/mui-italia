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

type ExtendedArgs = CodeInputProps & {
  showError?: boolean;
  initialValue?: string;
};

const StatefulTemplate = (args: ExtendedArgs) => {
  const { initialValue = '', ...codeInputProps } = args;
  const [value, setValue] = useState(initialValue);

  return (
    <Box>
      <CodeInput {...codeInputProps} value={value} onChange={setValue} />
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

export const Prefilled: Story = {
  render: (args) => <StatefulTemplate {...args} initialValue="12345" />,
  args: {
    length: 5,
  },
};

export const LongCode: Story = {
  render: StatefulTemplate,
  args: {
    length: 10,
  },
};

export const WithError: Story = {
  render: StatefulTemplate,
  args: {
    length: 6,
    error: true,
    helperText: 'Invalid code format',
  },
};

export const WithHelperText: Story = {
  render: StatefulTemplate,
  args: {
    length: 5,
    helperText: 'Enter the verification code sent via SMS',
  },
};

export const Uncontrolled: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');

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

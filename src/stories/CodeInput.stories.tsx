import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Box } from '@mui/material';
import CodeInput, { CodeInputProps, CodeInputStatus } from '../components/CodeInput/CodeInput';

const meta: Meta<typeof CodeInput> = {
  title: 'Components/CodeInput',
  component: CodeInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CodeInput>;

type ExtendedArgs = CodeInputProps & {
  getHelperText?: (status: CodeInputStatus) => string;
  showError?: boolean;
  initialValue?: string;
  initialStatus?: CodeInputStatus;
};

const StatefulTemplate = (args: ExtendedArgs) => {
  const {
    getHelperText,
    showError,
    initialValue = '',
    initialStatus = 'incomplete',
    ...codeInputProps
  } = args;

  const [value, setValue] = useState(initialValue);
  const [status, setStatus] = useState<CodeInputStatus>(initialStatus);

  const helperText = getHelperText ? getHelperText(status) : '';
  const error = showError ? status === 'invalid-char' : false;

  return (
    <Box>
      <CodeInput
        {...codeInputProps}
        value={value}
        onChange={(value, status) => {
          setValue(value);
          setStatus(status);
        }}
        helperText={helperText}
        error={error}
      />
      <Box mt={2} fontSize="0.875rem" color="text.secondary">
        <div>
          <strong>Value:</strong> {value}
        </div>
        <div>
          <strong>Status:</strong> {status}
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
  render: (args) => (
    <StatefulTemplate
      {...args}
      initialValue="12345"
      initialStatus="valid"
      getHelperText={(status) => {
        if (status === 'incomplete') {
          return 'Completa il codice per proseguire';
        }
        if (status === 'invalid-char') {
          return 'Inserisci solo cifre';
        }
        return '';
      }}
    />
  ),
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
  render: (args) => (
    <StatefulTemplate
      {...args}
      getHelperText={(status) => {
        if (status === 'invalid-char') {
          return 'Inserisci solo cifre';
        }
        return '';
      }}
      showError
    />
  ),
  args: {
    length: 6,
  },
};

export const WithHelperText: Story = {
  render: (args) => (
    <StatefulTemplate
      {...args}
      getHelperText={(status) => {
        if (status === 'incomplete') {
          return 'Completa il codice, inserendo un valore numerico, per proseguire';
        }
        if (status === 'invalid-char') {
          return 'Inserisci solo cifre';
        }
        return '';
      }}
      showError
    />
  ),
  args: {
    length: 5,
  },
};

export const Uncontrolled: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');
    const [status, setStatus] = useState<CodeInputStatus>('incomplete');

    const handleChange = (value: string, status: CodeInputStatus) => {
      setValue(value);
      setStatus(status);
    };

    return (
      <Box>
        <CodeInput length={5} onChange={handleChange} />
        <Box mt={2} fontSize="0.875rem" color="text.secondary">
          <div>
            <strong>Value:</strong> {value}
          </div>
          <div>
            <strong>Status:</strong> {status}
          </div>
        </Box>
      </Box>
    );
  },
};

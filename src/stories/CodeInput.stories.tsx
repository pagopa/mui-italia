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

const StatefulTemplate = (args: CodeInputProps) => {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState<CodeInputStatus>('incomplete');

  const getHelperText = (status: CodeInputStatus): string => {
    switch (status) {
      case 'invalid-char':
        return 'Inserisci solo cifre';
      default:
        return '';
    }
  };

  return (
    <Box>
      <CodeInput
        {...args}
        value={value}
        onChange={(val, stat) => {
          setValue(val);
          setStatus(stat);
        }}
        helperText={status === 'invalid-char' ? getHelperText(status) : ''}
        error={status === 'invalid-char'}
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
  render: (args) => {
    const [value, setValue] = useState('');
    const [status, setStatus] = useState<CodeInputStatus>('incomplete');

    return (
      <CodeInput
        {...args}
        value={value}
        onChange={(val, stat) => {
          setValue(val);
          setStatus(stat);
        }}
        helperText=""
        error={false}
      />
    );
  },
  args: {
    length: 6,
  },
};

export const Encrypted: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    const [status, setStatus] = useState<CodeInputStatus>('incomplete');

    return (
      <CodeInput
        {...args}
        value={value}
        onChange={(val, stat) => {
          setValue(val);
          setStatus(stat);
        }}
        helperText=""
        error={false}
      />
    );
  },
  args: {
    length: 6,
    encrypted: true,
  },
};

export const WithHelperText: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    const [status, setStatus] = useState<CodeInputStatus>('incomplete');

    const getHelperText = (status: CodeInputStatus): string => {
      if (status === 'incomplete') {
        return 'Completa il codice per proseguire';
      }
      if (status === 'invalid-char') {
        return 'Inserisci solo cifre';
      }
      return '';
    };

    return (
      <CodeInput
        {...args}
        value={value}
        onChange={(val, stat) => {
          setValue(val);
          setStatus(stat);
        }}
        helperText={getHelperText(status)}
        error={status === 'invalid-char'}
      />
    );
  },
  args: {
    length: 6,
  },
};

export const WithError: Story = {
  render: StatefulTemplate,
  args: {
    length: 6,
  },
};

export const LongerCode: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    const [status, setStatus] = useState<CodeInputStatus>('incomplete');

    return (
      <CodeInput
        {...args}
        value={value}
        onChange={(val, stat) => {
          setValue(val);
          setStatus(stat);
        }}
        helperText=""
        error={false}
      />
    );
  },
  args: {
    length: 8,
  },
};

export const Prefilled: Story = {
  render: (args) => {
    const initialValue = '123456';
    const [value, setValue] = useState(initialValue);
    const [status, setStatus] = useState<CodeInputStatus>('valid');

    const getHelperText = (status: CodeInputStatus): string => {
      if (status === 'incomplete') {
        return 'Completa il codice per proseguire';
      }
      if (status === 'invalid-char') {
        return 'Inserisci solo cifre';
      }
      return '';
    };

    return (
      <CodeInput
        {...args}
        value={value}
        onChange={(val, stat) => {
          setValue(val);
          setStatus(stat);
        }}
        helperText={getHelperText(status)}
        error={status === 'invalid-char'}
      />
    );
  },
  args: {
    length: 6,
  },
};

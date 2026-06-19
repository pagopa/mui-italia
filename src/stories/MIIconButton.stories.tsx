import { MIIconButton } from '@components/MIIconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof MIIconButton> = {
  title: 'Components/MIIconButton',
  component: MIIconButton,
  tags: ['!autodocs'],
  args: {
    children: <DeleteIcon />,
    'aria-label': 'Elimina',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    size: {
      description: 'Dimensione del pulsante (area cliccabile e icona).',
      control: 'select',
      options: ['small', 'medium', 'large'],
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: 'medium' },
      },
    },
    edge: {
      description:
        "Compensa la spaziatura quando il pulsante è il primo o l'ultimo elemento di un contenitore.",
      control: 'select',
      options: [false, 'start', 'end'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof MIIconButton>;

export const Default: Story = {
  render: (args) => <MIIconButton {...args} />,
};

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args) => <MIIconButton {...args} />,
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
  render: (args) => <MIIconButton {...args} />,
};

export const Large: Story = {
  args: {
    size: 'large',
  },
  render: (args) => <MIIconButton {...args} />,
};

export const Sizes: Story = {
  render: (args) => (
    <Stack direction="row" spacing={2} alignItems="center">
      <MIIconButton {...args} size="small" aria-label="Elimina (small)" />
      <MIIconButton {...args} size="medium" aria-label="Elimina (medium)" />
      <MIIconButton {...args} size="large" aria-label="Elimina (large)" />
    </Stack>
  ),
};

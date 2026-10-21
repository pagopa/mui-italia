import { AccountBalance as AccountBalanceIcon } from '@mui/icons-material';
import { Box } from '@mui/material';
import { MIChip } from '@components/MIChip';
import { MISingleDropdownItem } from '@components/MISingleDropdownItem';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/MISingleDropdownItem',
  component: MISingleDropdownItem,
  args: {
    value: 'pagopa',
    label: 'PagoPA',
    description: 'Organization description',
    selected: false,
    checked: false,
    multiple: false,
  },
  argTypes: {
    label: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    selected: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
    multiple: {
      control: 'boolean',
      description: 'Mostra il checkbox decorativo per le opzioni a selezione multipla.',
    },
    avatar: { control: false },
    chip: { control: false },
    sx: { control: false },
  },
  parameters: {
    controls: {
      include: ['label', 'description', 'selected', 'checked', 'multiple'],
    },
  },
  render: (args) => (
    <Box sx={{ width: 320 }}>
      <MISingleDropdownItem
        {...args}
        avatar={
          <Box
            component="span"
            sx={(theme) => ({
              alignItems: 'center',
              backgroundColor: theme.colors.neutral.grey[50],
              borderRadius: 1,
              color: theme.colors.neutral.grey[300],
              display: 'inline-flex',
              height: 32,
              justifyContent: 'center',
              width: 32,
            })}
          >
            <AccountBalanceIcon fontSize="small" />
          </Box>
        }
        chip={<MIChip label="Warning" color="warning" />}
      />
    </Box>
  ),
} satisfies Meta<typeof MISingleDropdownItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Selected: Story = {
  args: { value: 'pagopa', selected: true },
};

export const MultipleSelection: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Box
      component="ul"
      role="listbox"
      aria-label="Organizzazioni"
      aria-multiselectable="true"
      sx={{ listStyle: 'none', m: 0, p: 0, width: 360 }}
    >
      <MISingleDropdownItem
        role="option"
        aria-selected="true"
        value="pagopa"
        label="PagoPA"
        description="Gestisci i servizi PagoPA"
        multiple
        selected
        avatar={<AccountBalanceIcon fontSize="small" />}
        chip={<MIChip label="Warning" color="warning" />}
      />
      <MISingleDropdownItem
        role="option"
        aria-selected="false"
        value="agency"
        label="Agenzia delle Entrate"
        description="Servizi fiscali e tributari"
        multiple
        avatar={<AccountBalanceIcon fontSize="small" />}
      />
    </Box>
  ),
};

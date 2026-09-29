import { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { MIPagination } from '@components/MIPagination';
import { MenuItem, SelectChangeEvent, Stack } from '@mui/material';
import { MISelect } from '@components/MISelect';

type MIPaginationStoryArgs = React.ComponentProps<typeof MIPagination> & {
  rowsPerPage: number;
};

const TOTAL_ITEMS = 110;
const ROWS_PER_PAGE_OPTIONS = [10, 24, 36];

const meta: Meta<MIPaginationStoryArgs> = {
  title: 'MUI Components/Navigation/MIPagination',
  component: MIPagination,
  parameters: {
    controls: {
      include: ['page', 'disabled', 'rowsPerPage'],
    },
  },
  args: {
    page: 1,
    disabled: false,
    rowsPerPage: 10,
  },
  argTypes: {
    page: {
      control: { type: 'number', min: 1 },
      description: 'Pagina attualmente selezionata.',
      table: { category: 'MIPagination' },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabilita l’intero componente.',
      table: { category: 'MIPagination' },
    },
    count: {
      table: { disable: true },
    },
    rowsPerPage: {
      options: ROWS_PER_PAGE_OPTIONS,
      control: { type: 'select' },
      description: 'Controllo Storybook: numero di elementi per pagina, determina il numero totale di pagine.',
      table: { category: 'Storybook controls' },
    },
  },
  // eslint-disable-next-line react-hooks/rules-of-hooks -- Storybook's render is treated as a story function, not a component
  render: ({ rowsPerPage, ...args }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks -- Storybook's render is treated as a story function, not a component
    const [, updateArgs] = useArgs<MIPaginationStoryArgs>();
    const pageCount = Math.ceil(TOTAL_ITEMS / rowsPerPage);

    const handleRowsPerPageChange = (event: SelectChangeEvent<unknown>) => {
      updateArgs({ rowsPerPage: Number(event.target.value), page: 1 });
    };

    return (
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} width="100%">
        <MISelect value={rowsPerPage} onChange={handleRowsPerPageChange}>
          {ROWS_PER_PAGE_OPTIONS.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </MISelect>
        <MIPagination
          {...args}
          count={pageCount}
          onChange={(_, value) => updateArgs({ page: value })}
        />
      </Stack>
    );
  },
};

export default meta;

type Story = StoryObj<MIPaginationStoryArgs>;

export const Playground: Story = {};

export const Default: Story = {
  args: {
    count: 110,
    page: 1,
  },
};

export const FirstPage: Story = {
  tags:['!dev'],
  args: {
    count: 110,
    page: 1,
  },
};

export const LastPage: Story = {
  tags:['!dev'],
  args: {
    count: 110,
    page: 110,
  },
};

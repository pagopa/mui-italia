import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';

import { MIPagination } from '@components/MIPagination';

type MIPaginationStoryArgs = ComponentProps<typeof MIPagination> & {
  rowsPerPage: number;
};

const TOTAL_ITEMS = 110;
const ROWS_PER_PAGE_OPTIONS = [10, 24, 36];

const meta: Meta<MIPaginationStoryArgs> = {
  title: 'Components/MIPagination',
  component: MIPagination,
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
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
      control: false,
      table: { disable: true },
    },
    rowPerPageOptions: {
      control: false,
      table: { disable: true },
    },
    onChange: {
      control: false,
      table: { disable: true },
    },
    rowsPerPage: {
      options: ROWS_PER_PAGE_OPTIONS,
      control: { type: 'select' },
      description:
        'Controllo Storybook: numero di elementi per pagina, determina il numero totale di pagine.',
      table: { category: 'Storybook controls' },
    },
  },
  render: function RenderPlayground({ page = 1, disabled = false, rowsPerPage }) {
    const [, updateArgs] = useArgs<MIPaginationStoryArgs>();
    const pageCount = Math.ceil(TOTAL_ITEMS / rowsPerPage);

    return (
      <MIPagination
        page={page}
        disabled={disabled}
        count={pageCount}
        onChange={(_, value) => updateArgs({ page: value })}
        rowPerPageOptions={{
          options: ROWS_PER_PAGE_OPTIONS,
          limit: rowsPerPage,
          onLimitChange: (limit) => updateArgs({ rowsPerPage: limit, page: 1 }),
        }}
      />
    );
  },
};

export default meta;

type Story = StoryObj<MIPaginationStoryArgs>;

export const Playground: Story = {
  parameters: {
    layout: 'padded',
  },
};

export const FirstPage: Story = {
  parameters: {
    controls: { disable: true },
  },
  args: {
    page: 1,
    disabled: false,
    rowsPerPage: 10,
  },
};

export const LastPage: Story = {
  parameters: {
    controls: { disable: true },
  },
  args: {
    page: 11,
    disabled: false,
    rowsPerPage: 10,
  },
};

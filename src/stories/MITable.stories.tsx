import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { breakpointsChromaticValues } from '@theme';
import { useState } from 'react';
import type { ChangeEvent, ComponentType } from 'react';

import { MIButton } from '@components/MIButton';
import { MITable, type MITableColumn } from '@components/MITable';

import { MIChip } from '@components/MIChip';

type TableRow = {
  id: string;
  category: string;
  date: string;
  name: string;
  value: string;
  status: string;
};

const rows: Array<TableRow> = Array.from({ length: 10 }, (_, index) => ({
  id: `01234${56 + index}`,
  category: 'Label',
  date: '31/12/2028',
  name: 'Name',
  value: 'Cell',
  status: 'Default',
}));

const columns: Array<MITableColumn<TableRow>> = [
  {
    id: 'id',
    header: 'ID',
    sortable: true,
    sortDirection: 'asc',
    renderCell: (row) => (
      <Typography variant="monospaced" component="span">
        {row.id}
      </Typography>
    ),
  },
  {
    id: 'category',
    header: 'Category',
    renderCell: (row) => row.category,
  },
  {
    id: 'date',
    header: 'Date',
    sortable: true,
    sortDirection: 'desc',
    renderCell: (row) => row.date,
  },
  {
    id: 'name',
    header: 'Name',
    renderCell: (row) => row.name,
  },
  {
    id: 'value',
    header: 'Value',
    renderCell: (row) => row.value,
  },
  {
    id: 'status',
    header: 'Status',
    renderCell: (row) => <MIChip label={row.status} />,
  },
];

const actionColumns: Array<MITableColumn<TableRow>> = [
  {
    id: 'action',
    header: '',
    isAction: true,
    renderCell: () => <MIButton variant="text">Action</MIButton>,
  },
  {
    id: 'context-action',
    header: '',
    isAction: true,
    renderCell: () => (
      <IconButton aria-label="Open row actions">
        <MoreVertIcon />
      </IconButton>
    ),
  },
];

const componentMaxWidth = 1280;

type MITableStoryArgs = {
  showPagination: boolean;
  isLoading: boolean;
};

const meta: Meta<MITableStoryArgs> = {
  title: 'Components/MITable',
  component: MITable as unknown as ComponentType<MITableStoryArgs>,
  tags: ['!dev'],
  parameters: {
    layout: 'padded',
    theme: 'next',
    controls: {
      include: ['showPagination', 'isLoading'],
    },
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
  },
  args: {
    showPagination: true,
    isLoading: false,
  },
  argTypes: {
    isLoading: {
      control: { type: 'boolean' },
      description: 'Sostituisce i dati e le azioni con 10 righe skeleton.',
      table: {
        category: 'Component props',
        defaultValue: { summary: 'false' },
      },
    },
    showPagination: {
      control: { type: 'boolean' },
      description: 'Abilita la paginazione.',
      table: {
        category: 'Storybook controls',
      },
    },
  },
};

export default meta;

type Story = StoryObj<MITableStoryArgs>;

export const Playground: Story = {
  render: function RenderPlayground({ showPagination, isLoading }) {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const selectedActionColumns = actionColumns;

    const tableColumns = [...columns, ...selectedActionColumns];

    const pagination = showPagination
      ? {
          page,
          count: 101,
          onChange: (_: ChangeEvent<unknown>, nextPage: number) => setPage(nextPage),
          itemsPerPageOptions: {
            options: [10, 24, 36],
            limit,
            onLimitChange: (nextLimit: number) => setLimit(nextLimit),
          },
        }
      : undefined;

    return (
      <MITable
        columns={tableColumns}
        rows={rows}
        isLoading={isLoading}
        getRowId={(row) => row.id}
        pagination={pagination}
      />
    );
  },
};

export const Loading: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <MITable
      columns={[...columns, ...actionColumns]}
      rows={[]}
      isLoading
      desktopTableProps={{ 'aria-label': 'Transactions' }}
      mobileTableProps={{ 'aria-label': 'Transactions' }}
    />
  ),
};

export const WithoutActions: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => <MITable columns={columns} rows={rows} getRowId={(row) => row.id} />,
};

export const WithoutPagination: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <MITable columns={[...columns, ...actionColumns]} rows={rows} getRowId={(row) => row.id} />
  ),
};

import { MIPagination } from '@components/MIPagination';
import { Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { breakpointsChromaticValues } from '@theme';
import { useEffect, useState } from 'react';

const componentMaxWidth = 1280;

type RowsPerPagePreset = 'default' | 'compact';

type MIPaginationStoryArgs = React.ComponentProps<typeof MIPagination> & {
  showRowsPerPage: boolean;
  rowsPerPagePreset: RowsPerPagePreset;
  rowsPerPageLimit: number;
};

const rowsPerPageOptionsByPreset: Record<RowsPerPagePreset, Array<number>> = {
  default: [10, 24, 36],
  compact: [5, 10, 20],
};

const normalizeLimit = (value: number) => Number(value);
const getTotalPages = (totalItems: number, limit: number) => Math.max(1, Math.ceil(totalItems / limit));

const meta: Meta<MIPaginationStoryArgs> = {
  title: 'Components/MIPagination',
  component: MIPagination,
  tags: ['!dev'],
  parameters: {
    controls: {
      include: [
        'count',
        'page',
        'showRowsPerPage',
        'rowsPerPagePreset',
        'rowsPerPageLimit',
      ],
    },
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
  },
  args: {
    count: 110,
    page: 1,
    showRowsPerPage: false,
    rowsPerPagePreset: 'default',
    rowsPerPageLimit: 10,
  },
  argTypes: {
    count: {
      control: { type: 'number', min: 1 },
      description: 'Numero totale di pagine.',
      table: {
        category: 'MIPagination',
      },
    },
    page: {
      control: { type: 'number', min: 1 },
      description: 'Pagina corrente in modalita controllata.',
      table: {
        category: 'MIPagination',
      },
    },
    showRowsPerPage: {
      control: { type: 'boolean' },
      description: 'Controllo Storybook: mostra o nasconde il selettore righe per pagina.',
      table: {
        category: 'Storybook controls',
      },
    },
    rowsPerPagePreset: {
      options: ['default', 'compact'],
      control: { type: 'radio' },
      description: 'Controllo Storybook: preset opzioni per il selettore righe per pagina.',
      table: {
        category: 'Storybook controls',
      },
    },
    rowsPerPageLimit: {
      control: { type: 'number', min: 1 },
      description: 'Controllo Storybook: valore selezionato nel selettore righe per pagina.',
      table: {
        category: 'Storybook controls',
      },
    },
    onChange: {
      control: false,
      table: {
        disable: true,
      },
    },
    rowPerPageOptions: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  render: function RenderPlayground({
    count,
    page = 1,
    onChange,
    showRowsPerPage,
    rowsPerPagePreset,
    rowsPerPageLimit,
  }) {
    const options = rowsPerPageOptionsByPreset[rowsPerPagePreset];

    const [currentPage, setCurrentPage] = useState(page);
    const [limit, setLimit] = useState(rowsPerPageLimit);

    useEffect(() => {
      setCurrentPage(page);
    }, [page]);

    useEffect(() => {
      setLimit(rowsPerPageLimit);
    }, [rowsPerPageLimit]);

    useEffect(() => {
      if (!options.includes(limit)) {
        setLimit(options[0]);
      }
    }, [options, limit]);

    const handlePageChange: NonNullable<React.ComponentProps<typeof MIPagination>['onChange']> = (
      event,
      nextPage,
    ) => {
      setCurrentPage(nextPage);
      onChange?.(event, nextPage);
    };

    return (
      <Stack spacing={2} sx={{ width: '100%', maxWidth: 720 }}>
        <MIPagination
          count={count}
          page={currentPage}
          onChange={handlePageChange}
          rowPerPageOptions={
            showRowsPerPage
              ? {
                  options,
                  limit,
                  onLimitChange: (nextLimit) => setLimit(normalizeLimit(nextLimit)),
                  inputProps: {
                    'aria-label': 'Seleziona numero di righe per pagina',
                  },
                }
              : undefined
          }
        />
      </Stack>
    );
  },
};

export default meta;

type Story = StoryObj<MIPaginationStoryArgs>;

export const Playground: Story = {};

export const Default: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: function RenderDefault() {
    const [page, setPage] = useState(1);

    return <MIPagination count={110} page={page} onChange={(_, nextPage) => setPage(nextPage)} />;
  },
};

export const WithRowsPerPage: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: function RenderWithRowsPerPage() {
    const totalItems = 240;
    const [page, setPage] = useState(2);
    const [limit, setLimit] = useState(24);
    const totalPages = getTotalPages(totalItems, limit);

    useEffect(() => {
      if (page > totalPages) {
        setPage(totalPages);
      }
    }, [page, totalPages]);

    return (
      <MIPagination
        count={totalPages}
        page={page}
        onChange={(_, nextPage) => setPage(nextPage)}
        rowPerPageOptions={{
          limit,
          onLimitChange: (nextLimit) => setLimit(normalizeLimit(nextLimit)),
        }}
      />
    );
  },
};

export const CompactRowsPerPage: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: function RenderCompactRowsPerPage() {
    const totalItems = 95;
    const [page, setPage] = useState(4);
    const [limit, setLimit] = useState(10);
    const totalPages = getTotalPages(totalItems, limit);

    useEffect(() => {
      if (page > totalPages) {
        setPage(totalPages);
      }
    }, [page, totalPages]);

    return (
      <MIPagination
        count={totalPages}
        page={page}
        onChange={(_, nextPage) => setPage(nextPage)}
        rowPerPageOptions={{
          options: [5, 10, 20],
          limit,
          onLimitChange: (nextLimit) => setLimit(normalizeLimit(nextLimit)),
          inputProps: {
            'aria-label': 'Seleziona numero di righe per pagina',
          },
        }}
      />
    );
  },
};

export const MobileBehavior: Story = {
  parameters: {
    controls: {
      disable: true,
    },
    docs: {
      description: {
        story:
          'Su viewport piccoli il componente mostra solo pagina selezionata e pulsanti di navigazione precedente/successiva.',
      },
    },
  },
  render: function RenderMobileBehavior() {
    const [page, setPage] = useState(5);

    return (
      <Stack spacing={1.5} sx={{ width: '100%', maxWidth: 400 }}>
        <Typography variant="body2" color="text.secondary">
          Verifica questa story anche su viewport mobile in Chromatic.
        </Typography>

        <MIPagination count={10} page={page} onChange={(_, nextPage) => setPage(nextPage)} />
      </Stack>
    );
  },
};

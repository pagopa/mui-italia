import type { ComponentProps } from 'react';

import { MailOutline as MailOutlineIcon } from '@mui/icons-material';
import { Button } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { MITableList, MITableListItem, MITableListItemField } from '@components/MITableList';

type ColumnLayout = 'uniform' | 'custom';

type MITableListStoryArgs = ComponentProps<typeof MITableList> & {
  columnLayout?: ColumnLayout;
  rows?: number;
  cols?: number;
  skeletonAction?: boolean;
  loadingLabel?: string;
};

const columnsByLayout: Record<ColumnLayout, Array<number> | undefined> = {
  uniform: undefined,
  custom: [2, 1, 1.3],
};

const renderItems = () => [
  <MITableListItem key="campaign-1" action={{ content: 'Apri', onClick: () => {} }}>
    <MITableListItemField label="22/11/2025">
      Titolo campagna molto lungo che potrebbe andare su più righe
    </MITableListItemField>

    <MITableListItemField label="Codice ID">0000000000</MITableListItemField>

    <MITableListItemField label="Comunicazioni" icon={<MailOutlineIcon fontSize="small" />}>
      10
    </MITableListItemField>
  </MITableListItem>,

  <MITableListItem key="campaign-2" action={{ content: 'Apri', onClick: () => {} }}>
    <MITableListItemField label="23/11/2025">Seconda campagna</MITableListItemField>

    <MITableListItemField label="Codice ID">0000000001</MITableListItemField>

    <MITableListItemField label="Comunicazioni" icon={<MailOutlineIcon fontSize="small" />}>
      20
    </MITableListItemField>
  </MITableListItem>,

  <MITableListItem key="campaign-3" action={{ content: 'Apri', onClick: () => {} }}>
    <MITableListItemField label="24/11/2025">
      Terza campagna con contenuto differente
    </MITableListItemField>

    <MITableListItemField label="Codice ID">0000000002</MITableListItemField>

    <MITableListItemField label="Comunicazioni" icon={<MailOutlineIcon fontSize="small" />}>
      30
    </MITableListItemField>
  </MITableListItem>,
];

const meta: Meta<MITableListStoryArgs> = {
  title: 'Components/MITableList',
  component: MITableList,
  parameters: {
    layout: 'padded',
    theme: 'next',
    controls: {
      include: ['loading', 'columnLayout', 'rows', 'cols', 'skeletonAction', 'loadingLabel'],
    },
  },
  args: {
    loading: false,
    columnLayout: 'custom',
    rows: 4,
    cols: 3,
    skeletonAction: false,
    loadingLabel: 'Caricamento in corso...',
  },
  argTypes: {
    loading: {
      control: { type: 'boolean' },
      description: 'Attiva lo stato di caricamento.',
      table: {
        category: 'MITableList',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    columnLayout: {
      options: ['uniform', 'custom'],
      control: { type: 'radio' },
      description: 'Preset Storybook per la distribuzione dei campi.',
      table: {
        category: 'Storybook controls',
      },
    },
    rows: {
      control: { type: 'number', min: 1 },
      description: 'Righe dello skeleton.',
      table: {
        category: 'Storybook controls',
      },
    },
    cols: {
      control: { type: 'number', min: 1 },
      description: 'Colonne dello skeleton.',
      table: {
        category: 'Storybook controls',
      },
    },
    skeletonAction: {
      control: { type: 'boolean' },
      description: "Mostra il placeholder dell'action.",
      table: {
        category: 'Storybook controls',
      },
    },
    loadingLabel: {
      control: { type: 'text' },
      description: 'Testo accessibile del loading.',
      table: {
        category: 'Storybook controls',
      },
    },
    columns: {
      control: false,
      table: {
        disable: true,
      },
    },
    children: {
      control: false,
      table: {
        disable: true,
      },
    },
    slots: {
      control: false,
      table: {
        disable: true,
      },
    },
    slotProps: {
      control: false,
      table: {
        disable: true,
      },
    },
    localeText: {
      control: false,
      table: {
        disable: true,
      },
    },
    sx: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  render: ({ loading, columnLayout = 'custom', rows, cols, skeletonAction, loadingLabel }) => (
    <MITableList
      loading={loading}
      columns={columnsByLayout[columnLayout]}
      slotProps={{
        skeleton: {
          rows,
          cols,
          action: skeletonAction,
        },
      }}
      localeText={{ loadingLabel }}
    >
      {renderItems()}
    </MITableList>
  ),
};

export default meta;

type Story = StoryObj<MITableListStoryArgs>;

export const Playground: Story = {};

export const Default: Story = {
  tags: ['!dev'],
  parameters: {
    controls: { disable: true },
  },
  render: () => <MITableList>{renderItems()}</MITableList>,
};

export const CustomColumns: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <MITableList columns={[2, 1, 1]}>
      <MITableListItem action={{ content: 'Apri', onClick: () => {} }}>
        <MITableListItemField label="22/11/2025">
          Titolo campagna molto lungo che potrebbe andare su più righe
        </MITableListItemField>

        <MITableListItemField label="Codice ID">0000000000</MITableListItemField>

        <MITableListItemField label="Comunicazioni" icon={<MailOutlineIcon fontSize="small" />}>
          10
        </MITableListItemField>
      </MITableListItem>

      <MITableListItem columns={[1, 2, 1]} action={{ content: 'Apri', onClick: () => {} }}>
        <MITableListItemField label="23/11/2025">Seconda campagna</MITableListItemField>

        <MITableListItemField label="Codice ID">0000000001</MITableListItemField>

        <MITableListItemField label="Comunicazioni" icon={<MailOutlineIcon fontSize="small" />}>
          20
        </MITableListItemField>
      </MITableListItem>

      <MITableListItem action={{ content: 'Apri', onClick: () => {} }}>
        <MITableListItemField label="24/11/2025">Terza campagna</MITableListItemField>

        <MITableListItemField label="Codice ID">0000000002</MITableListItemField>

        <MITableListItemField label="Comunicazioni" icon={<MailOutlineIcon fontSize="small" />}>
          30
        </MITableListItemField>
      </MITableListItem>
    </MITableList>
  ),
};

export const WithoutAction: Story = {
  tags: ['!dev'],
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <MITableList columns={[2, 1, 1]}>
      <MITableListItem>
        <MITableListItemField label="22/11/2025">Titolo campagna</MITableListItemField>

        <MITableListItemField label="Codice ID">0000000000</MITableListItemField>

        <MITableListItemField label="Comunicazioni" icon={<MailOutlineIcon fontSize="small" />}>
          10
        </MITableListItemField>
      </MITableListItem>

      <MITableListItem>
        <MITableListItemField label="23/11/2025">Seconda campagna</MITableListItemField>

        <MITableListItemField label="Codice ID">0000000001</MITableListItemField>

        <MITableListItemField label="Comunicazioni" icon={<MailOutlineIcon fontSize="small" />}>
          20
        </MITableListItemField>
      </MITableListItem>
    </MITableList>
  ),
};

export const CustomAction: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <MITableList columns={[2, 1, 1]}>
      <MITableListItem
        action={{
          content: 'Visualizza dettaglio',
          onClick: () => {},
          ariaLabel: 'Visualizza dettaglio campagna',
        }}
        slots={{
          actionButton: Button,
        }}
      >
        <MITableListItemField label="22/11/2025">Titolo campagna</MITableListItemField>

        <MITableListItemField label="Codice ID">0000000000</MITableListItemField>

        <MITableListItemField label="Comunicazioni" icon={<MailOutlineIcon fontSize="small" />}>
          10
        </MITableListItemField>
      </MITableListItem>
    </MITableList>
  ),
};

export const Loading: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <MITableList
      loading
      columns={[2, 1, 1]}
      slotProps={{
        skeleton: {
          rows: 4,
          cols: 3,
          action: true,
        },
      }}
      localeText={{
        loadingLabel: 'Caricamento lista in corso',
      }}
    />
  ),
};

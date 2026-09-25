import { AccountCircleRounded, LogoutRounded, SettingsRounded } from '@mui/icons-material';
import { Button } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MouseEvent, useState } from 'react';

import { MIMenuDropdown, MIMenuDropdownProps } from '@components/MIMenuDropdown';

const items: MIMenuDropdownProps['items'] = [
  {
    label: 'Profilo personale',
    icon: <AccountCircleRounded fontSize="small" />,
    onClick: () => console.info('Profilo personale'),
  },
  {
    label: 'Impostazioni',
    icon: <SettingsRounded fontSize="small" />,
    onClick: () => console.info('Impostazioni'),
  },
  {
    label: 'Esci',
    icon: <LogoutRounded fontSize="small" />,
    onClick: () => console.info('Esci'),
  },
];

const meta: Meta<typeof MIMenuDropdown> = {
  title: 'Components/MIMenuDropdown',
  component: MIMenuDropdown,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['selected', 'items'],
    },
  },
  args: {
    items,
    selected: undefined,
  },
  argTypes: {
    items: {
      description: 'Lista di voci del menu con label, azione e icona opzionale.',
      control: false,
      table: {
        type: {
          summary: 'Array<{ label: string; onClick: VoidFunction; icon?: ReactNode; }>',
        },
      },
    },
    selected: {
      control: 'select',
      options: ['Profilo personale', 'Impostazioni', 'Esci'],
      description: 'Voce attualmente selezionata nel menu.',
    },
    handleClose: {
      control: false,
    },
  },
  render: function RenderMenuDropdown(args) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const initialSelected = typeof args.selected === 'string' ? args.selected : undefined;
    const [selected, setSelected] = useState<string | undefined>(initialSelected);

    const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const storyItems = [
      {
        label: 'Profilo personale1',
        icon: <AccountCircleRounded fontSize="small" />,
        onClick: () => console.info('Profilo personale'),
      },
      {
        label: 'Profilo personale2',
        icon: <AccountCircleRounded fontSize="small" />,
        onClick: () => console.info('Profilo personale'),
      },
      {
        label: 'Profilo personale3',
        icon: <AccountCircleRounded fontSize="small" />,
        onClick: () => console.info('Profilo personale'),
      },
      {
        label: 'Profilo personale4',
        icon: <AccountCircleRounded fontSize="small" />,
        onClick: () => console.info('Profilo personale'),
      },
      {
        label: 'Profilo personale5',
        icon: <AccountCircleRounded fontSize="small" />,
        onClick: () => console.info('Profilo personale'),
      },
      {
        label: 'Profilo personale6',
        icon: <AccountCircleRounded fontSize="small" />,
        onClick: () => console.info('Profilo personale'),
      },
      {
        label: 'Profilo personale7',
        icon: <AccountCircleRounded fontSize="small" />,
        onClick: () => console.info('Profilo personale'),
      },
      {
        label: 'Profilo personale8',
        icon: <AccountCircleRounded fontSize="small" />,
        onClick: () => console.info('Profilo personale'),
      },
      {
        label: 'Profilo personale9',
        icon: <AccountCircleRounded fontSize="small" />,
        onClick: () => console.info('Profilo personale'),
      },
      {
        label: 'Profilo personale10',
        icon: <AccountCircleRounded fontSize="small" />,
        onClick: () => console.info('Profilo personale'),
      },
      {
        label: 'Profilo personale11',
        icon: <AccountCircleRounded fontSize="small" />,
        onClick: () => console.info('Profilo personale'),
      },
      {
        label: 'Profilo personale12',
        icon: <AccountCircleRounded fontSize="small" />,
        onClick: () => console.info('Profilo personale'),
      },
      {
        label: 'Profilo personale13',
        icon: <AccountCircleRounded fontSize="small" />,
        onClick: () => console.info('Profilo personale'),
      },
      {
        label: 'Profilo personale14',
        icon: <AccountCircleRounded fontSize="small" />,
        onClick: () => console.info('Profilo personale'),
      },
      {
        label: 'Profilo personale15',
        icon: <AccountCircleRounded fontSize="small" />,
        onClick: () => console.info('Profilo personale'),
      },
      {
        label: 'Profilo personale16',
        icon: <AccountCircleRounded fontSize="small" />,
        onClick: () => console.info('Profilo personale'),
      },
      {
        label: 'Profilo personale17',
        icon: <AccountCircleRounded fontSize="small" />,
        onClick: () => console.info('Profilo personale'),
      },
      ...args.items,
    ];

    return (
      <>
        <Button
          variant="contained"
          aria-controls={anchorEl ? 'mi-menu-dropdown' : undefined}
          aria-haspopup="true"
          aria-expanded={anchorEl ? 'true' : undefined}
          onClick={handleOpen}
        >
          Apri menu
        </Button>

        <MIMenuDropdown
          {...args}
          id="mi-menu-dropdown"
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          handleClose={handleClose}
          selected={selected}
          items={storyItems.map((item) => ({
            ...item,
            onClick: () => {
              item.onClick();
              setSelected(item.label);
            },
          }))}
        />
      </>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithoutIcons: Story = {
  args: {
    items: items.map(({ label, onClick }) => ({ label, onClick })),
    selected: 'Profilo personale',
  },
};

export const Empty: Story = {
  args: {
    items: [],
    selected: undefined,
  },
};

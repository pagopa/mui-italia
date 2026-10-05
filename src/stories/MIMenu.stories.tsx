import {
  AddCircleRounded as AddCircleRoundedIcon,
  LogoutRounded as LogoutRoundedIcon,
} from '@mui/icons-material';
import { Button } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { breakpointsChromaticValues } from '@theme';
import { useState } from 'react';

import { MIMenu, type MIMenuItemProps, type MIMenuProps } from '@components/MIMenu';

const componentMaxWidth = 400;

type MenuScenario = 'basic' | 'withIcons' | 'withDisabledItem' | 'withLongLabels';

type MIMenuStoryArgs = MIMenuProps & {
  triggerLabel: string;
  scenario: MenuScenario;
};

const buildItems = (scenario: MenuScenario, closeMenu: () => void): Array<MIMenuItemProps> => {
  if (scenario === 'withIcons') {
    return [
      {
        id: 'new-action',
        label: 'Nuova azione',
        startIcon: <AddCircleRoundedIcon fontSize="small" />,
        onClick: closeMenu,
      },
      {
        id: 'logout',
        label: 'Esci',
        startIcon: <LogoutRoundedIcon fontSize="small" />,
        onClick: closeMenu,
      },
    ];
  }

  if (scenario === 'withDisabledItem') {
    return [
      {
        id: 'profile',
        label: 'Profilo',
        onClick: closeMenu,
      },
      {
        id: 'admin-area',
        label: 'Area amministrazione',
        disabled: true,
        onClick: closeMenu,
      },
      {
        id: 'logout',
        label: 'Esci',
        onClick: closeMenu,
      },
    ];
  }

  if (scenario === 'withLongLabels') {
    return [
      {
        id: 'notifications-preferences',
        label: 'Gestione preferenze di notifica e comunicazioni di servizio',
        onClick: closeMenu,
      },
      {
        id: 'activity-report',
        label: 'Scarica report attivita e cronologia operazioni effettuate',
        onClick: closeMenu,
      },
      {
        id: 'logout',
        label: 'Esci',
        onClick: closeMenu,
      },
    ];
  }

  return [
    {
      id: 'profile',
      label: 'Profilo',
      onClick: closeMenu,
    },
    {
      id: 'settings',
      label: 'Impostazioni',
      onClick: closeMenu,
    },
    {
      id: 'logout',
      label: 'Esci',
      onClick: closeMenu,
    },
  ];
};

const meta: Meta<MIMenuStoryArgs> = {
  title: 'Components/MIMenu',
  component: MIMenu,
  tags: ['!dev'],
  parameters: {
    controls: {
      include: [
        'triggerLabel',
        'scenario',
        'keepMounted',
        'disablePortal',
        'disableAutoFocusItem',
      ],
    },
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
  },
  args: {
    triggerLabel: 'Apri menu account',
    scenario: 'basic',
    anchorEl: null,
    open: false,
    onClose: () => {},
    items: [],
    keepMounted: false,
    disablePortal: false,
    disableAutoFocusItem: false,
    id: 'mi-menu-account',
  },
  argTypes: {
    triggerLabel: {
      control: { type: 'text' },
      description: 'Testo visualizzato nel pulsante che apre il menu.',
      table: {
        category: 'Storybook controls',
        type: { summary: 'string' },
      },
    },
    scenario: {
      options: ['basic', 'withIcons', 'withDisabledItem', 'withLongLabels'],
      control: { type: 'radio' },
      description: 'Controllo Storybook: seleziona una configurazione di items predefinita.',
      table: {
        category: 'Storybook controls',
        type: {
          summary: "'basic' | 'withIcons' | 'withDisabledItem' | 'withLongLabels'",
        },
      },
    },
    keepMounted: {
      control: 'boolean',
      description: 'Mantiene il menu montato nel DOM anche quando e chiuso.',
      table: {
        category: 'MIMenu',
        type: { summary: 'boolean' },
      },
    },
    disablePortal: {
      control: 'boolean',
      description: 'Disattiva il portal del menu.',
      table: {
        category: 'MIMenu',
        type: { summary: 'boolean' },
      },
    },
    disableAutoFocusItem: {
      control: 'boolean',
      description: 'Disattiva il focus automatico sul primo elemento all’apertura.',
      table: {
        category: 'Accessibilita',
        type: { summary: 'boolean' },
      },
    },
    items: {
      control: false,
      table: {
        disable: true,
      },
    },
    anchorEl: {
      control: false,
      table: {
        disable: true,
      },
    },
    open: {
      control: false,
      table: {
        disable: true,
      },
    },
    onClose: {
      control: false,
      table: {
        disable: true,
      },
    },
    onClick: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  render: function RenderMIMenu({
    triggerLabel,
    scenario,
    keepMounted,
    disablePortal,
    disableAutoFocusItem,
    id,
    className,
  }) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const isOpen = Boolean(anchorEl);
    const triggerId = `${id ?? 'mi-menu'}-trigger`;

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const items = buildItems(scenario, handleClose);

    return (
      <>
        <Button
          id={triggerId}
          variant="contained"
          aria-controls={isOpen ? id : undefined}
          aria-haspopup="true"
          aria-expanded={isOpen ? 'true' : undefined}
          onClick={handleOpen}
        >
          {triggerLabel}
        </Button>
        <MIMenu
          id={id}
          className={className}
          open={isOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
          onClick={() => {}}
          disableAutoFocusItem={disableAutoFocusItem}
          items={items}
          keepMounted={keepMounted}
          disablePortal={disablePortal}
          MenuListProps={{
            'aria-labelledby': triggerId,
          }}
        />
      </>
    );
  },
};

export default meta;

type Story = StoryObj<MIMenuStoryArgs>;

export const Playground: Story = {};

export const Default: Story = {
  args: {
    triggerLabel: 'Azioni profilo',
    scenario: 'basic',
  },
  parameters: {
    controls: {
      disable: true,
    },
    docs: {
      description: {
        story: 'Configurazione base del menu con tre azioni testuali.',
      },
    },
  },
};

export const WithIcons: Story = {
  args: {
    triggerLabel: 'Azioni rapide',
    scenario: 'withIcons',
  },
  parameters: {
    controls: {
      disable: true,
    },
    docs: {
      description: {
        story: 'Esempio con icone iniziali sugli elementi del menu.',
      },
    },
  },
};

export const WithDisabledItem: Story = {
  args: {
    triggerLabel: 'Gestione account',
    scenario: 'withDisabledItem',
  },
  parameters: {
    controls: {
      disable: true,
    },
    docs: {
      description: {
        story: 'Stato con una voce disabilitata all’interno del menu.',
      },
    },
  },
};

export const WithLongLabels: Story = {
  args: {
    triggerLabel: 'Menu completo',
    scenario: 'withLongLabels',
  },
  parameters: {
    controls: {
      disable: true,
    },
    docs: {
      description: {
        story: 'Caso limite con etichette lunghe per verificare la resa del contenuto.',
      },
    },
  },
};


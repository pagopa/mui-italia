import { AccountCircleRounded, LogoutRounded, SettingsRounded } from '@mui/icons-material';
import { Button } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { breakpointsChromaticValues } from '@theme';
import { useState } from 'react';
import type { MouseEvent } from 'react';

import { MIMenu } from '@components/MIMenu';
import type { MIMenuItemProps } from '@components/MIMenu';

const componentMaxWidth = 400;

const meta: Meta<typeof MIMenu> = {
  title: 'Components/MIMenu',
  component: MIMenu,
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
    controls: {
      include: ['variant', 'autoFocus', 'disableAutoFocusItem'],
    },
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
    docs: {
      story: {
        inline: false,
        iframeHeight: 420,
      },
    },
  },
  args: {
    variant: 'selectedMenu',
    autoFocus: true,
    disableAutoFocusItem: false,
  },
  argTypes: {
    variant: {
      options: ['menu', 'selectedMenu'],
      control: { type: 'radio' },
      description:
        "Determina se il focus iniziale cade sulla prima voce ('menu') o su quella selezionata ('selectedMenu').",
    },
    autoFocus: {
      control: 'boolean',
      description: 'Sposta il focus sulla lista delle voci quando il menu si apre.',
    },
    disableAutoFocusItem: {
      control: 'boolean',
      description:
        'Disabilita il focus automatico sulla voce attiva, mantenendolo sull’elemento che ha aperto il menu.',
    },
    items: {
      description:
        'Lista di voci del menu: MIMenu renderizza un MIMenuItem per ciascuna voce, intervallando un MIMenuDivider tranne che dopo l’ultimo elemento.',
      control: false,
    },
    onClose: {
      control: false,
    },
  },
  render: function RenderMIMMenu({ variant, autoFocus, disableAutoFocusItem }) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const items: Array<MIMenuItemProps> = [
      {
        label: 'Profilo personale',
        startIcon: <AccountCircleRounded fontSize="small" />,
        onClick: () => {
          console.info('Profilo personale');
          handleClose();
        },
      },
      {
        label: 'Impostazioni',
        startIcon: <SettingsRounded fontSize="small" />,
        onClick: () => {
          console.info('Impostazioni');
          handleClose();
        },
      },
      {
        label: 'Esci',
        startIcon: <LogoutRounded fontSize="small" />,
        onClick: () => {
          console.info('Esci');
          handleClose();
        },
      },
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
        <MIMenu
          id="mi-menu-dropdown"
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          variant={variant}
          autoFocus={autoFocus}
          disableAutoFocusItem={disableAutoFocusItem}
          items={items}
        />
      </>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithoutIcons: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: function RenderMIMMenuWithoutIcons({ variant, autoFocus, disableAutoFocusItem }) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const items: Array<MIMenuItemProps> = [
      {
        label: 'Profilo personale',
        onClick: () => {
          console.info('Profilo personale');
          handleClose();
        },
      },
      {
        label: 'Impostazioni',
        onClick: () => {
          console.info('Impostazioni');
          handleClose();
        },
      },
      {
        label: 'Esci',
        onClick: () => {
          console.info('Esci');
          handleClose();
        },
      },
    ];

    return (
      <>
        <Button
          variant="contained"
          aria-controls={anchorEl ? 'mi-menu-dropdown-without-icons' : undefined}
          aria-haspopup="true"
          aria-expanded={anchorEl ? 'true' : undefined}
          onClick={handleOpen}
        >
          Apri menu
        </Button>

        <MIMenu
          id="mi-menu-dropdown-without-icons"
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          variant={variant}
          autoFocus={autoFocus}
          disableAutoFocusItem={disableAutoFocusItem}
          items={items}
        />
      </>
    );
  },
};


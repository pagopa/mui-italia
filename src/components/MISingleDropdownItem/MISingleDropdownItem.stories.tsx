import {
  AccountBalance as AccountBalanceIcon,
  LocationOn as LocationOnIcon,
  MyLocation as MyLocationIcon,
} from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { MIChip } from '@components/MIChip';
import {
  MISingleDropdownItem,
  type MISingleDropdownItemProps,
} from '@components/MISingleDropdownItem';
import { breakpointsChromaticValues } from '@theme';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { Stack } from '@mui/system';

const componentMaxWidth = 400;

type LeftContent = 'location' | 'institution' | 'none';

type MISingleDropdownItemStoryArgs = Omit<
  MISingleDropdownItemProps,
  'centralSlot' | 'leftSlot' | 'rightSlot' | 'sx'
> & {
  label: string;
  description: string;
  leftContent: LeftContent;
  showDescription: boolean;
  showChip: boolean;
};

const createCentralContent = (
  label: string,
  description: string,
  showDescription: boolean
): ReactNode => (
  <>
    {label}
    {showDescription && description.length > 0 && (
      <Typography
        component="span"
        sx={(theme) => ({
          color: theme.palette.text.secondary,
          fontSize: theme.typography.pxToRem(14),
          fontWeight: theme.typography.fontWeightRegular,
          lineHeight: theme.typography.pxToRem(20),
          overflowWrap: 'anywhere',
        })}
      >
        {description}
      </Typography>
    )}
  </>
);

const createLeftContent = (leftContent: LeftContent): ReactNode => {
  if (leftContent === 'location') {
    return (
      <LocationOnIcon
        sx={(theme) => ({
          color: theme.colors.neutral.grey[300],
          fontSize: 16,
        })}
      />
    );
  }

  if (leftContent === 'institution') {
    return (
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
    );
  }

  return undefined;
};

const meta: Meta<MISingleDropdownItemStoryArgs> = {
  title: 'Components/MISingleDropdownItem',
  component: MISingleDropdownItem,
  tags: ['!dev'],
  args: {
    value: 'roma',
    label: 'Comune di Roma',
    description: 'Amministrazione comunale',
    leftContent: 'location',
    showDescription: true,
    showChip: true,
    selected: false,
    disabled: false,
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Valore associato all’opzione di MISelect.',
    },
    label: {
      control: 'text',
      description: 'Testo principale mostrato nello slot centrale.',
    },
    description: {
      control: 'text',
      description: 'Descrizione secondaria mostrata nello slot centrale.',
    },
    leftContent: {
      options: ['location', 'institution', 'none'],
      control: 'radio',
      description: 'Contenuto visuale mostrato a sinistra.',
    },
    showDescription: {
      control: 'boolean',
      description: 'Controllo Storybook: mostra o nasconde la descrizione.',
    },
    showChip: {
      control: 'boolean',
      description: 'Controllo Storybook: mostra o nasconde il chip di stato.',
    },
    selected: {
      control: 'boolean',
      description: 'Applica lo stato selezionato supportato dal componente.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabilita l’opzione.',
    },
    centralSlot: {
      control: false,
      table: { disable: true },
    },
    leftSlot: {
      control: false,
      table: { disable: true },
    },
    rightSlot: {
      control: false,
      table: { disable: true },
    },
    sx: {
      control: false,
      table: { disable: true },
    },
  },
  parameters: {
    controls: {
      include: [
        'label',
        'value',
        'description',
        'leftContent',
        'showDescription',
        'showChip',
        'selected',
        'disabled',
      ],
    },
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
  },
  render: ({
    value,
    label,
    description,
    leftContent,
    showDescription,
    showChip,
    selected,
    disabled,
  }) => (
    <Box sx={{ width: 272 }}>
      <MISingleDropdownItem
        value={value}
        centralSlot={createCentralContent(label, description, showDescription)}
        leftSlot={createLeftContent(leftContent)}
        rightSlot={showChip ? <MIChip label="Warning" color="warning" /> : undefined}
        selected={selected}
        disabled={disabled}
      />
    </Box>
  ),
};

export default meta;

type Story = StoryObj<MISingleDropdownItemStoryArgs>;

export const Playground: Story = {};

export const Default: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Box sx={{ width: '17rem' }}>
      <MISingleDropdownItem
        value="roma"
        centralSlot={
          <Stack flexDirection="column">
            <Typography component="span" variant="subtitle1">
              Comune di Roma
            </Typography>
            <Typography
              component="span"
              sx={(theme) => ({
                color: theme.palette.text.secondary,
                fontSize: theme.typography.pxToRem(14),
                lineHeight: theme.typography.pxToRem(20),
              })}
            >
              Amministrazione comunale
            </Typography>
          </Stack>
        }
        leftSlot={
          <LocationOnIcon
            sx={(theme) => ({
              alignSelf: 'flex-start',
              color: theme.colors.neutral.grey[300],
              fontSize: 16,
            })}
          />
        }
        rightSlot={<MIChip label="Warning" color="warning" />}
      />
    </Box>
  ),
};

export const Product: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Box sx={{ width: 272 }}>
      <MISingleDropdownItem
        value="pagopa"
        centralSlot={createCentralContent('PagoPA', 'Servizi di pagamento', true)}
        leftSlot={createLeftContent('institution')}
        rightSlot={<MIChip label="Warning" color="warning" />}
      />
    </Box>
  ),
};

export const CallToActionAppearance: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Box sx={{ width: 272 }}>
      <MISingleDropdownItem
        value="location"
        centralSlot={
          <Typography
            component="span"
            sx={(theme) => ({
              color: theme.colors.blue[500],
              fontSize: theme.typography.pxToRem(16),
              fontWeight: theme.typography.fontWeightMedium,
              lineHeight: theme.typography.pxToRem(22),
            })}
          >
            Vai alla posizione
          </Typography>
        }
        rightSlot={
          <MyLocationIcon
            sx={(theme) => ({
              color: theme.colors.blue[500],
              fontSize: 24,
            })}
          />
        }
      />
    </Box>
  ),
};

export const Selected: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Box
      component="ul"
      role="listbox"
      aria-label="Enti disponibili"
      aria-multiselectable="true"
      sx={{ listStyle: 'none', m: 0, p: 0, width: 272 }}
    >
      <MISingleDropdownItem
        value="roma"
        role="option"
        aria-selected="true"
        centralSlot={
          <Stack>
            Comune di Roma
            <Typography
              component="span"
              sx={(theme) => ({
                color: theme.palette.text.secondary,
                fontSize: theme.typography.pxToRem(14),
                lineHeight: theme.typography.pxToRem(20),
              })}
            >
              Amministrazione comunale
            </Typography>
            <MIChip label="Warning" color="warning" />
          </Stack>
        }
        leftSlot={createLeftContent('location')}
        selected
        sx={{ alignItems: 'flex-start' }}
      />
    </Box>
  ),
};

export const SecondLevel: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Box
      component="ul"
      role="listbox"
      aria-label="Enti disponibili"
      aria-multiselectable="true"
      sx={{ listStyle: 'none', m: 0, p: 0, width: 272 }}
    >
      <MISingleDropdownItem
        value="services"
        role="option"
        aria-selected="true"
        centralSlot={
          <>
            Servizi digitali
            <Typography
              component="span"
              sx={(theme) => ({
                color: theme.palette.text.secondary,
                fontSize: theme.typography.pxToRem(14),
                lineHeight: theme.typography.pxToRem(20),
              })}
            >
              Servizi per il cittadino
            </Typography>
            <MIChip label="Warning" color="warning" />
          </>
        }
        selected
        sx={{ alignItems: 'flex-start', paddingLeft: 6 }}
      />
    </Box>
  ),
};

export const Minimal: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Box sx={{ width: 272 }}>
      <MISingleDropdownItem value="roma" centralSlot="Comune di Roma" />
    </Box>
  ),
};

export const Disabled: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Box sx={{ width: 272 }}>
      <MISingleDropdownItem
        value="roma"
        centralSlot={createCentralContent('Comune di Roma', 'Amministrazione comunale', true)}
        leftSlot={createLeftContent('location')}
        rightSlot={<MIChip label="Warning" color="warning" />}
        disabled
      />
    </Box>
  ),
};

import type { ComponentProps, ReactNode } from 'react';
import { useId, useState } from 'react';

import { Search as SearchIcon } from '@mui/icons-material';
import {
  Box,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  Link,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { breakpointsChromaticValues } from '@theme';

import { MIAlert } from '@components/MIAlert';
import { MIButton } from '@components/MIButton';
import { MIDrawer } from '@components/MIDrawer';
import { MIFormControl } from '@components/MIForm';
import { MISelect } from '@components/MISelect';
import { MITextField } from '@components/MITextField';
import { IllusMIFlag } from '@illustrations/MIFlag';

type MIDrawerProps = ComponentProps<typeof MIDrawer>;

type ActionsOption = 'none' | 'primary' | 'primaryAndSecondary';

type MIDrawerStoryArgs = Omit<MIDrawerProps, 'open' | 'onClose' | 'children'> & {
  actionsOption?: ActionsOption;
  withPictogram?: boolean;
};

const noop = () => undefined;

// ---------------------------------------------------------------------------
// Sample contents, as a product would compose them (the Figma "Type" variants)
// ---------------------------------------------------------------------------

const EditorialContent = () => (
  <Stack spacing={2}>
    <Typography color="text.secondary">
      Per inviare una notifica digitale devi prima indicare il domicilio digitale del destinatario.
      Se non lo conosci, la piattaforma lo cerca nei registri pubblici.
    </Typography>
    <Typography color="text.secondary">
      Puoi modificare il domicilio fino all&apos;invio della notifica: dopo l&apos;invio le
      modifiche non sono più possibili.
    </Typography>
    <Typography>
      <Link href="#manuale" fontWeight={600}>
        Dubbi? Vai al manuale
      </Link>
    </Typography>
  </Stack>
);

type Row = { label: string; value: string };

const DataList = ({ title, rows }: { title: string; rows: Array<Row> }) => (
  <Box>
    {/* The drawer title is an h2: section titles inside start from h3 */}
    <Typography
      component="h3"
      sx={{ m: 0, mb: 1, color: 'text.secondary', fontSize: '0.875rem', fontWeight: 600 }}
    >
      {title}
    </Typography>
    <Box
      component="dl"
      sx={{ m: 0, '& > div + div': { borderTop: '1px solid', borderColor: 'divider' } }}
    >
      {rows.map(({ label, value }) => (
        <Box key={label} sx={{ py: 1.5 }}>
          <Typography component="dt" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
            {label}
          </Typography>
          <Typography component="dd" sx={{ m: 0, fontWeight: 600 }}>
            {value}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

const ServiceDetailContent = () => (
  <Stack spacing={4}>
    <MIAlert severity="info" title="Servizio in aggiornamento">
      Alcuni dati potrebbero non essere aggiornati fino a domani.
    </MIAlert>
    <DataList
      title="Dati del servizio"
      rows={[
        { label: 'Nome del servizio', value: 'Pagamento della TARI' },
        { label: 'Codice', value: 'TARI-2026' },
        { label: 'Stato', value: 'Attivo' },
        { label: 'Data di attivazione', value: '12/03/2026' },
      ]}
    />
    <DataList
      title="Ente erogatore"
      rows={[
        { label: 'Denominazione', value: 'Comune di Milano' },
        { label: 'Codice fiscale', value: '01199250158' },
        { label: 'Indirizzo PEC', value: 'protocollo@pec.comune.milano.it' },
      ]}
    />
    <DataList
      title="Referente"
      rows={[
        { label: 'Nome e cognome', value: 'Mario Rossi' },
        { label: 'Email', value: 'mario.rossi@comune.milano.it' },
        { label: 'Telefono', value: '02 1234 5678' },
      ]}
    />
  </Stack>
);

const entities = [
  { name: 'Comune di Milano', fiscalCode: '01199250158' },
  { name: 'Comune di Roma', fiscalCode: '02438750586' },
  { name: 'Comune di Napoli', fiscalCode: '80014890638' },
  { name: 'Comune di Torino', fiscalCode: '00514490010' },
  { name: 'Comune di Bologna', fiscalCode: '01232710374' },
];

const SearchContent = () => {
  const [selected, setSelected] = useState<Array<string>>([]);
  const allSelected = selected.length === entities.length;
  const toggle = (name: string) =>
    setSelected((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name]
    );

  return (
    <>
      <Stack spacing={2} alignItems="flex-start">
        <MITextField
          label="Cerca ente"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <MIButton
          variant="text"
          size="small"
          onClick={() => setSelected(allSelected ? [] : entities.map(({ name }) => name))}
        >
          {allSelected ? 'Deseleziona tutto' : 'Seleziona tutto'}
        </MIButton>
      </Stack>
      {/* Full width list: negative margins cancel the 24px side padding of the drawer (outside a Stack, which resets its children margins) */}
      <Box
        component="ul"
        aria-label="Enti trovati"
        sx={{ mt: 2, mb: 0, mx: -3, p: 0, listStyle: 'none' }}
      >
        {entities.map(({ name, fiscalCode }) => (
          <Box
            component="li"
            key={name}
            sx={{ px: 3, py: 1, borderBottom: '1px solid', borderColor: 'divider' }}
          >
            <FormControlLabel
              sx={{ m: 0, width: '100%', justifyContent: 'space-between' }}
              labelPlacement="start"
              control={<Checkbox checked={selected.includes(name)} onChange={() => toggle(name)} />}
              label={
                <span>
                  <Typography component="span" display="block" fontWeight={600}>
                    {name}
                  </Typography>
                  <Typography
                    component="span"
                    display="block"
                    variant="body2"
                    color="text.secondary"
                  >
                    {fiscalCode}
                  </Typography>
                </span>
              }
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

const FiltersContent = () => {
  const statusLabelId = useId();
  const [status, setStatus] = useState('all');

  return (
    <Stack spacing={3}>
      <MITextField
        label="Cerca codice fiscale"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <MITextField label="Dal" type="date" fullWidth InputLabelProps={{ shrink: true }} />
      <MITextField label="Al" type="date" fullWidth InputLabelProps={{ shrink: true }} />
      <MIFormControl fullWidth>
        <InputLabel id={statusLabelId}>Stato</InputLabel>
        <MISelect
          labelId={statusLabelId}
          label="Stato"
          value={status}
          onChange={(event) => setStatus(event.target.value as string)}
        >
          <MenuItem value="all">Tutti gli stati</MenuItem>
          <MenuItem value="delivered">Consegnata</MenuItem>
          <MenuItem value="read">Letta</MenuItem>
          <MenuItem value="cancelled">Annullata</MenuItem>
        </MISelect>
      </MIFormControl>
    </Stack>
  );
};

const sortOptions = [
  'Data crescente',
  'Data decrescente',
  'Richiedente (A-Z)',
  'Richiedente (Z-A)',
  'Stato',
];

const SortContent = () => (
  // The radio group needs its own name: here it is not labelled by the drawer title
  <RadioGroup aria-label="Criterio di ordinamento" defaultValue={sortOptions[1]}>
    {sortOptions.map((option) => (
      <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
    ))}
  </RadioGroup>
);

// ---------------------------------------------------------------------------
// Interactive demo: a button opens the drawer, the focus goes back to it on close
// ---------------------------------------------------------------------------

type DrawerDemoProps = Omit<MIDrawerProps, 'open' | 'onClose' | 'actions'> & {
  openLabel?: string;
  renderActions?: (close: () => void) => ReactNode;
};

const DrawerDemo = ({ openLabel = 'Apri il drawer', renderActions, ...props }: DrawerDemoProps) => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <MIButton onClick={() => setOpen(true)}>{openLabel}</MIButton>
      <MIDrawer {...props} open={open} onClose={close} actions={renderActions?.(close)} />
    </>
  );
};

const primaryAction = (label: string) =>
  function renderPrimaryAction(close: () => void) {
    return <MIButton onClick={close}>{label}</MIButton>;
  };

// DOM order is primary, secondary: the component shows the primary on the right from sm
const filtersActions = (close: () => void) => (
  <>
    <MIButton onClick={close}>Filtra</MIButton>
    <MIButton variant="text" onClick={close}>
      Annulla filtri
    </MIButton>
  </>
);

const actionsByOption: Record<ActionsOption, DrawerDemoProps['renderActions']> = {
  none: undefined,
  primary: primaryAction('Conferma'),
  primaryAndSecondary: (close) => (
    <>
      <MIButton onClick={close}>Conferma</MIButton>
      <MIButton variant="text" onClick={close}>
        Annulla
      </MIButton>
    </>
  ),
};

const meta: Meta<MIDrawerStoryArgs> = {
  title: 'Components/MIDrawer',
  component: MIDrawer,
  tags: ['!dev'],
  parameters: {
    layout: 'padded',
    theme: 'next',
    // Interactive stories only show the opening button: snapshots are taken on the "Open" stories
    chromatic: { disableSnapshot: true },
    controls: {
      include: ['title', 'description', 'anchor', 'actionsOption', 'withPictogram'],
    },
  },
  args: {
    title: 'Titolo del drawer',
    description: 'Testo di supporto breve, letto dagli screen reader all’apertura.',
    anchor: 'right',
    actionsOption: 'primaryAndSecondary',
    withPictogram: false,
  },
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Titolo del drawer (h2), sempre visibile. È il nome accessibile del dialog.',
      table: { category: 'MIDrawer', type: { summary: 'ReactNode' } },
    },
    description: {
      control: { type: 'text' },
      description:
        'Testo breve sotto il titolo, letto dagli screen reader all’apertura. Solo testo: un testo con link va nel contenuto.',
      table: { category: 'MIDrawer', type: { summary: 'string' } },
    },
    anchor: {
      options: ['right', 'left'],
      control: { type: 'radio' },
      description:
        'Lato del pannello da 640px in su; usa left solo per necessità specifiche. Sotto 640px il drawer è sempre un pannello dal basso.',
      table: { category: 'MIDrawer', defaultValue: { summary: 'right' } },
    },
    actionsOption: {
      options: ['none', 'primary', 'primaryAndSecondary'],
      control: { type: 'radio' },
      description: 'Preset Storybook per la prop actions.',
      table: { category: 'Storybook controls' },
    },
    withPictogram: {
      control: { type: 'boolean' },
      description: 'Preset Storybook per la prop pictogram (IllusMIFlag).',
      table: { category: 'Storybook controls' },
    },
  },
  render: ({ title, description, anchor, actionsOption = 'none', withPictogram }) => (
    <DrawerDemo
      title={title}
      description={description}
      anchor={anchor}
      pictogram={withPictogram ? <IllusMIFlag /> : undefined}
      renderActions={actionsByOption[actionsOption]}
    >
      <EditorialContent />
    </DrawerDemo>
  ),
};

export default meta;

type Story = StoryObj<MIDrawerStoryArgs>;

export const Playground: Story = {};

export const Editorial: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <DrawerDemo
      openLabel="Apri Editorial"
      title="Domicilio digitale"
      pictogram={<IllusMIFlag />}
      renderActions={primaryAction('Ho capito')}
    >
      <EditorialContent />
    </DrawerDemo>
  ),
};

export const ServiceDetail: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <DrawerDemo
      openLabel="Apri Service detail"
      title="Dettaglio del servizio"
      description="Dati del servizio e dell’ente che lo eroga."
      renderActions={primaryAction('Modifica')}
    >
      <ServiceDetailContent />
    </DrawerDemo>
  ),
};

export const Search: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <DrawerDemo
      openLabel="Apri Search"
      title="Aggiungi enti"
      description="Cerca gli enti da aggiungere al gruppo e selezionali."
      renderActions={primaryAction('Aggiungi')}
    >
      <SearchContent />
    </DrawerDemo>
  ),
};

export const Filters: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <DrawerDemo openLabel="Apri Filters" title="Filtra" renderActions={filtersActions}>
      <FiltersContent />
    </DrawerDemo>
  ),
};

export const Sort: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <DrawerDemo openLabel="Apri Sort" title="Ordina" renderActions={primaryAction('Ordina')}>
      <SortContent />
    </DrawerDemo>
  ),
};

export const Anchors: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack direction="row" spacing={2}>
      <DrawerDemo openLabel="Da destra (default)" title="Filtra" renderActions={filtersActions}>
        <FiltersContent />
      </DrawerDemo>
      <DrawerDemo
        openLabel="Da sinistra"
        title="Filtra"
        anchor="left"
        renderActions={filtersActions}
      >
        <FiltersContent />
      </DrawerDemo>
    </Stack>
  ),
};

// ---------------------------------------------------------------------------
// Open drawers for Chromatic, on every breakpoint: the drawer is laid out on the viewport (side panel
// from sm, bottom sheet below), so there is no componentMaxWidth. Not referenced in the docs page:
// several open modal drawers on the same page would overlap backdrops and focus traps
// ---------------------------------------------------------------------------

const snapshotParameters = (viewports: Array<number> = breakpointsChromaticValues) => ({
  controls: { disable: true },
  chromatic: { disableSnapshot: false, viewports },
});

export const OpenFilters: Story = {
  name: 'Open: Filters (breakpoint)',
  parameters: snapshotParameters(),
  render: () => (
    <MIDrawer open onClose={noop} title="Filtra" actions={filtersActions(noop)}>
      <FiltersContent />
    </MIDrawer>
  ),
};

export const OpenLongContent: Story = {
  name: 'Open: contenuto lungo',
  parameters: snapshotParameters(),
  render: () => (
    <MIDrawer
      open
      onClose={noop}
      title="Dettaglio del servizio"
      description="Dati del servizio e dell’ente che lo eroga."
      actions={primaryAction('Modifica')(noop)}
    >
      <ServiceDetailContent />
    </MIDrawer>
  ),
};

export const OpenShortContent: Story = {
  name: 'Open: contenuto corto',
  parameters: snapshotParameters(),
  render: () => (
    <MIDrawer open onClose={noop} title="Ordina" actions={primaryAction('Ordina')(noop)}>
      <SortContent />
    </MIDrawer>
  ),
};

export const OpenEditorial: Story = {
  name: 'Open: Editorial (pittogramma)',
  parameters: snapshotParameters(),
  render: () => (
    <MIDrawer
      open
      onClose={noop}
      title="Domicilio digitale"
      pictogram={<IllusMIFlag />}
      actions={primaryAction('Ho capito')(noop)}
    >
      <EditorialContent />
    </MIDrawer>
  ),
};

export const OpenLeft: Story = {
  name: 'Open: da sinistra',
  parameters: snapshotParameters(breakpointsChromaticValues.filter((width) => width >= 640)),
  render: () => (
    <MIDrawer open onClose={noop} title="Filtra" anchor="left" actions={filtersActions(noop)}>
      <FiltersContent />
    </MIDrawer>
  ),
};

export const OpenLongTitleWithoutActions: Story = {
  name: 'Open: titolo lungo, senza bottoni',
  parameters: snapshotParameters([375, 1200]),
  render: () => (
    <MIDrawer
      open
      onClose={noop}
      title="Informazioni sul trattamento dei dati personali per il servizio di notifiche digitali"
      description="Il titolo va a capo e la X resta in alto a destra."
    >
      <EditorialContent />
    </MIDrawer>
  ),
};

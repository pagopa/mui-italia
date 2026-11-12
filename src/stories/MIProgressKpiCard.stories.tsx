import type { ComponentProps } from 'react';
import { SendOutlined } from '@mui/icons-material';
import { Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MIProgressKpiCard } from '@components/MIProgressKpiCard';
import { breakpointsChromaticValues, pxToRem } from '@theme';

const componentMaxWidth = 400;

type MIProgressKpiCardStoryArgs = ComponentProps<typeof MIProgressKpiCard> & {
  showIcon: boolean;
  numerator: number;
  barLabel: string;
  barVariant: 'regular' | 'small';
};

const KpiIcon = () => (
  <SendOutlined
    sx={(theme) => ({
      color: theme.colors.neutral.grey[300],
      width: pxToRem(24),
      height: pxToRem(24),
    })}
  />
);

const meta: Meta<MIProgressKpiCardStoryArgs> = {
  title: 'Components/MIProgressKpiCard',
  component: MIProgressKpiCard,
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
    controls: {
      include: [
        'title',
        'denominator',
        'numerator',
        'barLabel',
        'barVariant',
        'showIcon',
        'tooltipText',
        'tooltipAriaLabel',
        'localeFormat',
      ],
    },
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
  },
  args: {
    title: 'Inviate',
    denominator: 10000,
    numerator: 6000,
    barLabel: '',
    barVariant: 'regular',
    showIcon: false,
    tooltipText: '',
    tooltipAriaLabel: '',
    localeFormat: 'it-IT',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Titolo della card. Viene usato anche come nome accessibile delle barre senza label.',
      table: { category: 'MIProgressKpiCard', type: { summary: 'string' } },
    },
    denominator: {
      control: { type: 'number', min: 0 },
      description:
        'Totale di riferimento comune a tutte le barre. Con valore 0 o negativo percentuale e avanzamento sono 0.',
      table: { category: 'MIProgressKpiCard', type: { summary: 'number' } },
    },
    tooltipText: {
      control: 'text',
      description: 'Testo del tooltip informativo. Se vuoto, l’icona informativa non viene mostrata.',
      table: { category: 'MIProgressKpiCard', type: { summary: 'string' } },
    },
    tooltipAriaLabel: {
      control: 'text',
      description: 'Nome accessibile del pulsante del tooltip. Se assente viene usato tooltipText.',
      table: { category: 'MIProgressKpiCard', type: { summary: 'string' } },
    },
    localeFormat: {
      options: ['it-IT', 'en-US'],
      control: 'radio',
      description: 'Locale usato da Intl.NumberFormat per percentuale, numeratori e denominatore.',
      table: {
        category: 'MIProgressKpiCard',
        type: { summary: 'string' },
        defaultValue: { summary: 'it-IT' },
      },
    },
    numerator: {
      control: { type: 'number', min: 0 },
      description: 'Controllo Storybook: numerator della barra mostrata nel Playground.',
      table: { category: 'Storybook controls' },
    },
    barLabel: {
      control: 'text',
      description: 'Controllo Storybook: label della barra. Se vuota, la label non viene mostrata.',
      table: { category: 'Storybook controls' },
    },
    barVariant: {
      options: ['regular', 'small'],
      control: 'radio',
      description: 'Controllo Storybook: variant della barra (16px o 8px di altezza).',
      table: { category: 'Storybook controls' },
    },
    showIcon: {
      control: 'boolean',
      description: 'Controllo Storybook: mostra un’icona di esempio nell’intestazione.',
      table: { category: 'Storybook controls' },
    },
    icon: { control: false, table: { disable: true } },
    bars: { control: false, table: { disable: true } },
  },
  render: ({
    title,
    denominator,
    numerator,
    barLabel,
    barVariant,
    showIcon,
    tooltipText,
    tooltipAriaLabel,
    localeFormat,
  }) => (
    <MIProgressKpiCard
      title={title}
      icon={showIcon ? <KpiIcon /> : undefined}
      tooltipText={tooltipText || undefined}
      tooltipAriaLabel={tooltipAriaLabel || undefined}
      denominator={denominator}
      localeFormat={localeFormat}
      bars={[{ numerator, label: barLabel || undefined, variant: barVariant }]}
    />
  ),
};

export default meta;

type Story = StoryObj<MIProgressKpiCardStoryArgs>;

const staticParameters = {
  controls: { disable: true },
};

export const Playground: Story = {};

export const Simple: Story = {
  parameters: staticParameters,
  render: () => (
    <MIProgressKpiCard
      title="Inviate"
      denominator={10000}
      localeFormat="it-IT"
      bars={[{ numerator: 6000 }]}
    />
  ),
};

export const BarVariants: Story = {
  parameters: staticParameters,
  render: () => (
    <Stack direction="row" spacing={2} alignItems="flex-start">
      <MIProgressKpiCard
        title="Inviate"
        denominator={10000}
        localeFormat="it-IT"
        bars={[{ numerator: 6000, variant: 'regular' }]}
      />
      <MIProgressKpiCard
        title="Inviate"
        denominator={10000}
        localeFormat="it-IT"
        bars={[{ numerator: 6000, variant: 'small' }]}
      />
    </Stack>
  ),
};

export const Full: Story = {
  parameters: staticParameters,
  render: () => (
    <MIProgressKpiCard
      title="Lette"
      denominator={10000}
      localeFormat="it-IT"
      bars={[{ numerator: 10000 }]}
    />
  ),
};

export const FullWithIconAndTooltip: Story = {
  parameters: staticParameters,
  render: () => (
    <MIProgressKpiCard
      title="Inviate"
      icon={<KpiIcon />}
      tooltipText="Numero di notifiche inviate rispetto al totale delle notifiche da inviare."
      tooltipAriaLabel="Informazioni su Inviate"
      denominator={10000}
      localeFormat="it-IT"
      bars={[{ numerator: 10000 }]}
    />
  ),
};

export const MultipleBars: Story = {
  parameters: staticParameters,
  render: () => (
    <MIProgressKpiCard
      title="Fallite"
      icon={<KpiIcon />}
      tooltipText="Notifiche non recapitate, suddivise per causa."
      tooltipAriaLabel="Informazioni su Fallite"
      denominator={100}
      localeFormat="it-IT"
      bars={[
        { numerator: 20, label: 'Destinatario errato' },
        { numerator: 10, label: 'Destinatario deceduto', variant: 'small' },
      ]}
    />
  ),
};

export const ZeroDenominator: Story = {
  parameters: staticParameters,
  render: () => (
    <MIProgressKpiCard
      title="Inviate"
      denominator={0}
      localeFormat="it-IT"
      bars={[{ numerator: 0 }]}
    />
  ),
};

export const LocaleFormats: Story = {
  parameters: staticParameters,
  render: () => (
    <Stack direction="row" spacing={2} alignItems="flex-start">
      <MIProgressKpiCard
        title="Inviate"
        denominator={30000}
        localeFormat="it-IT"
        bars={[{ numerator: 10000 }]}
      />
      <MIProgressKpiCard
        title="Sent"
        denominator={30000}
        localeFormat="en-US"
        bars={[{ numerator: 10000 }]}
      />
    </Stack>
  ),
};

export const LongTitle: Story = {
  parameters: staticParameters,
  render: () => (
    <MIProgressKpiCard
      title="Notifiche consegnate tramite domicilio digitale"
      icon={<KpiIcon />}
      tooltipText="Notifiche consegnate al domicilio digitale del destinatario."
      tooltipAriaLabel="Informazioni su Notifiche consegnate tramite domicilio digitale"
      denominator={10000}
      localeFormat="it-IT"
      bars={[{ numerator: 4500 }]}
    />
  ),
};

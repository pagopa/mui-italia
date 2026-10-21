import { ReactNode } from 'react';
import { InfoOutlined as InfoOutlinedIcon } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { breakpointsChromaticValues } from '@theme';
import { MIBanner } from '@components/MIBanner';
import type { BannerCTA } from '@components/MIBanner';
import { IllusEmail } from '@illustrations/Email';

const componentMaxWidth = 900;

const DEFAULT_TITLE = 'Titolo del banner';
const DEFAULT_MESSAGE =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const DEFAULT_CTA = "Vai all'iniziativa";
const DEFAULT_BADGE = 'Novità';
const DEFAULT_CLOSE_LABEL = 'Chiudi il banner';
const EXAMPLE_HREF = 'https://www.pagopa.it';
const LONG_UNBROKEN =
  'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong';

type CtaType = 'button' | 'link';
type CtaTarget = '_self' | '_blank';

const handleClose = () => {
  console.info('Banner chiuso');
};

const handleCtaClick = () => {
  console.info('CTA cliccata');
};

const buildCta = (type: CtaType, label: string, target: CtaTarget = '_self'): BannerCTA =>
  type === 'link' ? { label, href: EXAMPLE_HREF, target } : { label, onClick: handleCtaClick };

type MIBannerStoryArgs = React.ComponentProps<typeof MIBanner> & {
  enableClose: boolean;
  enableCta: boolean;
  ctaType: CtaType;
  ctaLabel: string;
  ctaTarget: CtaTarget;
};

const meta: Meta<MIBannerStoryArgs> = {
  title: 'Components/MIBanner',
  component: MIBanner,
  tags: ['!dev'],
  parameters: {
    controls: {
      include: [
        'variant',
        'color',
        'title',
        'message',
        'badge',
        'closeAriaLabel',
        'enableClose',
        'enableCta',
        'ctaType',
        'ctaLabel',
        'ctaTarget',
      ],
    },
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 2, pb: 4, boxSizing: 'border-box', width: '100%' }}>
        <Story />
      </Box>
    ),
  ],
  args: {
    variant: 'primary',
    color: 'white',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
    badge: DEFAULT_BADGE,
    closeAriaLabel: DEFAULT_CLOSE_LABEL,
    enableClose: true,
    enableCta: true,
    ctaType: 'button',
    ctaLabel: DEFAULT_CTA,
    ctaTarget: '_self',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
      description: 'Variante del banner: determina layout, dimensioni del testo e stile della CTA.',
      table: {
        type: { summary: "'primary' | 'secondary' | 'tertiary'" },
        defaultValue: { summary: 'primary' },
      },
    },
    color: {
      options: ['white', 'info'],
      control: { type: 'radio' },
      description: 'Colore di sfondo e del bordo del banner.',
      table: {
        type: { summary: "'white' | 'info'" },
        defaultValue: { summary: 'white' },
      },
    },
    title: {
      control: { type: 'text' },
      description: 'Titolo del banner. È anche il nome accessibile della section.',
      table: { type: { summary: 'string' } },
    },
    message: {
      control: { type: 'text' },
      description: 'Testo descrittivo opzionale mostrato sotto il titolo.',
      table: { type: { summary: 'string' } },
    },
    badge: {
      control: { type: 'text' },
      description:
        'Testo del badge mostrato sopra il titolo. Visibile solo nella variante primary.',
      table: { type: { summary: 'string' } },
      if: { arg: 'variant', eq: 'primary' },
    },
    closeAriaLabel: {
      control: { type: 'text' },
      description: 'Etichetta accessibile del pulsante di chiusura.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Close' },
      },
      if: { arg: 'enableClose' },
    },
    enableClose: {
      control: { type: 'boolean' },
      description:
        'Controllo Storybook: passa una funzione a onClose e mostra il pulsante di chiusura.',
      table: { category: 'Storybook controls' },
    },
    enableCta: {
      control: { type: 'boolean' },
      description: 'Controllo Storybook: valorizza la prop cta.',
      table: { category: 'Storybook controls' },
    },
    ctaType: {
      options: ['button', 'link'],
      control: { type: 'radio' },
      description:
        'Controllo Storybook: CTA con onClick (button) oppure con href (link). Il link è sempre testuale, anche nella variante secondary.',
      table: { category: 'Storybook controls' },
      if: { arg: 'enableCta' },
    },
    ctaLabel: {
      control: { type: 'text' },
      description: 'Controllo Storybook: testo della CTA (cta.label).',
      table: { category: 'Storybook controls' },
      if: { arg: 'enableCta' },
    },
    ctaTarget: {
      options: ['_self', '_blank'],
      control: { type: 'radio' },
      description:
        'Controllo Storybook: target del link (cta.target). Con _blank, rel è impostato di default a "noopener noreferrer".',
      table: { category: 'Storybook controls' },
      if: { arg: 'ctaType', eq: 'link' },
    },
    onClose: {
      control: false,
      table: { type: { summary: '() => void' } },
    },
    cta: {
      control: false,
      table: {
        type: {
          summary:
            '{ label: string; onClick: () => void } | { label: string; href: string; target?: "_self" | "_blank"; rel?: string }',
        },
      },
    },
    icon: {
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    illustration: {
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
  },
  render: ({
    variant,
    color,
    title,
    message,
    badge,
    closeAriaLabel,
    enableClose,
    enableCta,
    ctaType,
    ctaLabel,
    ctaTarget,
  }) => (
    <MIBanner
      variant={variant}
      color={color}
      title={title}
      message={message}
      badge={badge}
      closeAriaLabel={closeAriaLabel}
      onClose={enableClose ? handleClose : undefined}
      cta={enableCta ? buildCta(ctaType, ctaLabel, ctaTarget) : undefined}
    />
  ),
};

export default meta;

type Story = StoryObj<MIBannerStoryArgs>;

const staticStoryParameters = {
  controls: { disable: true },
};

const LabeledExample = ({ label, children }: { label: string; children: ReactNode }) => (
  <Stack gap={1}>
    <Typography variant="caption" color="text.secondary">
      {label}
    </Typography>
    {children}
  </Stack>
);

export const Playground: Story = {};

export const Variants: Story = {
  parameters: staticStoryParameters,
  render: () => (
    <Stack gap={4}>
      <LabeledExample label="Primary">
        <MIBanner
          variant="primary"
          title={DEFAULT_TITLE}
          message={DEFAULT_MESSAGE}
          badge={DEFAULT_BADGE}
          cta={buildCta('button', DEFAULT_CTA)}
          onClose={handleClose}
          closeAriaLabel={DEFAULT_CLOSE_LABEL}
        />
      </LabeledExample>
      <LabeledExample label="Secondary">
        <MIBanner
          variant="secondary"
          title={DEFAULT_TITLE}
          message={DEFAULT_MESSAGE}
          cta={buildCta('button', DEFAULT_CTA)}
          onClose={handleClose}
          closeAriaLabel={DEFAULT_CLOSE_LABEL}
        />
      </LabeledExample>
      <LabeledExample label="Tertiary">
        <MIBanner
          variant="tertiary"
          title={DEFAULT_TITLE}
          message={DEFAULT_MESSAGE}
          cta={buildCta('button', DEFAULT_CTA)}
          onClose={handleClose}
          closeAriaLabel={DEFAULT_CLOSE_LABEL}
        />
      </LabeledExample>
    </Stack>
  ),
};

export const Colors: Story = {
  parameters: staticStoryParameters,
  render: () => (
    <Stack gap={4}>
      {(['white', 'info'] as const).map((color) => (
        <LabeledExample key={color} label={color === 'white' ? 'White' : 'Info'}>
          <MIBanner
            color={color}
            title={DEFAULT_TITLE}
            message={DEFAULT_MESSAGE}
            badge={DEFAULT_BADGE}
            cta={buildCta('button', DEFAULT_CTA)}
          />
        </LabeledExample>
      ))}
    </Stack>
  ),
};

export const CtaTypes: Story = {
  parameters: staticStoryParameters,
  render: () => (
    <Stack gap={4}>
      <LabeledExample label="Secondary con CTA button (onClick)">
        <MIBanner
          variant="secondary"
          title={DEFAULT_TITLE}
          message={DEFAULT_MESSAGE}
          cta={buildCta('button', DEFAULT_CTA)}
        />
      </LabeledExample>
      <LabeledExample label="Secondary con CTA link (href, target _blank)">
        <MIBanner
          variant="secondary"
          title={DEFAULT_TITLE}
          message={DEFAULT_MESSAGE}
          cta={buildCta('link', DEFAULT_CTA, '_blank')}
        />
      </LabeledExample>
    </Stack>
  ),
};

export const CustomContent: Story = {
  parameters: staticStoryParameters,
  render: () => (
    <Stack gap={4}>
      <LabeledExample label="Primary con illustrazione personalizzata">
        <MIBanner
          title={DEFAULT_TITLE}
          message={DEFAULT_MESSAGE}
          illustration={<IllusEmail />}
          cta={buildCta('button', DEFAULT_CTA)}
        />
      </LabeledExample>
      <LabeledExample label="Tertiary con icona personalizzata">
        <MIBanner
          variant="tertiary"
          title={DEFAULT_TITLE}
          message={DEFAULT_MESSAGE}
          icon={<InfoOutlinedIcon fontSize="small" />}
        />
      </LabeledExample>
    </Stack>
  ),
};

export const LongContent: Story = {
  parameters: staticStoryParameters,
  render: () => (
    <Stack gap={4}>
      <LabeledExample label="Primary">
        <MIBanner
          title={`Very long title ${LONG_UNBROKEN}`}
          message={`${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`}
          badge={`Novità-${LONG_UNBROKEN}`}
          onClose={handleClose}
          closeAriaLabel={DEFAULT_CLOSE_LABEL}
        />
      </LabeledExample>
      <LabeledExample label="Primary - info">
        <MIBanner
          color="info"
          title={`Very long title: ${LONG_UNBROKEN}`}
          message={`${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`}
          badge={`Novità-${LONG_UNBROKEN}`}
        />
      </LabeledExample>
      <LabeledExample label="Secondary">
        <MIBanner
          variant="secondary"
          title={`Very long title ${LONG_UNBROKEN} ${LONG_UNBROKEN}`}
          message={`${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`}
          cta={buildCta('button', DEFAULT_CTA)}
        />
      </LabeledExample>
      <LabeledExample label="Tertiary">
        <MIBanner
          variant="tertiary"
          title={`Very long title ${LONG_UNBROKEN}`}
          message={`${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`}
        />
      </LabeledExample>
    </Stack>
  ),
};

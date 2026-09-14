import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { breakpointsChromaticValues } from '@theme';
import { Banner } from '@components/Banner';

const componentMaxWidth = 900;

const DEFAULT_TITLE = 'Titolo del banner';

const DEFAULT_MESSAGE =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const DEFAULT_CTA = "Vai all'iniziativa";

const LONG_UNBROKEN =
  'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong';

type StoryArgs = React.ComponentProps<typeof Banner> & {
  enableClose?: boolean;
  enableCta?: boolean;
};

const meta: Meta<StoryArgs> = {
  title: 'Components/Banner',
  component: Banner,
  args: {
    enableClose: true,
    enableCta: true,
  },
  parameters: {
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 2, pb: 4, boxSizing: 'border-box', width: '100%' }}>
        <Box sx={{ maxWidth: '100%', mx: 'auto' }}>
          <Story />
        </Box>
      </Box>
    ),
  ],
  argTypes: {
    color: { control: { type: 'radio' }, options: ['white', 'info'] },
    variant: { control: { type: 'radio' }, options: ['primary', 'secondary', 'tertiary'] },
    title: { control: { type: 'text' } },
    message: { control: { type: 'text' } },
    badge: { control: { type: 'text' } },
    enableClose: { control: { type: 'boolean' } },
    enableCta: { control: { type: 'boolean' } },
    icon: { control: { disable: true } },
    illustration: { control: { disable: true } },
    onClose: { table: { disable: true } },
    cta: { table: { disable: true } },
  },
  render: (args) => {
    const { enableClose, enableCta, cta, ...bannerArgs } = args;

    const resolvedCta =
      cta ??
      (enableCta
        ? {
            label: DEFAULT_CTA,
            onClick: () => {},
          }
        : undefined);

    return (
      <Banner {...bannerArgs} onClose={enableClose ? () => {} : undefined} cta={resolvedCta} />
    );
  },
};

export default meta;

type Story = StoryObj<StoryArgs>;

/* ------------------------------ Normal stories ------------------------------ */

export const Default: Story = {
  args: {
    color: 'white',
    variant: 'primary',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
    badge: 'Novità',
    closeAriaLabel: 'Chiudi il banner',
    'data-testid': 'banner-container',
  },
};

export const Secondary: Story = {
  args: {
    color: 'white',
    variant: 'secondary',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
  },
};

export const Tertiary: Story = {
  args: {
    color: 'white',
    variant: 'tertiary',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
  },
};

export const BackgroundInfo: Story = {
  args: {
    color: 'info',
    variant: 'primary',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
    badge: 'Novità',
  },
};

/* ------------------------------ Test Link Cta ------------------------------ */

export const Primary_LinkCta_Self: Story = {
  args: {
    color: 'white',
    variant: 'primary',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
    badge: 'Novità',
    cta: {
      label: DEFAULT_CTA,
      href: 'https://test.com',
      target: '_self',
    },
  },
};

export const Secondary_LinkCta_Blank: Story = {
  args: {
    color: 'white',
    variant: 'secondary',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
    cta: {
      label: DEFAULT_CTA,
      href: 'https://test.com',
      target: '_blank',
    },
  },
};

export const Tertiary_LinkCta_Blank: Story = {
  args: {
    color: 'white',
    variant: 'tertiary',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
    cta: {
      label: DEFAULT_CTA,
      href: 'https://test.com',
      target: '_blank',
    },
  },
};

/* ------------------------------ Stress-test stories ------------------------------ */

export const Stress_Primary_Unbroken: Story = {
  args: {
    color: 'white',
    variant: 'primary',
    title: `Very long title ${LONG_UNBROKEN}`,
    message: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
    badge: `Novità-${LONG_UNBROKEN}`,
  },
};

export const Stress_Secondary_Unbroken: Story = {
  args: {
    color: 'white',
    variant: 'secondary',
    title: `Very long title ${LONG_UNBROKEN} ${LONG_UNBROKEN}`,
    message: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
  },
};

export const Stress_Tertiary_Unbroken: Story = {
  args: {
    color: 'white',
    variant: 'tertiary',
    title: `Very long title ${LONG_UNBROKEN}`,
    message: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
  },
};

export const Stress_Primary_InfoBg_Unbroken: Story = {
  args: {
    color: 'info',
    variant: 'primary',
    title: `Very long title: ${LONG_UNBROKEN}`,
    message: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
    badge: `Novità-${LONG_UNBROKEN}`,
  },
};

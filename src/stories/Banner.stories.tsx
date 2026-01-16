import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { breakpointsChromaticValues } from '@theme';
import { Banner, BANNER_VERTICAL_BREAKPOINT_PX } from '@components/Banner';

const componentMaxWidth = 900;

const DEFAULT_TITLE = 'Titolo del banner';

const DEFAULT_MESSAGE =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const DEFAULT_CTA = "Vai all'iniziativa";

const LONG_UNBROKEN =
  'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong';

const DEFAULT_WIDE_WIDTH_PX = BANNER_VERTICAL_BREAKPOINT_PX + 200;
const DEFAULT_NARROW_WIDTH_PX = BANNER_VERTICAL_BREAKPOINT_PX - 40;

type StoryArgs = React.ComponentProps<typeof Banner> & {
  enableClose?: boolean;
  enableCta?: boolean;
  containerWidthPx?: number;
};

const meta: Meta<StoryArgs> = {
  title: 'Components/Banner',
  component: Banner,
  args: {
    enableClose: true,
    enableCta: true,
    containerWidthPx: DEFAULT_WIDE_WIDTH_PX,
  },
  parameters: {
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
  },
  decorators: [
    (Story, ctx) => (
      <Box sx={{ p: 2, pb: 4, boxSizing: 'border-box', width: '100%' }}>
        <Box
          sx={{
            width: ctx.args.containerWidthPx ?? DEFAULT_WIDE_WIDTH_PX,
            maxWidth: '100%',
            mx: 'auto',
          }}
        >
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
    containerWidthPx: {
      control: { type: 'number', min: 280, max: DEFAULT_WIDE_WIDTH_PX, step: 10 },
    },
    icon: { control: { disable: true } },
    illustration: { control: { disable: true } },
    onClose: { table: { disable: true } },
    cta: { table: { disable: true } },
  },
  render: (args) => {
    const { enableClose, enableCta, containerWidthPx: _containerWidthPx, ...bannerArgs } = args;

    return (
      <Banner
        {...bannerArgs}
        onClose={enableClose ? () => {} : undefined}
        cta={
          enableCta
            ? {
                label: DEFAULT_CTA,
                onClick: () => {},
              }
            : undefined
        }
      />
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
    containerWidthPx: DEFAULT_WIDE_WIDTH_PX,
    closeAriaLabel: 'Chiudi il banner',
    'data-testid': 'banner-container',
  },
};

export const Primary_NarrowContainer: Story = {
  args: {
    color: 'white',
    variant: 'primary',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
    badge: 'Novità',
    containerWidthPx: DEFAULT_NARROW_WIDTH_PX,
  },
};

export const Secondary_WideContainer: Story = {
  args: {
    color: 'white',
    variant: 'secondary',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
    containerWidthPx: DEFAULT_WIDE_WIDTH_PX,
  },
};

export const Secondary_NarrowContainer: Story = {
  args: {
    color: 'white',
    variant: 'secondary',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
    containerWidthPx: DEFAULT_NARROW_WIDTH_PX,
  },
};

export const Tertiary_WideContainer: Story = {
  args: {
    color: 'white',
    variant: 'tertiary',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
    containerWidthPx: DEFAULT_WIDE_WIDTH_PX,
  },
};

export const Tertiary_NarrowContainer: Story = {
  args: {
    color: 'white',
    variant: 'tertiary',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
    containerWidthPx: DEFAULT_NARROW_WIDTH_PX,
  },
};

export const BackgroundInfo: Story = {
  args: {
    color: 'info',
    variant: 'primary',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
    badge: 'Novità',
    containerWidthPx: DEFAULT_WIDE_WIDTH_PX,
  },
};

/* ------------------------------ Stress-test stories ------------------------------ */

export const Stress_Primary_Wide_Unbroken: Story = {
  args: {
    color: 'white',
    variant: 'primary',
    title: `Very long title ${LONG_UNBROKEN}`,
    message: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
    badge: `Novità-${LONG_UNBROKEN}`,
    containerWidthPx: DEFAULT_WIDE_WIDTH_PX,
  },
};

export const Stress_Primary_Narrow_Unbroken: Story = {
  args: {
    color: 'white',
    variant: 'primary',
    title: `Very long title ${LONG_UNBROKEN}`,
    message: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
    badge: `Badge-${LONG_UNBROKEN}`,
    containerWidthPx: DEFAULT_NARROW_WIDTH_PX,
  },
};

export const Stress_Secondary_Wide_Unbroken: Story = {
  args: {
    color: 'white',
    variant: 'secondary',
    title: `Very long title ${LONG_UNBROKEN} ${LONG_UNBROKEN}`,
    message: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
    containerWidthPx: DEFAULT_WIDE_WIDTH_PX,
  },
};

export const Stress_Tertiary_Wide_Unbroken: Story = {
  args: {
    color: 'white',
    variant: 'tertiary',
    title: `Very long title ${LONG_UNBROKEN}`,
    message: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
    containerWidthPx: DEFAULT_WIDE_WIDTH_PX,
  },
};

export const Stress_Primary_InfoBg_Wide_Unbroken: Story = {
  args: {
    color: 'info',
    variant: 'primary',
    title: `Very long title: ${LONG_UNBROKEN}`,
    message: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
    badge: `Novità-${LONG_UNBROKEN}`,
    containerWidthPx: DEFAULT_WIDE_WIDTH_PX,
  },
};

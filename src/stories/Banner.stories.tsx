import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
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
      <Box
        sx={{
          p: 2,
          pb: 4,
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    color: { control: { type: 'radio' }, options: ['white', 'info'] },
    variant: { control: { type: 'radio' }, options: ['primary', 'secondary', 'tertiary'] },
    direction: { control: { type: 'radio' }, options: ['horizontal', 'vertical'] },
    title: { control: { type: 'text' } },
    message: { control: { type: 'text' } },
    badge: { control: { type: 'text' } },
    enableClose: { control: { type: 'boolean' } },
    enableCta: { control: { type: 'boolean' } },
    icon: { control: { disable: true } },
    illustration: { control: { disable: true } },
    onClose: { table: { disable: true } },
    cta: { table: { disable: true } },
    'data-testid': { control: { disable: true } },
  },
  render: (args) => {
    const { enableClose, enableCta, ...bannerArgs } = args;

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
    direction: 'horizontal',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
    badge: 'Novità',
  },
};

export const PrimaryVertical: Story = {
  args: {
    color: 'white',
    variant: 'primary',
    direction: 'vertical',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
    badge: 'Novità',
  },
};

export const SecondaryHorizontal: Story = {
  args: {
    color: 'white',
    variant: 'secondary',
    direction: 'horizontal',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
  },
};

export const SecondaryVertical: Story = {
  args: {
    color: 'white',
    variant: 'secondary',
    direction: 'vertical',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
  },
};

export const TertiaryHorizontal: Story = {
  args: {
    color: 'white',
    variant: 'tertiary',
    direction: 'horizontal',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
  },
};

export const TertiaryVertical: Story = {
  args: {
    color: 'white',
    variant: 'tertiary',
    direction: 'vertical',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
  },
};

export const BackgroundInfo: Story = {
  args: {
    color: 'info',
    variant: 'primary',
    direction: 'horizontal',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
    badge: 'Novità',
  },
};

/* ------------------------------ Stress-test stories ------------------------------ */

export const StressTest_PrimaryHorizontal_LongUnbroken: Story = {
  args: {
    color: 'white',
    variant: 'primary',
    direction: 'horizontal',
    title: `Very long title ${LONG_UNBROKEN}`,
    message: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
    badge: `Novità-${LONG_UNBROKEN}`,
  },
};

export const StressTest_PrimaryVertical_NoSpacesMessage: Story = {
  args: {
    color: 'white',
    variant: 'primary',
    direction: 'vertical',
    title: `Very long title ${LONG_UNBROKEN}`,
    message: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
    badge: `Badge-${LONG_UNBROKEN}`,
  },
};

export const StressTest_SecondaryHorizontal_LongTitleAndMessage: Story = {
  args: {
    color: 'white',
    variant: 'secondary',
    direction: 'horizontal',
    title: `Very long title ${LONG_UNBROKEN} ${LONG_UNBROKEN}`,
    message: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
  },
};

export const StressTest_TertiaryHorizontal_LongContent: Story = {
  args: {
    color: 'white',
    variant: 'tertiary',
    direction: 'horizontal',
    title: `Very long title ${LONG_UNBROKEN}`,
    message: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
  },
};

export const StressTest_BackgroundInfo_LongEverything: Story = {
  args: {
    color: 'info',
    variant: 'primary',
    direction: 'horizontal',
    title: `Very long title: ${LONG_UNBROKEN}`,
    message: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
    badge: `Novità-${LONG_UNBROKEN}`,
  },
};

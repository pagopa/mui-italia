import { MIProductCardWithMedia } from '@components/MICard/layouts/MIProductCardWithMedia';
import { Box, Button, Link, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { breakpointsChromaticValues } from '@theme';
import foundation from 'theme/foundation';

const componentMaxWidth = 900;

const DEFAULT_TITLE_APP_IO = 'App IO';
const DEFAULT_IMG_URL =
  'https://www.pagopa.gov.it/assets/images/posts/2024-11-15-evoluzioni-sistema-pagamento-20241115-091236.png';

const DEFAULT_AVATAR_URL = 'https://dev.selfcare.pagopa.it/resources/products/prod-io/logo.svg';
const DEFAULT_AVATAR_BG_COLOR = '#0073E6';

const DEFAULT_CONTENT = (
  <Typography
    color="text.secondary"
    sx={{
      fontWeight: foundation.typography.fontWeightLight,
      fontSize: '16px',
      lineHeight: 1.4,
      display: '-webkit-box',
      WebkitLineClamp: { xs: 2, sm: 3 },
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      wordBreak: 'break-word',
    }}
  >
    Consenti ai cittadini di firmare digitalmente documenti tramite l’app IO.{' '}
    <Link href="#" underline="always" fontWeight={400}>
      Scopri di più
    </Link>
  </Typography>
);

const DEFAULT_CTA = 'Aderisci';

const LONG_UNBROKEN =
  'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong';

const actionWithButton = (
  <Stack direction="row" spacing={2}>
    <Button variant="outlined" color="primary" href="https://test.com" target="_self" disableRipple>
      {DEFAULT_CTA}
    </Button>
  </Stack>
);

const meta: Meta<React.ComponentProps<typeof MIProductCardWithMedia>> = {
  title: 'Components/MICard/MIProductCardWithMedia',
  component: MIProductCardWithMedia,
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
    title: { control: { type: 'text' } },
    content: { control: { type: 'text' } },
    actions: { table: { disable: true } },
    imgUrl: { control: { type: 'text' } },
    productAvatarURL: { control: { type: 'text' } },
    productAvatarBgColor: { control: { type: 'color' } },
  },
  render: (args) => {
    const { actions, ...CardArgs } = args;

    return <MIProductCardWithMedia {...CardArgs} actions={actions} />;
  },
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof MIProductCardWithMedia>>;

/* ------------------------------ Normal stories ------------------------------ */

export const ProductCardWithMediaWithchip: Story = {
  args: {
    title: DEFAULT_TITLE_APP_IO,
    content: DEFAULT_CONTENT,
    actions: actionWithButton,
    imgUrl: DEFAULT_IMG_URL,
    productAvatarURL: DEFAULT_AVATAR_URL,
    productAvatarBgColor: DEFAULT_AVATAR_BG_COLOR,
  },
};

/* ------------------------------ Stress-test stories ------------------------------ */

export const Stress_Product_Card_Unbroken: Story = {
  args: {
    title: `Very long title ${LONG_UNBROKEN}`,
    content: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
    actions: actionWithButton,
    imgUrl: DEFAULT_IMG_URL,
    productAvatarURL: DEFAULT_AVATAR_URL,
    productAvatarBgColor: DEFAULT_AVATAR_BG_COLOR,
  },
};

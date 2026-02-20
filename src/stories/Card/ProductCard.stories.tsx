import { Box, Button, Chip, Link, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { breakpointsChromaticValues } from '@theme';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { ProductCard } from '@components/Card/layouts/ProductCard';
import { turquoise } from 'theme/colors';
import foundation from 'theme/foundation';

const componentMaxWidth = 900;

const DEFAULT_chip = (
  <Chip label="Premium" size="small" style={{ backgroundColor: turquoise[50] }} />
);

const DEFAULT_TITLE_APP_IO = 'App IO';
const DEFAULT_TITLE_PAGOPA = 'Piattaforma pagoPA';

const DEFAULT_CONTENT = (
  <Typography
    variant="body2"
    color="text.secondary"
    sx={{
      fontWeight: foundation.typography.fontWeightLight,
      fontSize: { xs: '13px', sm: '14px' },
      lineHeight: 1.4,
      display: '-webkit-box',
      WebkitLineClamp: { xs: 2, sm: 3 },
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      wordBreak: 'break-word',
    }}
  >
    Per gestire questo prodotto, chiedi a uno dei suoi{' '}
    <Link href="#" underline="always" fontWeight={400}>
      Amministratori
    </Link>
  </Typography>
);

const DEFAULT_CTA = 'Vai al prodotto';

const LONG_UNBROKEN =
  'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong';

const actionWithButton = (
  <Stack direction="row" spacing={2}>
    <Button
      variant="contained"
      color="primary"
      href="https://test.com"
      target="_self"
      disableRipple
    >
      {DEFAULT_CTA}
      <ArrowForwardRoundedIcon fontSize="medium" sx={{ pl: 1.5 }} />
    </Button>
  </Stack>
);

const meta: Meta<React.ComponentProps<typeof ProductCard>> = {
  title: 'MUI Components/Card/ProductCard',
  component: ProductCard,
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
    chip: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    content: { control: { type: 'text' } },
    avatarURL: { control: { type: 'text' } },
    actions: { table: { disable: true } },
  },
  render: (args) => {
    const { actions, ...CardArgs } = args;

    return <ProductCard {...CardArgs} actions={actions} />;
  },
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof ProductCard>>;

/* ------------------------------ Normal stories ------------------------------ */

export const ProductCardWithchip: Story = {
  args: {
    title: DEFAULT_TITLE_APP_IO,
    content: DEFAULT_CONTENT,
    chip: DEFAULT_chip,
    actions: actionWithButton,
  },
};

export const ProductCardWithoutchip: Story = {
  args: {
    title: DEFAULT_TITLE_PAGOPA,
    content: DEFAULT_CONTENT,
    actions: actionWithButton,
  },
};

/* ------------------------------ Stress-test stories ------------------------------ */

export const Stress_Product_Card_Unbroken: Story = {
  args: {
    title: `Very long title ${LONG_UNBROKEN}`,
    content: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
    actions: actionWithButton,
  },
};

import { ButtonNaked } from '@components/ButtonNaked';
import { Box, Button, Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { breakpointsChromaticValues } from '@theme';
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import { MICatalogCard } from '@components/MICard';

const componentMaxWidth = 900;

const DEFAULT_TITLE = 'Colonnine di ricarica auto elettriche';

const DEFAULT_HEADER = 'Comune di Milano';
const DEFAULT_CONTENT =
  'Il servizio rivolto agli enti dell’area metropolitana per monitorare lo stato delle colonnine di ricarica delle auto elettriche gestito dal Comune di Milano';

const DEFAULT_CTA = 'Ok, ho capito!';

const LONG_UNBROKEN =
  'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong';

const actions = (
  <Stack direction="row" justifyContent="space-between" alignItems="start" sx={{ width: '100%' }}>
    <Stack direction="row" spacing={1} justifyContent="flex-start">
      <ButtonNaked
        color="primary"
        href="https://test.com"
        target="_self"
        sx={{ minWidth: 0, px: 0, fontWeight: '500', fontSize: '16px', lineHeight: '22px' }}
      >
        Ispeziona
      </ButtonNaked>
      <ButtonNaked
        color="primary"
        href="https://test.com"
        target="_self"
        sx={{ minWidth: 0, px: 0, fontWeight: '500', fontSize: '16px', lineHeight: '22px', pl: 3 }}
      >
        Iscriviti
      </ButtonNaked>
    </Stack>

    <Stack direction="row" spacing={0} justifyContent="flex-end">
      <ButtonNaked
        color="primary"
        href="https://test.com"
        target="_self"
        aria-label="user profile"
        sx={{ minWidth: 0, px: 1, py: 0 }}
      >
        <PersonIcon fontSize="medium" />
      </ButtonNaked>
      <ButtonNaked
        color="primary"
        href="https://test.com"
        target="_self"
        aria-label="confirm"
        sx={{ minWidth: 0, px: 1, py: 0, pl: 3 }}
      >
        <CheckIcon fontSize="medium" />
      </ButtonNaked>
    </Stack>
  </Stack>
);

const actionWithButton = (
  <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ width: '100%' }}>
    <Button
      variant="contained"
      color="primary"
      href="https://test.com"
      target="_self"
      sx={{ maxHeight: '40px' }}
      disableRipple
    >
      {DEFAULT_CTA}
    </Button>
  </Stack>
);

const meta: Meta<React.ComponentProps<typeof MICatalogCard>> = {
  title: 'Components/MICard/MICatalogCard',
  component: MICatalogCard,
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
    header: { control: { type: 'text' } },
    content: { control: { type: 'text' } },
    avatarURL: { control: { type: 'text' } },
    actions: { table: { disable: true } },
  },
  render: (args) => {
    const { actions, ...CardArgs } = args;

    return <MICatalogCard {...CardArgs} actions={actions} />;
  },
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof MICatalogCard>>;

/* ------------------------------ Normal stories ------------------------------ */

export const CatalogCardWithMultipleActions: Story = {
  args: {
    title: DEFAULT_TITLE,
    header: DEFAULT_HEADER,
    content: DEFAULT_CONTENT,
    actions: actions,
  },
};

export const CatalogCardWithButtonAction: Story = {
  args: {
    title: DEFAULT_TITLE,
    header: DEFAULT_HEADER,
    content: DEFAULT_CONTENT,
    actions: actionWithButton,
  },
};

/* ------------------------------ Stress-test stories ------------------------------ */

export const Stress_Card_Unbroken: Story = {
  args: {
    title: `Very long title ${LONG_UNBROKEN}`,
    header: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
    content: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,
    actions: actions,
  },
};

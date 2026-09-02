import { Meta, StoryFn } from '@storybook/react-vite';

import { EmailRounded as EmailRoundedIcon } from '@mui/icons-material';
import { Breadcrumbs, Link, Typography } from '@mui/material';

export default {
  title: 'MUI Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: { controls: { sort: 'size' } },
} as Meta<typeof Breadcrumbs>;

export const TwoItems: StoryFn<typeof Breadcrumbs> = () => (
  <Breadcrumbs>
    <Link sx={{ display: 'flex', alignItems: 'center' }} underline="hover" color="inherit" href="#">
      <EmailRoundedIcon sx={{ mr: 1 }} fontSize="inherit" />
      Notifiche
    </Link>
    <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 600 }} color="inherit">
      Dettaglio Notifica
    </Typography>
  </Breadcrumbs>
);
TwoItems.parameters = {
  controls: { hideNoControlsWarning: true },
};

import type { Meta, StoryFn } from '@storybook/react';

import { breakpointsChromaticValues } from '@theme';

import { FormControlLabel, Link, Switch, Typography } from '@mui/material';

import { TOSAgreement } from './TOSAgreement';

export default {
  title: 'Components/TOSAgreement',
  component: TOSAgreement,
  parameters: {
    chromatic: {
      viewports: breakpointsChromaticValues,
    },
  },
  args: {
    productName: 'MUI Italia',
    description:
      'Prima di entrare, leggi e accetta l’Informativa Privacy e i Termini e condizioni d’uso. Potrai consultarli di nuovo quando vuoi: li trovi sempre in fondo alla pagina.',
    confirmBtnLabel: 'Accedi',
    confirmBtnError: false,
  },
  argTypes: {
    productName: { control: 'text' },
    description: { control: 'text' },
    sx: { table: { disable: true } },
    confirmBtnDisabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    confirmBtnLabel: {
      control: 'text',
    },
    confirmBtnError: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof TOSAgreement>;

export const Default: StoryFn<typeof TOSAgreement> = (args) => {
  const SwitchLabel = (
    <Typography color="text.secondary">
      Dichiaro di aver letto e accettato l’
      <Link underline="hover" href="#">
        Informativa Privacy
      </Link>{' '}
      e i{' '}
      <Link underline="hover" href="#">
        Termini e condizioni d’uso
      </Link>{' '}
      di MUI Italia
    </Typography>
  );

  return (
    <TOSAgreement {...args} onConfirm={() => console.log('Confermato')}>
      <FormControlLabel
        control={<Switch sx={{ margin: 2 }} name="accepted" />}
        label={SwitchLabel}
      />
    </TOSAgreement>
  );
};

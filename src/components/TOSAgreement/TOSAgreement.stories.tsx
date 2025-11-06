import { StoryFn, Meta } from '@storybook/react';

import { breakpointsChromaticValues } from '@theme';

import { FormControlLabel, Link, Switch, Typography } from '@mui/material';

import { TOSAgreement } from './TOSAgreement';
import { useState } from 'react';

export default {
  title: 'Components/TOSAgreement',
  component: TOSAgreement,
  parameters: {
    chromatic: {
      viewports: breakpointsChromaticValues,
    },
  },
} as Meta<typeof TOSAgreement>;

export const Default: StoryFn<typeof TOSAgreement> = () => {
  const [accepted, setAccepted] = useState<boolean>(false);

  const handleChange = () => {
    setAccepted((prev) => !prev);
  };

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
    <TOSAgreement
      productName="MUI Italia"
      description="Prima di entrare, leggi e accetta l’Informativa Privacy e i Termini e condizioni d’uso. Potrai consultarli di nuovo quando vuoi: li trovi sempre in fondo alla pagina."
      onConfirm={() => console.log('Confermato')}
      confirmBtnDisabled={!accepted}
    >
      <FormControlLabel
        control={
          <Switch sx={{ margin: 2 }} checked={accepted} onChange={handleChange} name="accepted" />
        }
        label={SwitchLabel}
      />
    </TOSAgreement>
  );
};

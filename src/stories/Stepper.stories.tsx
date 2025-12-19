import { StoryFn, Meta } from '@storybook/react';

import { Stepper, Step, StepLabel, Box, Typography } from '@mui/material';

export default {
  title: 'MUI Components/Navigation/Stepper',
  component: Stepper,
} as Meta<typeof Stepper>;

const steps = ['Intestazione', 'Destinatario', 'Allegati'];

export const Default: StoryFn<typeof Stepper> = () => (
  <Box sx={{ width: '100%' }}>
    <Stepper activeStep={1}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  </Box>
);
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
Default.decorators = [
  (Story) => (
    <div style={{ padding: '1rem', backgroundColor: '#F5F5F5' }}>
      <Story />
    </div>
  ),
];

export const AlternativeLabel: StoryFn<typeof Stepper> = () => (
  <Box sx={{ width: '100%' }}>
    <Stepper activeStep={1} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  </Box>
);
AlternativeLabel.decorators = [
  (Story) => (
    <div style={{ padding: '1rem', backgroundColor: '#F5F5F5' }}>
      <Story />
    </div>
  ),
];

export const OptionalText: StoryFn<typeof Stepper> = () => (
  <Box sx={{ width: '100%' }}>
    <Stepper activeStep={1}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel optional={<Typography variant="caption">Testo facoltativo</Typography>}>
            {label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  </Box>
);
OptionalText.decorators = [
  (Story) => (
    <div style={{ padding: '1rem', backgroundColor: '#F5F5F5' }}>
      <Story />
    </div>
  ),
];

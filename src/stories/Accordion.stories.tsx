import { StoryFn, Meta } from '@storybook/react-vite';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default {
  title: 'MUI Components/Surfaces/Accordion',
  component: Accordion,
} as Meta<typeof Accordion>;

const Template: StoryFn<typeof Accordion> = (args) => (
  <Accordion {...args}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography>Titolo Accordion</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>Contenuto base dell'accordion.</Typography>
    </AccordionDetails>
  </Accordion>
);

export const Default = Template.bind({});
Default.args = {};

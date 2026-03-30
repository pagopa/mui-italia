import { StoryFn, Meta } from '@storybook/react-vite';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { Typography } from '@mui/material';
import { MIAccordion } from '@components/MIAccordion';

export default {
  title: 'Components/MIAccordion',
  component: MIAccordion,
  parameters: {
    layout: 'padded',
  },
} as Meta<typeof MIAccordion>;

const Template: StoryFn<typeof MIAccordion> = (args) => (
  <MIAccordion {...args}>
    <Typography>Questo è il contenuto passato come "children".</Typography>
  </MIAccordion>
);

// Story base: Solo titolo
export const Base = Template.bind({});
Base.args = {
  title: 'Accordion heading',
  titleVariant: 'primary',
};

// Story ricca: Titolo, Icona e Chip (Come il tuo design!)
export const RichHeading = Template.bind({});
RichHeading.args = {
  title: 'Accordion heading',
  titleVariant: 'primary',
  icon: <InsertPhotoOutlinedIcon />,
  chipColor: 'error',
  chipLabel: 'Status',
  panelId: 'panel1',
  panelHeader: 'panel1-header',
};

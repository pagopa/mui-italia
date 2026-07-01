import { MITimeline, MITimelineItem } from '@components/MITimeline';
import { Tag } from '@components/Tag';
import { MailOutline } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GavelIcon from '@mui/icons-material/Gavel';
import InfoIcon from '@mui/icons-material/Info';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import SearchIcon from '@mui/icons-material/Search';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import WarningIcon from '@mui/icons-material/Warning';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import type { Meta, StoryObj } from '@storybook/react';
import { colors } from 'theme/foundations/colors';

const componentMaxWidth = 600;

const meta: Meta<typeof MITimeline> = {
  title: 'Components/MITimeline',
  component: MITimeline,
  subcomponents: { MITimelineItem },
  decorators: [
    (Story) => (
      <Box sx={{ p: 2, boxSizing: 'border-box', maxWidth: componentMaxWidth, mx: 'auto' }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof MITimeline>;

export const Default: Story = {
  render: () => (
    <MITimeline>
      <MITimelineItem
        variant="info"
        icon={GavelIcon}
        title="La notifica ha assunto valore di legge"
      >
        <Typography variant="body2">
          Né Mario Rossi né un suo delegato hanno effettuato un accesso entro i termini, ma la
          notifica SEND si è comunque perfezionata il giorno 29/06/2026.
        </Typography>
      </MITimelineItem>
      <MITimelineItem
        variant="normal"
        icon={MobileFriendlyIcon}
        title="Invio della notifica in corso"
      >
        <Typography variant="body2">Stiamo verificando i dati del destinatario.</Typography>
      </MITimelineItem>
      <MITimelineItem variant="normal" icon={SearchIcon} title="Notifica pronta per l’invio">
        <Typography variant="body2">
          La notifica digitale ha superato i test di validazione. È possibile effettuare il download
          dell’attestazione.
        </Typography>
      </MITimelineItem>
      <MITimelineItem variant="normal" icon={TroubleshootIcon} title="Notifica in validazione">
        <Typography variant="body2">La notifica SEND è in attesa di validazione.</Typography>
      </MITimelineItem>
    </MITimeline>
  ),
};

export const Variants: Story = {
  render: () => (
    <>
      <MITimeline>
        <MITimelineItem variant="normal" icon={InfoIcon} title="Normal">
          <Typography variant="body2">Variante neutra</Typography>
        </MITimelineItem>
      </MITimeline>
      <MITimeline>
        <MITimelineItem variant="info" icon={InfoIcon} title="Info">
          <Typography variant="body2">Variante informativa</Typography>
        </MITimelineItem>
      </MITimeline>
      <MITimeline>
        <MITimelineItem variant="success" icon={CheckCircleIcon} title="Success">
          <Typography variant="body2">Variante di successo</Typography>
        </MITimelineItem>
      </MITimeline>
      <MITimeline>
        <MITimelineItem variant="warning" icon={WarningIcon} title="Warning">
          <Typography variant="body2">Variante di avviso</Typography>
        </MITimelineItem>
      </MITimeline>
      <MITimeline>
        <MITimelineItem variant="error" icon={ErrorIcon} title="Error">
          <Typography variant="body2">Variante di errore</Typography>
        </MITimelineItem>
      </MITimeline>
    </>
  ),
};

export const RichContent: Story = {
  render: () => (
    <MITimeline>
      <MITimelineItem variant="success" icon={CheckCircleIcon} title="Ultimo step">
        <Typography variant="body2">Flusso completato</Typography>
      </MITimelineItem>
      <MITimelineItem variant="normal" icon={InfoIcon} title="Dettaglio con contenuto strutturato">
        <Typography variant="body2" gutterBottom>
          Il body di ogni item accetta qualsiasi ReactNode.
        </Typography>
        <Accordion elevation={0} disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <MailOutline fontSize="small" sx={{ mr: 1 }} />
            <Typography fontWeight={600} color={colors.neutral.black}>
              Prima Raccomandata · {111111111}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ol>
              <li>Processo di invio raccomandata cominciato </li>
            </ol>
          </AccordionDetails>
        </Accordion>
      </MITimelineItem>
    </MITimeline>
  ),
};

const TitleWithTag = () => (
  <Stack direction="row" alignItems="center" spacing={1}>
    <Typography variant="subtitle1" component="span">
      Operazione in corso
    </Typography>
    <Tag variant="warning" value="Evento non valido" />
  </Stack>
);

export const CustomTitle: Story = {
  render: () => (
    <MITimeline>
      <MITimelineItem variant="info" icon={InfoIcon} title={<TitleWithTag />}>
        <Typography variant="body2">Esempio di MITimelineItem con title custom</Typography>
      </MITimelineItem>
    </MITimeline>
  ),
};

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
import type { Meta, StoryObj } from '@storybook/react-vite';
import { colors } from 'theme/foundations/colors';

const componentMaxWidth = 600;

const iconOptions = {
  gavel: GavelIcon,
  info: InfoIcon,
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  mobile: MobileFriendlyIcon,
  search: SearchIcon,
  troubleshoot: TroubleshootIcon,
};

type MITimelineStoryArgs = React.ComponentProps<typeof MITimeline> & {
  itemVariant: 'normal' | 'info' | 'success' | 'warning' | 'error';
  itemIcon: keyof typeof iconOptions;
  itemTitle: string;
  itemContent: string;
};

const meta: Meta<MITimelineStoryArgs> = {
  title: 'Components/MITimeline',
  component: MITimeline,
  parameters: {
    controls: {
      include: ['itemVariant', 'itemIcon', 'itemTitle', 'itemContent'],
    },
  },
  args: {
    itemVariant: 'info',
    itemIcon: 'gavel',
    itemTitle: 'La notifica ha assunto valore di legge',
    itemContent:
      'Né Mario Rossi né un suo delegato hanno effettuato un accesso entro i termini, ma la notifica SEND si è comunque perfezionata il giorno 29/06/2026.',
  },
  argTypes: {
    itemVariant: {
      options: ['normal', 'info', 'success', 'warning', 'error'],
      control: { type: 'select' },
      description: 'Controllo Storybook: variante visuale applicata al primo MITimelineItem.',
      table: {
        category: 'Storybook controls',
      },
    },
    itemIcon: {
      options: Object.keys(iconOptions),
      control: { type: 'select' },
      description: 'Controllo Storybook: icona mostrata nel primo MITimelineItem.',
      table: {
        category: 'Storybook controls',
      },
    },
    itemTitle: {
      control: { type: 'text' },
      description: 'Controllo Storybook: testo usato come title del primo MITimelineItem.',
      table: {
        category: 'Storybook controls',
      },
    },
    itemContent: {
      control: { type: 'text' },
      description: 'Controllo Storybook: testo usato come children del primo MITimelineItem.',
      table: {
        category: 'Storybook controls',
      },
    },
    children: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 2, boxSizing: 'border-box', maxWidth: componentMaxWidth, mx: 'auto' }}>
        <Story />
      </Box>
    ),
  ],
  render: ({ itemVariant, itemIcon, itemTitle, itemContent }) => {
    const Icon = iconOptions[itemIcon];

    return (
      <MITimeline>
        <MITimelineItem variant={itemVariant} icon={Icon} title={itemTitle}>
          <Typography variant="body2">{itemContent}</Typography>
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
            La notifica digitale ha superato i test di validazione. È possibile effettuare il
            download dell’attestazione.
          </Typography>
        </MITimelineItem>
        <MITimelineItem variant="normal" icon={TroubleshootIcon} title="Notifica in validazione">
          <Typography variant="body2">La notifica SEND è in attesa di validazione.</Typography>
        </MITimelineItem>
      </MITimeline>
    );
  },
};

export default meta;

type Story = StoryObj<MITimelineStoryArgs>;

export const Default: Story = {};

export const Variants: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
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
  parameters: {
    controls: {
      disable: true,
    },
  },
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
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <MITimeline>
      <MITimelineItem variant="info" icon={InfoIcon} title={<TitleWithTag />}>
        <Typography variant="body2">Esempio di MITimelineItem con title custom</Typography>
      </MITimelineItem>
    </MITimeline>
  ),
};

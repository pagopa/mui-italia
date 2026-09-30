import { MITimeline, MITimelineItem } from '@components/MITimeline';
import { Tag } from '@components/Tag';
import {
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
  ExpandMore as ExpandMoreIcon,
  Gavel as GavelIcon,
  Info as InfoIcon,
  MailOutline,
  MobileFriendly as MobileFriendlyIcon,
  Search as SearchIcon,
  Troubleshoot as TroubleshootIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { colors } from 'theme/colors';

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
      'Né Mario Rossi né un suo delegato hanno effettuato un accesso entro i termini, ma la notifica SEND si è comunque perfezionata.',
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
          <Typography color="inherit" fontSize="14px">
            {itemContent}
          </Typography>
          <Typography component="span" fontSize="12px">
            19 Lug, 15:00
          </Typography>
        </MITimelineItem>
        <MITimelineItem
          variant="normal"
          icon={MobileFriendlyIcon}
          title="Invio della notifica in corso"
        >
          Stiamo verificando i dati del destinatario.
        </MITimelineItem>
        <MITimelineItem variant="normal" icon={SearchIcon} title="Notifica pronta per l’invio">
          La notifica digitale ha superato i test di validazione. È possibile effettuare il download
          dell’attestazione.
        </MITimelineItem>
        <MITimelineItem variant="normal" icon={TroubleshootIcon} title="Notifica in validazione">
          La notifica SEND è in attesa di validazione.
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
          Variante neutra
        </MITimelineItem>
      </MITimeline>
      <MITimeline>
        <MITimelineItem variant="info" icon={InfoIcon} title="Info">
          Variante informativa
        </MITimelineItem>
      </MITimeline>
      <MITimeline>
        <MITimelineItem variant="success" icon={CheckCircleIcon} title="Success">
          Variante di successo
        </MITimelineItem>
      </MITimeline>
      <MITimeline>
        <MITimelineItem variant="warning" icon={WarningIcon} title="Warning">
          Variante di avviso
        </MITimelineItem>
      </MITimeline>
      <MITimeline>
        <MITimelineItem variant="error" icon={ErrorIcon} title="Error">
          Variante di errore
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
        Flusso completato
      </MITimelineItem>
      <MITimelineItem variant="normal" icon={InfoIcon} title="Dettaglio con contenuto strutturato">
        <Typography variant="body2" gutterBottom>
          Il body di ogni item accetta qualsiasi ReactNode.
        </Typography>
        <Accordion elevation={0} disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <MailOutline fontSize="small" sx={{ mr: 1 }} />
            <Typography variant="body2" fontWeight={600} color={colors.neutral.black}>
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
    <Typography component="span" fontWeight={600} sx={{ color: colors.warning[850] }}>
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
      <MITimelineItem variant="warning" icon={InfoIcon} title={<TitleWithTag />}>
        Esempio di MITimelineItem con title custom
      </MITimelineItem>
    </MITimeline>
  ),
};

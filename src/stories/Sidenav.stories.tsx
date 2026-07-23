import { useEffect, useState, type ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { Box, Divider, ListItem } from '@mui/material';
import { breakpointsChromaticValues } from '@theme';
import { Banner } from '@components/Banner';
import { ProfileItem } from '@components/ProfileItem';
import { Sidenav } from '@components/Sidenav/Sidenav';
import { SidenavItem } from '@components/Sidenav/SidenavItem';
import { SidenavItemGroup } from '@components/Sidenav/SidenavItemGroup';
import { SidenavIcon } from '@components/Sidenav/SidenavIcon';

const componentMaxWidth = 1280;

type SidenavStoryArgs = ComponentProps<typeof Sidenav> & {
  showTeamItem: boolean;
};

export default {
  title: 'Components/MISidenav',
  component: Sidenav,
  parameters: {
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
  },
} satisfies Meta<SidenavStoryArgs>;

type DemoSidenavItemsProps = {
  selectedKey: 'notifiche' | 'impostazioni' | 'team';
  showTeamItem?: boolean;
};

const DemoSidenavItems = ({ selectedKey, showTeamItem = true }: DemoSidenavItemsProps) => (
  <>
    <SidenavItem
      component="button"
      label="Notifiche"
      StartIcon={MailOutlineRoundedIcon}
      notification={4}
      isSelected={selectedKey === 'notifiche'}
      onClick={() => {}}
    />
    <SidenavItem
      component="button"
      label="Impostazioni"
      StartIcon={SettingsRoundedIcon}
      chipProps={{ color: 'success', label: 'Attiva', variant: 'filled' }}

      isSelected={selectedKey === 'impostazioni'}
      onClick={() => {}}
    />
    {showTeamItem && (
      <SidenavItem
        component="button"
        label="Team e permessi"
        StartIcon={GroupRoundedIcon}
        EndIcon={ExitToAppRoundedIcon}
        isSelected={selectedKey === 'team'}
        divider
        onClick={() => {}}
      />
    )}
  </>
);

const SendFeedbackCard = () => (
  <ListItem disablePadding sx={{ px: 2, pt: 3, alignItems: 'stretch' }}>
    <Banner
      color="info"
      variant="tertiary"
      title="Aiutaci a migliorare SEND"
      message="Il tuo feedback ci permette di rendere tutto piu chiaro e semplice. Bastano pochi minuti per dirci cosa ne pensi."
      cta={{
        label: 'Inizia',
        onClick: () => {},
      }}
    />
  </ListItem>
);

export const Playground: StoryObj<SidenavStoryArgs> = {
  render: ({ open, mobile, labelMobile, showTeamItem }) => {
    const [isOpen, setIsOpen] = useState(open);

    useEffect(() => {
      setIsOpen(open);
    }, [open]);

    return (
      <Box sx={{ minHeight: 480, bgcolor: 'background.paper' }}>
        <Sidenav open={isOpen} mobile={mobile} labelMobile={labelMobile} onSidenavOpen={setIsOpen}>
          <DemoSidenavItems selectedKey="notifiche" showTeamItem={showTeamItem} />
        </Sidenav>
      </Box>
    );
  },
  args: {
    open: true,
    mobile: false,
  },
  parameters: {
    controls: {
      include: ['open', 'mobile', 'labelMobile', 'showTeamItem'],
    },
  },
};

export const Default: StoryObj<SidenavStoryArgs> = {
  render: () => {
    const [open, setOpen] = useState(true);

    return (
      <Box sx={{ minHeight: 480, bgcolor: 'background.paper' }}>
        <Sidenav open={open} mobile={false} labelMobile='' onSidenavOpen={setOpen}>
          <DemoSidenavItems selectedKey="notifiche" />
        </Sidenav>
      </Box>
    );
  },
};

export const Collapsed: StoryObj<SidenavStoryArgs> = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Box sx={{ minHeight: 480, bgcolor: 'background.paper' }}>
        <Sidenav open={open} mobile={false} labelMobile="" onSidenavOpen={setOpen}>
          <DemoSidenavItems selectedKey="impostazioni" />
        </Sidenav>
      </Box>
    );
  },
};

export const Mobile: StoryObj<SidenavStoryArgs> = {
  render: () => (
    <Box sx={{ minHeight: 320, bgcolor: 'background.paper' }}>
      <Sidenav open={true} mobile={true} labelMobile="" onSidenavOpen={() => {}}>
        <DemoSidenavItems selectedKey="team" />
      </Sidenav>
    </Box>
  ),
};

export const WithProfileItem: StoryObj<SidenavStoryArgs> = {
  render: () => {
    const [open, setOpen] = useState(true);
    const [selected, setSelected] = useState<'notifiche' | 'recapiti' | 'deleghe' | 'team'>('notifiche');

    return (
      <Box sx={{ minHeight: 640, bgcolor: 'background.paper' }}>
        <Sidenav open={open} mobile={false} labelMobile="" onSidenavOpen={setOpen}>
          <ProfileItem
            caption="Stai operando come"
            profileName="Ente Creditore"
            profileInitials="EC"
            switchLabel="Cambia profilo"
            onSwitchProfile={() => {}}
          />
          <Divider />
          <SidenavItem
            component="button"
            label="Notifiche"
            StartIcon={MailOutlineRoundedIcon}
            isSelected={selected === 'notifiche'}
            onClick={() => setSelected('notifiche')}
          />
          <SidenavItem
            component="button"
            label="I tuoi recapiti"
            StartIcon={PinDropOutlinedIcon}
            isSelected={selected === 'recapiti'}
            onClick={() => setSelected('recapiti')}
          />
          <SidenavItem
            component="button"
            label="Deleghe"
            StartIcon={BackHandOutlinedIcon}
            isSelected={selected === 'deleghe'}
            onClick={() => setSelected('deleghe')}
          />
          <SidenavItem
            component="button"
            label="Team e permessi"
            StartIcon={GroupRoundedIcon}
            EndIcon={OpenInNewRoundedIcon}
            divider
            isSelected={selected === 'team'}
            onClick={() => setSelected('team')}
          />
        </Sidenav>
      </Box>
    );
  },
};

export const SendPersoneFisiche: StoryObj<SidenavStoryArgs> = {
  render: () => {
    const [open, setOpen] = useState(true);
    const [selected, setSelected] = useState<
      'notifiche-tue' | 'notifiche-giovanna' | 'recapiti' | 'deleghe' | 'stato' | 'utenti' | 'gruppi'
    >('notifiche-tue');
    const [isNotificheExpanded, setIsNotificheExpanded] = useState(true);

    return (
      <Box sx={{ minHeight: 800, bgcolor: 'background.paper' }}>
        <Sidenav open={open} mobile={false} labelMobile="SEND Persone fisiche" onSidenavOpen={setOpen}>
          <SidenavItemGroup
            label="Notifiche"
            icon={MailOutlineRoundedIcon}
            isExpanded={isNotificheExpanded}
            isSelected={selected === 'notifiche-tue' || selected === 'notifiche-giovanna'}
            handleExpandParent={() => setIsNotificheExpanded((value) => !value)}
            renderOnCollapsed={<SidenavIcon Icon={MailOutlineRoundedIcon} />}
          >
            <SidenavItem
              component="button"
              label="Le tue notifiche"
              isSelected={selected === 'notifiche-tue'}
              onClick={() => setSelected('notifiche-tue')}
            />
            <SidenavItem
              component="button"
              label="Giovanna D'Arco"
              isSelected={selected === 'notifiche-giovanna'}
              onClick={() => setSelected('notifiche-giovanna')}
            />
          </SidenavItemGroup>
          <SidenavItem
            component="button"
            label="I tuoi recapiti"
            StartIcon={PinDropOutlinedIcon}
            isSelected={selected === 'recapiti'}
            onClick={() => setSelected('recapiti')}
          />
          <SidenavItem
            component="button"
            label="Deleghe"
            StartIcon={BackHandOutlinedIcon}
            isSelected={selected === 'deleghe'}
            onClick={() => setSelected('deleghe')}
          />
          <SidenavItem
            component="button"
            label="Stato piattaforma"
            StartIcon={ArticleOutlinedIcon}
            chipProps={{ color: 'success', label: 'Attiva', variant: 'filled' }}
            divider
            isSelected={selected === 'stato'}
            onClick={() => setSelected('stato')}
          />
          <SidenavItem
            component="button"
            label="Utenti"
            StartIcon={GroupRoundedIcon}
            EndIcon={OpenInNewRoundedIcon}
            isSelected={selected === 'utenti'}
            onClick={() => setSelected('utenti')}
          />
          <SidenavItem
            component="button"
            label="Gruppi"
            StartIcon={GroupRoundedIcon}
            EndIcon={OpenInNewRoundedIcon}
            isSelected={selected === 'gruppi'}
            onClick={() => setSelected('gruppi')}
          />
          <SendFeedbackCard />
        </Sidenav>
      </Box>
    );
  },
};

export const Interoperabilita: StoryObj<SidenavStoryArgs> = {
  render: () => {
    const [open, setOpen] = useState(true);
    const [selected, setSelected] = useState<
      | 'catalogo'
      | 'notifiche'
      | 'fruizione-richieste'
      | 'fruizione-finalita'
      | 'erogazione-1'
      | 'clienti-1'
      | 'ente-1'
      | 'tool'
      | 'utenti'
      | 'gruppi'
    >('catalogo');
    const [isFruizioneExpanded, setIsFruizioneExpanded] = useState(true);
    const [isErogazioneExpanded, setIsErogazioneExpanded] = useState(false);
    const [isGestioneClientiExpanded, setIsGestioneClientiExpanded] = useState(false);
    const [isIlMioEnteExpanded, setIsIlMioEnteExpanded] = useState(false);

    return (
      <Box sx={{ minHeight: 800, bgcolor: 'background.paper' }}>
        <Sidenav open={open} mobile={false} labelMobile="Interoperabilità" onSidenavOpen={setOpen}>
          <SidenavItem
            component="button"
            label="Catalogo e-service"
            StartIcon={ImageOutlinedIcon}
            isSelected={selected === 'catalogo'}
            onClick={() => setSelected('catalogo')}
          />
          <SidenavItem
            component="button"
            label="Notifiche"
            StartIcon={NotificationsNoneOutlinedIcon}
            isSelected={selected === 'notifiche'}
            onClick={() => setSelected('notifiche')}
          />
          <SidenavItemGroup
            label="Fruizione"
            icon={ImageOutlinedIcon}
            isExpanded={isFruizioneExpanded}
            isSelected={selected === 'fruizione-richieste' || selected === 'fruizione-finalita'}
            handleExpandParent={() => setIsFruizioneExpanded((value) => !value)}
            renderOnCollapsed={<SidenavIcon Icon={ImageOutlinedIcon} />}
          >
            <SidenavItem
              component="button"
              label="Richieste inoltrate"
              isSelected={selected === 'fruizione-richieste'}
              onClick={() => setSelected('fruizione-richieste')}
            />
            <SidenavItem
              component="button"
              label="Finalità inoltrate"
              isSelected={selected === 'fruizione-finalita'}
              onClick={() => setSelected('fruizione-finalita')}
            />
          </SidenavItemGroup>
          <SidenavItemGroup
            label="Erogazione"
            icon={ImageOutlinedIcon}
            isExpanded={isErogazioneExpanded}
            isSelected={selected === 'erogazione-1'}
            handleExpandParent={() => setIsErogazioneExpanded((value) => !value)}
            renderOnCollapsed={<SidenavIcon Icon={ImageOutlinedIcon} />}
          >
            <SidenavItem
              component="button"
              label="Erogazione item 1"
              isSelected={selected === 'erogazione-1'}
              onClick={() => setSelected('erogazione-1')}
            />
          </SidenavItemGroup>
          <SidenavItemGroup
            label="Gestione dei client"
            icon={StorageOutlinedIcon}
            isExpanded={isGestioneClientiExpanded}
            isSelected={selected === 'clienti-1'}
            handleExpandParent={() => setIsGestioneClientiExpanded((value) => !value)}
            renderOnCollapsed={<SidenavIcon Icon={StorageOutlinedIcon} />}
          >
            <SidenavItem
              component="button"
              label="Client item 1"
              isSelected={selected === 'clienti-1'}
              onClick={() => setSelected('clienti-1')}
            />
          </SidenavItemGroup>
          <SidenavItemGroup
            label="Il mio ente"
            icon={AccountBalanceOutlinedIcon}
            isExpanded={isIlMioEnteExpanded}
            isSelected={selected === 'ente-1'}
            handleExpandParent={() => setIsIlMioEnteExpanded((value) => !value)}
            renderOnCollapsed={<SidenavIcon Icon={AccountBalanceOutlinedIcon} />}
          >
            <SidenavItem
              component="button"
              label="Ente item 1"
              isSelected={selected === 'ente-1'}
              onClick={() => setSelected('ente-1')}
            />
          </SidenavItemGroup>
          <SidenavItem
            component="button"
            label="Tool per lo sviluppo"
            StartIcon={BuildOutlinedIcon}
            divider
            isSelected={selected === 'tool'}
            onClick={() => setSelected('tool')}
          />
          <SidenavItem
            component="button"
            label="Utenti"
            StartIcon={GroupRoundedIcon}
            EndIcon={OpenInNewRoundedIcon}
            isSelected={selected === 'utenti'}
            onClick={() => setSelected('utenti')}
          />
          <SidenavItem
            component="button"
            label="Gruppi"
            StartIcon={GroupRoundedIcon}
            EndIcon={OpenInNewRoundedIcon}
            isSelected={selected === 'gruppi'}
            onClick={() => setSelected('gruppi')}
          />
        </Sidenav>
      </Box>
    );
  },
};

export const InformativaPrivacy: StoryObj<SidenavStoryArgs> = {
  render: () => {
    const [open, setOpen] = useState(true);
    const [selected, setSelected] = useState<
      | 'introduzione'
      | 'titolare'
      | 'responsabile'
      | 'categoria'
      | 'base-giuridica'
      | 'destinatari'
      | 'trasferimento'
      | 'conservazione'
      | 'diritti'
      | 'modifiche'
      | 'cookie'
    >('introduzione');

    return (
      <Box sx={{ minHeight: 800, bgcolor: 'background.paper' }}>
        <Sidenav open={open} mobile={false} labelMobile="Informativa Privacy" onSidenavOpen={setOpen}>
          <SidenavItem
            component="button"
            label="Introduzione"
            isSelected={selected === 'introduzione'}
            onClick={() => setSelected('introduzione')}
          />
          <SidenavItem
            component="button"
            label="Titolare del trattamento"
            isSelected={selected === 'titolare'}
            onClick={() => setSelected('titolare')}
          />
          <SidenavItem
            component="button"
            label="Responsabile Protezione Dati"
            isSelected={selected === 'responsabile'}
            onClick={() => setSelected('responsabile')}
          />
          <SidenavItem
            component="button"
            label="Categoria di dati e finalità"
            isSelected={selected === 'categoria'}
            onClick={() => setSelected('categoria')}
          />
          <SidenavItem
            component="button"
            label="Base giuridica del trattamento"
            isSelected={selected === 'base-giuridica'}
            onClick={() => setSelected('base-giuridica')}
          />
          <SidenavItem
            component="button"
            label="Categorie di destinatari"
            isSelected={selected === 'destinatari'}
            onClick={() => setSelected('destinatari')}
          />
          <SidenavItem
            component="button"
            label="Trasferimento verso paesi terzi"
            isSelected={selected === 'trasferimento'}
            onClick={() => setSelected('trasferimento')}
          />
          <SidenavItem
            component="button"
            label="Periodo di conservazione"
            isSelected={selected === 'conservazione'}
            onClick={() => setSelected('conservazione')}
          />
          <SidenavItem
            component="button"
            label="Diritti degli interessati"
            isSelected={selected === 'diritti'}
            onClick={() => setSelected('diritti')}
          />
          <SidenavItem
            component="button"
            label="Modifiche"
            isSelected={selected === 'modifiche'}
            onClick={() => setSelected('modifiche')}
          />
          <SidenavItem
            component="button"
            label="Cookie, traccianti e altre informazioni memorizzate"
            isSelected={selected === 'cookie'}
            onClick={() => setSelected('cookie')}
          />
        </Sidenav>
      </Box>
    );
  },
};







export const MultilineLabels: StoryObj<SidenavStoryArgs> = {
  render: () => {
    const [open, setOpen] = useState(true);
    const [selected, setSelected] = useState<string>('team');

    return (
      <Box sx={{ minHeight: 480, bgcolor: 'background.paper' }}>
        <Sidenav open={open} mobile={false} labelMobile="" onSidenavOpen={setOpen}>
          <SidenavItem
            component="button"
            label="Label molto lungo che va su più righe per testare il comportamento del testo"
            StartIcon={MailOutlineRoundedIcon}
            isSelected={selected === 'lungo'}
            onClick={() => setSelected('lungo')}
          />
          <SidenavItem
            component="button"
            label="Gestione team e permessi degli utenti"
            StartIcon={GroupRoundedIcon}
            isSelected={selected === 'team'}
            onClick={() => setSelected('team')}
          />
          <SidenavItem
            component="button"
            label="Configurazione avanzata del sistema"
            StartIcon={SettingsRoundedIcon}
            EndIcon={ExitToAppRoundedIcon}
            notification={5}
            isSelected={selected === 'config'}
            onClick={() => setSelected('config')}
          />
        </Sidenav>
      </Box>
    );
  },
};









export const AreaRiservataUtenti: StoryObj<SidenavStoryArgs> = {
  render: () => {
    const [open, setOpen] = useState(true);
    const [selected, setSelected] = useState<string>('profilo');

    return (
      <Box sx={{ minHeight: 600, bgcolor: 'background.paper' }}>
        <Sidenav open={open} mobile={false} labelMobile="Area Riservata" onSidenavOpen={setOpen}>
          <SidenavItem
            component="button"
            label="Dashboard"
            StartIcon={MailOutlineRoundedIcon}
            isSelected={selected === 'dashboard'}
            onClick={() => setSelected('dashboard')}
          />
          <SidenavItem
            component="button"
            label="Il tuo profilo"
            StartIcon={GroupRoundedIcon}
            isSelected={selected === 'profilo'}
            onClick={() => setSelected('profilo')}
          />
          <SidenavItem
            component="button"
            label="I tuoi pagamenti"
            StartIcon={MailOutlineRoundedIcon}
            isSelected={selected === 'pagamenti'}
            onClick={() => setSelected('pagamenti')}
          />
          <SidenavItem
            component="button"
            label="Notifiche"
            StartIcon={MailOutlineRoundedIcon}
            notification={8}
            isSelected={selected === 'notifiche'}
            onClick={() => setSelected('notifiche')}
          />
          <SidenavItem
            component="button"
            label="Documenti"
            StartIcon={SettingsRoundedIcon}
            isSelected={selected === 'documenti'}
            onClick={() => setSelected('documenti')}
          />
          <SidenavItem
            component="button"
            label="Impostazioni"
            StartIcon={SettingsRoundedIcon}
            divider
            isSelected={selected === 'impostazioni'}
            onClick={() => setSelected('impostazioni')}
          />
          <SidenavItem
            component="button"
            label="Esci"
            StartIcon={ExitToAppRoundedIcon}
            isSelected={selected === 'esci'}
            onClick={() => setSelected('esci')}
          />
        </Sidenav>
      </Box>
    );
  },
};

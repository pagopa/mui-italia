import { Meta, StoryFn } from '@storybook/react-vite';

import { Sidenav, SidenavItem } from '@components/Sidenav';
import { SidenavItemGroup } from '@components/Sidenav/SidenavItemGroup';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import PeopleIcon from '@mui/icons-material/People';
import Divider from '@mui/material/Divider';
import { useState, useCallback } from 'react';
import ApprovalIcon from '@mui/icons-material/Approval';
import ContactsIcon from '@mui/icons-material/Contacts';
import ApiIcon from '@mui/icons-material/Api';
import MonitorIcon from '@mui/icons-material/Monitor';
import FolderIcon from '@mui/icons-material/Folder';
import SettingsIcon from '@mui/icons-material/Settings';

export default {
  title: 'Mui Components/Surfaces/Sidenav 2.0',
  component: Sidenav,
  parameters: { controls: { sort: 'size' } },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '2em',
          backgroundColor: '#F5F5F5',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Sidenav>;

export const Default: StoryFn<typeof Sidenav> = () => {
  const [open, setIsOpen] = useState(true);
  const [isSelectedItem, setIsSelectedItem] = useState<number | null>(null);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    notifiche: false,
  });

  const handleExpandParent = useCallback((groupKey: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupKey]: !prev[groupKey],
    }));
  }, []);

  // Check if any child of the group is selected
  const isGroupSelected = (childIds: number[]) => {
    return isSelectedItem !== null && childIds.includes(isSelectedItem);
  };

  const handleChildSelect = (itemId: number, groupKey: string) => {
    setIsSelectedItem(itemId);
    // Auto-expand parent when a child is selected
    if (!expandedGroups[groupKey]) {
      setExpandedGroups((prev) => ({
        ...prev,
        [groupKey]: true,
      }));
    }
  };

  return (
    <Sidenav labelMobile="open" mobile={false} onSidenavOpen={setIsOpen} open={open}>
      <SidenavItemGroup
        label="Notifiche"
        icon={LightbulbOutlinedIcon}
        isExpanded={expandedGroups.notifiche}
        isSelected={isGroupSelected([0, 1])}
        handleExpandParent={() => handleExpandParent('notifiche')}
        renderOnCollapsed={<div>TODO</div>}
      >
        <SidenavItem
          label="Notifiche dell'impresa"
          isSelected={isSelectedItem === 0}
          onClick={() => handleChildSelect(0, 'notifiche')}
        />
        <SidenavItem
          label="Notifiche delegate"
          isSelected={isSelectedItem === 1}
          onClick={() => handleChildSelect(1, 'notifiche')}
        />
      </SidenavItemGroup>
      <SidenavItem
        label="Deleghe"
        StartIcon={ApprovalIcon}
        isSelected={isSelectedItem === 2}
        onClick={() => setIsSelectedItem(2)}
      />
      <SidenavItem
        label="I tuoi recapiti"
        component="button"
        StartIcon={ContactsIcon}
        isSelected={isSelectedItem === 3}
        onClick={() => setIsSelectedItem(3)}
      />
      <SidenavItem
        label="Integrazione API"
        StartIcon={ApiIcon}
        isSelected={isSelectedItem === 4}
        onClick={() => setIsSelectedItem(4)}
      />
      <SidenavItem
        label="Stato della piattaforma"
        StartIcon={MonitorIcon}
        isSelected={isSelectedItem === 5}
        onClick={() => setIsSelectedItem(5)}
      />
      <Divider orientation="horizontal" />
      <SidenavItem
        href="https://www.pagopa.it/it/contatti/"
        label="Utenti"
        StartIcon={PeopleIcon}
        EndIcon={ExitToAppRoundedIcon}
      />
      <SidenavItem
        href="https://www.pagopa.it/it/contatti/"
        label="Gruppi"
        StartIcon={PeopleIcon}
        EndIcon={ExitToAppRoundedIcon}
        divider={false}
      />
    </Sidenav>
  );
};

/**
 * Story demonstrating multiple expandable groups with proper state management
 */
export const MultipleExpandableGroups: StoryFn<typeof Sidenav> = () => {
  const [open, setIsOpen] = useState(true);
  const [isSelectedItem, setIsSelectedItem] = useState<string | null>(null);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    notifiche: true,
    documenti: false,
    impostazioni: false,
  });

  const handleExpandParent = useCallback((groupKey: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupKey]: !prev[groupKey],
    }));
  }, []);

  const isGroupSelected = (childIds: string[]) => {
    return isSelectedItem !== null && childIds.includes(isSelectedItem);
  };

  const handleChildSelect = (itemId: string, groupKey: string) => {
    setIsSelectedItem(itemId);
    // Auto-expand parent when child is selected
    if (!expandedGroups[groupKey]) {
      setExpandedGroups((prev) => ({
        ...prev,
        [groupKey]: true,
      }));
    }
  };

  return (
    <Sidenav labelMobile="open" mobile={false} onSidenavOpen={setIsOpen} open={open}>
      <SidenavItemGroup
        label="Notifiche"
        icon={LightbulbOutlinedIcon}
        isExpanded={expandedGroups.notifiche}
        isSelected={isGroupSelected(['notifiche', 'notifiche-impresa', 'notifiche-delegate'])}
        handleExpandParent={() => handleExpandParent('notifiche')}
        renderOnCollapsed={<div>Notifiche</div>}
      >
        <SidenavItem
          label="Notifiche dell'impresa"
          isSelected={isSelectedItem === 'notifiche-impresa'}
          onClick={() => handleChildSelect('notifiche-impresa', 'notifiche')}
        />
        <SidenavItem
          label="Notifiche delegate"
          isSelected={isSelectedItem === 'notifiche-delegate'}
          onClick={() => handleChildSelect('notifiche-delegate', 'notifiche')}
        />
      </SidenavItemGroup>

      <SidenavItemGroup
        label="Documenti"
        icon={FolderIcon}
        isExpanded={expandedGroups.documenti}
        isSelected={isGroupSelected(['doc-ricevuti', 'doc-inviati', 'doc-archiviati'])}
        handleExpandParent={() => handleExpandParent('documenti')}
        renderOnCollapsed={<div>Documenti</div>}
      >
        <SidenavItem
          label="Ricevuti"
          isSelected={isSelectedItem === 'doc-ricevuti'}
          onClick={() => handleChildSelect('doc-ricevuti', 'documenti')}
        />
        <SidenavItem
          label="Inviati"
          isSelected={isSelectedItem === 'doc-inviati'}
          onClick={() => handleChildSelect('doc-inviati', 'documenti')}
        />
        <SidenavItem
          label="Archiviati"
          isSelected={isSelectedItem === 'doc-archiviati'}
          onClick={() => handleChildSelect('doc-archiviati', 'documenti')}
        />
      </SidenavItemGroup>

      <SidenavItemGroup
        label="Impostazioni"
        icon={SettingsIcon}
        isExpanded={expandedGroups.impostazioni}
        isSelected={isGroupSelected([
          'settings-profilo',
          'settings-sicurezza',
          'settings-notifiche',
        ])}
        handleExpandParent={() => handleExpandParent('impostazioni')}
        renderOnCollapsed={<div>Impostazioni</div>}
      >
        <SidenavItem
          label="Profilo"
          isSelected={isSelectedItem === 'settings-profilo'}
          onClick={() => handleChildSelect('settings-profilo', 'impostazioni')}
        />
        <SidenavItem
          label="Sicurezza"
          isSelected={isSelectedItem === 'settings-sicurezza'}
          onClick={() => handleChildSelect('settings-sicurezza', 'impostazioni')}
        />
        <SidenavItem
          label="Preferenze notifiche"
          isSelected={isSelectedItem === 'settings-notifiche'}
          onClick={() => handleChildSelect('settings-notifiche', 'impostazioni')}
        />
      </SidenavItemGroup>

      <Divider orientation="horizontal" />
      <SidenavItem
        label="Esci"
        StartIcon={ExitToAppRoundedIcon}
        isSelected={isSelectedItem === 'logout'}
        onClick={() => setIsSelectedItem('logout')}
      />
    </Sidenav>
  );
};

/**
 * Story demonstrating accordion behavior - only one group expanded at a time
 */
export const AccordionBehavior: StoryFn<typeof Sidenav> = () => {
  const [open, setIsOpen] = useState(true);
  const [isSelectedItem, setIsSelectedItem] = useState<string | null>(null);
  const [expandedGroup, setExpandedGroup] = useState<string | null>('notifiche');

  // Accordion behavior: only one group can be expanded at a time
  const handleExpandParent = useCallback((groupKey: string) => {
    setExpandedGroup((prev) => (prev === groupKey ? null : groupKey));
  }, []);

  const isGroupSelected = (childIds: string[]) => {
    return isSelectedItem !== null && childIds.includes(isSelectedItem);
  };

  const handleChildSelect = (itemId: string, groupKey: string) => {
    setIsSelectedItem(itemId);
    // Auto-expand parent when child is selected
    if (expandedGroup !== groupKey) {
      setExpandedGroup(groupKey);
    }
  };

  return (
    <Sidenav labelMobile="open" mobile={false} onSidenavOpen={setIsOpen} open={open}>
      <SidenavItemGroup
        label="Notifiche"
        icon={LightbulbOutlinedIcon}
        isExpanded={expandedGroup === 'notifiche'}
        isSelected={isGroupSelected(['notifiche-impresa', 'notifiche-delegate'])}
        handleExpandParent={() => handleExpandParent('notifiche')}
        renderOnCollapsed={<div>Notifiche</div>}
      >
        <SidenavItem
          label="Notifiche dell'impresa"
          isSelected={isSelectedItem === 'notifiche-impresa'}
          onClick={() => handleChildSelect('notifiche-impresa', 'notifiche')}
        />
        <SidenavItem
          label="Notifiche delegate"
          isSelected={isSelectedItem === 'notifiche-delegate'}
          onClick={() => handleChildSelect('notifiche-delegate', 'notifiche')}
        />
      </SidenavItemGroup>

      <SidenavItemGroup
        label="Documenti"
        icon={FolderIcon}
        isExpanded={expandedGroup === 'documenti'}
        isSelected={isGroupSelected(['doc-ricevuti', 'doc-inviati'])}
        handleExpandParent={() => handleExpandParent('documenti')}
        renderOnCollapsed={<div>Documenti</div>}
      >
        <SidenavItem
          label="Ricevuti"
          isSelected={isSelectedItem === 'doc-ricevuti'}
          onClick={() => handleChildSelect('doc-ricevuti', 'documenti')}
        />
        <SidenavItem
          label="Inviati"
          isSelected={isSelectedItem === 'doc-inviati'}
          onClick={() => handleChildSelect('doc-inviati', 'documenti')}
        />
      </SidenavItemGroup>

      <SidenavItemGroup
        label="Impostazioni"
        icon={SettingsIcon}
        isExpanded={expandedGroup === 'impostazioni'}
        isSelected={isGroupSelected(['settings-profilo', 'settings-sicurezza'])}
        handleExpandParent={() => handleExpandParent('impostazioni')}
        renderOnCollapsed={<div>Impostazioni</div>}
      >
        <SidenavItem
          label="Profilo"
          isSelected={isSelectedItem === 'settings-profilo'}
          onClick={() => handleChildSelect('settings-profilo', 'impostazioni')}
        />
        <SidenavItem
          label="Sicurezza"
          isSelected={isSelectedItem === 'settings-sicurezza'}
          onClick={() => handleChildSelect('settings-sicurezza', 'impostazioni')}
        />
      </SidenavItemGroup>
    </Sidenav>
  );
};

/**
 * Story with pre-selected child item (parent auto-expanded)
 */
export const WithPreSelectedChild: StoryFn<typeof Sidenav> = () => {
  const [open, setIsOpen] = useState(true);
  // Pre-select a child item
  const [isSelectedItem, setIsSelectedItem] = useState<string | null>('notifiche-delegate');
  // Pre-expand the parent of the selected child
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    notifiche: true, // Auto-expanded because child is selected
    documenti: false,
  });

  const handleExpandParent = useCallback((groupKey: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupKey]: !prev[groupKey],
    }));
  }, []);

  const isGroupSelected = (childIds: string[]) => {
    return isSelectedItem !== null && childIds.includes(isSelectedItem);
  };

  const handleChildSelect = (itemId: string, groupKey: string) => {
    setIsSelectedItem(itemId);
    if (!expandedGroups[groupKey]) {
      setExpandedGroups((prev) => ({
        ...prev,
        [groupKey]: true,
      }));
    }
  };

  return (
    <Sidenav labelMobile="open" mobile={false} onSidenavOpen={setIsOpen} open={open}>
      <SidenavItemGroup
        label="Notifiche"
        icon={LightbulbOutlinedIcon}
        isExpanded={expandedGroups.notifiche}
        isSelected={isGroupSelected(['notifiche-impresa', 'notifiche-delegate'])}
        handleExpandParent={() => handleExpandParent('notifiche')}
        renderOnCollapsed={<div>Notifiche</div>}
      >
        <SidenavItem
          label="Notifiche dell'impresa"
          isSelected={isSelectedItem === 'notifiche-impresa'}
          onClick={() => handleChildSelect('notifiche-impresa', 'notifiche')}
        />
        <SidenavItem
          label="Notifiche delegate"
          isSelected={isSelectedItem === 'notifiche-delegate'}
          onClick={() => handleChildSelect('notifiche-delegate', 'notifiche')}
        />
      </SidenavItemGroup>

      <SidenavItemGroup
        label="Documenti"
        icon={FolderIcon}
        isExpanded={expandedGroups.documenti}
        isSelected={isGroupSelected(['doc-ricevuti', 'doc-inviati'])}
        handleExpandParent={() => handleExpandParent('documenti')}
        renderOnCollapsed={<div>Documenti</div>}
      >
        <SidenavItem
          label="Ricevuti"
          isSelected={isSelectedItem === 'doc-ricevuti'}
          onClick={() => handleChildSelect('doc-ricevuti', 'documenti')}
        />
        <SidenavItem
          label="Inviati"
          isSelected={isSelectedItem === 'doc-inviati'}
          onClick={() => handleChildSelect('doc-inviati', 'documenti')}
        />
      </SidenavItemGroup>

      <SidenavItem
        label="Deleghe"
        StartIcon={ApprovalIcon}
        isSelected={isSelectedItem === 'deleghe'}
        onClick={() => setIsSelectedItem('deleghe')}
      />
    </Sidenav>
  );
};

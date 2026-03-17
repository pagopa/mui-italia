import React from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Collapse,
  List,
  Stack,
  Divider,
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { type SvgIconComponent } from '@mui/icons-material';
import { useSidenavContext } from './Sidenav';
import { SidenavIcon } from './SidenavIcon';
import { blue } from 'theme/colors';

type SidenavItemGroupProps = {
  notification?: number;
  label: string;
  isExpanded: boolean;
  isSelected: boolean;
  icon: SvgIconComponent;
  divider?: boolean;
  children: React.ReactNode;
  handleExpandParent: () => void;
  renderOnCollapsed: React.ReactNode;
};

export const SidenavItemGroup: React.FC<SidenavItemGroupProps> = ({
  children,
  icon: StartIcon,
  isExpanded,
  isSelected,
  handleExpandParent,
  divider,
  label,
  notification,
  renderOnCollapsed,
}) => {
  const { open } = useSidenavContext();

  return open ? (
    <>
      <ListItem disablePadding>
        <ListItemButton
          data-testid="Sidenav-item-group-button"
          selected={isSelected}
          onClick={handleExpandParent}
          sx={{
            paddingRight: 6,
            '&.Mui-selected': {
              backgroundColor: blue[50],
              borderRight: `4px solid ${blue[500]}`,
              '& .MuiTypography-root': {
                fontWeight: 600,
                color: blue[500],
              },
              '& .MuiListItemIcon-root, & .MuiSvgIcon-root': {
                fill: blue[500],
                color: blue[500],
              },
            },
          }}
        >
          <Stack direction="row" sx={{ flexGrow: 1, paddingLeft: 2 }}>
            <SidenavIcon Icon={StartIcon} notification={notification} />
            {open && (
              <>
                <ListItemText
                  disableTypography
                  primary={<Typography fontWeight={600}>{label}</Typography>}
                />
                {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </>
            )}
          </Stack>
        </ListItemButton>
      </ListItem>
      {divider && <Divider data-testid="Sidenav-item-group-divider" sx={{ mb: 2 }} />}
      {open && (
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <List disablePadding>{children}</List>
        </Collapse>
      )}
    </>
  ) : (
    renderOnCollapsed
  );
};

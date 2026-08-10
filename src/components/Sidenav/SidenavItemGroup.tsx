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
  Tooltip,
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { type SvgIconComponent } from '@mui/icons-material';
import { useSidenavContext } from './Sidenav';
import { SidenavIcon } from './SidenavIcon';
import { colors } from 'theme/foundations/colors';

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
  handleExpandParent,
  divider,
  label,
  notification,
  renderOnCollapsed,
}) => {
  const { open } = useSidenavContext();

  if (!open) {
    return (
      <ListItem data-testid={label} sx={{ p: 0 }}>
        <Tooltip title={label} placement="right">
          <ListItemButton
            data-testid="Sidenav-item-group-button"
            onClick={handleExpandParent}
            sx={{ pl: 3 }}
          >
            {renderOnCollapsed}
          </ListItemButton>
        </Tooltip>
      </ListItem>
    );
  }

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          data-testid="Sidenav-item-group-button"
          onClick={handleExpandParent}
          sx={{
            paddingRight: 2,
          }}
        >
          <Stack direction="row" sx={{ flexGrow: 1, marginLeft: 1 }}>
            <SidenavIcon Icon={StartIcon} notification={notification} />
            <ListItemText
              disableTypography
              primary={
                <Typography color={colors.neutral.black} fontWeight={600}>
                  {label}
                </Typography>
              }
            />
            {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Stack>
        </ListItemButton>
      </ListItem>
      {divider && <Divider data-testid="Sidenav-item-group-divider" sx={{ mb: 2 }} />}
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <List disablePadding>{children}</List>
      </Collapse>
    </>
  );
};

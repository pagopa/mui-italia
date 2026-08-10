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
  useTheme,
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { type SvgIconComponent } from '@mui/icons-material';
import { useSidenavContext } from './Sidenav';
import { SidenavIcon } from './SidenavIcon';
import { colors } from 'theme/foundations/colors';
import { sidenavStyles } from './style/sidenav.styles';

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
  const theme = useTheme();
  const styles = sidenavStyles(theme, open);

  // when the group is expanded its children already show their own selected state,
  // so the group header itself should only be highlighted while collapsed
  const isGroupHighlighted = isSelected && !isExpanded;

  if (!open) {
    return (
      <ListItem data-testid={label} sx={{ p: 0 }}>
        <Tooltip title={label} placement="right">
          <ListItemButton
            data-testid="Sidenav-item-group-button"
            aria-selected={isGroupHighlighted}
            onClick={handleExpandParent}
            selected={isGroupHighlighted}
            sx={{
              pl: 3,
              ...(isGroupHighlighted && styles.itemButtonActive),
            }}
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
          selected={isGroupHighlighted}
          onClick={handleExpandParent}
          sx={{
            paddingRight: 2,
            '&.Mui-selected': {
              backgroundColor: colors.blue[50],
              borderRight: `4px solid ${colors.blue[500]}`,
              '& .MuiTypography-root': {
                fontWeight: 600,
                color: colors.blue[500],
              },
              '& .MuiListItemIcon-root, & .MuiSvgIcon-root': {
                fill: colors.blue[500],
                color: colors.blue[500],
              },
            },
          }}
        >
          <Stack direction="row" sx={{ flexGrow: 1, marginLeft: 1 }}>
            <SidenavIcon Icon={StartIcon} notification={notification} />
            <ListItemText
              disableTypography
              primary={
                <Typography
                  color={isGroupHighlighted ? colors.blue[500] : colors.neutral.black}
                  fontWeight={600}
                >
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

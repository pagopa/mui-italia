import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { BadgeNotification } from './BadgeNotification';
import { sidenavStyles } from './style/sidenav.styles';
import type { SvgIconComponent } from '@mui/icons-material';
import { SidenavIcon } from './SidenavIcon';
import { useSidenavContext } from './Sidenav';
import { colors } from 'theme/foundations/colors';
import { MIChip } from '@components/MIChip';

type PolymorphicProps<C extends ElementType, P = {}> = P & { component?: C } & Omit<
    ComponentPropsWithoutRef<C>,
    keyof P | 'component'
  >;

export type SidenavItem<C extends ElementType = 'a'> = PolymorphicProps<
  C,
  {
    StartIcon?: SvgIconComponent;
    EndIcon?: SvgIconComponent;
    typographyProps?: ComponentPropsWithoutRef<typeof Typography>;
    disabled?: boolean;
    label: string;
    notification?: number;
    isSelected?: boolean;
    divider?: boolean;
    chipProps?: ComponentPropsWithoutRef<typeof MIChip>;
  }
>;

export function SidenavItem<C extends ElementType = 'a'>({
  isSelected,
  component,
  StartIcon,
  EndIcon,
  disabled,
  typographyProps,
  label,
  notification,
  divider = false,
  chipProps,
  ...props
}: SidenavItem<C>) {
  const theme = useTheme();
  const { open } = useSidenavContext();
  const styles = sidenavStyles(theme, open);

  return (
    <>
      <ListItem data-testid={label} sx={{ p: 0 }}>
        <Tooltip data-testid="sidebar-icon" title={label} placement="right">
          <ListItemButton
            aria-selected={isSelected}
            component={component ?? 'a'}
            to={props.to}
            sx={{
              flexWrap: 'wrap',
              pl: 3,
              '.MuiCollapse-root &': {
                pl: 2,
              },
              ...(isSelected && styles.itemButtonActive),
            }}
            selected={isSelected}
            disabled={disabled}
            {...props}
          >
            {StartIcon && <SidenavIcon Icon={StartIcon} />}

            {open && (
              <ListItemText
                disableTypography
                sx={{
                  '.MuiCollapse-root &': {
                    marginLeft: 6,
                  },
                }}
                primary={
                  <Typography
                    color={isSelected ? colors.blue[500] : colors.neutral.black}
                    {...typographyProps}
                    sx={{
                      fontWeight: 600,
                      ...typographyProps?.sx,
                    }}
                  >
                    {label}
                  </Typography>
                }
              />
            )}
            {open && notification !== undefined && notification !== 0 && (
              <BadgeNotification badgeContent={notification} />
            )}
            {open && chipProps && <MIChip {...chipProps} />}
            {open && EndIcon && (
              <ListItemIcon>
                <EndIcon data-testid="itemlink-end-icon" fontSize="inherit" color="action" />
              </ListItemIcon>
            )}
          </ListItemButton>
        </Tooltip>
      </ListItem>
      {divider && <Divider sx={{ my: 1 }} />}
    </>
  );
}

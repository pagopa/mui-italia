import { Divider, IconButton, List, Tooltip, Typography, useTheme } from '@mui/material';
import { Box, Stack } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { sidenavStyles } from './style/sidenav.styles';
import { SidenavContextProps } from './SidenavContext';
import { SidenavContext } from './SidenavContext';

const { Provider, useContext } = SidenavContext('SidenavContext', {
  mobile: false,
  open: true,
  onSidenavOpen: () => {},
});

export { useContext as useSidenavContext };

type SidenavContextProviderProps = {
  children: React.ReactNode;
  open: boolean;
  onSidenavOpen: (value: boolean) => void;
  mobile: boolean;
};
const SidenavContextProvider: React.FC<SidenavContextProviderProps> = ({
  children,
  open,
  onSidenavOpen,
  mobile,
}) => {
  const providerValue = React.useMemo(() => {
    return {
      open,
      onSidenavOpen,
      mobile,
    };
  }, [open, onSidenavOpen, mobile]);

  return <Provider value={providerValue}>{children}</Provider>;
};

export function Sidenav({
  children,
  open,
  onSidenavOpen,
  mobile,
  labelMobile,
}: SidenavContextProps & { children: React.ReactNode; labelMobile: string }) {
  const theme = useTheme();

  const styles = sidenavStyles(theme, open);

  return (
    <SidenavContextProvider mobile={mobile} open={open} onSidenavOpen={onSidenavOpen}>
      {!mobile ? (
        <Box sx={styles.container} component="aside">
          <Stack component="nav" role="navigation" aria-expanded={!open}>
            <List disablePadding sx={{ marginTop: 1 }}>
              {children}
            </List>
            <HamburgerBox open={open} handleSidenavOpen={() => onSidenavOpen(!open)} />
          </Stack>
        </Box>
      ) : (
        <SidenavMobile labelMobile={labelMobile}>{children}</SidenavMobile>
      )}
    </SidenavContextProvider>
  );
}

type HamburgerMenuBoxProps = {
  open: boolean;
  handleSidenavOpen: () => void;
};

const HamburgerBox: React.FC<HamburgerMenuBoxProps> = ({ open, handleSidenavOpen }) => {
  const theme = useTheme();
  const styles = sidenavStyles(theme, open);
  const tooltipTitle = open ? 'collapse' : 'expand'; // TO Change

  return (
    <Box sx={styles.hamburgerBox} data-testid="hamburger-box-icon">
      <Divider orientation="horizontal" />
      <Box sx={styles.hamburgerIcon}>
        <Tooltip placement="right" title={tooltipTitle}>
          <IconButton
            sx={{ padding: { xs: 1 } }}
            aria-label="open or close Sidenav"
            onClick={handleSidenavOpen}
            size="large"
          >
            <MenuIcon sx={{ fill: '#17324D' }} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

const SidenavMobile: React.FC<{ children: React.ReactNode; labelMobile: string }> = ({
  children,
  labelMobile,
}) => {
  const [isOpenSidenav, setIsOpenSidenav] = useState(false);

  const handleOpenSidenav = () => {
    setIsOpenSidenav(!isOpenSidenav);
  };

  return (
    <>
      <Box display="flex" flexDirection="row" padding={1}>
        <Tooltip placement="right" title="Menu">
          <IconButton
            sx={{ padding: { xs: 1 } }}
            data-testid="hamburger-mobile-icon"
            aria-label="hamburger-mobile-icon"
            onClick={handleOpenSidenav}
            size="large"
          >
            <MenuIcon color="disabled" />
          </IconButton>
        </Tooltip>
        <Typography ml={1} mt={1} variant="h6" component="h6">
          {labelMobile}
        </Typography>
      </Box>
      <Divider orientation="horizontal" component="div" />
      {isOpenSidenav && (
        <>
          <List disablePadding sx={{ marginTop: 1 }}>
            {children}
          </List>
        </>
      )}
    </>
  );
};

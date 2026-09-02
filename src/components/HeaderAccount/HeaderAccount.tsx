'use client';

import { AccountDropdown } from '@components/AccountDropdown';
import { ButtonNaked } from '@components/ButtonNaked';
import { Button, Container, IconButton, Stack } from '@mui/material';
import { ReactNode } from 'react';

/* Icons */
import {
  HelpOutlineRounded as HelpOutlineRoundedIcon,
  MenuBook as MenuBookIcon,
} from '@mui/icons-material';

export type JwtUser = {
  id: string;
  name?: string;
  surname?: string;
  email?: string;
};

export type UserAction = {
  id: string;
  icon: ReactNode;
  label: string;
  onClick: () => void;
};

export type RootLinkType = {
  label: string;
  href: string;
  ariaLabel: string;
  title: string;
};

const defaultTranslationsMap = {
  logIn: 'Accedi',
  logOut: 'Esci',
  assistance: 'Assistenza',
  documentation: 'Manuale operativo',
};

type HeaderAccountProps = {
  rootLink: RootLinkType;
  loggedUser?: JwtUser | false;
  onAssistanceClick: () => void;
  onLogin?: () => void;
  onLogout?: () => void;
  userActions?: Array<UserAction>;
  enableDropdown?: boolean;
  enableLogin?: boolean;
  enableAssistanceButton?: boolean;
  onDocumentationClick?: () => void;
  translationsMap?: {
    logIn?: string;
    logOut?: string;
    assistance?: string;
    documentation?: string;
  };
};

export const HeaderAccount = ({
  rootLink,
  loggedUser,
  userActions,
  onAssistanceClick,
  onDocumentationClick,
  onLogout,
  onLogin,
  enableDropdown = false,
  enableLogin = true,
  enableAssistanceButton = true,
  translationsMap = defaultTranslationsMap,
}: HeaderAccountProps) => (
  <Stack
    component="div"
    sx={{
      borderBottom: 1,
      borderColor: 'divider',
      backgroundColor: 'background.paper',
      minHeight: '48px',
      justifyContent: 'center',
    }}
  >
    <Container maxWidth={false}>
      <Stack
        spacing={2}
        direction="row"
        sx={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <ButtonNaked
          component="a"
          size="small"
          aria-label={rootLink.ariaLabel}
          href={rootLink.href}
          target="_blank"
          rel="noreferrer"
          title={rootLink.title}
          sx={{ fontWeight: 'bold' }}
        >
          {rootLink.label}
        </ButtonNaked>

        <Stack direction="row" spacing={{ xs: 1, sm: 3, md: 4 }} sx={{ alignItems: 'center' }}>
          {/* START Documentation MOBILE/DESKTOP */}
          {onDocumentationClick && (
            <>
              <ButtonNaked
                size="small"
                component="button"
                onClick={onDocumentationClick}
                startIcon={<MenuBookIcon />}
                sx={{ display: ['none', 'flex'] }}
                weight="default"
              >
                {translationsMap.documentation || defaultTranslationsMap.documentation}
              </ButtonNaked>
              <IconButton
                size="small"
                aria-label="Documentazione"
                sx={{ display: ['flex', 'none'], color: 'text.primary' }}
                onClick={onDocumentationClick}
              >
                <MenuBookIcon fontSize="inherit" />
              </IconButton>
            </>
          )}
          {/* END Documentation MOBILE/DESKTOP */}

          {/* START Assistance MOBILE/DESKTOP */}
          {enableAssistanceButton && (
            <>
              <ButtonNaked
                size="small"
                component="button"
                onClick={onAssistanceClick}
                startIcon={<HelpOutlineRoundedIcon />}
                sx={{ display: ['none', 'flex'] }}
                weight="default"
              >
                {translationsMap.assistance || defaultTranslationsMap.assistance}
              </ButtonNaked>
              <IconButton
                size="small"
                aria-label="Assistenza"
                sx={{ display: ['flex', 'none'], color: 'text.primary' }}
                onClick={onAssistanceClick}
              >
                <HelpOutlineRoundedIcon fontSize="inherit" />
              </IconButton>
            </>
          )}
          {/* END Assistance MOBILE/DESKTOP */}

          {/* DIFFERENT COMBINATIONS */}

          {/* 1. Logged User with Dropdown */}
          {enableLogin && loggedUser && enableDropdown && (
            <AccountDropdown user={loggedUser} userActions={userActions} />
          )}

          {/* 2. Logged User with Logout CTA */}
          {enableLogin && loggedUser && !enableDropdown && (
            <Button variant="text" size="small" onClick={onLogout} title="Esci">
              {translationsMap.logOut || defaultTranslationsMap.logOut}
            </Button>
          )}

          {/* 3. User not logged with Login CTA */}
          {enableLogin && !loggedUser && (
            <Button variant="contained" size="small" onClick={onLogin} title="Accedi">
              {translationsMap.logIn || defaultTranslationsMap.logIn}
            </Button>
          )}
        </Stack>
      </Stack>
    </Container>
  </Stack>
);

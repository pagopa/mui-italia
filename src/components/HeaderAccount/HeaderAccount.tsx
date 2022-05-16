import React from "react";
import { Container, Button, Stack, IconButton } from "@mui/material";
import { ButtonNaked } from "@components/ButtonNaked";
import { AccountDropdown } from "@components/AccountDropdown";

/* Icons */
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";

export type JwtUser = {
  id: string;
  name?: string;
  surname?: string;
  email?: string;
};

export type UserAction = {
  id: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
};

export type RootLinkType = {
  label: string;
  href: string;
  ariaLabel: string;
  title: string;
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
};

export const HeaderAccount = ({
  rootLink,
  loggedUser,
  userActions,
  onAssistanceClick,
  onLogout,
  onLogin,
  enableDropdown = false,
  enableLogin = true,
}: HeaderAccountProps) => (
  <Stack
    component="div"
    justifyContent="center"
    sx={{
      borderBottom: 1,
      borderColor: "divider",
      backgroundColor: "background.paper",
      minHeight: "48px",
    }}
  >
    <Container maxWidth={false}>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {rootLink && (
          <ButtonNaked
            component="a"
            size="small"
            aria-label={rootLink?.ariaLabel}
            href={rootLink?.href}
            target="_blank"
            rel="noreferrer"
            title={rootLink?.title}
            sx={{ fontWeight: "bold" }}
          >
            {rootLink?.label}
          </ButtonNaked>
        )}

        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 1, sm: 3, md: 4 }}
        >
          {/* START Assistance MOBILE/DESKTOP */}
          <ButtonNaked
            size="small"
            component="button"
            onClick={onAssistanceClick}
            startIcon={<HelpOutlineRoundedIcon />}
            sx={{ display: ["none", "flex"] }}
            weight="default"
          >
            Assistenza
          </ButtonNaked>
          <IconButton
            size="small"
            aria-label="Assistenza"
            sx={{ display: ["flex", "none"] }}
            onClick={onAssistanceClick}
          >
            <HelpOutlineRoundedIcon fontSize="inherit" />
          </IconButton>
          {/* END Assistance MOBILE/DESKTOP */}

          {/* DIFFERENT COMBINATIONS */}

          {/* 1. Logged User with Dropdown */}
          {enableLogin && loggedUser && enableDropdown && (
            <AccountDropdown user={loggedUser} userActions={userActions} />
          )}

          {/* 2. Logged User with Logout CTA */}
          {enableLogin && loggedUser && !enableDropdown && (
            <Button variant="text" size="small" onClick={onLogout} title="Esci">
              Esci
            </Button>
          )}

          {/* 3. User not logged with Login CTA */}
          {enableLogin && !loggedUser && (
            <Button
              variant="contained"
              size="small"
              onClick={onLogin}
              title="Accedi"
            >
              Accedi
            </Button>
          )}
        </Stack>
      </Stack>
    </Container>
  </Stack>
);

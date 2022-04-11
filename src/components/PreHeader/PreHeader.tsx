import React from "react";
import {
  Container,
  Button,
  Box,
  Stack,
  Link,
  Typography,
  IconButton,
} from "@mui/material";
import { HelpOutline as HelpOutlineIcon } from "@mui/icons-material";
import { ButtonNaked } from "@components/ButtonNaked";
import { AccountDropdown } from "@components/AccountDropdown";

export type JwtUser = {
  id: string;
  name?: string;
  surname?: string;
  email?: string;
};

type UserAction = {
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

type PreHeaderProps = {
  rootLink: RootLinkType;
  loggedUser?: JwtUser | false;
  onAssistanceClick: () => void;
  onLogin: () => void;
  userActions?: Array<UserAction>;
};

export const PreHeader = ({
  rootLink,
  loggedUser,
  userActions,
  onAssistanceClick,
  onLogin,
}: PreHeaderProps) => (
  <Stack
    component="header"
    justifyContent="center"
    sx={{
      borderBottom: 1,
      borderColor: "divider",
      backgroundColor: "background.paper",
      minHeight: "48px",
    }}
  >
    <Container>
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
            startIcon={<HelpOutlineIcon />}
            sx={{ display: ["none", "flex"] }}
          >
            Assistenza
          </ButtonNaked>
          <IconButton
            aria-label="Assistenza"
            size="small"
            sx={{ display: ["flex", "none"] }}
            onClick={onAssistanceClick}
          >
            <HelpOutlineIcon fontSize="inherit" />
          </IconButton>
          {/* END Assistance MOBILE/DESKTOP */}

          {loggedUser ? (
            <AccountDropdown user={loggedUser} userActions={userActions} />
          ) : (
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

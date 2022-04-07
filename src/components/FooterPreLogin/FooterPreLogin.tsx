import React from "react";
import { Stack, Box, Typography, Container, Link } from "@mui/material";
import { CompanyLinkType, LinkType } from "@components/Footer";
/* import { LangSwitch LangSwitchProps } from "@components/LangSwitch"; */

import { LogoPagoPACompany } from "@assets/LogoPagoPACompany";

type FooterPreLoginProps = /* LangSwitchProps &  */ {
  companyLink: CompanyLinkType;
  /* preLoginLinks: Array<FooterLinksType>; */
  onExit?: (href: string, linkType: LinkType) => void;
};

export const FooterPreLogin = ({
  /* ...langProps */
  companyLink,
  /* preLoginLinks, */
  onExit,
}: FooterPreLoginProps): JSX.Element => {
  const wrapHandleClick =
    (href: string, linkType: "internal" | "external") =>
    (e: React.SyntheticEvent) => {
      if (onExit) {
        e.preventDefault();
        onExit(href, linkType);
      }
    };

  return (
    <Box
      sx={{
        borderTop: 1,
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Container sx={{ py: 2 }}>
        <Stack
          spacing={3}
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          sx={{ alignItems: "center" }}
        >
          <Link
            component="button"
            aria-label={companyLink?.ariaLabel}
            onClick={wrapHandleClick(companyLink?.href, "external")}
            sx={{ display: "inline-flex" }}
          >
            <LogoPagoPACompany />
          </Link>

          <Stack
            spacing={2}
            direction={{ xs: "column", sm: "row" }}
            sx={{ alignItems: "center" }}
          >
            <Typography variant="body2">Pre Login Footer</Typography>

            {/* <LangSwitch {...langProps} /> */}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

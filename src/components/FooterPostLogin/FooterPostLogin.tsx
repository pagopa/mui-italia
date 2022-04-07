import React from "react";
import { Stack, Box, Container, Link } from "@mui/material";
import { CompanyLinkType, FooterLinksType, LinkType } from "@components/Footer";
import { LangSwitch /* LangSwitchProps */ } from "@components/LangSwitch";

import { LogoPagoPACompany } from "@assets/LogoPagoPACompany";

type FooterPostLoginProps = /* LangSwitchProps &  */ {
  companyLink: CompanyLinkType;
  postLoginLinks: Array<FooterLinksType>;
  onExit?: (href: string, linkType: LinkType) => void;
};

export const FooterPostLogin = ({
  companyLink,
  postLoginLinks,
  onExit,
  ...langProps
}: FooterPostLoginProps): JSX.Element => {
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
            {postLoginLinks.map(({ href, label, ariaLabel, linkType }, i) => (
              <Link
                aria-label={ariaLabel}
                component="button"
                onClick={wrapHandleClick(href, linkType as LinkType)}
                key={i}
                underline="none"
                color="text.primary"
                sx={{ display: "inline-block" }}
                variant="caption"
                fontWeight="700"
              >
                {label}
              </Link>
            ))}

            {/* <LangSwitch {...langProps} /> */}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

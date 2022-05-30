import React from "react";
import { Stack, Box, Container, Link } from "@mui/material";
import { CompanyLinkType, FooterLinksType, LinkType } from "@components/Footer";
import { LangSwitch, LangSwitchProps } from "@components/LangSwitch";

import { LogoPagoPACompany } from "@assets/LogoPagoPACompany";

type FooterPostLoginProps = LangSwitchProps & {
  companyLink: CompanyLinkType;
  links: Array<FooterLinksType>;
  onExit?: (linkType: LinkType, href?: string) => void;
};

export const FooterPostLogin = ({
  companyLink,
  links,
  onExit,
  ...langProps
}: FooterPostLoginProps): JSX.Element => {
  const wrapHandleClick =
    (linkType: "internal" | "external", href?: string) =>
    (e: React.SyntheticEvent) => {
      if (onExit) {
        e.preventDefault();
        onExit(linkType, href);
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
      <Container maxWidth={false} sx={{ py: { xs: 3, md: 2 } }}>
        <Stack
          spacing={{ xs: 4, md: 3 }}
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          sx={{ alignItems: "center" }}
        >
          <Link
            component="button"
            aria-label={companyLink?.ariaLabel}
            onClick={wrapHandleClick("external", companyLink?.href)}
            sx={{ display: "inline-flex" }}
          >
            <LogoPagoPACompany />
          </Link>

          <Stack
            spacing={{ xs: 1, md: 3 }}
            direction={{ xs: "column", md: "row" }}
            sx={{ alignItems: "center" }}
          >
            {links.map(({ href, label, ariaLabel, linkType }, i) => (
              <Link
                aria-label={ariaLabel}
                component="button"
                onClick={wrapHandleClick(linkType, href)}
                key={i}
                underline="none"
                color="text.primary"
                sx={{ display: "inline-block" }}
                variant="subtitle2"
              >
                {label}
              </Link>
            ))}

            <LangSwitch {...langProps} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

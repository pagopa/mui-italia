import React from "react";
import { Stack, Box, Container, Link } from "@mui/material";
import { CompanyLinkType, FooterLinksType, LinkType } from "@components/Footer";
import { LangSwitch, LangSwitchProps } from "@components/LangSwitch";

import { LogoPagoPACompany } from "@assets/LogoPagoPACompany";

type FooterPostLoginProps = LangSwitchProps & {
  companyLink: CompanyLinkType;
  links: Array<FooterLinksType>;
  onExit?: (href: string, linkType: LinkType) => void;
};

export const FooterPostLogin = ({
  companyLink,
  links,
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
      <Container sx={{ py: { xs: 3, sm: 2 } }}>
        <Stack
          spacing={{ xs: 4, sm: 3 }}
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
            spacing={{ xs: 1, sm: 3 }}
            direction={{ xs: "column", sm: "row" }}
            sx={{ alignItems: "center" }}
          >
            {links.map(({ href, label, ariaLabel, linkType }, i) => (
              <Link
                aria-label={ariaLabel}
                component="button"
                onClick={wrapHandleClick(href, linkType)}
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

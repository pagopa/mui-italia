import React from "react";
import { Stack, Box, Link } from "@mui/material";
import { CompanyLinkType, FooterLinksType, LinkType } from "@components/Footer";
import { LangSwitch, LangSwitchProps } from "@components/LangSwitch";

import { LogoPagoPACompany } from "@assets/LogoPagoPACompany";

type FooterCheckoutProps = LangSwitchProps & {
  companyLink: CompanyLinkType;
  links: Array<FooterLinksType>;
  onExit?: (linkType: LinkType, href?: string) => void;
};

export const FooterCheckout = ({
  companyLink,
  links,
  onExit,
  ...langProps
}: FooterCheckoutProps): JSX.Element => {
  const wrapHandleClick =
    (linkType: "internal" | "external", href?: string) =>
    (e: React.SyntheticEvent) => {
      if (onExit) {
        e.preventDefault();
        onExit(linkType, href);
      }
    };

  return (
    <Box sx={{ p: 3, backgroundColor: "background.paper" }}>
      <Stack
        spacing={3}
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        sx={{ alignItems: "center" }}
      >
        <Stack
          spacing={{ xs: 1, sm: 3 }}
          direction={{ xs: "column", sm: "row" }}
          sx={{ alignItems: "center" }}
        >
          {links.map(({ href, label, ariaLabel, linkType }, i) => (
            <Link
              aria-label={ariaLabel}
              component="button"
              onClick={wrapHandleClick(linkType as LinkType, href)}
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

        <Link
          component="button"
          aria-label={companyLink?.ariaLabel}
          onClick={wrapHandleClick("external", companyLink?.href)}
          sx={{ display: "inline-flex" }}
        >
          <LogoPagoPACompany size={70} />
        </Link>
      </Stack>
    </Box>
  );
};

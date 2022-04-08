import React from "react";
import { Stack, Box, Link } from "@mui/material";
import { CompanyLinkType, FooterLinksType, LinkType } from "@components/Footer";
import { LangSwitch, LangSwitchProps } from "@components/LangSwitch";

import { LogoPagoPACompany } from "@assets/LogoPagoPACompany";

type FooterCheckoutProps = LangSwitchProps & {
  companyLink: CompanyLinkType;
  links: Array<FooterLinksType>;
  onExit?: (href: string, linkType: LinkType) => void;
};

export const FooterCheckout = ({
  companyLink,
  links,
  onExit,
  ...langProps
}: FooterCheckoutProps): JSX.Element => {
  const wrapHandleClick =
    (href: string, linkType: "internal" | "external") =>
    (e: React.SyntheticEvent) => {
      if (onExit) {
        e.preventDefault();
        onExit(href, linkType);
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
              onClick={wrapHandleClick(href, linkType as LinkType)}
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
          onClick={wrapHandleClick(companyLink?.href, "external")}
          sx={{ display: "inline-flex" }}
        >
          <LogoPagoPACompany size={70} />
        </Link>
      </Stack>
    </Box>
  );
};

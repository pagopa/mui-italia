import { Stack, Box, Link } from "@mui/material";
import { CompanyLinkType, FooterLinksType } from "@components/Footer";
import { LangSwitch, LangSwitchProps } from "@components/LangSwitch";

import { LogoPagoPACompany } from "@assets/LogoPagoPACompany";
import wrapHandleClick from "utils/ts-utils";

type FooterCheckoutProps = LangSwitchProps & {
  companyLink: CompanyLinkType;
  links: Array<FooterLinksType>;
  onExit?: (exitAction: () => void) => void;
};

export const FooterCheckout = ({
  companyLink,
  links,
  onExit,
  ...langProps
}: FooterCheckoutProps): JSX.Element => (
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
        {links.map(
          ({ href = "javascript:void(0)", label, ariaLabel, onClick }, i) => (
            <Link
              aria-label={ariaLabel}
              component="button"
              href={href}
              onClick={wrapHandleClick(href, onClick, onExit)}
              key={i}
              underline="none"
              color="text.primary"
              sx={{ display: "inline-block" }}
              variant="subtitle2"
            >
              {label}
            </Link>
          )
        )}

        <LangSwitch {...langProps} />
      </Stack>

      {companyLink && (
        <Link
          component="button"
          aria-label={companyLink?.ariaLabel}
          href={companyLink?.href}
          onClick={wrapHandleClick(companyLink.href, undefined, onExit)}
          sx={{ display: "inline-flex" }}
        >
          <LogoPagoPACompany size={70} />
        </Link>
      )}
    </Stack>
  </Box>
);

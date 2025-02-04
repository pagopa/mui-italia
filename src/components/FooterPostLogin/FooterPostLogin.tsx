"use client";

import { Stack, Box, Container, Link } from "@mui/material";
import { CompanyLinkType, FooterLinksType } from "@components/Footer";
import { LangSwitch, LangSwitchProps } from "@components/LangSwitch";

import { hrefNoOp, wrapHandleExitAction } from "utils/ts-utils";
import { CompanyLogo } from "@components/CompanyLogo";

type FooterPostLoginProps = LangSwitchProps & {
  companyLink: CompanyLinkType;
  links: Array<FooterLinksType>;
  onExit?: (exitAction: () => void) => void;
};

export const FooterPostLogin = ({
  companyLink,
  links,
  onExit,
  ...langProps
}: FooterPostLoginProps): JSX.Element => (
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
        {companyLink && (
          <Link
            aria-label={companyLink?.ariaLabel}
            href={companyLink?.href ?? hrefNoOp}
            onClick={wrapHandleExitAction(
              companyLink.href ?? hrefNoOp,
              companyLink.onClick,
              onExit
            )}
            sx={{ display: "inline-flex" }}
          >
            <CompanyLogo {...companyLink?.image} />
          </Link>
        )}

        <Stack
          spacing={{ xs: 1, md: 3 }}
          direction={{ xs: "column", md: "row" }}
          sx={{ alignItems: "center" }}
        >
          {links.map(({ href = hrefNoOp, label, ariaLabel, onClick }, i) => (
            <Link
              aria-label={ariaLabel}
              href={href}
              onClick={wrapHandleExitAction(href, onClick, onExit)}
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

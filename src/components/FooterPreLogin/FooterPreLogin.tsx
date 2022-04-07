import React from "react";
import { Grid, Stack, Box, Typography, Container, Link } from "@mui/material";
import {
  CompanyLinkType,
  LinkType,
  PreLoginFooterLinksType,
} from "@components/Footer";
/* import { LangSwitch LangSwitchProps } from "@components/LangSwitch"; */

/* Icons */
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import { LogoPagoPACompany } from "@assets/LogoPagoPACompany";
import { FundedByNextGenerationEU } from "@assets/FundedByNextGenerationEU";

type FooterPreLoginProps = /* LangSwitchProps &  */ {
  companyLink: CompanyLinkType;
  links: PreLoginFooterLinksType;
  onExit?: (href: string, linkType: LinkType) => void;
};

export const FooterPreLogin = ({
  /* ...langProps */
  companyLink,
  links,
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
  const { aboutUs, productsAndServices, resources, followUs } = links;

  interface iconMapObject {
    [key: string]: JSX.Element;
  }

  const iconMap: iconMapObject = {
    linkedin: <LinkedIcon />,
    twitter: <TwitterIcon />,
    instagram: <InstagramIcon />,
  };

  return (
    <Box
      sx={{
        borderTop: 1,
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Container sx={{ py: 8 }}>
        <Grid container spacing={{ xs: 6, sm: 3 }}>
          <Grid item xs={12} sm={3}>
            <Stack spacing={2} alignItems={{ xs: "center", sm: "start" }}>
              <Link
                component="button"
                aria-label={companyLink?.ariaLabel}
                onClick={wrapHandleClick(companyLink?.href, "external")}
                sx={{ display: "inline-flex" }}
              >
                <LogoPagoPACompany />
              </Link>

              <Stack
                spacing={1}
                component="ul"
                alignItems={{ xs: "center", sm: "start" }}
                sx={{ padding: 0, listStyle: "none" }}
              >
                {aboutUs?.links.map(
                  ({ href, label, ariaLabel, linkType }, i) => (
                    <li key={i}>
                      <Link
                        aria-label={ariaLabel}
                        component="a"
                        href={href}
                        onClick={wrapHandleClick(href, linkType as LinkType)}
                        underline="none"
                        color="text.primary"
                        sx={{ display: "inline-block" }}
                        variant="subtitle2"
                      >
                        {label}
                      </Link>
                    </li>
                  )
                )}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Stack spacing={2} alignItems={{ xs: "center", sm: "start" }}>
              {productsAndServices?.title && (
                <Typography variant="overline">
                  {productsAndServices.title}
                </Typography>
              )}

              <Stack
                spacing={1}
                component="ul"
                alignItems={{ xs: "center", sm: "start" }}
                sx={{ padding: 0, listStyle: "none" }}
              >
                {productsAndServices?.links.map(
                  ({ href, label, ariaLabel, linkType }, i) => (
                    <li key={i}>
                      <Link
                        aria-label={ariaLabel}
                        component="a"
                        href={href}
                        onClick={wrapHandleClick(href, linkType as LinkType)}
                        underline="none"
                        color="text.primary"
                        sx={{ display: "inline-block" }}
                        variant="subtitle2"
                      >
                        {label}
                      </Link>
                    </li>
                  )
                )}
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Stack spacing={2} alignItems={{ xs: "center", sm: "start" }}>
              {resources?.title && (
                <Typography variant="overline">{resources.title}</Typography>
              )}

              <Stack
                spacing={1}
                component="ul"
                alignItems={{ xs: "center", sm: "start" }}
                sx={{ padding: 0, listStyle: "none" }}
              >
                {resources?.links.map(
                  ({ href, label, ariaLabel, linkType }, i) => (
                    <li key={i}>
                      <Link
                        aria-label={ariaLabel}
                        component="a"
                        href={href}
                        onClick={wrapHandleClick(href, linkType as LinkType)}
                        underline="none"
                        color="text.primary"
                        sx={{ display: "inline-block" }}
                        variant="subtitle2"
                      >
                        {label}
                      </Link>
                    </li>
                  )
                )}
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Stack
              spacing={3}
              justifyContent="space-between"
              sx={{ height: "100%" }}
              alignItems={{ xs: "center", sm: "start" }}
            >
              <Stack alignItems={{ xs: "center", sm: "start" }}>
                {followUs?.title && (
                  <Typography variant="overline">{followUs.title}</Typography>
                )}

                <Stack
                  spacing={3}
                  direction="row"
                  component="ul"
                  alignItems={{ xs: "center", sm: "start" }}
                  sx={{ padding: 0, listStyle: "none" }}
                >
                  {followUs?.socialLinks.map(({ icon, href, ariaLabel }, i) => (
                    <li key={i}>
                      <Link
                        aria-label={ariaLabel}
                        component="button"
                        onClick={wrapHandleClick(href, "external")}
                        underline="none"
                        color="text.primary"
                        sx={{ display: "inline-flex" }}
                        variant="caption"
                      >
                        {icon && iconMap[icon]}
                      </Link>
                    </li>
                  ))}
                </Stack>

                <Stack
                  spacing={1}
                  component="ul"
                  alignItems={{ xs: "center", sm: "start" }}
                  sx={{ padding: 0, listStyle: "none" }}
                >
                  {followUs?.links.map(
                    ({ href, label, ariaLabel, linkType }, i) => (
                      <li key={i}>
                        <Link
                          aria-label={ariaLabel}
                          component="button"
                          onClick={wrapHandleClick(href, linkType as LinkType)}
                          underline="none"
                          color="text.primary"
                          sx={{ display: "inline-block" }}
                          variant="subtitle2"
                        >
                          {label}
                        </Link>
                      </li>
                    )
                  )}
                </Stack>

                {/* <LangSwitch {...langProps} /> */}
              </Stack>

              <FundedByNextGenerationEU size={180} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

"use client";

import { Box } from "@mui/material";
import { FooterLegal } from "@components/FooterLegal";
import { FooterPostLogin } from "@components/FooterPostLogin";
import { FooterPreLogin } from "@components/FooterPreLogin";
import { LangSwitchProps } from "@components/LangSwitch";

// We need to validate this. It might be possible that the fields differ from product to product
/* type JwtUser = {
  id: string; // the relationshipId between the user and the current institution
  name: string;
  surname: string;
  email: string;
}; */

export type LinkType = "internal" | "external";

type FooterProps = LangSwitchProps & {
  /* Waiting for the type of control (see JwtUser above),
  we use a simple Boolean prop */
  loggedUser: boolean;
  companyLink: CompanyLinkType;
  postLoginLinks: Array<FooterLinksType>;
  preLoginLinks: PreLoginFooterLinksType;
  legalInfo: JSX.Element | Array<JSX.Element>;
  onExit?: (exitAction: () => void) => void;
  productsJsonUrl?: string;
  onProductsJsonFetchError?: (reason: any) => void;
  hideProductsColumn?: boolean;
};

export type FooterLinksType = {
  label: string;
  /** the url to witch the user will be redirect */
  href?: string;
  ariaLabel: string;
  linkType: LinkType;
  /** if defined it will override the href behavior */
  onClick?: () => void;
};

export type PreLoginFooterSingleSectionType = {
  title?: string;
  links: Array<FooterLinksType>;
};

export type PreLoginFooterSocialLink = {
  icon: string;
  /** the url to witch the user will be redirect */
  href?: string;
  title: string;
  ariaLabel: string;
  /** if defined it will override the href behavior */
  onClick?: () => void;
};

export type PreLoginFooterLinksType = {
  aboutUs: PreLoginFooterSingleSectionType;
  resources: PreLoginFooterSingleSectionType;
  followUs: {
    title: string;
    socialLinks: Array<PreLoginFooterSocialLink>;
    links: Array<FooterLinksType>;
  };
};

export type CompanyLinkType = {
  /** the url to witch the user will be redirect */
  href?: string;
  ariaLabel: string;
  /** if defined it will override the href behavior */
  onClick?: () => void;
};

export const Footer = ({
  companyLink,
  postLoginLinks,
  preLoginLinks,
  legalInfo,
  loggedUser,
  onExit,
  languages,
  onLanguageChanged,
  currentLangCode,
  productsJsonUrl,
  onProductsJsonFetchError,
  hideProductsColumn,
}: FooterProps) => (
  <Box component="footer">
    {loggedUser ? (
      <FooterPostLogin
        companyLink={companyLink}
        links={postLoginLinks}
        onExit={onExit}
        languages={languages}
        onLanguageChanged={onLanguageChanged}
        currentLangCode={currentLangCode}
      />
    ) : (
      <FooterPreLogin
        companyLink={companyLink}
        links={preLoginLinks}
        languages={languages}
        onLanguageChanged={onLanguageChanged}
        currentLangCode={currentLangCode}
        productsJsonUrl={productsJsonUrl}
        onProductsJsonFetchError={onProductsJsonFetchError}
        hideProductsColumn={hideProductsColumn}
        onExit={onExit}
      />
    )}
    <FooterLegal content={legalInfo} />
  </Box>
);

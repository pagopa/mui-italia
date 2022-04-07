import { Box, Typography } from "@mui/material";
import { FooterLegal } from "@components/FooterLegal";
import { FooterPostLogin } from "@components/FooterPostLogin";
/* import { LangSwitchProps } from "@components/LangSwitch";  */

// We need to validate this. It might be possible that the fields differ from product to product
/* type JwtUser = {
  id: string; // the relationshipId between the user and the current institution
  name: string;
  surname: string;
  email: string;
}; */

export type LinkType = "internal" | "external";

type FooterProps = /* LangSwitchProps &  */ {
  /* Waiting for the kind of control (see JwtUser above),
  we use a simple Boolean prop */
  loggedUser?: boolean;
  companyLink: CompanyLinkType;
  postLoginLinks: Array<FooterLinksType>;
  /* preLoginLinks: Array<FooterLinksType>; */
  legalInfo: JSX.Element | Array<JSX.Element>;
  onExit?: (href: string, linkType: LinkType) => void;
};

export type FooterLinksType = {
  label: string;
  href: string;
  ariaLabel: string;
  linkType: LinkType;
};

export type CompanyLinkType = {
  href: string;
  ariaLabel: string;
};

export const Footer = ({
  /* ...langProps */
  companyLink,
  postLoginLinks,
  /* preLoginLinks, */
  legalInfo,
  loggedUser,
  onExit,
}: FooterProps) => (
  <Box component="footer">
    {loggedUser ? (
      <FooterPostLogin
        companyLink={companyLink}
        postLoginLinks={postLoginLinks}
        onExit={onExit}
      />
    ) : (
      <Box
        sx={{
          textAlign: "center",
          borderTop: 1,
          borderColor: "divider",
          backgroundColor: "background.paper",
          py: 2,
        }}
      >
        <Typography variant="h6">Pre Login Footer</Typography>
      </Box>
    )}
    {/* <FooterPreLogin companyLink={companyLink} /> */}
    <FooterLegal content={legalInfo} />
  </Box>
);

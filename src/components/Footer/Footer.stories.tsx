/* import { useState } from "react";  */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Footer, FooterLinksType, CompanyLinkType } from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <div style={{ padding: 0, backgroundColor: "#F5F5F5" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as ComponentMeta<typeof Footer>;

const companyLegalInfo = (
  <>
    <strong>PagoPA S.p.A.</strong> — società per azioni con socio unico -
    capitale sociale di euro 1,000,000 interamente versato - sede legale in
    Roma, Piazza Colonna 370,
    <br />
    CAP 00187 - n. di iscrizione a Registro Imprese di Roma, CF e P.IVA
    15376371009
  </>
);

/* 
Languages Section
*/
/* const LANGUAGES = {
  it: { it: "Italiano", en: "Inglese" },
  en: { it: "Italian", en: "English" },
}; */

/* type LangCode = "it" | "en"; */

/*
Links Section
*/
const pagoPALink: CompanyLinkType = {
  href: "https://www.pagopa.it/",
  ariaLabel: "Link: vai al sito di PagoPA S.p.A.",
};

const postLoginLinks: Array<FooterLinksType> = [
  {
    label: "Privacy policy",
    href: "#privacy-policy",
    ariaLabel: "Vai al link: Privacy policy",
    linkType: "internal",
  },
  {
    label: "Termini e condizioni",
    href: "#terms-conditions",
    ariaLabel: "Vai al link: Termini e condizioni",
    linkType: "internal",
  },
  {
    label: "Accessibilità",
    href: "#accessibility",
    ariaLabel: "Vai al link: Accessibilità",
    linkType: "internal",
  },
];

export const PreLogin: ComponentStory<typeof Footer> = () => (
  /* const { lang, setLang } = useState<LangCode>("it"); */

  <Footer
    loggedUser={false}
    companyLink={pagoPALink}
    legalInfo={companyLegalInfo}
    postLoginLinks={postLoginLinks}
    /* currentLangCode={lang} */
    /* onLanguageChanged={(newLang) => {
        setLang(newLang);
      }} */
    /*  languages={LANGUAGES} */
    onExit={(href, linkType) => {
      console.log("Clicked on exit", href, linkType);
    }}
  />
);

export const PostLogin: ComponentStory<typeof Footer> = () => (
  /* const { lang, setLang } = useState<LangCode>("it"); */

  <Footer
    loggedUser
    companyLink={pagoPALink}
    legalInfo={companyLegalInfo}
    postLoginLinks={postLoginLinks}
    /* currentLangCode={lang} */
    /* onLanguageChanged={(newLang) => {
        setLang(newLang);
      }} */
    /*  languages={LANGUAGES} */
    onExit={(href, linkType) => {
      console.log("Clicked on exit", href, linkType);
    }}
  />
);

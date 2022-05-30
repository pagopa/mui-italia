/* import { useState } from "react"; */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FooterCheckout } from "@components/FooterCheckout";
import {
  Footer,
  PreLoginFooterLinksType,
  FooterLinksType,
  CompanyLinkType,
} from "./Footer";

export default {
  title: "Components/Footer (WIP)",
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
  argTypes: {
    hideProductColums: {
      description:
        "If true, it will not render the products column. As default, the column will be visible",
    },
    productsJsonUrl: {
      description:
        "This URL contains a json with the list of products to list inside the Footer. By default it's set with https://selfcare.pagopa.it/assets/products.json",
    },
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
const LANGUAGES = {
  it: { it: "Italiano", en: "Inglese" },
  en: { it: "Italian", en: "English" },
};

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
    label: "Diritto alla protezione dei dati personali",
    href: "#diritto-allaprotezionedipersonalidati",
    ariaLabel: "Vai al link: Diritto alla protezione dei dati personali",
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

const checkoutLinks: Array<FooterLinksType> = [
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

const preLoginLinks: PreLoginFooterLinksType = {
  // First column
  aboutUs: {
    title: undefined,
    links: [
      {
        label: "Chi siamo",
        href: "#chi-siamo",
        ariaLabel: "Vai al link: Chi siamo",
        linkType: "internal",
      },
      {
        label: "PNRR",
        href: "#pnrr",
        ariaLabel: "Vai al link: PNRR",
        linkType: "internal",
      },
      {
        label: "Media",
        href: "#media",
        ariaLabel: "Vai al link: Media",
        linkType: "internal",
      },
      {
        label: "Lavora con noi",
        href: "#lavora-con-noi",
        ariaLabel: "Vai al link: Lavora con noi",
        linkType: "internal",
      },
    ],
  },
  // Third column
  resources: {
    title: "Risorse",
    links: [
      {
        label: "Privacy Policy",
        href: "#privacy-policy",
        ariaLabel: "Vai al link: Privacy Policy",
        linkType: "internal",
      },
      {
        label: "Certificazioni",
        href: "#certificazioni",
        ariaLabel: "Vai al link: Certificazioni",
        linkType: "internal",
      },
      {
        label: "Sicurezza delle informazioni",
        href: "#sicurezza-delle-informazioni",
        ariaLabel: "Vai al link: Sicurezza delle informazioni",
        linkType: "internal",
      },
      {
        label: "Diritto alla protezione dei dati personali",
        href: "#diritto-alla-protezione-dei-dati-personali",
        ariaLabel: "Vai al link: Diritto alla protezione dei dati personali",
        linkType: "internal",
      },
      {
        label: "Preferenze Cookie",
        href: "#preferenze-cookie",
        ariaLabel: "Vai al link: Preferenze Cookie",
        linkType: "internal",
      },
      {
        label: "Termini e Condizioni",
        href: "#terms-conditions",
        ariaLabel: "Vai al link: Termini e Condizioni",
        linkType: "internal",
      },
      {
        label: "Società trasparente",
        href: "#societa-trasparente",
        ariaLabel: "Vai al link: Società trasparente",
        linkType: "internal",
      },
      {
        label: "Responsible Disclosure Policy",
        href: "#responsible-disclosure-policy",
        ariaLabel: "Vai al link: Responsible Disclosure Policy",
        linkType: "internal",
      },
      {
        label: "Modello 321",
        href: "#modello-321",
        ariaLabel: "Vai al link: Modello 321",
        linkType: "internal",
      },
    ],
  },
  // Fourth column
  followUs: {
    title: "Seguici su",
    socialLinks: [
      {
        icon: "linkedin",
        title: "LinkedIn",
        href: "https://www.linkedin.com/company/pagopa/",
        ariaLabel: "Link: vai al sito LinkedIn di PagoPA S.p.A.",
      },
      {
        title: "Twitter",
        icon: "twitter",
        href: "https://twitter.com/pagopa",
        ariaLabel: "Link: vai al sito Twitter di PagoPA S.p.A.",
      },
      {
        icon: "instagram",
        title: "Instagram",
        href: "https://www.instagram.com/pagopa/",
        ariaLabel: "Link: vai al sito Instagram di PagoPA S.p.A.",
      },
      {
        icon: "medium",
        title: "Medium",
        href: "https://medium.com/pagopa",
        ariaLabel: "Link: vai al sito Medium di PagoPA S.p.A.",
      },
    ],
    links: [
      {
        label: "Accessibilità",
        href: "#accessibilità",
        ariaLabel: "Vai al link: Accessibilità",
        linkType: "internal",
      },
    ],
  },
};

export const PreLogin: ComponentStory<typeof Footer> = () => (
  /* const { lang, setLang } = useState<LangCode>("it"); */

  <Footer
    loggedUser={false}
    companyLink={pagoPALink}
    legalInfo={companyLegalInfo}
    postLoginLinks={postLoginLinks}
    preLoginLinks={preLoginLinks}
    currentLangCode={"it"}
    onLanguageChanged={
      (/* newLang */) => {
        console.log("Changed Language");
      }
    }
    languages={LANGUAGES}
    onExit={() => {
      console.log("Clicked on exit");
    }}
    productsJsonUrl="https://dev.selfcare.pagopa.it/assets/products.json"
    hideProductsColumn={false}
  />
);

export const PostLogin: ComponentStory<typeof Footer> = () => (
  /* const { lang, setLang } = useState<LangCode>("it"); */

  <Footer
    loggedUser
    companyLink={pagoPALink}
    legalInfo={companyLegalInfo}
    postLoginLinks={postLoginLinks}
    preLoginLinks={preLoginLinks}
    currentLangCode={"it"}
    onLanguageChanged={
      (/* newLang */) => {
        console.log("Changed Language");
      }
    }
    languages={LANGUAGES}
    onExit={() => {
      console.log("Clicked on exit");
    }}
    productsJsonUrl="https://dev.selfcare.pagopa.it/assets/products.json"
    hideProductsColumn={false}
  />
);

export const Checkout: ComponentStory<typeof FooterCheckout> = () => (
  /* const { lang, setLang } = useState<LangCode>("it"); */

  <FooterCheckout
    companyLink={pagoPALink}
    links={checkoutLinks}
    currentLangCode={"it"}
    onLanguageChanged={
      (/* newLang */) => {
        console.log("Changed Language");
      }
    }
    languages={LANGUAGES}
    onExit={() => {
      console.log("Clicked on exit");
    }}
  />
);

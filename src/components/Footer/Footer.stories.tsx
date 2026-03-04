import type { Meta, StoryObj } from '@storybook/react';
import { FooterCheckout } from '@components/FooterCheckout';
import { breakpointsChromaticValues } from '@theme';

import { Footer, PreLoginFooterLinksType, FooterLinksType, CompanyLinkType } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer (WIP)',
  component: Footer,
  decorators: [
    (Story) => (
      <div style={{ padding: 0, backgroundColor: '#F5F5F5' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: { hideNoControlsWarning: true },
    chromatic: {
      viewports: breakpointsChromaticValues,
    },
  },
  argTypes: {
    legalInfo: {
      control: false,
    },
    companyLink: {
      control: false,
    },
    loggedUser: {
      description:
        'If true, it renders the PostLogin version of the Footer. If false, it renders the PreLogin version.',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    hideProductsColumn: {
      description:
        'If true, it will not render the products column. As default, the column will be visible',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    productsTitle: {
      table: {
        defaultValue: {
          summary: 'Prodotti e Servizi',
        },
      },
    },
    productsJsonUrl: {
      description: 'This URL contains a json with the list of products to list inside the Footer.',
      table: {
        defaultValue: {
          summary: 'https://selfcare.pagopa.it/assets/products.json',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

const companyLegalInfo = (
  <span style={{ whiteSpace: 'pre-line' }}>
    <b>PagoPA S.p.A.</b> — società per azioni con socio unico - capitale sociale di euro 1,000,000
    interamente versato - sede legale in Roma, Piazza Colonna 370,
    {'\n'}
    CAP 00187 - n. di iscrizione a Registro Imprese di Roma, CF e P.IVA 15376371009
  </span>
);

/* 
Languages Section
*/
const LANGUAGES = {
  it: {
    it: 'Italiano',
    en: 'Inglese',
    fr: 'Francese',
  },
  en: {
    it: 'Italian',
    en: 'English',
    fr: 'French',
  },
  fr: {
    it: 'Italien',
    en: 'Anglais',
    fr: 'Français',
  },
};

const LANGUAGES_FLAT = {
  it: 'Italiano',
  en: 'English',
  fr: 'Français',
};

/* type LangCode = "it" | "en"; */

/*
Links Section
*/
const pagoPALink: CompanyLinkType = {
  href: 'https://www.pagopa.it/',
};

const postLoginLinks: Array<FooterLinksType> = [
  {
    label: 'Informativa Privacy',
    href: '#informativa-privacy',
    linkType: 'internal',
  },
  {
    label: 'Diritto alla protezione dei dati personali',
    href: '#diritto-allaprotezionedipersonalidati',
    linkType: 'internal',
  },
  {
    label: 'Termini e condizioni',
    href: '#terms-conditions',
    linkType: 'internal',
  },
  {
    label: 'Accessibilità',
    href: '#accessibility',
    linkType: 'internal',
  },
];

const checkoutLinks: Array<FooterLinksType> = [
  {
    label: 'Informativa Privacy',
    href: '#informativa-privacy',
    linkType: 'internal',
  },
  {
    label: 'Termini e condizioni',
    href: '#terms-conditions',
    linkType: 'internal',
  },
  {
    label: 'Accessibilità',
    href: '#accessibility',
    linkType: 'internal',
  },
];

const preLoginLinks: PreLoginFooterLinksType = {
  // First column
  aboutUs: {
    title: undefined,
    links: [
      {
        label: 'Chi siamo',
        href: '#chi-siamo',
        linkType: 'internal',
      },
      {
        label: 'PNRR',
        href: '#pnrr',
        linkType: 'internal',
      },
      {
        label: 'Media',
        href: '#media',
        linkType: 'internal',
      },
      {
        label: 'Lavora con noi',
        href: '#lavora-con-noi',
        linkType: 'internal',
      },
    ],
  },
  // Third column
  resources: {
    title: 'Risorse',
    links: [
      {
        label: 'Informativa Privacy',
        href: '#informativa-privacy',
        linkType: 'internal',
      },
      {
        label: 'Certificazioni',
        href: '#certificazioni',
        linkType: 'internal',
      },
      {
        label: 'Sicurezza delle informazioni',
        href: '#sicurezza-delle-informazioni',
        linkType: 'internal',
      },
      {
        label: 'Diritto alla protezione dei dati personali',
        linkType: 'internal',
        onClick: () => {
          console.log('onClick');
        },
      },
      {
        label: 'Preferenze Cookie',
        href: '#preferenze-cookie',
        linkType: 'internal',
        onClick: () => {
          console.log('onClick');
        },
      },
      {
        label: 'Termini e Condizioni',
        href: '#terms-conditions',
        linkType: 'internal',
      },
      {
        label: 'Società trasparente',
        href: '#societa-trasparente',
        linkType: 'internal',
      },
      {
        label: 'Responsible Disclosure Policy',
        href: '#responsible-disclosure-policy',
        linkType: 'internal',
      },
      {
        label: 'Modello 321',
        href: '#modello-321',
        linkType: 'internal',
      },
    ],
  },
  // Fourth column
  followUs: {
    title: 'Seguici su',
    socialLinks: [
      {
        icon: 'linkedin',
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/company/pagopa/',
      },
      {
        icon: 'instagram',
        title: 'Instagram',
        href: 'https://www.instagram.com/pagopaspa/',
      },
      {
        icon: 'threads',
        title: 'Threads',
        href: 'https://www.threads.net/@pagopaspa',
      },
      {
        icon: 'youtube',
        title: 'Youtube',
        href: 'https://www.youtube.com/channel/UCFBGOEJUPQ6t3xtZFc_UIEQ',
      },
      {
        icon: 'medium',
        title: 'Medium',
        href: 'https://pagopa.medium.com/',
      },
    ],
    links: [
      {
        label: 'Accessibilità',
        href: '#accessibilità',
        linkType: 'internal',
      },
    ],
  },
};

export const PreLogin: Story = {
  args: {
    loggedUser: false,
    companyLink: pagoPALink,
    legalInfo: companyLegalInfo,
    postLoginLinks,
    preLoginLinks,
    currentLangCode: 'it',
    onLanguageChanged: () => {
      console.log('Changed Language');
    },
    languages: LANGUAGES,
    onExit: (exitAction) => {
      console.log('Executing exit Action');
      exitAction();
    },
    productsJsonUrl: 'https://uat.selfcare.pagopa.it/assets/products.json',
    productsTitle: 'Prodotti e Servizi',
    hideProductsColumn: false,
  },
};

export const PostLogin: Story = {
  args: {
    loggedUser: true,
    companyLink: pagoPALink,
    legalInfo: companyLegalInfo,
    postLoginLinks,
    preLoginLinks,
    currentLangCode: 'it',
    onLanguageChanged: () => {
      console.log('Changed Language');
    },
    languages: LANGUAGES_FLAT,
    productsJsonUrl: 'https://uat.selfcare.pagopa.it/assets/products.json',
    productsTitle: 'Prodotti e Servizi',
    hideProductsColumn: false,
  },
};

export const Checkout: StoryObj<typeof FooterCheckout> = {
  render: () => (
    <FooterCheckout
      companyLink={pagoPALink}
      links={checkoutLinks}
      currentLangCode={'it'}
      onLanguageChanged={() => {
        console.log('Changed Language');
      }}
      languages={LANGUAGES}
      onExit={() => {
        console.log('Exit Action Blocked');
      }}
    />
  ),
};
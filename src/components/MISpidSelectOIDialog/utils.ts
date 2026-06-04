import { IDP } from 'types/spid';

export const SPID_DISPLAY_NAME = {
  'https://posteid.poste.it': 'POSTE ID',
  'https://identity.infocert.it': 'INFOCERT ID',
  'https://loginspid.aruba.it': 'ARUBA ID',
  'https://id.lepida.it/idp/shibboleth': 'LEPIDA ID',
  'https://identity.sieltecloud.it': 'SIELTE ID',
  'https://idp.namirialtsp.com/idp': 'NAMIRIAL ID',
  'https://login.id.tim.it/affwebservices/public/saml2sso': 'TIM ID',
  'https://spid.register.it': 'SPIDITALIA',
  'https://id.eht.eu': 'ETNA ID',
  'https://loginspid.infocamere.it': 'ID INFOCAMERE',
  'https://idp.intesigroup.com': 'INTESI GROUP SPID',
  'https://spid.teamsystem.com/idp': 'TEAMSYSTEM ID',
  'https://idp.uat.oneid.pagopa.it': 'INTERNAL IDP',
};

export const getSpidDisplayName = (idp: IDP): string =>
  SPID_DISPLAY_NAME[idp.entityID as keyof typeof SPID_DISPLAY_NAME] ??
  idp.friendlyName.toUpperCase();

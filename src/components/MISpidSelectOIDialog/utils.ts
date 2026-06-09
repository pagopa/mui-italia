import { IDP } from 'types/spid';

export const SPID_DISPLAY_NAME = {
  'https://posteid.poste.it': 'Poste ID',
  'https://identity.infocert.it': 'InfoCert ID',
  'https://loginspid.aruba.it': 'Aruba ID',
  'https://id.lepida.it/idp/shibboleth': 'Lepida ID',
  'https://identity.sieltecloud.it': 'Sielte ID',
  'https://idp.namirialtsp.com/idp': 'Namirial ID',
  'https://login.id.tim.it/affwebservices/public/saml2sso': 'TIM id',
  'https://spid.register.it': 'SpidItalia',
  'https://id.eht.eu': 'Etna ID',
  'https://loginspid.infocamere.it': 'ID InfoCamere',
  'https://idp.intesigroup.com': 'Intesi Group SPID',
  'https://spid.teamsystem.com/idp': 'TeamSystem ID',
  'https://idp.uat.oneid.pagopa.it': 'INTERNAL IDP',
};

export const getSpidDisplayName = (idp: IDP): string =>
  SPID_DISPLAY_NAME[idp.entityID as keyof typeof SPID_DISPLAY_NAME] ?? idp.friendlyName;

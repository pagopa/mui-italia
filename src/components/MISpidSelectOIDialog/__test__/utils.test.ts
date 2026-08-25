import { IDP } from '../MISpidSelectOIDialog.types';
import { getSpidDisplayName } from '../utils';

// Factory function to generate a valid mock IDP object
const createMockIDP = (overrides: Partial<IDP> = {}): IDP => ({
  entityID: 'https://default-entity-id.it',
  pointer: 'default-pointer',
  status: 'OK',
  idpSSOEndpoints: {
    'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST': 'https://sso.test.it',
  },
  certificates: ['mock-cert-string'],
  friendlyName: 'Original Fallback Name',
  active: true,
  ...overrides, // Overrides default properties with the ones provided by the test
});

describe('getSpidDisplayName', () => {
  it('should return the mapped name from SPID_DISPLAY_NAME when entityID is known', () => {
    const knownEntityID = 'https://idp.uat.oneid.pagopa.it';

    const idp = createMockIDP({
      entityID: knownEntityID,
      friendlyName: 'Idp S.p.A.', // This name should be overridden
    });

    const result = getSpidDisplayName(idp);

    // Verify it ignored the original friendlyName
    expect(result).not.toBe('Idp S.p.A.');

    expect(result).toBe('INTERNAL IDP');
  });

  it('should fallback to friendlyName when entityID is NOT in the mapping', () => {
    const idp = createMockIDP({
      entityID: 'https://an-unknown-provider.it',
      friendlyName: 'Unknown Provider SpA',
    });

    const result = getSpidDisplayName(idp);

    // Since the entityID is missing from the enum, it must return the friendlyName
    expect(result).toBe('Unknown Provider SpA');
  });

  it('should gracefully handle an empty friendlyName string for unknown providers', () => {
    const idp = createMockIDP({
      entityID: 'https://broken-idp.it',
      friendlyName: '',
    });

    const result = getSpidDisplayName(idp);

    expect(result).toBe('');
  });
});

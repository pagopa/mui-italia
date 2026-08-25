/** A SPID Identity Provider as returned by the OneIdentity registry. */
export type IDP = {
  /** Unique SAML entity identifier of the provider. */
  entityID: string;
  /** Identifier used to resolve the provider's logo on the CDN. */
  pointer: string;
  /** Operational status of the provider; only `'OK'` providers are selectable. */
  status: 'OK' | 'WARNING' | 'DANGER';
  /** Map of SAML SSO endpoints keyed by binding. */
  idpSSOEndpoints: Record<string, string>;
  /** Provider signing/encryption certificates. */
  certificates: Array<string>;
  /** Human-readable provider name shown to the user. */
  friendlyName: string;
  /** Whether the provider is currently enabled; inactive providers cannot be selected. */
  active: boolean;
};

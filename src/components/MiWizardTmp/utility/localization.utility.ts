type LocalizationNamespacesNames =
  | 'common'
  | 'notifications'
  | 'appStatus'
  | 'delegations'
  | 'recapiti';

type LocalizationNamespaces = {
  [key in LocalizationNamespacesNames]: string;
};

type LocalizationFunction = (
  namespace: string | Array<string>,
  path: string,
  data?: { [key: string]: string | undefined }
) => string;

/* eslint-disable-next-line functional/no-let */
let localizationNamespaces: LocalizationNamespaces = {
  common: 'common',
  notifications: 'notifiche',
  appStatus: 'appStatus',
  delegations: 'deleghe',
  recapiti: 'recapiti',
};

/* eslint-disable-next-line functional/no-let */
let translateFunction: LocalizationFunction | undefined;

export const initLocalization = (
  translateFn: LocalizationFunction,
  namespaces?: LocalizationNamespaces
) => {
  if (namespaces) {
    // eslint-disable-next-line functional/immutable-data
    localizationNamespaces = namespaces;
  }
  // eslint-disable-next-line functional/immutable-data
  translateFunction = translateFn;
};

export function getLocalizedOrDefaultLabel(
  namespaceName: string | Array<string>,
  path: string,
  defaultLabel?: string,
  data?: { [key: string]: any }
): string {
  const namespace = Array.isArray(namespaceName)
    ? namespaceName.map((nm) => localizationNamespaces[nm as LocalizationNamespacesNames])
    : localizationNamespaces[namespaceName as LocalizationNamespacesNames];
  if (translateFunction) {
    const localizedLabel = translateFunction(namespace, path, data);
    if (!localizedLabel || localizedLabel === path) {
      return defaultLabel ?? path;
    }
    return localizedLabel;
  }
  return defaultLabel ?? path;
}

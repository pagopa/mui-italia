import React, { useEffect, useRef, useState } from 'react';

import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import {
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { MIAlert } from '@components/MIAlert';
import { IDP } from './MISpidSelectOIDialog.types';
import ErrorState from './ErrorState';
import SpidList from './SpidList';
import { getSpidDisplayName } from './utils';

const defaultTranslationsMap = {
  title: 'Accedi con SPID',
  closeButtonAriaLabel: 'Chiudi',
  unavailableIdpWarning:
    "L'accesso tramite %s non è al momento disponibile, riprova più tardi o entra con un altro Identity Provider",
  error: {
    title: 'Non riusciamo a caricare la lista',
    description: 'Ti chiediamo di riprovare più tardi.',
    closeButton: 'Chiudi',
  },
};

export type MISpidSelectOIDialogProps = {
  /** Controls the visibility of the dialog. When `true` the dialog is open. */
  show: boolean;
  /** List of SPID Identity Providers to display. */
  idps: Array<IDP>;
  /** When `true`, a loading state is shown in place of the provider list. */
  loading: boolean;
  /**
   * Base URL of the OneIdentity CDN used to resolve each provider's logo.
   * Must be one of:
   * - `"https://assets.uat.oneid.pagopa.it"` (UAT)
   * - `"https://assets.oneid.pagopa.it"` (production)
   */
  oneIdentityCdnBaseUrl: string;
  /**
   * When `true`, an error state is shown instead of the provider list.
   * An error state is also shown automatically when the list is empty and not loading.
   */
  error: boolean;
  /** Callback fired when the dialog is dismissed (close button, backdrop or ESC). */
  onClose: () => void;
  /** Callback fired when the user selects an available Identity Provider. */
  handleSelectIDP: (idp: IDP) => void;
  /** Optional callback fired when the user selects an unavailable Identity Provider. */
  onUnavailableIdpClick?: (idp: IDP) => void;
  /**
   * Optional overrides for the default Italian copy. Provide only the keys
   * you want to change; the rest fall back to the defaults.
   *
   * Note: the `unavailableIdpWarning` string must keep the `%s` placeholder,
   * which is replaced at runtime with the unavailable Identity Provider's name.
   */
  translationsMap?: Partial<typeof defaultTranslationsMap>;
};

/**
 * Modal dialog that lets the user authenticate with SPID by choosing one of the
 * available Identity Providers.
 *
 * It handles the loading, error and "provider unavailable" states internally and
 * renders fullscreen on mobile viewports. While an authentication request is in
 * flight the dialog is locked and cannot be closed. All visible copy can be
 * localized through `translationsMap`.
 */
const MISpidSelectOIDialog: React.FC<MISpidSelectOIDialogProps> = ({
  show,
  idps,
  loading,
  oneIdentityCdnBaseUrl,
  error,
  onClose,
  handleSelectIDP,
  onUnavailableIdpClick,
  translationsMap,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [authorizingEntityId, setAuthorizingEntityId] = useState<string | null>(null);
  const [unavailableIdp, setUnavailableIdp] = useState<string | null>(null);
  const dialogContentRef = useRef<HTMLDivElement>(null);

  const t = { ...defaultTranslationsMap, ...translationsMap };

  const hasError = error || (!loading && !idps.length);

  const onSpidSelect = (idp: IDP) => {
    if (!idp.active || idp.status !== 'OK') {
      setUnavailableIdp(getSpidDisplayName(idp));
      dialogContentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
      onUnavailableIdpClick?.(idp);
      return;
    }
    setUnavailableIdp(null);
    setAuthorizingEntityId(idp.entityID);
    handleSelectIDP(idp);
  };

  const handleCloseDialog = () => {
    if (!!authorizingEntityId) return;
    onClose();
  };

  useEffect(() => {
    if (!show) {
      setAuthorizingEntityId(null);
      setUnavailableIdp(null);
    }
  }, [show]);

  return (
    <Dialog
      open={show}
      aria-labelledby="spid-select"
      fullScreen={isMobile}
      transitionDuration={0}
      onClose={handleCloseDialog}
    >
      <DialogContent
        id="spidSelect"
        ref={dialogContentRef}
        sx={{ p: 3, width: { xs: '100%', sm: '410px', lg: '600px' } }}
      >
        <Stack
          direction="row"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={3}
        >
          <Typography
            id="spid-select"
            fontWeight="bold"
            fontSize={{ xs: '18px', sm: '24px' }}
            sx={{ color: theme.colors.neutral.black }}
          >
            {t.title}
          </Typography>

          <IconButton
            onClick={handleCloseDialog}
            id="backIcon"
            size="small"
            aria-label={t.closeButtonAriaLabel}
            disabled={!!authorizingEntityId}
            sx={{ color: theme.colors.neutral.black }}
          >
            <ClearOutlinedIcon />
          </IconButton>
        </Stack>

        {unavailableIdp && (
          <MIAlert severity="warning" data-testid="spid-select-unavailable-idp-alert">
            {t.unavailableIdpWarning.replace('%s', unavailableIdp)}
          </MIAlert>
        )}

        {hasError ? (
          <ErrorState
            title={t.error.title}
            description={t.error.description}
            closeButtonLabel={t.error.closeButton}
            onClose={handleCloseDialog}
          />
        ) : (
          <SpidList
            idps={idps}
            loading={loading}
            authorizingEntityId={authorizingEntityId}
            oneIdentityCdnBaseUrl={oneIdentityCdnBaseUrl}
            onSelect={onSpidSelect}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MISpidSelectOIDialog;

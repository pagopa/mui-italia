import { Stack } from '@mui/material';
import { BannerCTAWithId, BannerModel, ViewState } from '../model';
import { Cta, Message, Title, CloseButton } from '../shared';

export function Secondary({
  model,
  view,
  title,
  message,
  cta,
  onClose,
  closeAriaLabel,
  titleId,
}: Readonly<{
  model: BannerModel;
  view: ViewState;
  title: string;
  message?: string;
  cta?: BannerCTAWithId;
  onClose?: () => void;
  closeAriaLabel: string;
  titleId: string;
}>) {
  const showCta = !!cta;
  const isHorizontal = view.isHorizontal;

  const ctaCommonProps = showCta
    ? {
        id: cta.id,
        kind: model.ctaKind,
        cta,
        ariaLabelledBy: `${titleId} ${cta.id}`,
        variant: view.variant,
      }
    : undefined;

  return (
    <Stack direction="row" justifyContent="space-between" width="100%" gap={2}>
      <Stack direction="column" flex={1} gap={1} minWidth={0}>
        <Title
          id={titleId}
          text={title}
          textAlign={model.textAlign}
          variant={view.variant}
          fontSizeOverride={view.isHorizontal ? undefined : '18px'}
        />
        {message && <Message text={message} textAlign={model.textAlign} variant={view.variant} />}

        {!isHorizontal && ctaCommonProps && (
          <Cta {...ctaCommonProps} alignSelf="flex-start" sx={{ mt: 1 }} />
        )}
      </Stack>

      <Stack direction="column" alignItems="flex-end" gap={2} flexShrink={0}>
        {onClose && <CloseButton onClose={onClose} ariaLabel={closeAriaLabel} />}

        {isHorizontal && ctaCommonProps && (
          <Cta {...ctaCommonProps} alignSelf="flex-end" sx={{ mt: 'auto' }} />
        )}
      </Stack>
    </Stack>
  );
}

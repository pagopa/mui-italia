import { Box, Stack } from '@mui/material';
import { BannerCTAWithId, BannerModel, ViewState } from '../model';
import { BadgeChip, BlueBar, Cta, Message, Title, CloseButton } from '../shared';

export function Primary({
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
  const showBadge = view.variant === 'primary' && Boolean(model.badgeText);

  return (
    <Stack direction="row" alignItems="stretch">
      <BlueBar />

      <Stack direction="row" justifyContent="space-between" width="100%" gap={2}>
        <Stack direction="column" flex={1} gap={1} minWidth={0}>
          {showBadge && model.badgeText && <BadgeChip text={model.badgeText} />}

          <Title
            id={titleId}
            text={title}
            textAlign={model.textAlign}
            variant={view.variant}
            fontSizeOverride={view.isHorizontal ? undefined : '18px'}
          />

          {message && <Message text={message} textAlign={model.textAlign} variant={view.variant} />}

          {showCta && (
            <Cta
              id={cta.id}
              kind={model.ctaKind}
              cta={cta}
              ariaLabelledBy={`${titleId} ${cta.id}`}
              alignSelf="flex-start"
              variant={view.variant}
              sx={{ mt: 1 }}
            />
          )}
        </Stack>

        <Stack direction="column" alignItems="flex-end" gap={2} flexShrink={0}>
          {onClose && <CloseButton onClose={onClose} ariaLabel={closeAriaLabel} />}

          {model.illustrationNode && (
            <Box
              sx={{
                width: `${view.primaryIllustrationSizePx}px`,
                height: `${view.primaryIllustrationSizePx}px`,
                display: 'flex',
                alignItems: view.isHorizontal ? 'flex-end' : 'flex-start',
                justifyContent: 'flex-end',
                mt: view.isHorizontal ? 'auto' : 0,
                '& svg': { width: '100%', height: '100%' },
                '& img': { width: '100%', height: '100%', objectFit: 'contain' },
              }}
            >
              {model.illustrationNode}
            </Box>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}

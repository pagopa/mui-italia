import { Box, Stack } from '@mui/material';
import { BannerCTA, BannerModel, ViewState } from '../model';
import { Cta, Message, Title, CloseButton } from '../shared';

export function Secondary({
  model,
  view,
  title,
  message,
  cta,
  onClose,
  closeAriaLabel,
}: Readonly<{
  model: BannerModel;
  view: ViewState;
  title: string;
  message?: string;
  cta?: BannerCTA;
  onClose?: () => void;
  closeAriaLabel: string;
}>) {
  const showCta = model.hasCta && cta;
  const isHorizontal = view.isHorizontal;

  return (
    <Stack direction="row" justifyContent="space-between" width="100%" gap={2}>
      <Stack direction="column" flex={1} gap={1} minWidth={0}>
        <Title
          text={title}
          textAlign={model.textAlign}
          variant={view.variant}
          fontSizeOverride={view.isHorizontal ? undefined : '18px'}
        />
        {message && <Message text={message} textAlign={model.textAlign} variant={view.variant} />}

        {!isHorizontal && showCta && (
          <Box sx={{ mt: 1.5 }}>
            <Cta
              kind={model.ctaKind}
              label={cta.label}
              onClick={cta.onClick}
              alignSelf="flex-start"
              variant={view.variant}
            />
          </Box>
        )}
      </Stack>

      <Stack direction="column" alignItems="flex-end" gap={2} flexShrink={0}>
        {onClose && <CloseButton onClose={onClose} ariaLabel={closeAriaLabel} />}

        {isHorizontal && showCta && (
          <Box sx={{ mt: 'auto' }}>
            <Cta
              kind={model.ctaKind}
              label={cta.label}
              onClick={cta.onClick}
              alignSelf="flex-end"
              variant={view.variant}
            />
          </Box>
        )}
      </Stack>
    </Stack>
  );
}

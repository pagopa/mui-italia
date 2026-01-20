import { Box, Stack } from '@mui/material';
import { blue } from 'theme/colors';
import { BannerCTA, BannerModel, ViewState } from '../model';
import { Cta, Message, Title, CloseButton } from '../shared';

export function Tertiary({
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
    <Stack
      direction="row"
      justifyContent="space-between"
      width="100%"
      gap={2}
      alignItems="flex-start"
    >
      <Stack
        direction={isHorizontal ? 'row' : 'column'}
        flex={1}
        alignItems={isHorizontal ? 'flex-start' : 'center'}
        gap={`${view.contentGapPx}px`}
        minWidth={0}
      >
        {model.topIcon && (
          <Box sx={{ color: blue[200], mt: isHorizontal ? 0.25 : 0 }}>{model.topIcon}</Box>
        )}

        <Stack
          direction="column"
          flex={1}
          gap={1}
          alignItems={isHorizontal ? 'flex-start' : 'center'}
        >
          <Title text={title} textAlign={model.textAlign} variant={view.variant} />
          {message && <Message text={message} textAlign={model.textAlign} variant={view.variant} />}

          {showCta && (
            <Box sx={{ mt: 0.5 }}>
              <Cta
                kind={model.ctaKind}
                label={cta.label}
                onClick={cta.onClick}
                alignSelf={isHorizontal ? 'flex-start' : 'center'}
                variant={view.variant}
              />
            </Box>
          )}
        </Stack>
      </Stack>

      {onClose && <CloseButton onClose={onClose} ariaLabel={closeAriaLabel} />}
    </Stack>
  );
}

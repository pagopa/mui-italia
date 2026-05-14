import { Box, Stack } from '@mui/material';
import { colors } from 'theme/foundations/colors';
import { BannerCTAWithId, BannerModel, ViewState } from '../model';
import { Cta, Message, Title, CloseButton } from '../shared';

export function Tertiary({
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
          <Box sx={{ color: colors.blue[200], mt: isHorizontal ? 0.25 : 0 }}>{model.topIcon}</Box>
        )}

        <Stack
          direction="column"
          flex={1}
          gap={1}
          alignItems={isHorizontal ? 'flex-start' : 'center'}
        >
          <Title id={titleId} text={title} textAlign={model.textAlign} variant={view.variant} />
          {message && <Message text={message} textAlign={model.textAlign} variant={view.variant} />}

          {showCta && (
            <Cta
              id={cta.id}
              kind={model.ctaKind}
              cta={cta}
              ariaLabelledBy={`${titleId} ${cta.id}`}
              alignSelf={isHorizontal ? 'flex-start' : 'center'}
              variant={view.variant}
              sx={{ mt: 0.5 }}
            />
          )}
        </Stack>
      </Stack>

      {onClose && <CloseButton onClose={onClose} ariaLabel={closeAriaLabel} />}
    </Stack>
  );
}

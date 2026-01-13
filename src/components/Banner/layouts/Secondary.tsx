import { Box } from '@mui/material';
import { BannerCTA, BannerModel, ViewState } from '../model';
import { Cta, LeftCol, Message, RightCol, Title, TwoCols, CloseButton } from '../shared';

export function Secondary({
  model,
  view,
  title,
  message,
  cta,
  onClose,
}: Readonly<{
  model: BannerModel;
  view: ViewState;
  title: string;
  message?: string;
  cta?: BannerCTA;
  onClose?: () => void;
}>) {
  const showCta = model.hasCta && cta;
  const isHorizontal = view.isHorizontal;

  return (
    <TwoCols>
      <LeftCol sx={{ gap: 1 }}>
        <Title text={title} textAlign={model.textAlign} variant={view.variant} />
        {message && <Message text={message} textAlign={model.textAlign} variant={view.variant} />}

        {!isHorizontal && showCta && (
          <Box sx={{ mt: 1.5 }}>
            <Cta
              kind={model.ctaKind}
              label={cta.label}
              onClick={cta.onClick}
              testId={cta['data-testid']}
              alignSelf="flex-start"
              variant={view.variant}
            />
          </Box>
        )}
      </LeftCol>

      <RightCol sx={{ gap: 2 }}>
        {onClose && <CloseButton onClose={onClose} />}

        {isHorizontal && showCta && (
          <Box sx={{ mt: 'auto' }}>
            <Cta
              kind={model.ctaKind}
              label={cta.label}
              onClick={cta.onClick}
              testId={cta['data-testid']}
              alignSelf="flex-end"
              variant={view.variant}
            />
          </Box>
        )}
      </RightCol>
    </TwoCols>
  );
}

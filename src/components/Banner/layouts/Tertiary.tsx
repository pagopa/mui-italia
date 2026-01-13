import { Box } from '@mui/material';
import { blue } from 'theme/colors';
import { BannerCTA, BannerModel, ViewState } from '../model';
import { Cta, LeftCol, Message, Title, TwoCols, CloseButton } from '../shared';

export function Tertiary({
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
    <TwoCols sx={{ alignItems: 'flex-start' }}>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          minWidth: 0,
          flexDirection: isHorizontal ? 'row' : 'column',
          alignItems: isHorizontal ? 'flex-start' : 'center',
          gap: `${view.contentGapPx}px`,
        }}
      >
        {model.topIcon && (
          <Box sx={{ color: blue[200], mt: isHorizontal ? 0.25 : 0 }}>{model.topIcon}</Box>
        )}

        <LeftCol sx={{ gap: 1, alignItems: isHorizontal ? 'flex-start' : 'center' }}>
          <Title text={title} textAlign={model.textAlign} variant={view.variant} />
          {message && <Message text={message} textAlign={model.textAlign} variant={view.variant} />}

          {showCta && (
            <Box sx={{ mt: 0.5 }}>
              <Cta
                kind={model.ctaKind}
                label={cta.label}
                onClick={cta.onClick}
                testId={cta['data-testid']}
                alignSelf={isHorizontal ? 'flex-start' : 'center'}
                variant={view.variant}
              />
            </Box>
          )}
        </LeftCol>
      </Box>

      {onClose && <CloseButton onClose={onClose} />}
    </TwoCols>
  );
}

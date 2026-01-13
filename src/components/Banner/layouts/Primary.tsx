import { Box } from '@mui/material';
import { BannerCTA, BannerModel, ViewState } from '../model';
import {
  BadgeChip,
  BlueBar,
  Cta,
  LeftCol,
  Message,
  PrimaryRow,
  RightCol,
  Title,
  TwoCols,
  CloseButton,
} from '../shared';

export function Primary({
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
  const showBadge = view.variant === 'primary' && Boolean(model.badgeText);

  return (
    <PrimaryRow>
      <BlueBar />

      <TwoCols>
        <LeftCol sx={{ gap: 1 }}>
          {showBadge && model.badgeText && <BadgeChip text={model.badgeText} />}

          <Title text={title} textAlign={model.textAlign} variant={view.variant} />

          {message && <Message text={message} textAlign={model.textAlign} variant={view.variant} />}

          {showCta && (
            <Box sx={{ mt: 0.5 }}>
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

        <RightCol>
          {onClose && <CloseButton onClose={onClose} />}

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
        </RightCol>
      </TwoCols>
    </PrimaryRow>
  );
}

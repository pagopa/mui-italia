'use client';

import { useId } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import type {
  BannerCTAWithId,
  BannerDirection,
  BannerModel,
  BannerProps,
  ViewState,
} from './model';
import { computeModel, computeViewState, normalizeProps } from './model';
import { Inner, Root } from './shared';
import { Primary } from './layouts/Primary';
import { Secondary } from './layouts/Secondary';
import { Tertiary } from './layouts/Tertiary';

/**
 * Variant router.
 * Keeps Banner as a thin orchestrator: it selects the right layout component
 * based on the resolved variant and passes only the minimal data needed.
 */
function renderBannerLayout(args: {
  view: ViewState;
  model: BannerModel;
  title: string;
  message?: string;
  cta?: BannerCTAWithId;
  onClose?: BannerProps['onClose'];
  closeAriaLabel: string;
  titleId: string;
}) {
  const { view, model, title, message, cta, onClose, closeAriaLabel, titleId } = args;

  switch (view.variant) {
    case 'primary':
      return (
        <Primary
          model={model}
          view={view}
          title={title}
          message={message}
          cta={cta}
          onClose={onClose}
          closeAriaLabel={closeAriaLabel}
          titleId={titleId}
        />
      );

    case 'secondary':
      return (
        <Secondary
          model={model}
          view={view}
          title={title}
          message={message}
          cta={cta}
          onClose={onClose}
          closeAriaLabel={closeAriaLabel}
          titleId={titleId}
        />
      );

    case 'tertiary':
    default:
      return (
        <Tertiary
          model={model}
          view={view}
          title={title}
          message={message}
          cta={cta}
          onClose={onClose}
          closeAriaLabel={closeAriaLabel}
          titleId={titleId}
        />
      );
  }
}

export const Banner = (props: BannerProps) => {
  const { title, message, onClose, closeAriaLabel, cta, ...rest } = props;

  const titleId = useId();
  const ctaId = useId();

  const resolvedCta = cta ? { ...cta, id: ctaId } : undefined;

  /**
   * Normalize optional props (variant defaults) once,
   * so downstream helpers and layouts can assume they are always defined.
   */
  const normalizedProps = normalizeProps(props);
  const variant = normalizedProps.variant;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const direction: BannerDirection =
    variant === 'tertiary' || !isMobile ? 'horizontal' : 'vertical';

  /**
   * Model = "what to render" (derived flags + resolved nodes).
   * View  = "how to render it" (derived layout numbers based on direction/variant).
   */
  const model = computeModel(normalizedProps, direction);
  const view = computeViewState(normalizedProps, direction);

  const content = renderBannerLayout({
    view,
    model,
    title,
    message,
    cta: resolvedCta,
    onClose,
    closeAriaLabel: closeAriaLabel ?? 'Close',
    titleId,
  });

  return (
    <Root colorStyle={model.colorStyle} {...rest}>
      <Inner>{content}</Inner>
    </Root>
  );
};

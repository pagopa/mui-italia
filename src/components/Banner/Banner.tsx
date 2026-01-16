'use client';

import { useResizeObserver } from '../../utils/useResizeObserver';
import type { BannerCTA, BannerDirection, BannerModel, BannerProps, ViewState } from './model';
import {
  BANNER_VERTICAL_BREAKPOINT_PX,
  computeModel,
  computeViewState,
  normalizeProps,
} from './model';
import { Inner, Root } from './shared';
import { Primary } from './layouts/Primary';
import { Secondary } from './layouts/Secondary';
import { Tertiary } from './layouts/Tertiary';

function resolveDirection(width: number | null): BannerDirection {
  if (width === null) {
    return 'horizontal';
  }

  return width < BANNER_VERTICAL_BREAKPOINT_PX ? 'vertical' : 'horizontal';
}

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
  cta?: BannerCTA;
  onClose?: BannerProps['onClose'];
  closeAriaLabel: string;
}) {
  const { view, model, title, message, cta, onClose, closeAriaLabel } = args;

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
        />
      );
  }
}

export const Banner = (props: BannerProps) => {
  const { title, message, onClose, closeAriaLabel, cta, ...rest } = props;

  /**
   * Normalize optional props (variant defaults) once,
   * so downstream helpers and layouts can assume they are always defined.
   */
  const normalizedProps = normalizeProps(props);

  const { ref: rootRef, size } = useResizeObserver<HTMLDivElement>();
  const direction = resolveDirection(size?.width ?? null);

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
    cta,
    onClose,
    closeAriaLabel: closeAriaLabel ?? 'Close',
  });

  return (
    <Root ref={rootRef} bg={model.bg} {...rest}>
      <Inner>{content}</Inner>
    </Root>
  );
};

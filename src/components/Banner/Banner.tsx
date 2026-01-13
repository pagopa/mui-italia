'use client';

import {
  BannerCTA,
  BannerModel,
  BannerProps,
  ViewState,
  computeModel,
  computeViewState,
  normalizeProps,
} from './model';
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
  cta?: BannerCTA;
  onClose?: BannerProps['onClose'];
}) {
  const { view, model, title, message, cta, onClose } = args;

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
        />
      );
  }
}

export const Banner = (props: BannerProps) => {
  const { title, message, onClose, cta, 'data-testid': dataTestId } = props;

  /**
   * Normalize optional props (variant/direction defaults) once,
   * so downstream helpers/layouts can assume they're always defined.
   */
  const normalizedProps = normalizeProps(props);

  /**
   * Model = "what to render" (derived flags + resolved nodes).
   * View  = "how to render it" (derived layout numbers based on direction/variant).
   */
  const model = computeModel(normalizedProps);
  const view = computeViewState(normalizedProps, model);

  const content = renderBannerLayout({ view, model, title, message, cta, onClose });

  return (
    <Root data-testid={dataTestId} bg={model.bg}>
      <Inner>{content}</Inner>
    </Root>
  );
};

'use client';

import { useId } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import type { AlertCTAWithId, AlertDirection, AlertModel, AlertProps, ViewState } from './model';
import { computeModel, computeViewState, normalizeProps } from './model';
import { Inner, Root } from './shared';
import { Standard } from './layouts/Standard';

function renderAlertLayout(args: {
  view: ViewState;
  model: AlertModel;
  title: string;
  message: string;
  cta: AlertCTAWithId;
  titleId: string;
}) {
  const { view, model, title, message, cta, titleId } = args;
  return (
    <Standard
      view={view}
      model={model}
      message={message}
      title={title}
      titleId={titleId}
      cta={cta}
      variant="standard"
    />
  );
}

export const Alert = (props: AlertProps) => {
  const { title, message, cta, severity, ...rest } = props;

  const titleId = useId();
  const ctaId = useId();

  const resolvedCta = { ...cta, id: ctaId };

  const normalizedProps = normalizeProps({
    ...props,
    title,
    message,
    cta: resolvedCta,
    severity,
    variant: props.variant,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const direction: AlertDirection = !isMobile ? 'horizontal' : 'vertical';

  /**
   * Model = "what to render" (derived flags + resolved nodes).
   * View  = "how to render it" (derived layout numbers based on direction/variant).
   */
  const model = computeModel(normalizedProps, direction);
  const view = computeViewState(normalizedProps, direction);

  const alertContent = renderAlertLayout({
    view,
    model,
    title,
    message,
    cta: resolvedCta,
    titleId,
  });

  return (
    <Root colorStyle={model.colorStyle} severity={model.severity} {...rest}>
      <Inner>{alertContent}</Inner>
    </Root>
  );
};

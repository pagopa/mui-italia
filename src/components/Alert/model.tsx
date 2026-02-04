import { AriaAttributes } from 'react';
import type { Theme } from '@mui/material/styles';
import type { AlertColor } from '@mui/material/Alert';

export type ThemeColor = string | ((theme: Theme) => string);
export type AlertVariant = 'standard';
export type AlertDirection = 'horizontal' | 'vertical';
export type AlertSeverity = 'success' | 'error' | 'info' | 'warning';

export type AlertColorStyle = {
  border: ThemeColor;
  background: ThemeColor;
  icon: ThemeColor;
  textColor: ThemeColor;
};

export type AlertCTA =
  | {
      label: string;
      onClick: () => void;
    }
  | {
      label: string;
      href: string;
      target?: '_self' | '_blank';
      rel?: string;
    };

export type AlertCTAWithId = AlertCTA & { id: string };

type DataAttributes = {
  [key: `data-${string}`]: string | number | boolean | undefined;
};

export interface AlertProps extends DataAttributes, AriaAttributes {
  severity?: AlertSeverity;
  variant: AlertVariant;
  title: string;
  message: string;
  cta: AlertCTA;
}

const COLOR_STYLE_MAP: Record<AlertColor, AlertColorStyle> = {
  success: {
    border: (theme) => theme.palette.success[850],
    background: (theme) => theme.palette.success.light,
    icon: (theme) => theme.palette.success[850],
    textColor: (theme) => theme.palette.success[850],
  },
  error: {
    border: (theme) => theme.palette.error[850],
    background: (theme) => theme.palette.error.light,
    icon: (theme) => theme.palette.error[850],
    textColor: (theme) => theme.palette.error[850],
  },
  info: {
    border: (theme) => theme.palette.info[850],
    background: (theme) => theme.palette.info.light,
    icon: (theme) => theme.palette.info[850],
    textColor: (theme) => theme.palette.info[850],
  },
  warning: {
    border: (theme) => theme.palette.warning[850],
    background: (theme) => theme.palette.warning.light,
    icon: (theme) => theme.palette.warning[850],
    textColor: (theme) => theme.palette.warning[850],
  },
};

export type AlertModel = {
  severity: AlertColor;
  colorStyle: AlertColorStyle;
  direction: AlertDirection;
};

export type ViewState = {
  variant: AlertVariant;
  isHorizontal: boolean;
};

export function normalizeProps(props: AlertProps) {
  return {
    ...props,
    severity: props.severity ?? 'info',
  };
}

export function computeModel(props: AlertProps, direction: AlertDirection): AlertModel {
  const severity = props.severity ?? 'info';

  return {
    severity,
    colorStyle: COLOR_STYLE_MAP[severity],
    direction,
  };
}

export function computeViewState(props: AlertProps, direction: AlertDirection): ViewState {
  const isHorizontal = direction === 'horizontal';

  return {
    variant: props.variant,
    isHorizontal,
  };
}

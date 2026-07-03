import { Theme } from '@emotion/react';
import { Theme as MuiTheme } from '@mui/material/styles';
import { SystemProps } from '@mui/system';
import { SyntheticEvent } from 'react';

export interface CTA {
  label: string;
  title: string;
  onClick: (e: SyntheticEvent) => void;
}

type MarginKeys =
  | 'm'
  | 'mt'
  | 'mr'
  | 'mb'
  | 'ml'
  | 'mx'
  | 'my'
  | 'margin'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft';

export type MarginSxProps = Pick<SystemProps<Theme>, MarginKeys>;

export type AllowedAlertSeverity = 'success' | 'info' | 'warning' | 'error';
export type RadiusVariant = keyof MuiTheme['shape']['radius'];

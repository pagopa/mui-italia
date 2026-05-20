import { Theme } from '@emotion/react';
import { SystemProps } from '@mui/system';
import { SyntheticEvent } from 'react';

export interface CTA {
  label: string;
  title: string;
  onClick: (e: SyntheticEvent) => void;
}

export type AllowedMIChipColors =
  | 'default'
  | 'error'
  | 'success'
  | 'warning'
  | 'highlight'
  | 'neutral';

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

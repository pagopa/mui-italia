import { SyntheticEvent } from 'react';

export interface CTA {
  label: string;
  title: string;
  onClick: (e: SyntheticEvent) => void;
}

export type AllowedAlertSeverity = 'success' | 'info' | 'warning' | 'error';

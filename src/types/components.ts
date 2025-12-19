import { SyntheticEvent } from 'react';

export interface CTA {
  label: string;
  title: string;
  onClick: (e: SyntheticEvent) => void;
}

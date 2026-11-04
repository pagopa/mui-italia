'use client';

import { DividerProps } from '@mui/material';
import { FC } from 'react';
import { StyledMIDivider } from './StyledMIDivider';

type MIDividerOwnProps = {
  text?: string;
};

export type MIDividerProps = Omit<DividerProps, 'children' | 'textAlign' | 'orientation'> &
  MIDividerOwnProps;

const MIDivider: FC<MIDividerProps> = ({ component, text, ...props }) => {
  const hasText = Boolean(text);
  const resolvedComponent = hasText
    ? component === 'hr'
      ? 'div'
      : (component ?? 'div')
    : (component ?? 'hr');

  return (
    <StyledMIDivider {...props} textAlign="center" orientation="horizontal" component={resolvedComponent} >
      {text}
    </StyledMIDivider>
  );
};

export default MIDivider;
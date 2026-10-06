'use client';

import { DividerProps } from '@mui/material';
import { Children, FC } from 'react';
import { StyledMIDivider } from './StyledMIDivider';

export type MIDividerProps = Omit<DividerProps & {
  text?: string;
}, 'textAlign' |'orientation'>;

const MIDivider: FC<MIDividerProps> = ({ component, children, text, ...props }) => {
  const hasChildren = Children.count(children) > 0;
  const hasText = Boolean(text);
  const hasContent = hasChildren || hasText;
  const resolvedComponent = hasContent
    ? component === 'hr'
      ? 'div'
      : (component ?? 'div')
    : (component ?? 'hr');

  return (
    <StyledMIDivider {...props} textAlign="center" orientation="horizontal" component={resolvedComponent} >
      {text ?? children}
    </StyledMIDivider>
  );
};

export default MIDivider;
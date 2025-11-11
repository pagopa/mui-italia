'use client';

import { Button, ButtonProps } from '@mui/material';
import { ElementType, ReactElement, Ref } from 'react';

export const ButtonNaked = <C extends ElementType>(
  props: ButtonProps<
    C,
    {
      component?: C;
      buttonRef?: Ref<HTMLButtonElement>;
      weight?: 'default' | 'light';
    }
  >
): ReactElement => {
  const { children, buttonRef, color = 'text', weight = 'default', ...rest } = props;
  return (
    <Button
      sx={{
        fontWeight: weight === 'default' ? '600' : '400',
        letterSpacing: 0.3,
      }}
      variant="naked"
      size="small"
      color={color}
      disableRipple
      disableTouchRipple
      ref={buttonRef}
      {...rest}
    >
      {children}
    </Button>
  );
};

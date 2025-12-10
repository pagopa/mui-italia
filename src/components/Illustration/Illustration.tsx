'use client';

// Components
import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from '@mui/material';
import { ElementType, ReactElement } from 'react';

const IllustrationSVG = styled(MuiSvgIcon)<SvgIconProps>(({ theme }) => ({
  fill: theme.palette.secondary.main,
}));

IllustrationSVG.defaultProps = {
  viewBox: '0 0 120 120',
  focusable: 'false',
  'aria-hidden': 'true',
};

export interface IllustrationProps {
  title?: string;
  size?: number;
}

export const Illustration = <C extends ElementType>(
  props: SvgIconProps<
    C,
    {
      component?: C;
      name?: string;
    }
  >
): ReactElement => {
  const { children, name, size = 80, ...rest } = props;
  return (
    <IllustrationSVG titleAccess={name} sx={{ width: size, height: size }} {...rest}>
      {children}
    </IllustrationSVG>
  );
};

'use client';

import { ButtonNaked } from '@components/ButtonNaked';
import { AllowedAlertSeverity } from '@lib-types/alert.types';
import { MarginSxProps } from '@lib-types/shared.types';
import {
  Box,
  AlertProps as MUIAlertProps,
  AlertTitle as MUIAlertTitle,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ElementType, HTMLAttributeAnchorTarget, ReactNode } from 'react';
import { StyledAlert } from './StyledAlert';
import { getColor, getIcon } from './utils';

type CtaWrapSize = 'tight' | 'normal' | 'wide';

const WRAP_THRESHOLDS: Record<CtaWrapSize, string> = {
  tight: '15ch',
  normal: '25ch',
  wide: '40ch',
};

type ButtonCTA = {
  label: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

type LinkCTA = {
  label: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>;

type AlertCTA = ButtonCTA | LinkCTA;

interface MIAlertCtaProps {
  cta: AlertCTA;
  ariaLabelledBy?: string;
  severity?: AllowedAlertSeverity;
  isMobile: boolean;
}

// Props shared by all variants
interface BaseAlertProps extends Pick<MUIAlertProps, 'severity' | 'id'> {
  children: ReactNode;
  ctaWrapSize?: CtaWrapSize;
  sx?: MarginSxProps;
}

// Default MIAlert variant (allows title and action)
interface DefaultAlertProps extends BaseAlertProps {
  variant?: 'default';
  title?: string;
  action?: AlertCTA;
}

// Header MIAlert variant
interface HeaderAlertProps extends BaseAlertProps {
  variant: 'header';
  title?: never;
  action?: never;
}

export type MIAlertProps = DefaultAlertProps | HeaderAlertProps;

export const MIAlert: React.FC<MIAlertProps> = ({
  severity,
  children,
  variant = 'default',
  title,
  action,
  ctaWrapSize = 'normal',
  sx,
  ...rest
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const flexBasis = WRAP_THRESHOLDS[ctaWrapSize];

  return (
    <StyledAlert
      {...rest}
      icon={getIcon(severity)}
      sx={sx}
      ownerState={{
        variant,
        severity,
        title,
      }}
    >
      <Stack direction="row" flex={1} columnGap={8} rowGap={2} flexWrap="wrap">
        <Box
          sx={{
            flex: {
              xs: '1 1 100%',
              sm: `1 1 ${flexBasis}`,
            },
            overflowWrap: 'anywhere',
          }}
        >
          {title && (
            <MUIAlertTitle color={getColor(theme, severity)} sx={{ mb: '4px' }}>
              {title}
            </MUIAlertTitle>
          )}
          {children}
        </Box>
        {action && <MIAlertCta cta={action} severity={severity} isMobile={isMobile} />}
      </Stack>
    </StyledAlert>
  );
};

const MIAlertCta = ({ cta, severity = 'success', isMobile }: Readonly<MIAlertCtaProps>) => {
  const isLink = 'href' in cta;

  let target: HTMLAttributeAnchorTarget | undefined;
  let rel: string | undefined;

  if (isLink) {
    target = cta.target ?? '_self';
    rel = target === '_blank' ? cta.rel ?? 'noopener noreferrer' : cta.rel;
  }

  const commonProps = {
    onClick: !isLink ? cta.onClick : undefined,
    component: (isLink ? 'a' : 'button') as ElementType,
    href: isLink ? cta.href : undefined,
    target,
    rel,
  };

  return (
    <ButtonNaked
      {...commonProps}
      sx={(theme) => ({
        minWidth: 'auto',
        fontWeight: 600,
        fontSize: '16px',
        textDecoration: 'none',
        alignSelf: isMobile ? 'flex-start' : 'center',
        color: theme.colors[severity][850],
        flexShrink: 0,
      })}
    >
      {cta.label}
    </ButtonNaked>
  );
};

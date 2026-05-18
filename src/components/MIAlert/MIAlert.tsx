'use client';

import { ButtonNaked } from '@components/ButtonNaked';
import { AlertTitle as MUIAlertTitle, Stack, useMediaQuery, useTheme } from '@mui/material';
import type { SystemProps, Theme } from '@mui/system';
import { AlertProps as MUIAlertProps } from '@mui/material/Alert';
import { ElementType, HTMLAttributeAnchorTarget } from 'react';
import { StyledAlert } from './StyledAlert';
import { getColor, getIcon } from './utils';
import { AllowedAlertSeverity } from 'types/MIAlert';

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

type MarginSxProps = Pick<SystemProps<Theme>, MarginKeys>;

// Props shared by all variants
interface BaseAlertProps extends Pick<MUIAlertProps, 'severity'> {
  description: string;
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
  description,
  variant = 'default',
  title,
  action,
  sx,
  ...rest
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledAlert severity={severity} icon={getIcon(severity)} variant={variant} sx={sx} {...rest}>
      <Stack direction={isMobile ? 'column' : 'row'} flex={1}>
        <Stack direction="column" flex={1} minWidth={0} gap={title ? '4px' : 0}>
          {title && <MUIAlertTitle color={getColor(theme, severity)}>{title}</MUIAlertTitle>}
          {description}
        </Stack>
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
        pt: isMobile ? 2 : 0,
        minWidth: 'auto',
        fontWeight: 600,
        fontSize: '16px',
        textDecoration: 'none',
        alignSelf: isMobile ? 'flex-start' : 'center',
        paddingLeft: isMobile ? theme.spacing(0) : theme.spacing(8),
        color: theme.palette[severity][850],
      })}
    >
      {cta.label}
    </ButtonNaked>
  );
};

'use client';

import { AlertTitle as MUIAlertTitle, Stack, useMediaQuery, useTheme } from '@mui/material';
import { AlertProps as MUIAlertProps } from '@mui/material/Alert';
import type { AllowedAlertSeverity } from './types';
import { ElementType, HTMLAttributeAnchorTarget } from 'react';
import { getColor, getIcon } from './utils';
import { ButtonNaked } from '@components/ButtonNaked';
import { StyledAlert } from './StyledAlert';

type ButtonCTA = {
  label: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

type LinkCTA = {
  label: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>;

export type AlertCTA = ButtonCTA | LinkCTA;
export type { AllowedAlertSeverity } from './types';

interface MIAlertProps extends Pick<MUIAlertProps, 'severity'> {
  title?: string;
  description: string;
  action?: AlertCTA;
}

interface MIAlertCtaProps {
  cta: AlertCTA;
  ariaLabelledBy?: string;
  severity?: AllowedAlertSeverity;
  isMobile: boolean;
}

export const MIAlert = ({
  severity = 'success',
  title,
  description,
  action,
  ...rest
}: MIAlertProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledAlert severity={severity} icon={getIcon(severity)} {...rest}>
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

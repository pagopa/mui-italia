'use client';

import { ButtonNaked } from '@components/ButtonNaked';
import { AlertTitle as MUIAlertTitle, Stack, styled, useMediaQuery, useTheme } from '@mui/material';
import MUIAlert, { AlertProps as MUIAlertProps } from '@mui/material/Alert';
import { ElementType, HTMLAttributeAnchorTarget } from 'react';
import { getColor, getIcon } from './utils';

type ButtonCTA = {
  label: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

type LinkCTA = {
  label: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>;

type AlertCTA = ButtonCTA | LinkCTA;

export type AllowedAlertSeverity = 'success' | 'info' | 'warning' | 'error';
interface MIAlertCtaProps {
  cta: AlertCTA;
  ariaLabelledBy?: string;
  severity?: AllowedAlertSeverity;
  isMobile: boolean;
}

// Props shared by all variants
interface BaseAlertProps extends Pick<MUIAlertProps, 'severity'> {
  description: string;
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
}

export type MIAlertProps = DefaultAlertProps | HeaderAlertProps;

interface StyledAlertProps extends MUIAlertProps {
  layoutVariant?: 'default' | 'header';
}

const StyledAlert = styled(MUIAlert, {
  // This prevents 'layoutVariant' from being written to the HTML DOM
  shouldForwardProp: (prop) => prop !== 'layoutVariant',
})<StyledAlertProps>(({ theme, severity = 'success', layoutVariant }) => {
  const severityPalette = theme.palette[severity];

  return {
    backgroundColor: severityPalette[100],
    justifyContent: layoutVariant === 'header' ? 'center' : 'flex-start',
    alignItems: layoutVariant === 'header' ? 'center' : 'flex-start',

    ...(layoutVariant === 'default' && {
      border: '1px solid',
      borderRadius: 8,
      padding: theme.spacing(2),
      borderColor: severityPalette.main,
    }),

    // different styles for the 'header' variant
    ...(layoutVariant === 'header' && {
      border: 'none',
      borderRadius: 0,
      width: 'auto',
      boxSizing: 'border-box',
      padding: '10px 16px !important', // Override MUI's default padding with !important
    }),

    [theme.breakpoints.down('sm')]: {
      alignItems: layoutVariant === 'header' ? 'center' : 'flex-start',
    },

    '& .MuiAlert-icon': {
      opacity: 1,
      alignItems: 'center',
      marginRight: theme.spacing(1),
      color: severityPalette[850],
    },

    '& .MuiAlert-message': {
      padding: 0,
      overflow: 'inherit',
      lineHeight: layoutVariant === 'header' ? '20px' : '22px',
      fontWeight: layoutVariant === 'header' ? 500 : theme.typography.fontWeightRegular,
      fontSize: layoutVariant === 'header' ? '14px' : '16px',
      display: 'flex',
      flexDirection: 'column',
      overflowWrap: 'anywhere',
      wordBreak: 'break-word',
      color: severityPalette[850],
      flex: layoutVariant === 'header' ? '0 1 auto' : 1,
      width: layoutVariant === 'header' ? 'auto' : '100%',
    },
  };
});

export const MIAlert: React.FC<MIAlertProps> = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { severity, description, variant = 'default' } = props;
  const hasTitle = 'title' in props && !!props.title;
  const hasAction = 'action' in props && !!props.action;

  const title = hasTitle ? props.title : undefined;
  const action = hasAction ? props.action : undefined;

  return (
    <StyledAlert
      severity={severity}
      icon={getIcon(severity)}
      layoutVariant={variant}
      {...(variant === 'header' ? { description } : { description, title, action: undefined })}
    >
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

'use client';

import { ButtonNaked } from '@components/ButtonNaked';
import { AlertTitle as MUIAlertTitle, Stack, styled, useMediaQuery, useTheme } from '@mui/material';
import MUIAlert, { AlertProps as MUIAlertProps } from '@mui/material/Alert';
import type { Theme } from '@mui/material/styles';
import { ElementType, useId } from 'react';
import { getColor, getIcon } from './utils';

export type AlertCTA =
  | {
      label: string;
      onClick: () => void;
      href?: never;
      target?: never;
      rel?: never;
    }
  | {
      label: string;
      href: string;
      target?: '_self' | '_blank';
      rel?: string;
      onClick?: never;
    };

export type AllowedAlertSeverity = 'success' | 'info' | 'warning' | 'error';

export interface AlertProps extends Pick<MUIAlertProps, 'severity'> {
  title?: string;
  description: string;
  action?: AlertCTA;
}

const StyledAlert = styled(MUIAlert)(
  ({
    theme,
    severity = 'success',
    title,
  }: {
    theme: Theme;
    severity?: AllowedAlertSeverity;
    title?: string;
  }) => {
    const severityPalette = theme.palette[severity];

    return {
      border: '1px solid',
      borderRadius: 8,
      padding: theme.spacing(2),
      alignItems: title ? 'flex-start' : 'center',
      borderColor: severityPalette.main,
      backgroundColor: severityPalette[100],

      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(3),
      },

      [theme.breakpoints.down('sm')]: {
        alignItems: 'flex-start',
      },

      '& .MuiAlert-icon': {
        opacity: 1,
        paddingTop: '2px',
        alignItems: 'center',
        marginRight: theme.spacing(1),
        color: severityPalette[850],
      },

      '& .MuiAlert-message': {
        padding: 0,
        overflow: 'inherit',
        lineHeight: '22px',
        fontWeight: theme.typography.fontWeightRegular,
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflowWrap: 'anywhere',
        wordBreak: 'break-word',
        color: severityPalette[850],
      },
    };
  }
);

export const MIAlert = ({ severity = 'success', title, description, action }: AlertProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const generatedId = useId();

  return (
    <StyledAlert severity={severity} icon={getIcon(severity)} title={title}>
      <Stack direction={isMobile ? 'column' : 'row'} flex={1}>
        <Stack direction="column" flex={1} minWidth={0} gap={title ? '4px' : 0}>
          {title && (
            <MUIAlertTitle color={getColor(theme, severity)} id={generatedId}>
              {title}
            </MUIAlertTitle>
          )}
          {description}
        </Stack>
        {action && (
          <Cta
            cta={action}
            ariaLabelledBy={title ? generatedId : undefined}
            severity={severity}
            isMobile={isMobile}
          />
        )}
      </Stack>
    </StyledAlert>
  );
};

function Cta({
  cta,
  id,
  ariaLabelledBy,
  severity = 'success',
  isMobile,
}: Readonly<{
  cta: AlertCTA;
  id?: string;
  ariaLabelledBy?: string;
  severity?: AllowedAlertSeverity;
  isMobile: boolean;
}>) {
  const isLink = 'href' in cta;

  let target: '_self' | '_blank' | undefined;
  let rel: string | undefined;

  if (isLink) {
    target = cta.target ?? '_self';
    rel = target === '_blank' ? cta.rel ?? 'noopener noreferrer' : cta.rel;
  }

  const commonProps = {
    id,
    'aria-labelledby': ariaLabelledBy,
    'aria-label': ariaLabelledBy ? undefined : cta.label,
    onClick: !isLink ? cta.onClick : undefined,
    component: (isLink ? 'a' : 'button') as ElementType,
    href: isLink ? cta.href : undefined,
    target: isLink ? target : undefined,
    rel: isLink ? rel : undefined,
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
}

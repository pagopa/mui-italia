'use client';
import { ElementType, useId } from 'react';
import {
  AlertTitle as MUIAlertTitle,
  Stack,
  SxProps,
  Theme,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MUIAlert, { AlertProps as MUIAlertProps } from '@mui/material/Alert';
import { ButtonNaked } from '@components/ButtonNaked';
import { getColor, getIcon } from './utils';

export type AlertCTA =
  | {
      label: string;
      onClick: () => void;
    }
  | {
      label: string;
      href: string;
      target?: '_self' | '_blank';
      rel?: string;
    };

type AlertProps = Pick<MUIAlertProps, 'severity' | 'title'> & {
  description: string;
  action?: AlertCTA;
};

export type AllowedAlertSeverity = 'success' | 'info' | 'warning' | 'error';

export const Alert = ({ severity, title, description, action }: AlertProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const generatedId = useId();

  return (
    <MUIAlert severity={severity} icon={getIcon(severity)}>
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
            aria-label={title ? undefined : 'Alert action'}
            severity={severity}
            alignSelf={isMobile ? 'flex-start' : 'center'}
            theme={theme}
          />
        )}
      </Stack>
    </MUIAlert>
  );
};

function Cta({
  cta,
  id,
  ariaLabelledBy,
  severity,
  alignSelf,
  sx,
  theme,
}: Readonly<{
  cta: AlertCTA;
  id?: string;
  ariaLabelledBy?: string;
  severity?: AllowedAlertSeverity;
  alignSelf: 'flex-start' | 'center';
  theme: Theme;
  sx?: SxProps<Theme>;
}>) {
  const isLink = 'href' in cta;

  let target: '_self' | '_blank' | undefined;
  let rel: string | undefined;

  if (isLink) {
    target = cta.target ?? '_self';

    if (target === '_blank') {
      rel = cta.rel ?? 'noopener noreferrer';
    } else {
      rel = cta.rel;
    }
  }

  const commonProps = {
    id,
    'aria-labelledby': ariaLabelledBy,
    onClick: 'onClick' in cta ? cta.onClick : undefined,
    component: (isLink ? 'a' : 'button') as ElementType,
    href: isLink ? cta.href : undefined,
    target: isLink ? target : undefined,
    rel: isLink ? rel : undefined,
  };

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ButtonNaked
      {...commonProps}
      sx={{
        pt: isMobile ? '16px' : 0,
        p: 0,
        minWidth: 'auto',
        fontWeight: 600,
        fontSize: '16px',
        textDecoration: 'none',
        alignSelf: alignSelf,
        color: theme.palette[severity ?? 'success'][850],
        ...sx,
      }}
    >
      {cta.label}
    </ButtonNaked>
  );
}

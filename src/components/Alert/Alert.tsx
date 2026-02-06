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
import { InfoAlertIcon } from '@icons/InfoAlertIcon';
import { ErrorAlertIcon } from '@icons/ErrorAlertIcon';
import { SuccessAlertIcon } from '@icons/SuccessAlertIcon';
import { WarningAlertIcon } from '@icons/WarningAlertIcon';
import { ButtonNaked } from '@components/ButtonNaked';
import { theme } from '@theme';

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
  action: AlertCTA;
};

export const Alert = ({ severity, title, description, action }: AlertProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const iconBySeverity = {
    info: <InfoAlertIcon />,
    error: <ErrorAlertIcon />,
    warning: <WarningAlertIcon />,
    success: <SuccessAlertIcon />,
  } as const;

  const colorBySeverity = {
    info: theme.palette.info[850],
    error: theme.palette.error[850],
    warning: theme.palette.warning[850],
    success: theme.palette.success[850],
  } as const;

  const getIcon = () =>
    severity !== undefined ? iconBySeverity[severity] : iconBySeverity.success;

  const getColor = () =>
    severity !== undefined ? colorBySeverity[severity] : colorBySeverity.success;

  return (
    <MUIAlert severity={severity} icon={getIcon()}>
      <Stack direction={isMobile ? 'column' : 'row'} flex={1}>
        <Stack direction="column" flex={1} minWidth={0} gap={'4px'}>
          <MUIAlertTitle color={getColor()}>{title}</MUIAlertTitle>
          {description}
        </Stack>
        <Cta
          cta={action}
          ariaLabelledBy={useId()}
          severity={severity}
          alignSelf={isMobile ? 'flex-start' : 'center'}
        />
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
}: Readonly<{
  cta: AlertCTA;
  id?: string;
  ariaLabelledBy?: string;
  severity?: 'success' | 'info' | 'warning' | 'error';
  alignSelf: 'flex-start' | 'center';
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

  return (
    <ButtonNaked
      {...commonProps}
      sx={{
        p: 0,
        minWidth: 'auto',
        fontWeight: 600,
        fontSize: '14px',
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

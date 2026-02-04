import MuiAlert from '@mui/material/Alert';
import { styled, SxProps, Theme } from '@mui/material/styles';
import type { AlertColorStyle, AlertCTA } from './model';
import { ElementType } from 'react';
import { ButtonNaked } from '@components/ButtonNaked';
import { Typography } from '@mui/material';
import { theme } from 'index';

const alertBorderWidth = '1px';
const responsiveBreakpoint = 'sm';

export const Root = styled(MuiAlert, {
  shouldForwardProp: (prop) => prop !== 'colorStyle',
})<{ colorStyle: AlertColorStyle }>(({ theme, colorStyle }) => ({
  border: `${alertBorderWidth} solid`,
  padding: theme.spacing(1),

  alignItems: 'flex-start',

  borderColor:
    typeof colorStyle.border === 'function' ? colorStyle.border(theme) : colorStyle.border,

  [theme.breakpoints.up(responsiveBreakpoint)]: {
    padding: theme.spacing(2),
  },

  '& .MuiAlert-icon': {
    opacity: 1,
    padding: 0,
    marginRight: theme.spacing(1),
    paddingTop: '2px',

    color: typeof colorStyle.icon === 'function' ? colorStyle.icon(theme) : colorStyle.icon,

    [theme.breakpoints.up(responsiveBreakpoint)]: {
      marginRight: theme.spacing(2),
    },
  },

  '& .MuiAlert-message': {
    padding: 0,
    overflow: 'inherit',
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
  },
}));

export const Inner = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export function Title({
  colorStyle,
  text,
  fontSizeOverride,
  id,
}: Readonly<{
  colorStyle: AlertColorStyle;
  text: string;
  fontSizeOverride?: string;
  id?: string;
}>) {
  const defaultFontSize = '18px';
  const fontSize = fontSizeOverride ?? defaultFontSize;

  return (
    <Typography
      id={id}
      component="h6"
      color={
        typeof colorStyle.textColor === 'function'
          ? colorStyle.textColor(theme)
          : colorStyle.textColor
      }
      sx={{
        fontWeight: 500,
        fontSize,
        lineHeight: 1.4,
        overflowWrap: 'anywhere',
        wordBreak: 'break-word',
      }}
    >
      {text}
    </Typography>
  );
}

export function Cta({
  cta,
  colorStyle,
  alignSelf,
  id,
  ariaLabelledBy,
  sx,
}: Readonly<{
  cta: AlertCTA;
  colorStyle: AlertColorStyle;
  alignSelf?: 'flex-start' | 'center' | 'flex-end';
  id?: string;
  ariaLabelledBy?: string;
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
        color:
          typeof colorStyle.textColor === 'function'
            ? colorStyle.textColor(theme)
            : colorStyle.textColor,
        alignSelf,
        ...sx,
      }}
    >
      {cta.label}
    </ButtonNaked>
  );
}

export function Content({
  colorStyle,
  text,
}: Readonly<{
  colorStyle: AlertColorStyle;
  text: string;
}>) {
  return (
    <Typography
      variant="body2"
      sx={{
        color:
          typeof colorStyle.textColor === 'function'
            ? colorStyle.textColor(theme)
            : colorStyle.textColor,
        overflowWrap: 'anywhere',
        wordBreak: 'break-word',
      }}
    >
      {text}
    </Typography>
  );
}

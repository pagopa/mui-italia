import type { ElementType } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Chip, IconButton, Typography, styled } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import { ButtonNaked } from '@components/ButtonNaked';
import { blue, neutral, turquoise } from 'theme/colors';
import type { BannerColorStyle, BannerCTA, BannerVariant, CtaKind, ThemeColor } from './model';

const resolveColor = (theme: Theme, value: ThemeColor) =>
  typeof value === 'function' ? value(theme) : value;

export const Root = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'colorStyle',
})<{ colorStyle: BannerColorStyle }>(({ theme, colorStyle }) => ({
  backgroundColor: resolveColor(theme, colorStyle.background),
  border: `1px solid ${resolveColor(theme, colorStyle.border)}`,
  borderRadius: theme.spacing(1),
}));

export const Inner = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const BlueBar = styled(Box)(({ theme }) => ({
  width: 4,
  borderRadius: theme.spacing(0.5),
  backgroundColor: blue[500],
  marginRight: theme.spacing(2),
  alignSelf: 'stretch',
}));

export function CloseButton({
  onClose,
  ariaLabel,
}: Readonly<{ onClose: () => void; ariaLabel: string }>) {
  return (
    <IconButton onClick={onClose} size="small" sx={{ color: neutral.black }} aria-label={ariaLabel}>
      <CloseIcon fontSize="small" />
    </IconButton>
  );
}

export function BadgeChip({ text }: Readonly<{ text: string }>) {
  return (
    <Chip
      label={text}
      size="small"
      sx={{
        fontWeight: 600,
        alignSelf: 'flex-start',
        '&.MuiChip-root': {
          backgroundColor: turquoise[50],
          color: turquoise[850],
        },
        '& .MuiChip-label': {
          fontSize: '12px',
          whiteSpace: 'normal',
          overflowWrap: 'anywhere',
          wordBreak: 'break-word',
        },
      }}
    />
  );
}

export function Cta({
  kind,
  cta,
  alignSelf,
  variant,
  id,
  ariaLabelledBy,
}: Readonly<{
  kind: CtaKind;
  cta: BannerCTA;
  alignSelf?: 'flex-start' | 'center' | 'flex-end';
  variant: BannerVariant;
  id?: string;
  ariaLabelledBy?: string;
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

  if (kind === 'contained') {
    return (
      <Button
        {...commonProps}
        variant="contained"
        sx={{
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          backgroundColor: blue[500],
          fontSize: '14px',
          px: 2,
          whiteSpace: 'nowrap',
          alignSelf,
        }}
      >
        {cta.label}
      </Button>
    );
  }

  return (
    <ButtonNaked
      {...commonProps}
      sx={{
        p: 0,
        minWidth: 'auto',
        fontWeight: 600,
        fontSize: variant === 'tertiary' ? '16px' : '14px',
        color: blue[500],
        textDecoration: 'none',
        alignSelf,
      }}
    >
      {cta.label}
    </ButtonNaked>
  );
}

export function Title({
  text,
  textAlign,
  variant,
  fontSizeOverride,
  id,
}: Readonly<{
  text: string;
  textAlign: 'left' | 'center';
  variant: BannerVariant;
  fontSizeOverride?: string;
  id?: string;
}>) {
  const defaultFontSize = variant === 'tertiary' ? '16px' : '24px';
  const fontSize = fontSizeOverride ?? defaultFontSize;

  return (
    <Typography
      id={id}
      component="h6"
      color={neutral.black}
      sx={{
        fontWeight: 700,
        fontSize,
        lineHeight: 1.2,
        textAlign,
        // prevents long unbroken strings from overflowing the banner.
        overflowWrap: 'anywhere',
        wordBreak: 'break-word',
      }}
    >
      {text}
    </Typography>
  );
}

export function Message({
  text,
  textAlign,
  variant,
}: Readonly<{
  text: string;
  textAlign: 'left' | 'center';
  variant: BannerVariant;
}>) {
  return (
    <Typography
      variant="body2"
      sx={{
        color: neutral[700],
        textAlign,
        fontSize: variant === 'tertiary' ? '14px' : undefined,
        overflowWrap: 'anywhere',
        wordBreak: 'break-word',
      }}
    >
      {text}
    </Typography>
  );
}

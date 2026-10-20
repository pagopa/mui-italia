import type { ElementType } from 'react';
import { Close as CloseIcon } from '@mui/icons-material';
import { Box, Typography, styled } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import type { BannerColorStyle, BannerCTA, BannerVariant, CtaKind, ThemeColor } from './model';
import { MIIconButton } from '@components/MIIconButton';
import { MIChip } from '@components/MIChip';
import { MIButton } from '@components/MIButton';

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
  backgroundColor: theme.colors.blue[500],
  marginRight: theme.spacing(2),
  alignSelf: 'stretch',
}));

export function CloseButton({
  onClose,
  ariaLabel,
}: Readonly<{ onClose: () => void; ariaLabel: string }>) {
  return (
    <MIIconButton
      onClick={onClose}
      sx={{ color: (theme) => theme.colors.neutral.black }}
      aria-label={ariaLabel}
    >
      <CloseIcon fontSize="small" />
    </MIIconButton>
  );
}

export function BadgeChip({ text }: Readonly<{ text: string }>) {
  return (
    <MIChip
      color="highlight"
      label={text}
      wrapLabel
      sx={{
        alignSelf: 'flex-start',
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
  sx,
}: Readonly<{
  kind: CtaKind;
  cta: BannerCTA;
  alignSelf?: 'flex-start' | 'center' | 'flex-end';
  variant: BannerVariant;
  id?: string;
  ariaLabelledBy?: string;
  sx?: SxProps<Theme>;
}>) {
  const isLink = cta.href !== undefined;

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
    onClick: isLink ? undefined : cta.onClick,
    component: (isLink ? 'a' : 'button') as ElementType,
    href: isLink ? cta.href : undefined,
    target: isLink ? target : undefined,
    rel: isLink ? rel : undefined,
  };

  if (kind === 'contained' && !isLink) {
    return (
      <MIButton
        id={id}
        aria-labelledby={ariaLabelledBy}
        onClick={cta.onClick}
        variant="contained"
        sx={{
          alignSelf,
          ...sx,
        }}
      >
        {cta.label}
      </MIButton>
    );
  }

  return (
    <MIButton
      variant="text"
      {...commonProps}
      sx={{
        fontSize: variant === 'tertiary' ? '16px' : '14px',
        alignSelf,
        ...sx,
      }}
    >
      {cta.label}
    </MIButton>
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
      color={(theme) => theme.colors.neutral.black}
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
        color: (theme) => theme.colors.neutral.grey[700],
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

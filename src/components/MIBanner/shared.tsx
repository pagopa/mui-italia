import type { ComponentProps, ElementType } from 'react';
import { Close as CloseIcon } from '@mui/icons-material';
import { Box, IconButton, Typography, styled } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import { MIButton } from '@components/MIButton';
import { MIChip } from '@components/MIChip';
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
  backgroundColor: theme.colors.blue[500],
  marginRight: theme.spacing(2),
  alignSelf: 'stretch',
}));

export function CloseButton({
  onClose,
  ariaLabel,
}: Readonly<{ onClose: () => void; ariaLabel: string }>) {
  return (
    <IconButton
      onClick={onClose}
      sx={{ color: (theme) => theme.palette.text.primary }}
      aria-label={ariaLabel}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );
}

export function BadgeChip({ text }: Readonly<{ text: string }>) {
  return (
    <MIChip
      label={text}
      color="highlight"
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
  const isLink = 'href' in cta;

  let target: '_self' | '_blank' | undefined;
  let rel: string | undefined;

  if (isLink) {
    // eslint-disable-next-line prefer-const
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
    /**
     * MIButton types allow `href` only for the `text` variant, but here the CTA
     * can be rendered as an anchor while keeping the contained look.
     */
    const containedProps = {
      ...commonProps,
      variant: 'contained',
    } as unknown as ComponentProps<typeof MIButton>;

    return (
      <MIButton
        {...containedProps}
        sx={{
          alignSelf,
          ...sx,
        }}
      >
        {cta.label}
      </MIButton>
    );
  }

  const textProps = {
    ...commonProps,
    variant: 'text',
  } as unknown as ComponentProps<typeof MIButton>;

  return (
    <MIButton
      {...textProps}
      sx={{
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

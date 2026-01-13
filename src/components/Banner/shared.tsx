import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Chip, IconButton, Typography, styled } from '@mui/material';
import { ButtonNaked } from '@components/ButtonNaked';
import { blue, divider, neutral } from 'theme/colors';
import { BannerVariant, CtaKind } from './model';

export const Root = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'bg',
})<{ bg: string }>(({ theme, bg }) => ({
  backgroundColor: bg,
  border: `1px solid ${divider}`,
  borderRadius: theme.spacing(1),
}));

export const Inner = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const PrimaryRow = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'stretch',
}));

export const BlueBar = styled(Box)(({ theme }) => ({
  width: 4,
  borderRadius: theme.spacing(0.5),
  backgroundColor: blue[500],
  marginRight: theme.spacing(2),
  alignSelf: 'stretch',
}));

export const TwoCols = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  gap: theme.spacing(2),
}));

export const LeftCol = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}));

export const RightCol = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: theme.spacing(2),
  flexShrink: 0,
}));

export const CloseBtn = styled(IconButton)(() => ({
  color: neutral.black,
}));

export function CloseButton({ onClose }: Readonly<{ onClose: () => void }>) {
  return (
    <CloseBtn aria-label="Close banner" onClick={onClose} size="small">
      <CloseIcon fontSize="small" />
    </CloseBtn>
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
          backgroundColor: '#DBF9FA',
          color: '#003B3D',
        },
        '& .MuiChip-label': {
          fontSize: '12px',
        },
      }}
    />
  );
}

export function Cta({
  kind,
  label,
  onClick,
  testId,
  alignSelf,
  variant,
}: Readonly<{
  kind: CtaKind;
  label: string;
  onClick: () => void;
  testId?: string;
  alignSelf?: 'flex-start' | 'center' | 'flex-end';
  variant: BannerVariant;
}>) {
  if (kind === 'contained') {
    return (
      <Button
        variant="contained"
        onClick={onClick}
        data-testid={testId}
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
        {label}
      </Button>
    );
  }

  return (
    <ButtonNaked
      onClick={onClick}
      data-testid={testId}
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
      {label}
    </ButtonNaked>
  );
}

export function Title({
  text,
  textAlign,
  variant,
}: Readonly<{
  text: string;
  textAlign: 'left' | 'center';
  variant: BannerVariant;
}>) {
  const fontSize = variant === 'tertiary' ? '16px' : '24px';

  return (
    <Typography
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

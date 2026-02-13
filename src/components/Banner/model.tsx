import { AriaAttributes, ReactNode } from 'react';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import type { Theme } from '@mui/material/styles';
import { blue, neutral } from 'theme/colors';
import { IllusPush } from '../../illustrations/Push';

export type ThemeColor = string | ((theme: Theme) => string);
export type BannerColor = 'white' | 'info';
export type BannerVariant = 'primary' | 'secondary' | 'tertiary';
export type BannerDirection = 'horizontal' | 'vertical';

export type CtaKind = 'naked' | 'contained';

export type BannerColorStyle = {
  background: ThemeColor;
  border: ThemeColor;
};

export type BannerCTA =
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

export type BannerCTAWithId = BannerCTA & { id: string };

type DataAttributes = {
  [key: `data-${string}`]: string | number | boolean | undefined;
};

export interface BannerProps extends DataAttributes, AriaAttributes {
  color?: BannerColor;
  variant?: BannerVariant;
  title: string;
  message?: string;
  badge?: string;
  onClose?: () => void;
  closeAriaLabel?: string;
  cta?: BannerCTA;
  icon?: ReactNode;
  illustration?: ReactNode;
}

const COLOR_STYLE_MAP: Record<BannerColor, BannerColorStyle> = {
  white: {
    background: (theme) => theme.palette.background.paper,
    border: neutral[100],
  },
  info: {
    background: blue[50],
    border: blue[100],
  },
};

const DEFAULT_ICON = <EmojiObjectsOutlinedIcon fontSize="small" />;
const DEFAULT_PRIMARY_ILLUSTRATION = <IllusPush />;

export type BannerModel = {
  colorStyle: BannerColorStyle;
  direction: BannerDirection;
  textAlign: 'left' | 'center';

  hasClose: boolean;
  hasCta: boolean;

  ctaKind: CtaKind;

  badgeText?: string;
  topIcon?: ReactNode;
  illustrationNode?: ReactNode;
};

export type ViewState = {
  variant: BannerVariant;
  isHorizontal: boolean;
  contentGapPx: number;
  primaryIllustrationSizePx: number;
};

export function normalizeProps(props: BannerProps) {
  const variant = props.variant ?? 'primary';
  return { ...props, variant } satisfies BannerProps;
}

export function computeModel(props: BannerProps, direction: BannerDirection): BannerModel {
  const { color = 'white', variant = 'primary', badge, onClose, cta, icon, illustration } = props;

  const hasClose = Boolean(onClose);
  const hasCta = Boolean(cta);

  const isHorizontal = direction === 'horizontal';

  const resolvedIcon = icon ?? DEFAULT_ICON;

  let variantConfig: Pick<BannerModel, 'textAlign' | 'ctaKind' | 'topIcon' | 'illustrationNode'>;

  switch (variant) {
    case 'secondary':
      variantConfig = {
        textAlign: 'left',
        ctaKind: 'contained',
      };
      break;

    case 'tertiary':
      variantConfig = {
        textAlign: isHorizontal ? 'left' : 'center',
        ctaKind: 'naked',
        topIcon: resolvedIcon,
      };
      break;

    case 'primary':
    default:
      variantConfig = {
        textAlign: 'left',
        ctaKind: 'naked',
        illustrationNode: illustration ?? DEFAULT_PRIMARY_ILLUSTRATION,
      };
      break;
  }

  return {
    colorStyle: COLOR_STYLE_MAP[color],
    direction,
    ...variantConfig,
    hasClose,
    hasCta,
    badgeText: badge,
  };
}

export function computeViewState(props: BannerProps, direction: BannerDirection): ViewState {
  const variant = props.variant ?? 'primary';
  const isHorizontal = direction === 'horizontal';

  const contentGapPx = variant === 'tertiary' && isHorizontal ? 8 : 16;

  const primaryIllustrationSizePx = isHorizontal ? 80 : 56;

  return {
    variant,
    isHorizontal,
    contentGapPx,
    primaryIllustrationSizePx,
  };
}

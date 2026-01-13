import { ReactNode } from 'react';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { blue } from 'theme/colors';
import { IllusPush } from '../../illustrations/Push';

export type BannerColor = 'white' | 'info';
export type BannerVariant = 'primary' | 'secondary' | 'tertiary';
export type BannerDirection = 'horizontal' | 'vertical';

export type CtaKind = 'naked' | 'contained';

export interface BannerCTA {
  label: string;
  onClick: () => void;
  'data-testid'?: string;
}

export interface BannerProps {
  color?: BannerColor;
  variant?: BannerVariant;
  direction?: BannerDirection;
  title: string;
  message?: string;
  badge?: string;
  onClose?: () => void;
  cta?: BannerCTA;
  icon?: ReactNode;
  illustration?: ReactNode;

  'data-testid'?: string;
}

const BG_MAP: Record<BannerColor, string> = {
  white: 'background.paper',
  info: blue[50],
};

const DEFAULT_ICON = <LightbulbOutlinedIcon fontSize="small" />;
const DEFAULT_PRIMARY_ILLUSTRATION = <IllusPush />;

export type BannerModel = {
  bg: string;
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
  const direction = props.direction ?? 'horizontal';
  return { ...props, variant, direction } satisfies BannerProps;
}

export function computeModel(props: BannerProps): BannerModel {
  const {
    color = 'white',
    variant = 'primary',
    direction = 'horizontal',
    badge,
    onClose,
    cta,
    icon,
    illustration,
  } = props;

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
    bg: BG_MAP[color],
    direction,
    ...variantConfig,
    hasClose,
    hasCta,
    badgeText: badge,
  };
}

export function computeViewState(props: BannerProps, model: BannerModel): ViewState {
  const variant = props.variant ?? 'primary';
  const direction = props.direction ?? model.direction;
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

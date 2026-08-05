'use client';

import {
  CheckCircleRounded as CheckCircleRoundedIcon,
  InfoRounded as InfoRoundedIcon,
  ReportProblemRounded,
  ReportRounded as ReportRoundedIcon,
} from '@mui/icons-material';

import { SvgIconProps, styled } from '@mui/material';
import { pxToRem } from '@theme';
import React, { ComponentType, useRef } from 'react';
import { useIsTruncated } from '../../hooks/useIsTruncated';
import MITooltip from '../MITooltip/MITooltip';

export type Variants = 'default' | 'info' | 'warning' | 'error' | 'success' | 'only-icon';

type SpanHTMLAttributes = Pick<React.HTMLAttributes<HTMLSpanElement>, 'aria-label'>;

type ValueMode = 'truncate' | 'wrap';

type TagSlotProps = {
  root?: {
    borderColor?: React.CSSProperties['borderColor'];
  };
  icon?: {
    color?: React.CSSProperties['color'];
  };
};

interface OnlyIconTagProps extends SpanHTMLAttributes {
  variant: 'only-icon';
  icon: ComponentType<SvgIconProps>;
  slotProps?: TagSlotProps;
}

interface DefaultTagProps extends SpanHTMLAttributes {
  variant?: 'default';
  value: string;
  mode?: ValueMode;
  icon?: ComponentType<SvgIconProps>;
  slotProps?: TagSlotProps;
}

interface OtherTagProps extends SpanHTMLAttributes {
  variant: Exclude<Variants, 'default' | 'only-icon'>;
  value: string;
  mode?: ValueMode;
  slotProps?: never;
}

export type TagProps = OnlyIconTagProps | DefaultTagProps | OtherTagProps;

/* Transform HTML component into MUI Styled Component
in order to accept `sx` prop */
const Container = styled('div', {
  shouldForwardProp: (prop) =>
    prop !== 'value' &&
    prop !== 'mode' &&
    prop !== 'variant' &&
    prop !== 'icon' &&
    prop !== 'slotProps',
})<{ slotProps?: { borderColor?: React.CSSProperties['borderColor'] } }>(({ theme, slotProps }) => {
  return {
    fontSize: pxToRem(12),
    fontWeight: 600,
    userSelect: 'none',
    padding: `${pxToRem(4)} ${pxToRem(8)}`,
    backgroundColor: theme.palette.common.white,
    color: theme.palette.grey[700],
    fontFamily: theme.typography.fontFamily,
    borderRadius: pxToRem(6),
    border: `1px solid ${slotProps?.borderColor ?? theme.palette.grey[100]}`,
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    lineHeight: pxToRem(18),
    textTransform: 'uppercase',
    maxWidth: '100%',
    boxSizing: 'border-box',
  };
});

const Value = styled('span', {
  shouldForwardProp: (prop) => prop !== 'mode',
})<{ mode?: ValueMode }>(({ mode }) => {
  if (mode === 'truncate') {
    return {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      minWidth: 0,
    };
  } else if (mode === 'wrap') {
    return { whiteSpace: 'normal', wordBreak: 'break-word' };
  }
  return {};
});

const fontSize = pxToRem(14);

const Icon = ({
  variant,
  icon,
  slotProps,
  ariaLabel,
}: {
  variant: Variants;
  icon?: ComponentType<SvgIconProps>;
  slotProps?: { color?: React.CSSProperties['color'] };
  ariaLabel?: string;
}) => {
  const CustomIcon = icon;
  if (variant === 'info') {
    return (
      <InfoRoundedIcon
        sx={(theme) => ({ color: theme.colors.info[700], fontSize })}
        aria-hidden="false"
        aria-label={ariaLabel || 'Stato: informativo'}
      />
    );
  }
  if (variant === 'warning') {
    return (
      <ReportProblemRounded
        sx={(theme) => ({ color: theme.colors.warning[700], fontSize })}
        aria-hidden="false"
        aria-label={ariaLabel || 'Stato: avviso'}
      />
    );
  }
  if (variant === 'error') {
    return (
      <ReportRoundedIcon
        sx={(theme) => ({ color: theme.colors.error[600], fontSize })}
        aria-hidden="false"
        aria-label={ariaLabel || 'Stato: errore'}
      />
    );
  }
  if (variant === 'success') {
    return (
      <CheckCircleRoundedIcon
        sx={(theme) => ({ color: theme.colors.success[700], fontSize })}
        aria-hidden="false"
        aria-label={ariaLabel || 'Stato: confermato'}
      />
    );
  }
  if (variant === 'default' && CustomIcon) {
    return (
      <CustomIcon
        sx={(theme) => ({ color: slotProps?.color ?? theme.colors.blue[500], fontSize })}
        aria-hidden="false"
        aria-label={ariaLabel || 'Stato: standard'}
      />
    );
  }
  if (variant === 'only-icon' && CustomIcon) {
    return (
      <CustomIcon
        sx={(theme) => ({ color: slotProps?.color ?? theme.colors.neutral.grey[700], fontSize })}
        aria-hidden={ariaLabel ? 'false' : undefined}
        aria-label={ariaLabel}
      />
    );
  }
  return null;
};

// here we cannot use destructured object because TagProps is a Discriminated Union of Interfaces
const Tag: React.FC<TagProps> = (props) => {
  const valueRef = useRef<HTMLSpanElement>(null);

  const { variant = 'default', slotProps, ...rest } = props;
  const hasIcon = 'icon' in props && props.icon;
  const hasValue = 'value' in props && props.value;
  const hasMode = 'mode' in props && props.mode;

  const isTruncated = useIsTruncated<HTMLSpanElement>(
    valueRef,
    hasMode && props.mode === 'truncate'
  );

  if (variant === 'only-icon' && hasIcon) {
    return <Icon variant={variant} icon={props.icon} slotProps={props.slotProps?.icon} />;
  }

  return (
    <Container {...rest} slotProps={slotProps?.root}>
      <Icon
        variant={variant}
        icon={hasIcon ? props.icon : undefined}
        slotProps={hasIcon ? props.slotProps?.icon : undefined}
      />
      {hasValue && (
        <MITooltip title={props.value} disabled={!isTruncated}>
          <Value
            mode={hasMode ? props.mode : undefined}
            ref={valueRef}
            tabIndex={isTruncated ? 0 : undefined}
          >
            {props.value}
          </Value>
        </MITooltip>
      )}
    </Container>
  );
};

export default Tag;

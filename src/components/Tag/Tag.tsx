'use client';

import ReportProblemRounded from '@mui/icons-material/ReportProblemRounded';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

import { SxProps, styled } from '@mui/system';

import { pxToRem, theme } from '@theme';
import { colors } from 'theme/foundations/colors';
import React, { ComponentType } from 'react';
import { SvgIconProps } from '@mui/material';

export type Variants = 'default' | 'info' | 'warning' | 'error' | 'success' | 'only-icon';

interface BaseTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: string;
  sx?: SxProps;
}

interface OnlyIconTagProps extends BaseTagProps {
  variant: 'only-icon';
  icon: ComponentType<SvgIconProps>;
}

interface DefaultTagProps extends BaseTagProps {
  variant: 'default';
  icon?: ComponentType<SvgIconProps>;
}

interface OtherTagProps extends BaseTagProps {
  variant: Exclude<Variants, 'default' | 'only-icon'>;
  icon?: never;
}

export type TagProps = OnlyIconTagProps | DefaultTagProps | OtherTagProps;

/* Transform HTML component into MUI Styled Component
in order to accept `sx` prop */
const StyledTag = styled('span')({
  fontSize: pxToRem(12),
  fontWeight: 600,
  whiteSpace: 'nowrap',
  userSelect: 'none',
  padding: `${pxToRem(4)} ${pxToRem(8)}`,
  backgroundColor: theme.palette.common.white,
  color: theme.palette.grey[700],
  fontFamily: theme.typography.fontFamily,
  borderRadius: pxToRem(6),
  border: `1px solid ${theme.palette.grey[100]}`,
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  lineHeight: pxToRem(18),
  textTransform: 'uppercase',
});

const fontSize = pxToRem(14);

const Icon = ({
  variant,
  icon,
  ariaLabel,
}: {
  variant: Variants;
  icon?: ComponentType<SvgIconProps>;
  ariaLabel?: string;
}) => {
  const CustomIcon = icon;
  if (variant === 'info') {
    return (
      <InfoRoundedIcon
        sx={{ color: colors.info[700], fontSize }}
        aria-hidden="false"
        aria-label="Stato: informativo"
      />
    );
  }
  if (variant === 'warning') {
    return (
      <ReportProblemRounded
        sx={{ color: colors.warning[700], fontSize }}
        aria-hidden="false"
        aria-label="Stato: avviso"
      />
    );
  }
  if (variant === 'error') {
    return (
      <ReportRoundedIcon
        sx={{ color: colors.error[600], fontSize }}
        aria-hidden="false"
        aria-label="Stato: errore"
      />
    );
  }
  if (variant === 'success') {
    return (
      <CheckCircleRoundedIcon
        sx={{ color: colors.success[700], fontSize }}
        aria-hidden="false"
        aria-label="Stato: confermato"
      />
    );
  }
  if (variant === 'default' && CustomIcon) {
    return (
      <CustomIcon
        sx={{ color: colors.blue[500], fontSize }}
        aria-hidden="false"
        aria-label={ariaLabel || 'Stato: standard'}
      />
    );
  }
  if (variant === 'only-icon' && CustomIcon) {
    return (
      <CustomIcon
        sx={{ fill: colors.neutral.grey[700], fontSize }}
        aria-hidden={ariaLabel ? 'false' : undefined}
        aria-label={ariaLabel}
      />
    );
  }
  return null;
};

export const Tag: React.FC<TagProps> = ({ value, variant = 'default', icon, sx = {}, ...rest }) => {
  if (variant === 'only-icon' && icon) {
    return <Icon variant={variant} icon={icon} />;
  } else {
    return (
      <StyledTag sx={sx} {...rest}>
        <Icon variant={variant} icon={icon} />
        {variant === 'only-icon' ? null : value}
      </StyledTag>
    );
  }
};

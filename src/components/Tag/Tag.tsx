'use client';

import ReportProblemRounded from '@mui/icons-material/ReportProblemRounded';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

import { SxProps, styled } from '@mui/system';

import { pxToRem, theme } from '@theme';
import { colors } from 'theme/foundations/colors';
import React from 'react';

export type Variants = 'default' | 'info' | 'warning' | 'error' | 'success' | 'only-icon';

export interface TagProps {
  /** Content of the component */
  value: string;
  /** Variant of the colour. You can set variant
   * related to the meaning of the tag. */
  variant?: Variants;
  /** Icon in case of default tag element or only-icon variant.
   * It is passed as a React Node and it has blue[500] as color.
   */
  icon?: React.ReactElement;
  /* Style to override tag style */
  sx?: SxProps;
  /* Aria label */
  ariaLabel?: string;
}

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
  icon?: React.ReactElement;
  ariaLabel?: string;
}) => {
  if (variant === 'info') {
    return (
      <InfoRoundedIcon sx={{ color: colors.info[700], fontSize }} aria-label="Stato: informativo" />
    );
  }
  if (variant === 'warning') {
    return (
      <ReportProblemRounded
        sx={{ color: colors.warning[700], fontSize }}
        aria-label="Stato: avviso"
      />
    );
  }
  if (variant === 'error') {
    return (
      <ReportRoundedIcon sx={{ color: colors.error[600], fontSize }} aria-label="Stato: errore" />
    );
  }
  if (variant === 'success') {
    return (
      <CheckCircleRoundedIcon
        sx={{ color: colors.success[700], fontSize }}
        aria-label="Stato: confermato"
      />
    );
  }
  if (variant === 'default') {
    return icon
      ? React.cloneElement(icon, {
          sx: { color: colors.blue[500], fontSize, ...(icon.props.sx || {}) },
          ariaLabel: 'Stato: standard',
        })
      : null;
  }
  if (variant === 'only-icon' && icon) {
    return React.cloneElement(icon, {
      sx: { fill: colors.neutral.grey[700], fontSize, ...(icon.props.sx || {}) },
      ariaLabel,
    });
  }
  return null;
};

export const Tag = ({
  value,
  variant = 'default',
  icon,
  sx = {},
  ...rest
}: TagProps): JSX.Element => {
  const getContent = (value: string) => {
    if (variant === 'only-icon') {
      return null;
    }
    return value;
  };

  if (variant === 'only-icon' && icon) {
    return <Icon variant={variant} icon={icon} />;
  } else {
    return (
      <StyledTag sx={sx} {...rest}>
        <Icon variant={variant} icon={icon} />
        {getContent(value)}
      </StyledTag>
    );
  }
};

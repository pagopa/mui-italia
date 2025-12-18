'use client';

import ReportProblemRounded from '@mui/icons-material/ReportProblemRounded';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

import { SxProps, styled } from '@mui/system';

import { pxToRem, theme } from '@theme';
import { colors } from 'theme/foundations/colors';

export type Variants =
  | 'default'
  | 'info'
  | 'warning'
  | 'error'
  | 'success'
  | 'no-icon'
  | 'only-icon';

export interface TagProps {
  /** Content of the component */
  value: string;
  /** Variant of the colour. You can set `Light` variant if
   * you want a washed out variant of the color. */
  variant?: Variants;
  /** Icon in case of default tag element. It is passed
   * as a React Node and it has blue[500] as color.
   */
  icon?: JSX.Element;
  /* Style to override tag style */
  sx?: SxProps;
}

/* Transform HTML component into MUI Styled Component
in order to accept `sx` prop */
const StyledTag = styled('span')({
  display: 'inline-block',
  fontSize: pxToRem(12),
  fontWeight: 600,
  whiteSpace: 'nowrap',
});

export const Tag = ({
  value,
  variant = 'default',
  icon,
  sx = {},
  ...rest
}: TagProps): JSX.Element => {
  const style = {
    userSelect: 'none',
    px: pxToRem(8),
    py: pxToRem(4),
    backgroundColor: theme.palette.common.white,
    color: theme.palette.grey[700],
    fontFamily: theme.typography.fontFamily,
    borderRadius: pxToRem(6),
    border: `1px solid ${theme.palette.grey[100]}`,
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    fontSize: pxToRem(12),
    lineHeight: pxToRem(18),
    fontWeight: 600,
    textTransform: 'uppercase',
    ...sx,
  } as SxProps;

  const getContent = (icon?: JSX.Element) => {
    if (variant === 'info') {
      return (
        <>
          <InfoRoundedIcon sx={{ color: colors.info[700], fontSize: pxToRem(12) }} />
          {value}
        </>
      );
    }
    if (variant === 'warning') {
      return (
        <>
          <ReportProblemRounded sx={{ color: colors.warning[700], fontSize: pxToRem(12) }} />
          {value}
        </>
      );
    }
    if (variant === 'error') {
      return (
        <>
          <ReportRoundedIcon sx={{ color: colors.error[600], fontSize: pxToRem(12) }} />
          {value}
        </>
      );
    }
    if (variant === 'success') {
      return (
        <>
          <CheckCircleRoundedIcon sx={{ color: colors.success[700], fontSize: pxToRem(12) }} />
          {value}
        </>
      );
    }
    if (variant === 'default' && icon) {
      return (
        <>
          {icon ? (
            icon
          ) : (
            <StarOutlineRoundedIcon sx={{ color: colors.blue[500], fontSize: pxToRem(12) }} />
          )}
          {value}
        </>
      );
    }

    return value;
  };

  if (variant === 'only-icon' && icon) {
    return icon;
  } else {
    return (
      <StyledTag sx={style} {...rest}>
        {getContent(icon)}
      </StyledTag>
    );
  }
};

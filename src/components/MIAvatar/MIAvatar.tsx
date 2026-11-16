'use client';

import { AccountBalanceRounded } from '@mui/icons-material';
import { Avatar, AvatarProps, Skeleton, styled } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { forwardRef } from 'react';

type BaseProps = Omit<AvatarProps, 'variant' | 'children' | 'component' | 'alt'> & {
  isLoading?: boolean;
};

export type MIAvatarProps =
  | (BaseProps & {
      variant?: 'standard';
      size?: 'small' | 'big';
      alt: string;
      children?: never;
      label?: never;
    })
  | (Omit<BaseProps, 'src' | 'srcSet' | 'sizes'> & {
      variant: 'gravatar';
      size?: never;
      src?: never;
      alt?: never;
      children?: never;
      label: string;
    });

const StyledAvatar = styled(Avatar, {
  shouldForwardProp: (prop) =>
    prop !== 'avatarSize' && prop !== 'isGravatar' && prop !== 'isLoading',
})<{ avatarSize?: 'small' | 'big'; isGravatar: boolean; isLoading: boolean }>(({
  theme,
  avatarSize,
  isGravatar,
  isLoading,
}) => {
  const dimension = isGravatar ? 32 : avatarSize === 'big' ? '4.125rem' : '2.75rem';

  return {
    width: dimension,
    height: dimension,
    ...(isGravatar
      ? {
          '&&': {
            backgroundColor: theme.colors.blue[150],
            color: theme.colors.blue[850],
          },
          fontSize: theme.typography.pxToRem(14.4),
          fontWeight: theme.typography.fontWeightRegular,
          lineHeight: theme.typography.pxToRem(20.8),
        }
      : {
          borderRadius: theme.shape.radius[8],
          backgroundColor: theme.palette.background.paper,
          boxShadow: isLoading
            ? 'none'
            : `inset 0 0 0 1px ${alpha(theme.colors.neutral.black, 0.06)}`,
          '&.MuiAvatar-colorDefault': {
            backgroundColor: theme.colors.neutral.grey[50],
            color: theme.colors.neutral.grey[300],
          },
          '& .MuiAvatar-img': {
            width: '80%',
            height: '80%',
            objectFit: 'contain',
          },
        }),
  };
});

const MIAvatar = forwardRef<HTMLDivElement, MIAvatarProps>((props, ref) => {
  const skeleton = (
    <Skeleton
      variant="rectangular"
      animation={false}
      aria-hidden="true"
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: 'inherit',
        backgroundColor: (theme) => theme.colors.neutral.grey[100],
      }}
    />
  );

  if (props.variant === 'gravatar') {
    const { label, isLoading = false, ...other } = props;
    return (
      <StyledAvatar
        {...other}
        ref={ref}
        variant="circular"
        isGravatar
        isLoading={isLoading}
        aria-busy={isLoading || other['aria-busy']}
      >
        {isLoading ? skeleton : label}
      </StyledAvatar>
    );
  }

  const { size = 'small', alt, src, srcSet, isLoading = false, ...other } = props;
  return (
    <StyledAvatar
      {...other}
      ref={ref}
      alt={alt}
      src={isLoading ? undefined : src}
      srcSet={isLoading ? undefined : srcSet}
      variant="rounded"
      avatarSize={size}
      isGravatar={false}
      isLoading={isLoading}
      aria-busy={isLoading || other['aria-busy']}
    >
      {isLoading ? (
        skeleton
      ) : (
        <AccountBalanceRounded
          titleAccess={alt || undefined}
          sx={{ width: '50%', height: '50%' }}
        />
      )}
    </StyledAvatar>
  );
});

MIAvatar.displayName = 'MIAvatar';

export default MIAvatar;

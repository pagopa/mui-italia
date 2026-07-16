'use client';

import { ComponentType, FC, HTMLAttributes, ReactNode } from 'react';
import {
  Box,
  SkeletonProps,
  Stack,
  StackProps,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import MIBoxedModuleSkeleton from './MIBoxedModuleSkeleton';

interface Props
  extends Pick<StackProps, 'children' | 'sx'>,
    Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'style' | 'onClick'> {
  loading?: boolean;
  direction?: 'horizontal' | 'vertical';
  icon?: ReactNode;
  action?: ReactNode;
  slots?: {
    skeleton: ComponentType;
  };
  slotProps?: {
    skeleton: SkeletonProps;
  };
  localeText?: {
    loadingLabel?: string;
  };
}

const getDirection = (isMobile: boolean, direction?: 'horizontal' | 'vertical') => {
  if (!direction) {
    return isMobile ? 'column' : 'row';
  }
  if (direction === 'horizontal') {
    return 'row';
  }
  return 'column';
};

const StyledStack = styled(
  Stack,
  {}
)<StackProps>(({ theme }) => {
  return {
    border: '1px solid',
    borderColor: theme.colors.neutral.grey[100],
    borderRadius: theme.shape.radius[8],
    padding: theme.spacing(2),
    backgroundColor: theme.colors.neutral.white,
    boxSizing: 'border-box',
    width: '100%',
    flex: '1 1 auto',
    minWidth: 0,
  };
});

const MIBoxedModule: FC<Props> = ({
  loading = false,
  direction,
  icon,
  children,
  action,
  slots,
  slotProps,
  localeText,
  ...rest
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const internalDirection = getDirection(isMobile, direction);

  const Skeleton = slots?.skeleton ?? MIBoxedModuleSkeleton;

  if (loading) {
    return (
      <StyledStack {...rest} direction="column" spacing={0.5} aria-busy="true">
        <Typography sx={visuallyHidden}>
          {localeText?.loadingLabel ?? 'Content loading, please wait...'}
        </Typography>
        <Skeleton {...slotProps?.skeleton} />
      </StyledStack>
    );
  }
  return (
    <StyledStack
      {...rest}
      direction="row"
      alignItems={isMobile ? 'flex-start' : 'center'}
      spacing={2}
    >
      {icon}
      <Stack
        direction={internalDirection}
        alignItems={internalDirection === 'column' ? 'stretch' : 'center'}
        columnGap={2}
        rowGap={1}
        sx={{ flex: '1 1 auto' }}
      >
        <Box
          sx={{ flex: internalDirection === 'column' ? 'none' : '1 1 auto' }}
          color={theme.colors.neutral.grey[700]}
        >
          {children}
        </Box>
        {action && (
          <Box sx={{ flexShrink: 0, width: internalDirection === 'column' ? '100%' : 'auto' }}>
            {action}
          </Box>
        )}
      </Stack>
    </StyledStack>
  );
};

export default MIBoxedModule;

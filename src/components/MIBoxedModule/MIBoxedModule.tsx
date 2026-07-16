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
import MIBoxedModuleContent from './MIBoxedModuleContent';

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
      {action && (
        <MIBoxedModuleContent direction={direction} action={action}>
          {children}
        </MIBoxedModuleContent>
      )}
      {!action && <Box sx={{ width: '100%' }}>{children}</Box>}
    </StyledStack>
  );
};

export default MIBoxedModule;

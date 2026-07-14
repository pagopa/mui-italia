'use-client';

import { ComponentType, FC, ReactNode } from 'react';
import { Box, Stack, StackProps, styled, Typography, useMediaQuery, useTheme } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import MIBoxedModuleSkeleton from './MIBoxedModuleSkeleton';

interface Props extends Pick<StackProps, 'children' | 'direction' | 'alignItems' | 'sx'> {
  loading?: boolean;
  icon?: ReactNode;
  action?: ReactNode;
  slots?: {
    skeleton: ComponentType;
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
  alignItems,
  icon,
  children,
  action,
  slots,
  localeText,
  ...rest
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const internalDirection = isMobile ? 'column' : 'row';
  const effectiveDirection = direction ?? internalDirection;
  const internalAlignItems = isMobile ? 'flex-start' : 'center';

  const shouldStretchAction =
    isMobile && (effectiveDirection === 'column' || effectiveDirection === 'column-reverse');

  const Skeleton = slots?.skeleton ?? MIBoxedModuleSkeleton;

  if (loading) {
    return (
      <StyledStack {...rest} direction="column" spacing={0.5} aria-busy="true">
        <Typography sx={visuallyHidden}>
          {localeText?.loadingLabel ?? 'Content loading, please wait...'}
        </Typography>
        <Skeleton />
      </StyledStack>
    );
  }
  return (
    <StyledStack {...rest} direction="row" alignItems="center" spacing={2}>
      {icon}
      <Stack
        direction={effectiveDirection}
        alignItems={alignItems ? alignItems : internalAlignItems}
        columnGap={2}
        rowGap={1}
        sx={{ flex: '1 1 auto', width: '100%' }}
      >
        <Box sx={{ flex: 1, width: '100%' }} color={theme.colors.neutral.grey[700]}>
          {children}
        </Box>
        {action && (
          <Box sx={{ flexShrink: 0, alignSelf: shouldStretchAction ? 'stretch' : 'auto' }}>
            {action}
          </Box>
        )}
      </Stack>
    </StyledStack>
  );
};

export default MIBoxedModule;

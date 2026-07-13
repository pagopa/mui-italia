'use-client';

import { FC, ReactNode } from 'react';
import { Box, Stack, StackProps, styled, useMediaQuery, useTheme } from '@mui/material';

interface Props extends Pick<StackProps, 'children' | 'direction' | 'alignItems'> {
  loading?: boolean;
  icon?: ReactNode;
  action?: ReactNode;
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
  ...rest
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const internalDirection = isMobile ? 'column' : 'row';
  const internalAlignItems = isMobile ? 'flex-start' : 'center';

  if (loading) {
    return (
      <StyledStack {...rest} direction="row" alignItems="center" spacing={2}>
        loading...
      </StyledStack>
    );
  }
  return (
    <StyledStack {...rest} direction="row" alignItems="center" spacing={2}>
      {icon}
      <Stack
        direction={direction ? direction : internalDirection}
        alignItems={alignItems ? alignItems : internalAlignItems}
        columnGap={2}
        rowGap={1}
        sx={{ flex: '1 1 auto', width: '100%' }}
      >
        <Box sx={{ flex: 1, width: '100%' }} color={theme.colors.neutral.grey[700]}>
          {children}
        </Box>
        {action && <Box sx={{ flexShrink: 0, width: isMobile ? '100%' : 'auto' }}>{action}</Box>}
      </Stack>
    </StyledStack>
  );
};

export default MIBoxedModule;

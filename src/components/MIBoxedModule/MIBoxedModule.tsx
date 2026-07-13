'use-client';

import { FC, ReactNode } from 'react';
import { Box, Stack, StackProps, styled, useMediaQuery, useTheme } from '@mui/material';

interface Props extends Pick<StackProps, 'children' | 'spacing' | 'direction'> {
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
  };
});

const MIBoxedModule: FC<Props> = ({
  loading = false,
  spacing = 2,
  direction,
  icon,
  children,
  action,
  ...rest
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const intenalDirection = isMobile ? 'column' : 'row';

  if (loading) {
    return (
      <StyledStack {...rest} spacing={spacing}>
        loading...
      </StyledStack>
    );
  }
  return (
    <StyledStack {...rest} direction="row" alignItems="center" spacing={spacing}>
      {icon}
      <Stack
        direction={direction ? direction : intenalDirection}
        alignItems="center"
        spacing={spacing}
      >
        <Box sx={{ flex: 1, width: '100%' }}>{children}</Box>
        <Box sx={{ flexShrink: 0 }}>{action}</Box>
      </Stack>
    </StyledStack>
  );
};

export default MIBoxedModule;

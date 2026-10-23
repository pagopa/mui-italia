import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import { FC, ReactNode } from 'react';

type Props = {
  direction?: 'horizontal' | 'vertical';
  children: ReactNode;
  action?: ReactNode;
};

const getDirection = (isMobile: boolean, direction?: 'horizontal' | 'vertical') => {
  if (!direction) {
    return isMobile ? 'column' : 'row';
  }
  if (direction === 'horizontal') {
    return 'row';
  }
  return 'column';
};

const MIBoxedModuleContent: FC<Props> = ({ direction, children, action }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const internalDirection = getDirection(isMobile, direction);

  return (
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
  );
};

export default MIBoxedModuleContent;

'use client';

import { Typography, useTheme } from '@mui/material';
import { FC } from 'react';

export interface MIBoxedModuleTitleProps {
  children: string | number | boolean;
}

const MIBoxedModuleTitle: FC<MIBoxedModuleTitleProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <Typography variant="caption-semibold" color={theme.colors.neutral.black} fontSize="1rem">
      {children}
    </Typography>
  );
};

export default MIBoxedModuleTitle;

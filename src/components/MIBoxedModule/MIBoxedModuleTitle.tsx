import { Typography, TypographyProps, useTheme } from '@mui/material';
import { FC } from 'react';

interface Props extends Pick<TypographyProps, 'color'> {
  children: string | number | boolean;
}

const MIBoxedModuleTitle: FC<Props> = ({ children }) => {
  const theme = useTheme();

  return (
    <Typography variant="caption-semibold" color={theme.colors.neutral.black} fontSize="1rem">
      {children}
    </Typography>
  );
};

export default MIBoxedModuleTitle;

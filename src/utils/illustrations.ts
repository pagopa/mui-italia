import { colors } from 'theme/foundations/colors';

import { IllustrationProps } from '@components/Illustration';

export interface MIIllustrationProps extends IllustrationProps {
  mode?: 'light' | 'dark';
}

export const getIllustrationColors = (mode: 'light' | 'dark' = 'light') => {
  const isDark = mode === 'dark';

  return {
    colorPrimary: isDark ? colors.neutral.white : colors.blue[500],
    colorSecondary: isDark ? colors.blue[300] : colors.blue[100],
  };
};

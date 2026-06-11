import { useTheme } from '@mui/material/styles';
import { colors } from 'theme/foundations/colors';
import { IllustrationProps } from '@components/Illustration';

export interface MIIllustrationProps extends IllustrationProps {
  mode?: 'light' | 'dark';
}

export const useIllustrationColors = (mode?: 'light' | 'dark') => {
  const theme = useTheme();
  const isThemeDark = theme.palette.mode === 'dark';

  // 3. Facciamo il calcolo della priorità (Prop vs Tema globale)
  const currentMode = mode || (isThemeDark ? 'dark' : 'light');
  const isDark = currentMode === 'dark';
  return {
    colorPrimary: isDark ? colors.neutral.white : colors.blue[500],
    colorSecondary: isDark ? colors.blue[300] : colors.blue[100],
  };
};

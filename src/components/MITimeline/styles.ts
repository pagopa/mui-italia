import { theme } from '@theme';
import { MITimelineItemProps } from './types';

type VariantColor = {
  border: string;
  background: string;
  text: string;
};

export const itemVariantColor: Record<MITimelineItemProps['variant'], VariantColor> = {
  normal: {
    border: theme.colors.neutral.grey[100],
    background: theme.colors.neutral.white,
    text: theme.colors.neutral.black,
  },
  info: {
    border: theme.colors.info[850],
    background: theme.colors.info[100],
    text: theme.colors.info[850],
  },
  success: {
    border: theme.colors.success[850],
    background: theme.colors.success[100],
    text: theme.colors.success[850],
  },
  warning: {
    border: theme.colors.warning[850],
    background: theme.colors.warning[100],
    text: theme.colors.warning[850],
  },
  error: {
    border: theme.colors.error[850],
    background: theme.colors.error[100],
    text: theme.colors.error[850],
  },
};

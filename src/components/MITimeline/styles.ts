import { colors } from 'theme/foundations/colors';
import { MITimelineItemProps } from './types';

type VariantColor = {
  border: string;
  background: string;
  text: string;
};

export const itemVariantColor: Record<MITimelineItemProps['variant'], VariantColor> = {
  normal: {
    border: colors.neutral.grey[100],
    background: colors.neutral.white,
    text: colors.neutral.black,
  },
  info: { border: colors.info[850], background: colors.info[100], text: colors.info[850] },
  success: {
    border: colors.success[850],
    background: colors.success[100],
    text: colors.success[850],
  },
  warning: {
    border: colors.warning[850],
    background: colors.warning[100],
    text: colors.warning[850],
  },
  error: { border: colors.error[850], background: colors.error[100], text: colors.error[850] },
};

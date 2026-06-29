import { TimelineDot } from '@mui/lab';
import { alpha, styled } from '@mui/material/styles';
import { colors } from 'theme/foundations/colors';
import { itemVariantColor } from './styles';
import { MITimelineItemProps } from './types';

const DOT_BOX = 24;

type MiTimelineDotProps = {
  isFirst?: boolean;
  dotVariant: MITimelineItemProps['variant'];
};

export const MITimelineDot = styled(TimelineDot, {
  shouldForwardProp: (prop) => prop !== 'dotVariant' && prop !== 'isFirst',
})<MiTimelineDotProps>(({ isFirst, dotVariant }) => {
  const isNormalVariant = dotVariant === 'normal';
  const isFeedbackDot = isFirst && !isNormalVariant;

  const dotColor = isFeedbackDot ? itemVariantColor[dotVariant].border : colors.neutral.grey[300];

  const size = isNormalVariant || !isFirst ? 6 : 12;
  const margin = (DOT_BOX - size) / 2;

  return {
    alignSelf: 'center',
    width: size,
    height: size,
    backgroundColor: dotColor,
    boxSizing: 'border-box',
    padding: 0,
    borderWidth: 0,
    marginTop: margin,
    marginBottom: margin,
    boxShadow: isFeedbackDot ? `0 0 0 6px ${alpha(colors.neutral.black, 0.2)}` : 'none',
  };
});

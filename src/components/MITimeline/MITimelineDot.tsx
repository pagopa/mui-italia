import { TimelineDot } from '@mui/lab';
import { alpha, styled } from '@mui/material/styles';
import { getItemVariantColor } from './styles';
import { MITimelineItemProps } from './types';

const DOT_BOX = 24;

type MITimelineDotProps = {
  isFirst?: boolean;
  dotVariant: MITimelineItemProps['variant'];
};

export const MITimelineDot = styled(TimelineDot, {
  shouldForwardProp: (prop) => prop !== 'dotVariant' && prop !== 'isFirst',
})<MITimelineDotProps>(({ isFirst, dotVariant, theme }) => {
  const dotColor = isFirst
    ? getItemVariantColor(theme)[dotVariant].feedbackDotColor
    : theme.colors.neutral.grey[300];

  const size = isFirst ? 12 : 6;
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
    boxShadow: isFirst ? `0 0 0 6px ${alpha(theme.colors.neutral.black, 0.2)}` : 'none',
  };
});

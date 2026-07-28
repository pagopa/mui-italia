import { MIPaper } from '@components/MIPaper';
import { TimelineConnector, TimelineContent, TimelineItem, TimelineSeparator } from '@mui/lab';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Stack } from '@mui/system';
import React from 'react';
import { MITimelineDot } from './MITimelineDot';
import { getItemVariantColor } from './styles';
import { MITimelineItemInternalProps, MITimelineItemProps } from './types';
import { pxToRem } from '@theme';
import { isPrimitiveNode } from 'utils/children.utility';

const MITimelineItem: React.FC<MITimelineItemInternalProps> = ({
  variant,
  icon: Icon,
  title,
  children,
  isFirst,
  isLast,
}) => {
  const theme = useTheme();
  const variantColor = getItemVariantColor(theme)[variant];

  return (
    <TimelineItem sx={{ '&:before': { display: 'none' } }}>
      <TimelineSeparator sx={{ width: 24, flex: 'none' }}>
        <TimelineConnector
          sx={{
            bgcolor: isFirst ? 'transparent' : theme.colors.neutral.grey[300],
            position: 'relative',
            zIndex: 1,
          }}
        />
        <MITimelineDot isFirst={isFirst} dotVariant={variant} />
        <TimelineConnector
          sx={{
            bgcolor: isLast ? 'transparent' : theme.colors.neutral.grey[300],
            position: 'relative',
            zIndex: 1,
          }}
        />
      </TimelineSeparator>
      <TimelineContent sx={{ pb: isLast ? 0 : 2 }}>
        <MIPaper
          sx={{
            backgroundColor: variantColor.background,
            border: 1,
            borderRadius: '16px',
            borderColor: variantColor.border,
          }}
        >
          <Stack direction="row" alignItems="center" gap="12px">
            <Icon sx={{ fontSize: '24px', color: variantColor.text }} />
            {isPrimitiveNode(title) ? (
              <Typography fontWeight={600} sx={{ color: variantColor.text }}>
                {title}
              </Typography>
            ) : (
              title
            )}
          </Stack>
          {children && (
            <Box sx={{ mt: 0.5, pl: 'calc(24px + 12px)', color: variantColor.text }}>
              {isPrimitiveNode(children) ? (
                <Typography sx={{ color: variantColor.text, fontSize: pxToRem(14) }}>
                  {children}
                </Typography>
              ) : (
                children
              )}
            </Box>
          )}
        </MIPaper>
      </TimelineContent>
    </TimelineItem>
  );
};

// Exported with the public props type so consumers can't pass isFirst/isLast,
export default MITimelineItem as React.FC<MITimelineItemProps>;

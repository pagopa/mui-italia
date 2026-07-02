import { MIPaper } from '@components/MIPaper';
import { TimelineConnector, TimelineContent, TimelineItem, TimelineSeparator } from '@mui/lab';
import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { theme } from '@theme';
import React from 'react';
import { MITimelineDot } from './MITimelineDot';
import { itemVariantColor } from './styles';
import { MITimelineItemInternalProps, MITimelineItemProps } from './types';

const MITimelineItem: React.FC<MITimelineItemInternalProps> = ({
  variant,
  icon: Icon,
  title,
  children,
  isFirst,
  isLast,
}) => {
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
            backgroundColor: itemVariantColor[variant].background,
            border: 1,
            borderRadius: '16px',
            borderColor: itemVariantColor[variant].border,
          }}
        >
          <Stack direction="row" alignItems="center" gap="12px">
            <Icon sx={{ fontSize: '24px', color: itemVariantColor[variant].text }} />
            <Typography fontWeight={600} color={itemVariantColor[variant].text}>
              {title}
            </Typography>
          </Stack>
          {children && (
            <Box
              sx={{
                mt: '4px',
                pl: 'calc(24px + 12px)',
                color: itemVariantColor[variant].text,
                '& .MuiTypography-root': { color: 'inherit', fontSize: '16px' },
              }}
            >
              {children}
            </Box>
          )}
        </MIPaper>
      </TimelineContent>
    </TimelineItem>
  );
};

// Exported with the public props type so consumers can't pass isFirst/isLast,
export default MITimelineItem as React.FC<MITimelineItemProps>;

import { TimelineConnector, TimelineContent, TimelineItem, TimelineSeparator } from '@mui/lab';
import { Box, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { colors } from 'theme/foundations/colors';
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
            bgcolor: isFirst ? 'transparent' : colors.neutral.grey[300],
            position: 'relative',
            zIndex: 1,
          }}
        />
        <MITimelineDot isFirst={isFirst} dotVariant={variant} />
        <TimelineConnector
          sx={{
            bgcolor: isLast ? 'transparent' : colors.neutral.grey[300],
            position: 'relative',
            zIndex: 1,
          }}
        />
      </TimelineSeparator>
      <TimelineContent sx={{ pb: isLast ? 0 : 2 }}>
        <Paper
          elevation={0}
          sx={{
            backgroundColor: itemVariantColor[variant].background,
            display: 'flex',
            flexDirection: 'column',
            p: 2,
            border: 1,
            borderRadius: '16px',
            borderColor: itemVariantColor[variant].border,
            gap: '4px',
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
                pl: 'calc(24px + 12px)',
                color: itemVariantColor[variant].text,
                '& .MuiTypography-root': { color: 'inherit', fontSize: '16px' },
              }}
            >
              {children}
            </Box>
          )}
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

// Exported with the public props type so consumers can't pass isFirst/isLast,
export default MITimelineItem as React.FC<MITimelineItemProps>;

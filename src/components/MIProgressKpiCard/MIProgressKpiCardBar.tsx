'use client';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box, Stack } from '@mui/system';
import { FC } from 'react';
import { Typography, styled } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { pxToRem } from '../../theme';
import type { MIProgressKpiCardBarProps, BorderLinearProgressProps } from './utils';
import { ratioFormatter } from './utils';

const MIProgressKpiCardBorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== '$sizeVariant' && prop !== '$isFull',
})<BorderLinearProgressProps>(({ theme, $sizeVariant, $isFull }) => ({
  height: $sizeVariant === 'small' ? 8 : 16,
  borderRadius: $sizeVariant === 'small' ? 4 : 8,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.colors.neutral.grey[100],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: $sizeVariant === 'small' ? 4 : 8,
    backgroundColor: $isFull ? theme.colors.success[700] : theme.colors.blue[500],
  },
}));

const MIProgressKpiCardNumerator: FC<{ numerator: number }> = ({ numerator }) => (
  <Typography fontSize={pxToRem(16)} fontWeight={600} sx={{ display: 'inline-block' }}>
    {ratioFormatter.format(numerator)}
  </Typography>
);

const MIProgressKpiCardDenominator: FC<{ denominator: number }> = ({ denominator }) => (
  <Typography fontSize={pxToRem(16)} fontWeight={400} sx={{ display: 'inline-block' }}>
    {ratioFormatter.format(denominator)}
  </Typography>
);

const MIProgressKpiCardBar: React.FC<MIProgressKpiCardBarProps> = ({ index=0, numerator, denominator, variant = 'regular', label }) => {
  // Check if the total is zero or invalid
  const isZeroTotal = !denominator || denominator <= 0;

  // Check if the progress is full (only if there is a valid total and it has been reached/exceeded)
  const isFull = !isZeroTotal && numerator >= denominator;

  // If the denominator is 0, the value passed to LinearProgress is 0 (never NaN)
  const progressValue = isZeroTotal ? 0 : Math.min((numerator / denominator) * 100, 100);

  return (
    <>
      {label && (
        <Typography 
          id={`mi-progress-kpi-card-bar-label-${index}`}
          fontSize={pxToRem(12)} fontWeight={500} sx={(theme) => ({ color: theme.colors.neutral.grey[700] })} mb={1}>
          {label}
        </Typography>
      )}
      <MIProgressKpiCardBorderLinearProgress 
        $sizeVariant={variant} 
        $isFull={isFull} 
        variant="determinate" 
        value={progressValue}
        aria-labelledby={`mi-progress-kpi-card-bar-label-${index}`}
      />
      <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
        <Box>
          <MIProgressKpiCardNumerator numerator={numerator} /> / <MIProgressKpiCardDenominator denominator={denominator} />
        </Box>
        {isFull && <CheckCircle sx={(theme) => ({ color: theme.colors.success[700], width: pxToRem(16), height: pxToRem(16) })} />}
      </Stack>
    </>
  );
};

export default MIProgressKpiCardBar;
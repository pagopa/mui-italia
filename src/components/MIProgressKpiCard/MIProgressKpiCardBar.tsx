'use client';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box, Stack } from '@mui/system';
import { FC, useId } from 'react';
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

const MIProgressKpiCardNumerator: FC<{ numerator: number; localeFormat: string }> = ({ numerator, localeFormat }) => (
  <Typography fontSize={pxToRem(16)} fontWeight={600} sx={{ display: 'inline-block' }}>
    {ratioFormatter(localeFormat).format(numerator)}
  </Typography>
);

const MIProgressKpiCardDenominator: FC<{ denominator: number; localeFormat: string }> = ({ denominator, localeFormat }) => (
  <Typography fontSize={pxToRem(16)} fontWeight={400} sx={{ display: 'inline-block' }}>
    {ratioFormatter(localeFormat).format(denominator)}
  </Typography>
);

const MIProgressKpiCardBar: React.FC<MIProgressKpiCardBarProps> = ({ numerator, denominator, variant = 'regular', label, headerLabelId, localeFormat }) => {
  // Check if the total is zero or invalid
  const isZeroTotal = !denominator || denominator <= 0;

  // Check if the progress is full (only if there is a valid total and it has been reached/exceeded)
  const isFull = !isZeroTotal && numerator >= denominator;

  // If the denominator is 0, the value passed to LinearProgress is 0 (never NaN)
  const progressValue = isZeroTotal ? 0 : Math.min((numerator / denominator) * 100, 100);

  const localLabelId = useId();

  return (
    <>
      {label && (
        <Typography 
          id={localLabelId}
          fontSize={pxToRem(12)} fontWeight={500} sx={(theme) => ({ color: theme.colors.neutral.grey[700] })} mb={1}>
          {label}
        </Typography>
      )}
      <MIProgressKpiCardBorderLinearProgress 
        $sizeVariant={variant} 
        $isFull={isFull} 
        variant="determinate" 
        value={progressValue}
        aria-labelledby={label ? localLabelId : headerLabelId}
      />
      <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
        <Box>
          <MIProgressKpiCardNumerator numerator={numerator} localeFormat={localeFormat} /> / <MIProgressKpiCardDenominator denominator={denominator} localeFormat={localeFormat} />
        </Box>
        {isFull && <CheckCircle sx={(theme) => ({ color: theme.colors.success[700], width: pxToRem(16), height: pxToRem(16) })} />}
      </Stack>
    </>
  );
};

export default MIProgressKpiCardBar;
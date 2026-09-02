
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box, Stack, styled } from '@mui/system';
import { theme } from '../../theme';
import { FC } from 'react';
import { Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import type { MIProgressKpiCardBarProps, BorderLinearProgressProps } from './utils';
import { ratioFormatter } from './utils';

const MIProgressKpiCardBorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== '$sizeVariant',
})<BorderLinearProgressProps>(({ $sizeVariant, $isFull }) => ({
  height: $sizeVariant === 'small' ? 8 : 16,
  borderRadius: $sizeVariant === 'small' ? 4 : 8,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.colors.neutral.grey[100]
    ,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: $sizeVariant === 'small' ? 4 : 8,
    backgroundColor: $isFull ? theme.colors.success[700] : theme.colors.blue[500],
  },
}));

const MIProgressKpiCardNumerator: FC<{ numerator: number }> = ({ numerator }) =>  (
    <Typography fontSize={16} fontWeight={600} sx={{ display: 'inline-block' }}>
      {ratioFormatter.format(numerator)}
    </Typography>
  );

const MIProgressKpiCardDenominator: FC<{ denominator: number }> = ({ denominator }) =>  (
    <Typography fontSize={16} fontWeight={400} sx={{ display: 'inline-block' }}>
      {ratioFormatter.format(denominator)}
    </Typography>
  );

const MIProgressKpiCardBar: React.FC<MIProgressKpiCardBarProps> = ({ numerator, denominator, variant = 'regular', label }) => {

  const isFull = numerator >= denominator;

  return (
    <>
      {label && <Typography fontSize={12} fontWeight={500} color={theme.colors.neutral.grey[700]} mb={1}>{label}</Typography>}
      <MIProgressKpiCardBorderLinearProgress $sizeVariant={variant} $isFull={isFull} variant="determinate" value={(numerator / denominator) * 100} />
      <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
        <Box><MIProgressKpiCardNumerator numerator={numerator} /> / <MIProgressKpiCardDenominator denominator={denominator} /></Box>
        {isFull && <CheckCircleIcon sx={{ color: theme.colors.success[700], width: 16, height: 16 }} />}
      </Stack>
    </>
  );
}

export default MIProgressKpiCardBar;
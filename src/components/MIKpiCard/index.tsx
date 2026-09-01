import type { FC } from 'react';
import { MIPaper } from '../MIPaper';
import LinearProgress from '@mui/material/LinearProgress';
import { Typography } from '@mui/material';
import { theme } from '../../theme';

interface KPI {
  description?: string;
  numerator: number;
  denominator: number;
}


interface MIKpiCardProps {
  title: string;
  icon?: React.ReactNode;
  tooltipText?: string;
  bars: KPI[];
}

const numberFormatter = new Intl.NumberFormat('it-IT', { useGrouping: true });

const MIKpiCardPercentage: FC<{ numerator: number; denominator: number }> = ({ numerator, denominator }) => {
  return (
    <Typography fontSize={32} fontWeight={600}>
      {(numerator / denominator * 100).toFixed(0)}%
    </Typography>
  );
};

const MIKpiCardHeader: FC<Pick<MIKpiCardProps, 'title' | 'icon' | 'tooltipText'>> = ({ title }) => {
  return (
    <Typography fontSize={16} fontWeight={500} color={theme.colors.neutral.grey[700]} lineHeight={1.375}>
      {title}
    </Typography>
  );
};

const MIKpiCardKpiNumerator: FC<{ numerator: number }> = ({ numerator }) => {
  return (
    <Typography fontSize={16} fontWeight={600} sx={{ display: 'inline-block' }}>
      {numberFormatter.format(numerator)}
    </Typography>
  );
};

const MIKpiCardKpiDenominator: FC<{ denominator: number }> = ({ denominator }) => {
  return (
    <Typography fontSize={16} fontWeight={400} sx={{ display: 'inline-block' }}>
      {numberFormatter.format(denominator)}
    </Typography>
  );
};

const MIKpiCard: FC<MIKpiCardProps> = ({ title, bars }) => {
  console.log(theme);
  return (
    <MIPaper padding={24} variant='outlined' sx={{ width: '204px', boxSizing: 'border-box' }}>
      <MIKpiCardHeader title={title} />

      <MIKpiCardPercentage numerator={bars[0].numerator} denominator={bars[0].denominator} />

      {bars.map((bar, index) => (
        <div key={index}>
          {bar.description && <Typography variant="body1">{bar.description}</Typography>}
          
          <LinearProgress variant="determinate" value={(bar.numerator / bar.denominator) * 100} />
          <MIKpiCardKpiNumerator numerator={bar.numerator} /> / <MIKpiCardKpiDenominator denominator={bar.denominator} />
        </div>
      ))}
    </MIPaper>
  );
};

export default MIKpiCard;
import type { FC } from 'react';
import { MIPaper } from '../MIPaper';
import MIProgressKpiCardBar from './MIProgressKpiCardBar';
import MIProgressKpiCardHeader from './MIProgressKpiCardHeader';
import MIProgressKpiCardPercentage from './MIProgressKpiCardPercentage';
import { type MIProgressKpiCardProps } from './utils';

const MIProgressKpiCard: FC<MIProgressKpiCardProps> = ({ title, icon, tooltipText, bars, denominator }) => {

  const totalNumerator = bars.reduce((acc, bar) => acc + bar.numerator, 0);

  if (totalNumerator > denominator) {
    console.warn('Total numerator exceeds the denominator');
  }

  const totalPercentage = bars.reduce((acc, bar) => acc + (bar.numerator / denominator * 100), 0);

  return (
    <MIPaper padding={24} variant='outlined' sx={{ width: '204px', boxSizing: 'border-box' }} borderRadius={16}>
      <MIProgressKpiCardHeader title={title} icon={icon} tooltipText={tooltipText} />

      <MIProgressKpiCardPercentage percentage={totalPercentage} />

      {bars.map((bar, index) => (
        <MIProgressKpiCardBar numerator={bar.numerator} denominator={denominator} label={bar.label} variant={bar.variant} key={index}/>
      ))}
    </MIPaper>
  );
};

export default MIProgressKpiCard;
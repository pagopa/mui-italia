'use client';

import type { FC } from 'react';
import { MIPaper } from '../MIPaper';
import MIProgressKpiCardBar from './MIProgressKpiCardBar';
import MIProgressKpiCardHeader from './MIProgressKpiCardHeader';
import MIProgressKpiCardPercentage from './MIProgressKpiCardPercentage';
import { type MIProgressKpiCardProps } from './utils';

export type { MIProgressKpiCardProps };

const MIProgressKpiCard: FC<MIProgressKpiCardProps> = ({ title, icon, tooltipText, tooltipAriaLabel, bars, denominator }) => {
  const isZeroTotal = !denominator || denominator <= 0;

  const totalNumerator = bars.reduce((acc, bar) => acc + bar.numerator, 0);

  if (!isZeroTotal && totalNumerator > denominator) {
    console.error('Total numerator exceeds the denominator');
  }
  
  const totalPercentage = isZeroTotal
    ? 0
    : bars.reduce((acc, bar) => acc + (bar.numerator / denominator * 100), 0);

  return (
    <MIPaper padding={24} variant='outlined' sx={{ width: '204px', boxSizing: 'border-box' }} borderRadius={16}>
      <MIProgressKpiCardHeader title={title} icon={icon} tooltipText={tooltipText} tooltipAriaLabel={tooltipAriaLabel} />

      <MIProgressKpiCardPercentage percentage={totalPercentage} />

      {bars.map((bar, index) => (
        <MIProgressKpiCardBar 
          key={index}
          index={index} 
          numerator={bar.numerator} 
          denominator={denominator} 
          label={bar.label} 
          variant={bar.variant} 
        />
      ))}
    </MIPaper>
  );
};

export default MIProgressKpiCard;
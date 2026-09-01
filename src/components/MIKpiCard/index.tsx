import type { FC } from 'react';
import { MIPaper } from '../MIPaper';
import MIKpiBar from './MIKpiBar';
import { Stack, Typography } from '@mui/material';
import { theme } from '../../theme';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/material/Tooltip';


interface KPI {
  label?: string;
  numerator: number;
  denominator: number;
  variant?: 'small' | 'regular';
}


interface MIKpiCardProps {
  title: string;
  icon?: React.ReactNode;
  tooltipText?: string;
  bars: KPI[];
}

const MIKpiCardPercentage: FC<{ numerator: number; denominator: number }> = ({ numerator, denominator }) => {
  return (
    <Typography fontSize={32} fontWeight={600}>
      {(numerator / denominator * 100).toFixed(0)}%
    </Typography>
  );
};

const MIKpiCardHeader: FC<Pick<MIKpiCardProps, 'title' | 'icon' | 'tooltipText'>> = ({ title, icon, tooltipText }) => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography fontSize={16} fontWeight={500} color={theme.colors.neutral.grey[700]} lineHeight={1.375}>
        {title}
      </Typography>
      { tooltipText && (
        <Tooltip title={tooltipText} arrow placement="top">
          <InfoOutlinedIcon sx={{ color: theme.colors.blue[500], width: 24, height: 24 }} />
        </Tooltip>
      ) }
    </Stack>
  );
};

const MIKpiCard: FC<MIKpiCardProps> = ({ title, icon, tooltipText, bars }) => {
  console.log(theme);
  return (
    <MIPaper padding={24} variant='outlined' sx={{ width: '204px', boxSizing: 'border-box' }}>
      <MIKpiCardHeader title={title} icon={icon} tooltipText={tooltipText} />

      <MIKpiCardPercentage numerator={bars[0].numerator} denominator={bars[0].denominator} />

      {bars.map((bar, index) => (
        <MIKpiBar numerator={bar.numerator} denominator={bar.denominator} label={bar.label} variant={bar.variant} key={index}/>
      ))}
    </MIPaper>
  );
};

export default MIKpiCard;
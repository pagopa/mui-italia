import type { FC } from 'react';
import type { MIProgressKpiCardProps } from './utils';
import { Stack, Typography } from '@mui/material';
import { theme } from '../../theme';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/material/Tooltip';

const MIProgressKpiCardHeader: FC<Pick<MIProgressKpiCardProps, 'title' | 'icon' | 'tooltipText'>> = ({ title, icon, tooltipText }) => {
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
export default MIProgressKpiCardHeader;
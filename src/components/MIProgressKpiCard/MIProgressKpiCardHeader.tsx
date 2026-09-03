import type { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/material/Tooltip';
import { theme, pxToRem } from '../../theme';
import type { MIProgressKpiCardProps } from './utils';

const MIProgressKpiCardHeader: FC<Pick<MIProgressKpiCardProps, 'title' | 'icon' | 'tooltipText'>> = ({ title, icon, tooltipText }) => (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" alignItems="center" spacing={1}>
        {icon}
        <Typography fontSize={pxToRem(16)} fontWeight={500} color={theme.colors.neutral.grey[700]} lineHeight={1.375}>
          {title}
        </Typography>
      </Stack>
      { tooltipText && (
        <Tooltip title={tooltipText} arrow placement="top">
          <InfoOutlinedIcon sx={{ color: theme.colors.blue[500], width: pxToRem(24), height: pxToRem(24) }} />
        </Tooltip>
      ) }
    </Stack>
  );
export default MIProgressKpiCardHeader;
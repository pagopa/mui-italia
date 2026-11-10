'use client';

import type { FC } from 'react';
import { IconButton, Stack, Typography } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import { pxToRem } from '../../theme';
import type { MIProgressKpiCardProps } from './utils';

const MIProgressKpiCardHeader: FC<Pick<MIProgressKpiCardProps, 'title' | 'icon' | 'tooltipText' | 'tooltipAriaLabel'> & { headerLabelId: string }> = ({ title, icon, tooltipText, tooltipAriaLabel, headerLabelId }) => (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" alignItems="center" spacing={1}>
        {icon}
        <Typography
          id={headerLabelId}
          fontSize={pxToRem(16)} fontWeight={500} lineHeight={1.375}
          sx={(theme) => ({ color: theme.colors.neutral.grey[700] })} >
          {title}
        </Typography>
      </Stack>
      { tooltipText && (
        <Tooltip title={tooltipText} arrow placement="top">
          <IconButton type="button" aria-label={tooltipAriaLabel || tooltipText}>
            <InfoOutlined sx={(theme) => ({ color: theme.colors.blue[500], width: pxToRem(24), height: pxToRem(24) })} />
          </IconButton>
        </Tooltip>
      ) }
    </Stack>
  );
export default MIProgressKpiCardHeader;
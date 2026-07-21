import {
  InfoRounded as InfoRoundedIcon,
  ReportRounded as ReportRoundedIcon,
  WarningRounded as WarningRoundedIcon,
  CheckCircleRounded as CheckCircleRoundedIcon,
} from '@mui/icons-material';
import type { Theme } from '@mui/material/styles';
import type { AllowedAlertSeverity } from './MIAlert';

const iconSize = '24px';

const iconBySeverity = {
  info: <InfoRoundedIcon sx={{ width: iconSize, height: iconSize }} />,
  error: <ReportRoundedIcon sx={{ width: iconSize, height: iconSize }} />,
  warning: <WarningRoundedIcon sx={{ width: iconSize, height: iconSize }} />,
  success: <CheckCircleRoundedIcon sx={{ width: iconSize, height: iconSize }} />,
} as const;

export const getIcon = (severity?: AllowedAlertSeverity) =>
  severity !== undefined ? iconBySeverity[severity] : iconBySeverity.success;

export const getColor = (theme: Theme, severity?: AllowedAlertSeverity) =>
  severity !== undefined ? theme.palette[severity][850] : theme.palette.success[850];

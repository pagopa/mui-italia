import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import type { Theme } from '@mui/material/styles';
import type { AllowedAlertSeverity } from './Alert';

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

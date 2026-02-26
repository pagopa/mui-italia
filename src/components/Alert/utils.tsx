import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Theme } from '@mui/material';

const iconBySeverity = {
  info: <InfoRoundedIcon />,
  error: <ReportRoundedIcon />,
  warning: <WarningRoundedIcon />,
  success: <CheckCircleRoundedIcon />,
} as const;

export const getIcon = (severity?: 'success' | 'info' | 'warning' | 'error') =>
  severity !== undefined ? iconBySeverity[severity] : iconBySeverity.success;

export const getColor = (theme: Theme, severity?: 'success' | 'info' | 'warning' | 'error') =>
  severity !== undefined ? theme.palette[severity][850] : theme.palette.success[850];

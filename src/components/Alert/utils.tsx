import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { useTheme } from '@mui/material';

const theme = useTheme();

const iconBySeverity = {
  info: <InfoRoundedIcon />,
  error: <ReportRoundedIcon />,
  warning: <WarningRoundedIcon />,
  success: <CheckCircleRoundedIcon />,
} as const;

const colorBySeverity = {
  info: theme.palette.info[850],
  error: theme.palette.error[850],
  warning: theme.palette.warning[850],
  success: theme.palette.success[850],
} as const;

export const getIcon = (severity?: 'success' | 'info' | 'warning' | 'error') =>
  severity !== undefined ? iconBySeverity[severity] : iconBySeverity.success;

export const getColor = (severity?: 'success' | 'info' | 'warning' | 'error') =>
  severity !== undefined ? colorBySeverity[severity] : colorBySeverity.success;
